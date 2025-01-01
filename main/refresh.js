// import parse from "npm:csv-parse@4.16.3/lib/sync.js"
// import fs from "node:fs"
// import request from "https://esm.sh/request@2.88.2" /* CHECKME: unknown that was prefixed */
// import _ from "https://esm.sh/lodash@4.17.21" /* CHECKME: unknown that was prefixed */

// import danfo from "https://esm.sh/gh/jeff-hykin/js-notebook@07b8ec69ca/tools/danfo.js"
// import danfo from "https://esm.sh/gh/jeff-hykin/js-notebook/tools/danfo.js"
import { FileSystem, glob } from "https://deno.land/x/quickr@0.6.72/main/file_system.js"
import * as dataForge from "https://esm.sh/data-forge@1.10.2?dev"
// var dataForge = await import("https://esm.sh/data-forge@1.10.2" )


// var chunks = []
// for (const [key, value] of Object.entries(dataForge.DataFrame.prototype)) {
//     if (value instanceof Function && !key.startsWith("get") && !key.startsWith("to") && !(["constructor", "toString"].includes(key))) {
//         chunks.push(` ${key}(...args) {
//             const output = super[${JSON.stringify(key)}](...args)
//             if (output instanceof dataForge.DataFrame) {
//                 const result = new EagerDataFrame()
//                 result.content = (new dataForge.DataFrame({ values: output.toArray(), })).content
//                 return result
//             }
//             return output
//         }\n`)
//     }
// }
// var EagerDataFrame = eval(`
// (class extends dataForge.DataFrame {
//     constructor() {
//         super()
//     }
//     ${chunks.join("")}
// })
// `)

