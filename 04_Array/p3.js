// Q. Use array methods:

// Add an element at the end and start.

// Remove an element from end and start.

let arr = ["Apple", "Orange", "Mango", "Banana","Pineapple"]

arr.push("Pomegrenate")
arr.unshift("Lemon")

for(let i in arr){
    console.log(arr[i])
}

arr.pop()
arr.shift()

for(let i in arr){
    console.log(arr[i])
}