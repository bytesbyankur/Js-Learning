const myPromise = new Promise((res) =>
res(5))
.then((num) =>
     num*2
)
.then((num) => 
     num+3
)
.then((num) => console.log(num))