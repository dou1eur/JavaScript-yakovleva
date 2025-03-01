function shellSort(students) {
    let n = students.length;
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < n; i++) {
            let temp = students[i];
            let j;
            for (j = i; j >= gap && students[j - gap].averageGrade > temp.averageGrade; j -= gap) {
                students[j] = students[j - gap];
            }
            students[j] = temp;
        }
    }
    return students;
}


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
let grades = [
    { name: 'Яна', averageGrade: 3.9 },
    { name: 'Андрей', averageGrade: 3.2 },
    { name: 'Гриша', averageGrade: 4.2 },
];
const sortedByGrade = shellSort(grades);
console.log('Сортировка по средней оценке (сортировка Шелла):', sortedByGrade);
const sortedStudents = sortStudents(students);
console.log('Сортировка по фамилии и имени:', sortedStudents);
const result = binarySearchStudents(sortedStudents, 'Яковлева', 'Яна');
console.log('Проверка бинарного поиска', result);