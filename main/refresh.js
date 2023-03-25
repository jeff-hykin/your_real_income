const parse = require("csv-parse/lib/sync")
const fs = require("fs")
const request = require('request')
const _ = require("lodash")

const downloadCpiCsv = new Promise((resolve, reject)=>request({url: 'https://download.bls.gov/pub/time.series/cu/cu.data.0.Current'}, (error, response, body)=>(error||response.statusCode != 200) ? reject(error) : resolve(body)))
downloadCpiCsv.then(response=>{
    const csvText = response.replace(/[ \t]+/g, ",")
    const records = parse(csvText, {
        columns: true,
        skip_empty_lines: true,
    }).filter(({series_id})=>series_id == "CUSR0000SA0") // "All items in U.S. city average, all urban consumers, not seasonally adjusted"
    const totals = {}
    records.map(({year, period, value})=>{
        totals[year] = {...totals[year], [period.replace(/M0?/,"")]: value-0}
    })
    for (const [year, periods] of Object.entries(totals)) {
        totals[year].average = _.mean(Object.values(periods))
    }
    fs.writeFileSync("datasets/outputCpi.json", JSON.stringify(totals,0,4))
}).catch(error=> {
    console.debug(`error is:`,error)
})

const downloadGoldCsv = new Promise((resolve, reject)=>request({url: 'https://raw.githubusercontent.com/datasets/gold-prices/master/data/annual.csv'}, (error, response, body)=>(error||response.statusCode != 200) ? reject(error) : resolve(body)))
downloadGoldCsv.then(response=>{
    const records = parse(response, {
        columns: true,
        skip_empty_lines: true,
    })
    const totals = {}
    records.map(({Date, Price})=>{
        const year = Date.replace(/-12$/g,"")
        totals[year] = Price-0
    })
    fs.writeFileSync("datasets/outputGold.json", JSON.stringify(totals,0,4))
}).catch(error=> {
    console.debug(`error is:`,error)
})