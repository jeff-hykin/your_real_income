import { reactive } from "https://esm.sh/@vue/reactivity@3.2.20"
import { watch } from "https://esm.sh/@vue-reactivity/watch@0.1.6"
import { Elemental, passAlongProps } from "https://esm.sh/gh/jeff-hykin/elemental@0.6.4/main/deno.js"
import storageObject from "https://esm.sh/gh/jeff-hykin/storage-object@0.0.3.5/main.js"
import DateTime from "https://esm.sh/gh/jeff-hykin/good-js@1.13.5.1/source/date.js"
import _ from "https://esm.sh/lodash@4.17.21" // just run the refresh command to update this
import { addDynamicStyleFlags, setupStyles, createCssClass, setupClassStyles, hoverStyleHelper, combineClasses, mergeStyles, AfterSilent, removeAllChildElements } from "https://esm.sh/gh/jeff-hykin/good-component@0.3.0/main/helpers.js"

import cpiPrices from "./datasets/outputCpi.js" // just run the refresh command to update this
import goldPrices from "./datasets/outputGold.js"
import currencyCounts from "./datasets/dollarsInCurculation.js" // data from: https://fred.stlouisfed.org/series/CURRCIR
import populationAt from "./datasets/populationAt.js" // data from: https://www.macrotrends.net/global-metrics/countries/USA/united-states/population
import DatePicker from "./DatePicker.js"

// 481, 783, 1043
// 0.28, 0.5, 0.68,

Object.assign(window, { cpiPrices, goldPrices })
console.debug(`cpiPrices is:`,cpiPrices)
console.debug(`goldPrices is:`,goldPrices)
const { html } = Elemental({
    DatePicker,
})
// so I don't have to count digits later
const million = 1000000
const billion = million*1000
const trillion = billion*1000

// 
// define data for this page
// 
const mostRecentYear = Math.max(...Object.keys(cpiPrices).map(each=>each-0))
const mostRecentMonth = Math.max(...Object.keys(cpiPrices[mostRecentYear]).map(each=>each-0).filter(each=>each))
const reactiveData = reactive({
    date: new DateTime([mostRecentYear, mostRecentMonth]),
    income: storageObject.income || 35000,
    savedConversions: storageObject.savedConversions || [],
})
const maxDate = new DateTime([ mostRecentYear, mostRecentMonth, 2 ])
const minDate = new DateTime([ 1997, 1, 1 ])
window.reactiveData = reactiveData

// 
// whenever reactive data changes
// 
let callDataChange
watch(reactiveData, callDataChange = ()=>{
    console.log(`data changed`)
    // Make the date a datetime
    if (!(reactiveData.date instanceof DateTime) && (reactiveData.date instanceof Date)) {
        reactiveData.date = new DateTime(reactiveData.date.toLocaleDateString())
        return
    }
    if (reactiveData.date.unix > maxDate.unix) {
        reactiveData.date.unix = maxDate.unix
        datePicker.picker.setDate(reactiveData.date, true)
    }
    if (reactiveData.date.unix < minDate.unix) {
        reactiveData.date.unix = minDate.unix
        datePicker.picker.setDate(reactiveData.date, true)
    }
    
    // update the actual income whenever something changes
    if (cpiOutputElement) {
        const asString = `${usdToCpi(reactiveData.income, reactiveData.date).toLocaleString("en-US")}`
        let [ beforeDecimal, afterDecimal ] = asString.split(".")
        afterDecimal = (afterDecimal || "").padEnd(3, "0")
        const formatted = `${beforeDecimal}.${afterDecimal}`
        cpiOutputElement.value = formatted + " 🛒"
    }
    
    // update the percentage income whenever something changes
    if (percentOutputElement) {
        const number = usdToPerCapitaPercentage(reactiveData.income, reactiveData.date)
        let string = number.toLocaleString("en-US").split(".")[0]
        if (string.length < 3) {
            string = number.toFixed(2)
        }
        percentOutputElement.value = string + "%"
    }
    
    // 
    // create all the children
    // 
    if (cpiColumn) {
        var datesColumnChildren = []
        var dollarsColumnChildren = []
        var cpiColumnChildren = []
        var percentColumnChildren = []
        for (const [date, dollars, cpi, percent] of reactiveData.savedConversions) {
            datesColumnChildren.push(html`<input type="text" value=${date} disabled />`)
            dollarsColumnChildren.push(html`<div style="display: flex; align-items: center;" >$<input type="number" value=${dollars} disabled /></div>`)
            cpiColumnChildren.push(html`<div><input value=${cpi} disabled /></div>`)
            percentColumnChildren.push(html`<div><input value=${percent} disabled /></div>`)
        }
        removeAllChildElements(datesColumn)
        datesColumn.append(...datesColumnChildren)
        removeAllChildElements(dollarsColumn)
        dollarsColumn.append(...dollarsColumnChildren)
        removeAllChildElements(cpiColumn)
        cpiColumn.append(...cpiColumnChildren)
        removeAllChildElements(percentColumn)
        percentColumn.append(...percentColumnChildren)
        // datesColumn.children   = datesColumnChildren
        // dollarsColumn.children = dollarsColumnChildren
        // cpiColumn.children     = cpiColumnChildren
        // percentColumn.children = percentColumnChildren
        storageObject.savedConversions = reactiveData.savedConversions
    }
})

