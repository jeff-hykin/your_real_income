import DateTime from "https://esm.sh/gh/jeff-hykin/good-js@1.13.5.1/source/date.js"
import datepicker from "./js_datepicker.js"
import { Elemental, passAlongProps } from "https://esm.sh/gh/jeff-hykin/elemental@0.6.4/main/deno.js"
console.debug(`datepicker is:`,datepicker)

// Create a date picker and associate it with a textbox.
export default ({
    defaultDate,
    minDate,
    maxDate,
    onSelect,
    ...props
})=> {
    const element = document.createElement("input")
    element.type = "text"
    passAlongProps(element, props)
    // const datePicker = tinyDatePicker({ input: element })
    // picker
    setTimeout(() => {
        let toggling = false
        while (!element.parentElement) {}
        element.picker = datepicker(element, {
            onSelect: (instance, date) => {
                onSelect(date)
            },
            onShow: instance => {
                toggling = !toggling
                if (toggling) {
                    element.picker.toggleOverlay()
                } 
            },
            onMonthChange: instance => {
                toggling = false
                const newDate = new DateTime([instance.currentYear, instance.currentMonth+1, 1])
                element.picker.setDate(newDate)
                onSelect(newDate)
                element.picker.hide()
            },
            formatter: (input, date, instance) => {
                const dateTime = new DateTime([instance.currentYear, instance.currentMonth+1, ])
                input.value = `${dateTime.year}-${dateTime.month}`
            },
            minDate,
            maxDate,
        })
        element.picker.setDate(defaultDate)
    }, 0)
    return element
}