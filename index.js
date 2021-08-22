let count = 0
let n=0
let countStr = ""
const saveEl = document.getElementById("save-el")
const countEl = document.getElementById("count-el")
const totalEl = document.getElementById("total-el")
const archiveEl = document.getElementById("archive-el")
let counts = []
const reducer = (accumulator, currentValue) => accumulator + currentValue;

function increment() {
    count += 1
    countEl.textContent = count
}

function sum() {
    let total = count
    counts.push(total)
    totalEl.textContent = `Total: ${counts.reduce(reducer)}`
}


function save() {
    countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}


