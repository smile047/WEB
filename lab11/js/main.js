document.addEventListener("DOMContentLoaded", function () {
    console.log("Скрипт успішно підключено!");

    // Завдання 1: Вивід ромба
    function drawDiamond(n) {
        let result = "";
        for (let i = 1; i <= n; i++) {
            result += " ".repeat(n - i) + getNumberRow(i) + "\n";
        }
        for (let i = n - 1; i >= 1; i--) {
            result += " ".repeat(n - i) + getNumberRow(i) + "\n";
        }
        console.log(result);
    }

    function getNumberRow(num) {
        let row = "";
        for (let i = 1; i <= num; i++) row += i;
        for (let i = num - 1; i >= 1; i--) row += i;
        return row;
    }

    let n = parseInt(prompt("Введіть розмір ромба (n):"));
    if (!isNaN(n) && n > 0) {
        drawDiamond(n);
    } else {
        console.log("Введене некоректне значення.");
    }

    // Завдання 2: Обчислення суми ряду
    function calculateSum(n) {
        let sum = 0;
        for (let i = 1; i <= n; i++) {
            sum += 1 / i;
        }
        return sum;
    }

    let n2 = parseInt(prompt("Введіть n для обчислення суми ряду:"));
    if (!isNaN(n2) && n2 > 0) {
        console.log(`Сума ряду S = ${calculateSum(n2).toFixed(4)}`);
    } else {
        console.log("Введене некоректне значення.");
    }

    // Завдання 3: Гра "Вгадай число"
    function guessNumberGame() {
        let target = Math.floor(Math.random() * 100) + 1;
        let guess;
        console.log("Гра 'Вгадай число' розпочата!");

        while (true) {
            guess = parseInt(prompt("Вгадайте число від 1 до 100:"));
            if (isNaN(guess)) {
                console.log("Будь ласка, введіть число.");
                continue;
            }
            if (guess > target) {
                console.log("Менше!");
            } else if (guess < target) {
                console.log("Більше!");
            } else {
                console.log("Вітаємо! Ви вгадали число!");
                break;
            }
        }
    }

    if (confirm("Хочете зіграти у 'Вгадай число'?")) {
        guessNumberGame();
    }
});
