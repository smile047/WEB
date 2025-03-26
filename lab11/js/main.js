// Завдання 1: Розробити скрипт, який виводить рядок з цифр заданого розміру n
function task1() {
    console.log("Завдання 1:");
    let n = 3; // Фіксований розмір
    
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= n; j++) {
            row += j;
        }
        console.log(row);
    }
}

// Завдання 2: Обчислення суми числового ряду S = 1 + 1/2 + 1/3 + ... + 1/n
function task2() {
    console.log("\nЗавдання 2:");
    let n = 5; // Фіксований розмір
    
    let sum = 0;
    let sumFormula = "S = ";
    
    for (let i = 1; i <= n; i++) {
        sum += 1 / i;
        sumFormula += `1/${i} ${i < n ? '+ ' : ''}`;
    }
    
    console.log(`${sumFormula} = ${sum.toFixed(4)}`);
}

// Завдання 3: Гра "Вгадай число" від 1 до 100
function task3() {
    console.log("\nЗавдання 3:");
    let secretNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Загадане число: ${secretNumber}`);
    
    let attempts = [];
    let userGuess;
    
    do {
        userGuess = Math.floor(Math.random() * 100) + 1;
        attempts.push(userGuess);
        
        if (userGuess < secretNumber) {
            console.log(`Спроба ${attempts.length}: ${userGuess} - більше`);
        } else if (userGuess > secretNumber) {
            console.log(`Спроба ${attempts.length}: ${userGuess} - менше`);
        }
    } while (userGuess !== secretNumber);
    
    console.log(`Число "${secretNumber}" вгадане за ${attempts.length} спроб`);
}

// Виклик функцій
task1();
task2();
task3();
