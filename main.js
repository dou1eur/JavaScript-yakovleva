class Mark {
    constructor(subject, mark) {
        this.subject = subject;
        this.mark = mark;
    }
}


class Student {
    constructor(firstName, lastName, marks) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.marks = marks.map(m => new Mark(m.subject, m.mark));
    }

    getAverageMark() {
        const total = this.marks.reduce((sum, mark) => sum + mark.mark, 0);
        return total / this.marks.length;
    }

    getMarksBySubject(subject) {
        return this.marks.filter(mark => mark.subject === subject);
    }

    addMark(subject, mark) {
        this.marks.push(new Mark(subject, mark));
    }

    removeMarksBySubject(subject) {
        this.marks = this.marks.filter(mark => mark.subject !== subject);
    }
}


function printStudentInfo(student) {
    console.log(`Имя: ${student.firstName}`);
    console.log(`Фамилия: ${student.lastName}`);
    console.log('Оценки:');
    student.marks.forEach((item) => {
        console.log(`${item.subject}: ${item.mark}`);
    });
}


fetch('./example.json')
    .then(response => response.json())
    .then(data => {
        const student = new Student(data.firstName, data.lastName, data.marks);
        console.log('Студент');
        printStudentInfo(student);

        console.log('Средняя оценка студента');
        console.log(`${student.getAverageMark()}`);

        console.log('Вывод оценки по предмету');
        const mathMarks = student.getMarksBySubject("Математический анализ");
        mathMarks.forEach(mark => {
            console.log(`${mark.subject}: ${mark.mark}`);
        });

        student.addMark("Физика", 5);
        student.removeMarksBySubject("История");
        printStudentInfo(student);
    })