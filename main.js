// var 1
function findSameElements(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    const sameElements = new Set();
    for (const element of set1) {
        if (set2.has(element)) {
            sameElements.add(element);
        }
    }
    return Array.from(sameElements);
}
const array1 = [0, 8, 3, 4, 1];
const array2 = [3, 4, 5, 6, 1];
const sameElements = findSameElements(array1, array2);
console.log("Одинаковые элементы:", sameElements);


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

// var 3
class Student {
    constructor(name, group) {
        this.name = name;
        this.group = group;
    }
}

function countStudentsInLargestGroup(students) {
    const groupCounts = new Map();

    for (const student of students) {
        if (groupCounts.has(student.group)) {
            groupCounts.set(student.group, groupCounts.get(student.group) + 1);
        } else {
            groupCounts.set(student.group, 1);
        }
    }

    let maxCount = 0;
    for (const count of groupCounts.values()) {
        if (count > maxCount) {
            maxCount = count;
        }
    }

    return maxCount;
}
const students = [
    new Student("Яна", "Группа 6313"),
    new Student("Петя", "Группа 6311"),
    new Student("Саша", "Группа 6313"),
    new Student("Андрей", "Группа 6312"),
    new Student("Настя", "Группа 6313"),
];
const largestGroupCount = countStudentsInLargestGroup(students);
console.log("Число студентов в самой большой группе:", largestGroupCount);

