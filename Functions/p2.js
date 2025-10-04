//Q. Write a function that checks if a number is prime.
function isPrime(n) {
    if (n <= 1)
        return false;

    // Check divisibility from 2 to n-1
    for (let i = 2; i < n; i++)
        if (n % i === 0)
            return false;

    return true;
}

// Driver Code
let n = 7;
if(isPrime(n))
	console.log("true");
else
	console.log("false");