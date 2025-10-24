async function game() {
    let myPromise1 = new Promise((res) => 
    setTimeout(() => res ("Task 1 done!"),1000))

    let myPromise2 = new Promise((res) => 
    setTimeout(() => res("Task 2 done!"),2000))

    myPromise1.then(console.log)
    myPromise2.then(console.log)

    await myPromise1
    await myPromise2
}

game()