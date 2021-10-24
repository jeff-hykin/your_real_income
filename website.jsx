// add CSS before everything else
require("css-baseline/css/3")
require("./global.scss")
const { reactive } = require("@vue/reactivity")
const { watch } = require("@vue-reactivity/watch")
const storageObject = require("storage-object")
const DateTime = require("good-date")
const _ = require("lodash")

const cpiPrices = require("./outputCpi.json")
const goldPrices = require("./outputGold.json")
const DatePicker = require("./main/DatePicker")




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
        cpiOutputElement.value = Math.round(usdToCpi(reactiveData.income, reactiveData.date))
    }
    
    // 
    // create all the children
    // 
    if (cpiColumn) {
        datesColumnChildren = []
        dollarsColumnChildren = []
        cpiColumnChildren = []
        for (const [date, dollars, cpi] of reactiveData.savedConversions) {
            datesColumnChildren.push(<div style="min-height: 1rem"></div>)
            dollarsColumnChildren.push(<div style="min-height: 1rem"></div>)
            cpiColumnChildren.push(<div style="min-height: 1rem"></div>)
            datesColumnChildren.push(<input type="text" value={date} disabled />)
            dollarsColumnChildren.push(<div>$<input type="number" value={dollars} disabled /></div>)
            cpiColumnChildren.push(<div>🛒 <input type="number" value={cpi} disabled /></div>)
        }
        datesColumn.children = datesColumnChildren
        dollarsColumn.children = dollarsColumnChildren
        cpiColumn.children = cpiColumnChildren
        storageObject.savedConversions = reactiveData.savedConversions
    }
})

// 
// elements
// 
var cpiOutputElement, datePicker, datesColumn, dollarsColumn, cpiColumn
document.body = <body class="centered column">
    <div class="row centered">
        <div class="column centered">
            <span>Date</span>
            {datePicker = <DatePicker style="margin-bottom: 2rem;" onSelect={selectedDate=>reactiveData.date = selectedDate} defaultDate={reactiveData.date} setDefaultDate={true} />}
            {datesColumn = <div class="column centered" style="max-height: 70vh; overflow: auto;">
            </div>}
        </div>
        <div style="min-width: 2rem;"></div>
        <div class="column centered">
            <span>Dollars</span>
            <div style="margin-bottom: 2rem;">
                $<input type="number" value={reactiveData.income} oninput={e=>reactiveData.income=e.target.value-0} />
            </div>
            {dollarsColumn = <div class="column centered" style="max-height: 70vh; overflow: auto;">
            </div>}
        </div>
        <div style="min-width: 2rem;"></div>
        <div class="column centered">
            <span>Your Actual Income</span>
            <div style="margin-bottom: calc(2rem - 24);" >
                🛒 {cpiOutputElement = <input type="number" disabled />}
            </div>
            <span style="font-size: 12; color: gray;">how much stuff could buy at the time</span>
            <span style="font-size: 12; color: gray;">(6 month rolling average consumer price index)</span>
            {cpiColumn = <div class="column centered" style="max-height: 70vh; overflow: auto;">
            </div>}
        </div>
        <button
            style="all: unset; background-color: cornflowerblue; color: white; border-color: white; -webkit-text-fill-color: white; padding: 0.5rem 1rem; align-self: flex-start; margin-left: 2rem; margin-top: 1.55rem;"
            onclick={()=>reactiveData.savedConversions = [...reactiveData.savedConversions, [`${reactiveData.date.year}-${reactiveData.date.month}`, reactiveData.income, cpiOutputElement.value ]]}
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

function updateSavedList() {
    storageObject.savedConversions || (storageObject.savedConversions = [])
}