// var 2
function countRepeatingElements(arr) {
    const occurrences = new Map();

    for (const element of arr) {
        if (occurrences.has(element)) {
            occurrences.set(element, occurrences.get(element) + 1);
        } else {
            occurrences.set(element, 1);
        }
    }

    return occurrences;
}

const array = [2, 1, 1, 5, 3, 5, 1, 2, 1, 2, 2];
const result = countRepeatingElements(array);
console.log(result);