let myPromise = new Promise((resolve,reject) => {
    let n= Math.random() > 0.5
    if(n){
        resolve("Success!")
    }
    else{
        reject("Error!")
    }
}) 

myPromise.then((msg) => console.log(msg))
.catch((err) =>console.log(err))