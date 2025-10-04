//Q. Write a function that returns the factorial of a number.

let n=5
const fact = (n)=>{
    let fact=1,p=1;
    for (i=n;i>=1;i--){
        fact*=i
    }

    console.log(fact)
}

fact(n)