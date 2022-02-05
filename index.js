let countEL = document.getElementById("count-el")
let count = 0
let saveEL = document.getElementById("previousEnteryEL")

function incremnet() {
    count += 1
    countEL.innerText = count
}

function decrement() {
    count -= 1
    countEL.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEL.innerText += countStr

    count = 0
    countEL.innerText = count
}