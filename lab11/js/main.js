document.addEventListener("DOMContentLoaded", function() {
    console.log("Лабораторна робота 11 виконана!");

    // Завдання 1: Вивід ромба з цифр
    function printDiamond(n) {
        let output = "";
        for (let i = 1; i <= n; i++) {
            output += " ".repeat(n - i) + "1".repeat(2 * i - 1) + "\n";
        }
        for (let i = n - 1; i >= 1; i--) {
            output += " ".repeat(n - i) + "1".repeat(2 * i - 1) + "\n";
        }
        console.log(output);
    }
    let n = parseInt(prompt("Введіть розмір ромба:"), 10);
    if (!isNaN(n) && n > 0) {
        printDiamond(n);
    }

    // Завдання 2: Числовий ряд та сума
    function sumSeries(n) {
        let sum = 0;
        let series = "";
        for (let i = 1; i <= n; i++) {
            sum += 1 / i;
            series += (i === 1) ? "1" : " + 1/" + i;
        }
        console.log("Ряд: ", series);
        console.log("Сума ряду: ", sum.toFixed(4));
    }
    let num = parseInt(prompt("Введіть n для числового ряду:"), 10);
    if (!isNaN(num) && num > 0) {
        sumSeries(num);
    }

    // Завдання 3: Гра "Вгадай число"
    let secretNumber = Math.floor(Math.random() * 100) + 1;
    let guess;
    
    while (true) {
        guess = parseInt(prompt("Вгадайте число від 1 до 100:"), 10);
        if (isNaN(guess)) {
            alert("Будь ласка, введіть число!");
            continue;
        }
        if (guess < secretNumber) {
            alert("Більше! Спробуйте ще раз.");
        } else if (guess > secretNumber) {
            alert("Менше! Спробуйте ще раз.");
        } else {
            alert("Вітаємо! Ви вгадали число " + secretNumber + "!");
            break;
        }
    }
});
