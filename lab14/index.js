// Клас Person (базовий клас)
function Person(name) {
    this.name = name;
}

Person.prototype.getInfo = function() {
    return `Ім'я: ${this.name}`;
};

// Клас Course (курс)
function Course(title) {
    this.title = title;
    this.students = [];
}

Course.prototype.addStudent = function(student) {
    this.students.push(student);
    console.log(`${student.name} доданий до курсу ${this.title}.`);
};

Course.prototype.getStudents = function() {
    return this.students.length > 0
        ? this.students.map(student => student.name).join(', ')
        : "Немає студентів";
};

// Клас Teacher (викладач, наслідується від Person)
function Teacher(name) {
    Person.call(this, name);
    this.courses = [];
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.addCourse = function(course) {
    this.courses.push(course);
    console.log(`Курс "${course.title}" доданий викладачем ${this.name}.`);
};

Teacher.prototype.getCourses = function() {
    return this.courses.length > 0
        ? this.courses.map(course => course.title).join(', ')
        : "Немає курсів";
};

// Клас Student (студент, наслідується від Person)
function Student(name) {
    Person.call(this, name);
    this.courses = [];
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.enroll = function(course) {
    this.courses.push(course);
    course.addStudent(this);
    console.log(`${this.name} записався на курс "${course.title}".`);
};

Student.prototype.getCourses = function() {
    return this.courses.length > 0
        ? this.courses.map(course => course.title).join(', ')
        : "Немає курсів";
};

// ========================== ТЕСТУВАННЯ ==========================

// Створення викладача
const teacher = new Teacher("Олександр");

// Створення курсів
const jsCourse = new Course("JavaScript");
const htmlCourse = new Course("HTML & CSS");

// Додавання курсів викладачем
teacher.addCourse(jsCourse);
teacher.addCourse(htmlCourse);

// Створення студентів
const student1 = new Student("Іван");
const student2 = new Student("Марія");

// Запис студентів на курси
student1.enroll(jsCourse);
student2.enroll(jsCourse);
student2.enroll(htmlCourse);

// Вивід результатів у консоль
console.log("===== Інформація про викладача =====");
console.log(teacher.getInfo());
console.log("Курси викладача:", teacher.getCourses());

console.log("===== Інформація про студентів =====");
console.log(student1.getInfo(), "| Курси:", student1.getCourses());
console.log(student2.getInfo(), "| Курси:", student2.getCourses());

console.log("===== Студенти курсів =====");
console.log(`Студенти курсу ${jsCourse.title}:`, jsCourse.getStudents());
console.log(`Студенти курсу ${htmlCourse.title}:`, htmlCourse.getStudents());
