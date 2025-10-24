const myPromise = new Promise((res) =>
 setTimeout(() => res("Hello, JS"),2000));

myPromise.then((msg) => console.log(msg));
