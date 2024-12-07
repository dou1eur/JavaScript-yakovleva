// Function to determine if a number is an Armstrong number
function isArmstrongNumber(num) {
    let sum = 0;
    let digits = num.toString().split('');
    let power = digits.length;

    for (let digit of digits) {
        sum += Math.pow(parseInt(digit), power); // pow = len digits
    }
    return sum === num;
}

// Function to find all Armstrong numbers on a user-specified segment
function findArmstrongNumbers(a, b) {
    let armstrongNumbers = [];
    for (let i = a; i <= b; i++) {
        if (isArmstrongNumber(i)) {
            armstrongNumbers.push(i);
        }
    }
    return armstrongNumbers;
}

let a = parseInt(prompt("Enter the left boundary of the segment:"));
let b = parseInt(prompt("Enter the right boundary of the segment:"));
let result = findArmstrongNumbers(a, b);

console.log(`Armstrong numbers on the segment [${a}, ${b}]: ${result.join(", ")}`);