// 
// elements
// 
var cpiOutputElement, percentOutputElement, datePicker, datesColumn, dollarsColumn, cpiColumn, percentColumn
document.body = html`<body class="centered column">
    <style>${`
        body {
            /* transform: scale(0.5); */
        }
        [name="main"] {
          /* transform: scale(0.5); */
        }
        a {
            font-size: 12pt;
            color: cornflowerblue;
        }
        input {
            width: 10rem;
        }
        .input-area {
            display: flex;
            flex-direction: column;
            display: flex;
            align-items: center;
            align-content: center;
            justify-content: flex-start;
            justify-items: center;
            text-align: center;
            height: 15rem;
        }
        .saved-column {
            gap: 1rem;
            display: flex;
            flex-direction: column;
            display: flex;
            align-items: center;
            align-content: center;
            justify-content: flex-start;
            justify-items: center;
            text-align: center;
            opacity: 0.5;
        }
        .saved-column input {
            width: 8em;
            text-align: right;
        }
    `}</style>
    <div name="main" style="overflow: auto; max-width: 100vw; min-width: 100vw;">
        <div class="row centered" style="gap: 2rem; align-items: flex-start;min-width: min-content;padding: 2rem;">
            <button
                style="all: unset; background-color: cornflowerblue; color: white; border-color: white; -webkit-text-fill-color: white; padding: 0.5rem 1rem; align-self: flex-start; margin-right: 2rem; margin-top: 1.55rem; cursor: pointer;"
                onclick=${()=>{
                    reactiveData.savedConversions = [...reactiveData.savedConversions, [`${reactiveData.date.year}-${reactiveData.date.month}`, reactiveData.income, cpiOutputElement.value, percentOutputElement.value ]]
                    callDataChange()
                }}
                >
                    Save
            </button>
            <div class="column centered">
                <div class="input-area">
                    <span>Date</span>
                    ${datePicker = html`<DatePicker style="margin-bottom: 2rem;" onSelect=${selectedDate=>{
                        reactiveData.date = selectedDate
                        callDataChange()
                    }} defaultDate=${reactiveData.date} setDefaultDate=${true} />`}
                </div>
                ${datesColumn = html`<div class="saved-column" />`}
            </div>
            <div class="column centered">
                <div class="input-area">
                    <span>Dollars</span>
                    <div style="margin-bottom: 2rem;display: flex; align-items: center;">
                        $<input type="number" value=${reactiveData.income} oninput=${e=>{
                            reactiveData.income=e.target.value-0
                            callDataChange()
                        }} />
                    </div>
                </div>
                ${dollarsColumn = html`<div class="saved-column" />`}
            </div>
            <div class="column centered">
                <div class="input-area">
                    <span>Per-capita % of $</span>
                    ${percentOutputElement = html`<input style="width: 15rem; text-align: center;" disabled />`}
                    <span style="width: 15rem;font-size: 12; color: gray;">income, divided by dollars-in-circulation at the time, divided by population of the US at the time</span>
                    <div style="min-height:1rem;" />
                    <span style="font-size: 12; color: gray;">(6 month rolling average)</span>
                </div>
                ${percentColumn = html`<div class="saved-column" />`}
            </div>
            <div class="column centered">
                <div class="input-area">
                    <span>Your Actual Income: CPI</span>
                    ${cpiOutputElement = html`<input style="width: 16rem; text-align: center;" disabled />`}
                    <span style="width: 15rem; font-size: 12; color: gray;">how much stuff could buy at the time</span>
                    <div style="min-height:1rem;" />
                    <span style="font-size: 12; color: gray;">(6 month rolling average)</span>
                    <div style="min-height:1rem;" />
                    <span style="font-size: 12; color: gray;">(specifically CUSR0000SA0)</span>
                </div>
                ${cpiColumn = html`<div class="saved-column" />`}
            </div>
        </div>
        <button
            style="all: unset; background-color: gray; color: white; border-color: white; -webkit-text-fill-color: white; padding: 0.5rem 1rem; margin-top: 1.55rem;"
            onclick=${()=>{
                (reactiveData.savedConversions = [],storageObject.savedConversions=[])
                callDataChange()
            }}
            >
                Clear
        </button>
    </div>
    <div style="position: fixed; bottom: 1.5rem; ">
        <a style="min-width: 100vw;" href="https://github.com/jeff-hykin/your_real_income.git">
            Source Code (Github Link)
        </a>
        <div><br>.</div>
        <a style="min-width: 100vw;" href="https://fred.stlouisfed.org/series/CURRCIR">
            money supply: https://fred.stlouisfed.org/series/CURRCIR
        </a>
        <br>
        <a style="min-width: 100vw;" href="https://download.bls.gov/pub/time.series/cu/cu.data.0.Current">
            CPI: https://download.bls.gov/pub/time.series/cu/cu.data.0.Current
        </a>
    </div>

    <div style="position: fixed; right: 1rem; top: 1rem; display: flex; align-items: flex-end; justify-content: flex-end; width: max-content; max-width: 90vw; font-size: 12pt; color: gray; text-align: right;">
        Note: CPI prices after ${mostRecentYear}-${mostRecentMonth} are not available, so it will default to using ${mostRecentYear}-${mostRecentMonth} CPI for future values
    </div>
</body>`

