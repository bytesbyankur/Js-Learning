async function game() {
    let myPromise = await new Promise((res) => {
        setTimeout(() => res("Task Completed"),3000)
    })
    console.log(myPromise)
}

game()

// game().then((msg) => console.log(msg))