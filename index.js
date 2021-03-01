const calculator = document.querySelector(".calculator")
const keys = calculator.querySelector(".calculator__keys")
const display = document.querySelector(".calculator__display")

keys.addEventListener("click", e => {
    if (e.target.matches("button")) {
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayNum = display.textContent
        if (!action){
            if(displayNum === "0"){
                display.textContent = keyContent
            } else {
                display.textContent = displayNum + keyContent
            }
        }
        if(action === "decimal"){
            display.textContent = displayNum + "."
        }
        if (action === "add" || action === "subtract" || action === "mutiply" || action === "divide"){
            key.classList.add("is-depressed")
        }
    }
})