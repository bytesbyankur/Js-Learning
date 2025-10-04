//Q. Use map() to square each element in [1, 2, 3, 4, 5].

function map(n){
    return (Math.pow(n,2))
}

let arr = [1, 2, 3, 4, 5]

for(let i in arr){
    console.log(map(arr[i]))
}