document.body.style = `
    display: flex; 
    align-items: center; 
    justify-content: center;
    font-size: 15pt; 
    font-family: sans-serif;
`

// 
// 
// helpers
// 
// 
const maxCpiYear = Math.max(...Object.keys(cpiPrices).map(each=>each-0).filter(each=>each))
const minCpiYear = Math.min(...Object.keys(cpiPrices).map(each=>each-0).filter(each=>each))
function usdToCpi(usdAmount, date) {
    let year = date.year
    let month = date.month
    const amounts = []
    if (year > maxCpiYear) {
        year = maxCpiYear
        console.debug(`max year is:`,year)
    }
    if (year < minCpiYear) {
        year = minCpiYear
        console.debug(`min year is:`,year)
    }
    amounts.push(usdAmount / cpiPrices[year][month])
    // rolling average across 6 months
    for (const each of [1,2,3,4,5,6]) {
        if (month <= 1) {
            month = 12
            year = year-1
        } else {
            month -= 1
        }
        amounts.push(usdAmount / cpiPrices[year][month])
    }
    return _.mean(amounts).toFixed(3)
}

function usdToPerCapitaPercentage(usdAmount, date) {
    let year = date.year
    let month = date.month
    const rollingAverageWindowSize = 6
    let previousValues = []
    for (const eachMonthlyEntry of currencyCounts) {
        const countDate = new DateTime(eachMonthlyEntry.DATE)
        const dollarsInCirculation = eachMonthlyEntry.CURRCIR * billion // original units are in billions
        // basically treat it like a que
        previousValues.push(dollarsInCirculation)
        previousValues = previousValues.slice(-rollingAverageWindowSize)
        if (countDate.year == year && countDate.month == month) {
            break
        }
    }
    const smoothedMoneyInCirculation = _.mean(previousValues)
    const moneyPerCapita = smoothedMoneyInCirculation / populationAt[year]
    const yourMoneyPerCapitaPercent = (usdAmount/moneyPerCapita)*100
    const percentageTillionths = (usdAmount*trillion)/_.mean(previousValues)
    return yourMoneyPerCapitaPercent
}

function updateSavedList() {
    storageObject.savedConversions || (storageObject.savedConversions = [])
}

// populate
callDataChange()