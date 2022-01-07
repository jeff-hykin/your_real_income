// add CSS before everything else
require("css-baseline/css/3")
require("./global.scss")
const { reactive } = require("@vue/reactivity")
const { watch } = require("@vue-reactivity/watch")
const storageObject = require("storage-object")
const DateTime = require("good-date")
const _ = require("lodash")

const cpiPrices = require("./main/datasets/outputCpi.json")
const goldPrices = require("./main/datasets/outputGold.json")
const currencyCounts = require("./main/datasets/dollarsInCurculation.json") // data from: https://fred.stlouisfed.org/series/CURRCIR
const DatePicker = require("./main/DatePicker")

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
    // Make the date a datetime
    if (!(reactiveData.date instanceof DateTime) && (reactiveData.date instanceof Date)) {
        reactiveData.date = new DateTime(reactiveData.date.toLocaleDateString())
        return
    }
    console.log(`reactiveData.date.unix is:`,reactiveData.date.unix)
    console.log(`minDate.unix is:`,minDate.unix)
    console.log(`reactiveData.date.unix < minDate.unix is:`,reactiveData.date.unix < minDate.unix)
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
        cpiOutputElement.value = usdToCpi(reactiveData.income, reactiveData.date).toLocaleString("en-US") + " 🛒"
    }
    
    // update the percentage income whenever something changes
    if (percentOutputElement) {
        percentOutputElement.value = usdToTillionthsOfPercentage(reactiveData.income, reactiveData.date).toLocaleString("en-US") + " trillionths of %"
    }
    
    // 
    // create all the children
    // 
    if (cpiColumn) {
        datesColumnChildren = []
        dollarsColumnChildren = []
        cpiColumnChildren = []
        percentColumnChildren = []
        for (const [date, dollars, cpi, percent] of reactiveData.savedConversions) {
            datesColumnChildren.push(<input type="text" value={date} disabled />)
            dollarsColumnChildren.push(<div>$<input type="number" value={dollars} disabled /></div>)
            cpiColumnChildren.push(<div><input value={cpi} disabled /></div>)
            percentColumnChildren.push(<div><input value={percent} disabled /></div>)
        }
        datesColumn.children   = datesColumnChildren
        dollarsColumn.children = dollarsColumnChildren
        cpiColumn.children     = cpiColumnChildren
        percentColumn.children = percentColumnChildren
        storageObject.savedConversions = reactiveData.savedConversions
    }
})

// 
// elements
// 
var cpiOutputElement, percentOutputElement, datePicker, datesColumn, dollarsColumn, cpiColumn, percentColumn
document.body = <body class="centered column">
    <style>{`
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
            width: 22rem;
        }
    `}</style>
    <div class="row centered" style="gap: 2rem; align-items: flex-start;">
        <div class="column centered">
            <div class="input-area">
                <span>Date</span>
                {datePicker = <DatePicker style="margin-bottom: 2rem;" onSelect={selectedDate=>reactiveData.date = selectedDate} defaultDate={reactiveData.date} setDefaultDate={true} />}
            </div>
            {datesColumn = <div class="saved-column" />}
        </div>
        <div class="column centered">
            <div class="input-area">
                <span>Dollars</span>
                <div style="margin-bottom: 2rem;">
                    $<input type="number" value={reactiveData.income} oninput={e=>reactiveData.income=e.target.value-0} />
                </div>
            </div>
            {dollarsColumn = <div class="saved-column" />}
        </div>
        <div class="column centered">
            <div class="input-area">
                <span>Your Actual Income: %</span>
                {percentOutputElement = <input style="width: 22rem; text-align: center;" disabled />}
                <span style="font-size: 12; color: gray;">income / dollars-in-circulation at the time</span>
                <span style="font-size: 12; color: gray;">(6 month rolling average)</span>
            </div>
            {percentColumn = <div class="saved-column" />}
        </div>
        <div class="column centered">
            <div class="input-area">
                <span>Your Actual Income: CPI</span>
                {cpiOutputElement = <input style="width: 22rem; text-align: center;" disabled />}
                <span style="font-size: 12; color: gray;">how much stuff could buy at the time</span>
                <span style="font-size: 12; color: gray;">(6 month rolling average of consumer price index)</span>
            </div>
            {cpiColumn = <div class="saved-column" />}
        </div>
        <button
            style="all: unset; background-color: cornflowerblue; color: white; border-color: white; -webkit-text-fill-color: white; padding: 0.5rem 1rem; align-self: flex-start; margin-left: 2rem; margin-top: 1.55rem;"
            onclick={()=>reactiveData.savedConversions = [...reactiveData.savedConversions, [`${reactiveData.date.year}-${reactiveData.date.month}`, reactiveData.income, cpiOutputElement.value, percentOutputElement.value ]]}
            >
                Save
        </button>
    </div>
    <button
        style="all: unset; background-color: gray; color: white; border-color: white; -webkit-text-fill-color: white; padding: 0.5rem 1rem; margin-top: 1.55rem;"
        onclick={()=>(reactiveData.savedConversions = [],storageObject.savedConversions=[])}
        >
            Clear
    </button>
    <a style="position: absolute; bottom: 1.5rem; min-width: 100vw; font-size: 12pt; color: cornflowerblue;" href="https://github.com/jeff-hykin/your_real_income.git">Source Code (Github Link)</a>
</body>

document.body.style = `
    display: flex; 
    align-items: center; 
    justify-content: center;
    font-size: 20pt; 
    font-family: sans-serif;
`
// populate
callDataChange()

// 
// 
// helpers
// 
// 
function usdToCpi(usdAmount, date) {
    let year = date.year
    let month = date.month
    const amounts = []
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
    return _.mean(amounts)
}

function usdToTillionthsOfPercentage(usdAmount, date) {
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
    const percentageTillionths = (usdAmount*trillion)/_.mean(previousValues)
    return percentageTillionths
}

function updateSavedList() {
    storageObject.savedConversions || (storageObject.savedConversions = [])
}