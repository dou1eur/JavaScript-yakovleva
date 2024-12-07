// Recursive function to calculate the factorial of a number n
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

let n;
do {
    n = parseInt(prompt("Enter n:"));
    if (n < 0) {
        alert("n must be positive, try again:");
    }
} while (n < 0);

let result = factorial(n);
console.log(`${n}! = ${result}`);
