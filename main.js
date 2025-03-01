// var 2
function sortStudents(students) {
    return students.sort((a, b) => {
        const fullNameA = `${a.surname} ${a.name}`;
        const fullNameB = `${b.surname} ${b.name}`;
        return fullNameA.localeCompare(fullNameB);
    });
}


function binarySearchStudents(students, surname, name) {
    let l = 0;
    let r = students.length - 1;

    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        const fullNameMid = `${students[mid].surname} ${students[mid].name}`;
        const fullNameTarget = `${surname} ${name}`;

        if (fullNameMid === fullNameTarget) {
            return students[mid];
        } else if (fullNameMid < fullNameTarget) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return null;
}


const students = [
    { surname: 'Яковлева', name: 'Яна' },
    { surname: 'Серов', name: 'Андрей' },
    { surname: 'Петров', name: 'Григорий' },
];
const sortedStudents = sortStudents(students);
const result = binarySearchStudents(sortedStudents, 'Яковлева', 'Яна');
console.log(result);