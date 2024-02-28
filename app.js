const decraese = document.querySelector(".decraese")
const increase = document.querySelector(".increase")
const reset = document.querySelector(".reset")
const value = document.querySelector("#value")
let count = 0

function flex() {
    value.style.color = count > 0 ? "green" : count < 0 ? "red" : "blue" 
}

decraese.addEventListener("click", () => {
    count = count - 1
    value.textContent = count
    flex()
}) 

increase.addEventListener("click", () => {
    count = count + 10
    value.textContent = count
    flex()
}) 

reset.addEventListener("click", () => {
    count = 0
    value.textContent = count
    flex()
}) 