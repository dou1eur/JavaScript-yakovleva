// var6
function average(arr) {
    const oddNumbers = arr.filter(num => num % 2 !== 0);
    if (oddNumbers.length === 0) return 0;
    let sum = 0;
    for (let i = 0; i < oddNumbers.length; i++) sum += oddNumbers[i];
    return sum / oddNumbers.length;
}


function findLastNegativeNumbers(matrix) {
    return matrix.map(row => {
        for (let i = row.length - 1; i >= 0; i--) {
            if (row[i] < 0) {
                return i;
            }
        }
        return -1;
    });
}


const matrix = [
    [1, 2, -3, 4],
    [-1, -2, 3, -4],
    [5, 6, 7, 8],
    [9, -10, 11, -12]
];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const result1 = average(numbers);
console.log(result1);
const result2 = findLastNegativeNumbers(matrix);
console.log(result2);