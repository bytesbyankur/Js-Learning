//Q. Use filter() to extract even numbers from [1,2,3,4,5,6,7,8,9,10].

function filter(n){
    if(n%2===0){
        return true
    }
}

let arr = [1,2,3,4,5,6,7,8,9,10]
let new_arr=[], k=0
for(let i in arr){
    if(filter(arr[i])){
        new_arr[k]=arr[i]
        k++
    }
}

for(let l in new_arr){
    console.log(new_arr[l])
}