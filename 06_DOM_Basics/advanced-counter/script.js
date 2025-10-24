const count = document.getElementById("count")
const add = document.getElementById("increase")
const sub = document.getElementById("decrease")
const reset = document.getElementById("reset")

let c = 0
add.addEventListener("click",() =>{
    c++
    count.textContent = c
})

sub.addEventListener("click",() =>{
    c--
    count.textContent = c
})

reset.addEventListener("click",() =>{
    count.textContent = 0
    c=0
})