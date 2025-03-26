// Завдання 1: Виведення рядка цифр заданого розміру
function task1() {
    // Отримуємо розмір від користувача
    let n = parseInt(prompt("Введіть розмір для виведення рядка цифр:", "3"));
    
    // Перевірка коректності введення
    if (isNaN(n) || n <= 0) {
        alert("Некоректне введення! Введіть додатнє число.");
        return;
    }
    
    // Цикл для виведення рядка цифр
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= n; j++) {
            row += j;
        }
        console.log(row);
    }
}

// Завдання 2: Обчислення суми числового ряду
function task2() {
    // Отримуємо n від користувача
    let n = parseInt(prompt("Введіть число n для обчислення суми ряду:", "5"));
    
    // Перевірка коректності введення
    if (isNaN(n) || n <= 0) {
        alert("Некоректне введення! Введіть додатнє число.");
        return;
    }
    
    // Обчислення суми ряду
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += 1 / i;
    }
    
    console.log(`Сума ряду 1 + 1/2 + 1/3 + ... + 1/${n} = ${sum.toFixed(4)}`);
}

// Завдання 3: Гра "Вгадай число"
function task3() {
    // Генеруємо випадкове число від 1 до 100
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    
    while (true) {
        // Отримуємо припущення від користувача
        let guess = parseInt(prompt("Вгадайте число від 1 до 100:"));
        attempts++;
        
        // Перевірка введення
        if (isNaN(guess) || guess < 1 || guess > 100) {
            alert("Введіть коректне число від 1 до 100!");
            continue;
        }
        
        // Перевірка припущення
        if (guess === secretNumber) {
            alert(`Вітаю! Ви вгадали число ${secretNumber} за ${attempts} спроб.`);
            break;
        } else if (guess < secretNumber) {
            alert("Загадане число більше.");
        } else {
            alert("Загадане число менше.");
        }
    }
}

// Виклик функцій для виконання завдань
task1();
task2();
task3();