// 
// cpi
// 
    var cpiData = dataForge.fromCSV(await fetch("https://download.bls.gov/pub/time.series/cu/cu.data.0.Current", {
        delimiter: "\t",
        "credentials": "omit",
        "headers": {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:132.0) Gecko/20100101 Firefox/132.0",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            "Accept-Language": "en-US,en;q=0.5",
            "Sec-GPC": "1",
            "Upgrade-Insecure-Requests": "1",
            "Sec-Fetch-Dest": "document",
            "Sec-Fetch-Mode": "navigate",
            "Sec-Fetch-Site": "cross-site",
            "Priority": "u=0, i",
            "Pragma": "no-cache",
            "Cache-Control": "no-cache"
        },
        "method": "GET",
        "mode": "cors"
    }).then(response=>response.text()), { delimiter: "\t", })
    console.log(cpiData.content.columnNames) // [ "series_id", "year", "period", "value", "footnote_codes" ]
    // cpiData.deflate(row=>row.series_id.slice(0,3).distinct().toArray()
    var prefixToType = {
        AP:	"Average Price Data",
        BD:	"Business Employment Dynamics",
        BG:	"Collective Bargaining-State and Local Government",
        BP:	"Collective Bargaining-Private Sector",
        CC:	"Employer Costs for Employee Compensation (SIC 1986-2003)",
        CD:	"Occupational Injuries and Illness - Characteristics Data (SIC)",
        CE:	"Employment, Hours, and Earnings-National (NAICS)",
        CF:	"Census of Fatal Occupational Injuries (1992-2002)",
        CH:	"Nonfatal cases involving days away from work: selected characteristics ",
        CI:	"Employment Cost Index (NAICS)",
        CM:	"Employer Costs for Employee Compensation (NAICS)",
        CS:	"Occupational Injuries and Illnesses - Characteristics Data ",
        CU:	"Consumer Price Index-All Urban Consumers (Current Series) ",
        CW:	"Consumer Price Index-Urban Wage Earners and Clerical Workers (Current Series)",
        CX:	"Consumer Expenditure Survey ",
        EB:	"Employee Benefits Survey (1979 - 2006)",
        EC:	"Employment Cost Index (SIC 1975 - 2005)",
        EE:	"Employment, Hours, and Earnings-National (SIC)",
        EI:	"International Price Index	",
        FI:	"Census of Fatal Occupational Injuries",
        FM:	"Marital and Family Labor Force Statistics",
        FW:	"Census of Fatal Occupational Injuries",
        GG:	"Green Goods and Services",
        GP:	"Geographic Profile",
        HC:	"Occupational Injuries and Illness - Characteristics Data (NAICS)",
        HS:	"Occupational Injury and Illness Rates (based on 1972 SIC codes)",
        II:	"Occupational Injuries and Illnesses Industry Data",
        IN:	"International Labor Statistics",
        IP:	"Industry Productivity and Costs",
        JL:	"Job Openings and Labor Turnover Survey (SIC)",
        JT:	"Job Openings and Labor Turnover Survey (NAICS)",
        LA:	"Local Area Unemployment Statistics",
        LE:	"Weekly and Hourly Earnings Data from the Current Population Survey",
        LI:	"Department Store Inventory Price Index",
        LN:	"Labor Force Statistics from the Current Population Survey (NAICS)",
        LU:	"Union Affiliation Data from the Current Population Survey",
        ML:	"Mass Layoff Statistics",
        MP:	"Major Sector Multifactor Productivity Index",
        MU:	"Consumer Price Index-All Urban Consumers (Old Series) ",
        MW:	"Consumer Price Index-Urban Wage Earners and Clerical Workers (Old Series)",
        NB:	"National Compensation Survey ",
        NC:	"National Compensation Survey (SIC 1997-2006)",
        ND:	"Producer Price Index Revision-Discontinued Series (NAICS)",
        NL:	"National Longitudinal Survey",
        NW:	"National Compensation Survey (NAICS)",
        OE:	"Occupation Employment Statistics",
        OR:	"Occupational Requirements Survey ",
        PC:	"Producer Price Index Revision-Current Series",
        PD:	"Producer Price Index Revision-Discontinued Series (SIC)",
        PR:	"Major Sector Productivity and Costs Index",
        SA:	"State and Area Employment, Hours, and Earnings (SIC)",
        SH:	"Occupational Injury and Illness Rates (based on 1987 SIC codes)",
        SI:	"Occupational Injury and Illness Rates (2002 data)",
        SM:	"State and Area Employment, Hours, and Earnings (NAICS)",
        SU:	"Chained CPI-All Urban Consumers",
        WD:	"Producer Price Index Commodity - Discontinued Series",
        WM:	"Modeled Wage Estimates",
        WP:	"Producer Price Index - Commodities",
        WS:	"Work Stoppage Data",
    }
    var fullCpiData = cpiData.dropSeries("footnote_codes").where(
        row => true
    ).select(row => {
        let cpiType, seasonalAdjustment, periodicity, areaCode, itemCode

        // 
        // cpiType
        // 
        cpiType = prefixToType[row.series_id.slice(0,2)] || "unknown"
        // switch (type) {
        //     case "CU":
        //         cpiType = "CPI-U"
        //         break;
        //     case "CW":
        //         cpiType = "CPI-W"
        //         break;
        //     case "SU":
        //         cpiType = "C-CPI-U"
        //         break;
        //     case "MU": // discontinued 
        //         cpiType = "CPI-U"
        //         break;
        //     case "MW": // discontinued 
        //         cpiType = "CPI-W"
        //         break;
        //     default:
        //         cpiType = "unknown:" + type
        //         break;
        // }

        // 
        // seasonalAdjustment
        // 
        switch (row.series_id.slice(2,3)) {
            case "S":
                seasonalAdjustment = "seasonally-adjusted"
                break;
            case "U":
                seasonalAdjustment = "unadjusted"
                break;
            default:
                seasonalAdjustment = "unknown:" + row.series_id.slice(2,3)
                break;
        }

        // 
        // periodicity
        // 
        switch (row.series_id.slice(3,4)) {
            case "R":
                periodicity = "regular"
                break;
            case "S":
                periodicity = "semi-annual"
                break;
            default:
                periodicity = "unknown:" + row.series_id.slice(3,4)
                break;
        }

        // 
        // areaCode
        // 
        areaCode = row.series_id.slice(4,8)
        
        // 
        // cuItemCode
        // 
        itemCode = row.series_id.slice(8)

        return ({
            ...row,
            year: row.year-0,
            month: row.period.replace(/M0?/,"")-0,
            value: row.value-0,
            cpiType,
            seasonalAdjustment,
            periodicity,
            areaCode,
            itemCode,
        })
    }).where(
        ({seasonalAdjustment})=>(seasonalAdjustment=="seasonally-adjusted")
    )
    
    var jsonedData = (
        Object.fromEntries(
            fullCpiData.groupBy(
                (row)=>row.year
            ).select(
                (rowsPerYear, index)=>[
                    // index<1&&console.debug(`rowsPerYear is:`,rowsPerYear.at(1)),
                    // console.debug(`rowsPerYear.at(1) is:`,rowsPerYear.at(1)),
                    // key
                    rowsPerYear.head(1).toArray()[0].year,
                    // value
                    Object.fromEntries(
                        rowsPerYear.groupBy(row=>row.month).where(row=>row).select(
                            (rowsPerYearPerMonth, index)=>[
                                rowsPerYearPerMonth.head(1).toArray()[0].month,
                                rowsPerYearPerMonth.getSeries("value").mean(),
                            ]
                        ).toArray()
                    ),
                ]
            ).toArray()
        )
    )

    await FileSystem.write({
        data: "export default " + JSON.stringify(jsonedData, null, 4),
        path: `${FileSystem.thisFolder}/datasets/outputCpi.js`,
    })

// 
// gold
// 
    var goldData = dataForge.fromCSV(await fetch("https://raw.githubusercontent.com/datasets/gold-prices/master/data/annual.csv", {
        delimiter: "\t",
        "credentials": "omit",
        "headers": {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:132.0) Gecko/20100101 Firefox/132.0",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            "Accept-Language": "en-US,en;q=0.5",
            "Sec-GPC": "1",
            "Upgrade-Insecure-Requests": "1",
            "Sec-Fetch-Dest": "document",
            "Sec-Fetch-Mode": "navigate",
            "Sec-Fetch-Site": "cross-site",
            "Priority": "u=0, i",
            "Pragma": "no-cache",
            "Cache-Control": "no-cache"
        },
        "method": "GET",
        "mode": "cors"
    }).then(response=>response.text()))
    console.log(goldData.content.columnNames) // [ "series_id", "year", "period", "value", "footnote_codes" ]
    const totals = {}
    goldData.toArray().map(({Date, Price})=>{
        const year = Date.replace(/-12$/g,"")
        totals[year] = Price-0
    })
    await FileSystem.write({
        data: "export default " + JSON.stringify(totals, null, 4),
        path: `${FileSystem.thisFolder}/datasets/outputGold.js`,
    })