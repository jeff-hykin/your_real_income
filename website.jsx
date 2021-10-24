// add CSS before everything else
require("css-baseline/css/3")
require("./global.scss")

document.body = <div class="centered row">
    <div class="column centered">
        <input type="datetime-local" onInput={e=>console.log(e)} />
    </div>
    <div style="min-width: 2rem;"></div>
    <div class="column centered">
        <input type="number" onInput={e=>console.log(e)} />
    </div>
</div>

document.body.style = `
    display: flex; 
    align-items: center; 
    justify-content: center;
    font-size: 30pt; 
    font-family: sans-serif;
`
document.body.innerHTML = `
    Hello World!
`