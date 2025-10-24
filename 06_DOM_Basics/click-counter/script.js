const btn = document.getElementById("btn")

let count = 0
btn.addEventListener("click" ,() => {
   count++
   document.getElementById("count").textContent = count
})

