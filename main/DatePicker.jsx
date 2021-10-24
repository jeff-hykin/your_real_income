const DateTime = require("good-date")
const datepicker = require('js-datepicker')
require('./stuff.css')



// Create a date picker and associate it with a textbox.

module.exports = ({
    defaultDate,
    minDate,
    maxDate,
    onSelect,
    ...props
})=> {
    const element = <input type="text" {...props}/>
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