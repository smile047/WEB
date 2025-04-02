// Створюємо прототип Person зі спільними властивостями та методами
const Person = {
    getName: function() {
        return this.name;
    },
    setName: function(name) {
        this.name = name;
    }
};

// Конструктор для класу Курс
function Course(title) {
    this.title = title;
    this.students = [];
}

// Додаємо методи до прототипу Course
Course.prototype.getTitle = function() {
    return this.title;
};

Course.prototype.addStudent = function(student) {
    // Додаємо студента тільки якщо він ще не в списку
    if (!this.students.includes(student)) {
        this.students.push(student);
        // Також додаємо цей курс до списку курсів студента
        student.addCourse(this);
    }
};

Course.prototype.getStudents = function() {
    return this.students;
};

Course.prototype.displayInfo = function() {
    console.log(`Курс: ${this.title}`);
    console.log("Зареєстровані студенти:");
    if (this.students.length === 0) {
        console.log("- Студенти поки не зареєстровані");
    } else {
        this.students.forEach(student => {
            console.log(`- ${student.getName()}`);
        });
    }
};

// Конструктор для класу Викладач
function Teacher(name) {
    this.name = name;
    this.courses = [];
}

// Наслідуємо від Person
Teacher.prototype = Object.create(Person);
Teacher.prototype.constructor = Teacher;

// Додаємо методи до прототипу Teacher
Teacher.prototype.addCourse = function(course) {
    if (!this.courses.includes(course)) {
        this.courses.push(course);
    }
};

Teacher.prototype.getCourses = function() {
    return this.courses;
};

Teacher.prototype.displayInfo = function() {
    console.log(`Викладач: ${this.name}`);
    console.log("Викладає курси:");
    if (this.courses.length === 0) {
        console.log("- Курси поки не призначені");
    } else {
        this.courses.forEach(course => {
            console.log(`- ${course.getTitle()}`);
        });
    }
};

// Конструктор для класу Студент
function Student(name) {
    this.name = name;
    this.courses = [];
}

// Наслідуємо від Person
Student.prototype = Object.create(Person);
Student.prototype.constructor = Student;

// Додаємо методи до прототипу Student
Student.prototype.addCourse = function(course) {
    if (!this.courses.includes(course)) {
        this.courses.push(course);
    }
};

Student.prototype.viewCourses = function() {
    console.log(`Курси, на які записаний ${this.name}:`);
    if (this.courses.length === 0) {
        console.log("- Не записаний на жодний курс");
    } else {
        this.courses.forEach(course => {
            console.log(`- ${course.getTitle()}`);
        });
    }
    return this.courses;
};

Student.prototype.displayInfo = function() {
    console.log(`Студент: ${this.name}`);
    this.viewCourses();
};

// Тестування реалізації
console.log("=== Система управління курсами ===");

// Створюємо викладачів
const teacher1 = new Teacher("Проф. Іванов");
const teacher2 = new Teacher("Доц. Петров");

// Створюємо курси
const jsCourse = new Course("Основи JavaScript");
const htmlCourse = new Course("HTML і CSS");
const algorithmsCourse = new Course("Алгоритми та структури даних");

// Призначаємо курси викладачам
teacher1.addCourse(jsCourse);
teacher1.addCourse(htmlCourse);
teacher2.addCourse(algorithmsCourse);

// Створюємо студентів
const student1 = new Student("Анна");
const student2 = new Student("Богдан");
const student3 = new Student("Христина");

// Записуємо студентів на курси
jsCourse.addStudent(student1);
jsCourse.addStudent(student2);
htmlCourse.addStudent(student1);
htmlCourse.addStudent(student3);
algorithmsCourse.addStudent(student2);
algorithmsCourse.addStudent(student3);

// Відображаємо інформацію
console.log("\n--- Інформація про викладачів ---");
teacher1.displayInfo();
teacher2.displayInfo();

console.log("\n--- Інформація про курси ---");
jsCourse.displayInfo();
htmlCourse.displayInfo();
algorithmsCourse.displayInfo();

console.log("\n--- Інформація про студентів ---");
student1.displayInfo();
student2.displayInfo();
student3.displayInfo();