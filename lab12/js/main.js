// Завдання 1: Функція для обчислення суми чисел від 1 до n
function calculateSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// Завдання 2: Функціональний вираз для множення двох чисел
const multiply = function(a, b) {
    return a * b;
};

// Завдання 3: Стрілкова функція для піднесення числа a до степеня b
const power = (a, b) => a ** b;

// Завдання 4: Рекурсивна функція для обчислення гармонічного ряду Hn
function harmonicSeries(n) {
    if (n === 1) return 1;
    return 1 / n + harmonicSeries(n - 1);
}

// Завдання 5: Функція-замикання для створення множника
function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

// Завдання 6: Функція, що приймає число та функцію, яка змінює його значення
function applyFunction(value, func) {
    return func(value);
}

// Приклад для піднесення до квадрата
const square = (x) => x ** 2;

// Завдання 7: Функція processSet, що застосовує колбек до елементів множини
function processSet(set, callback) {
    set.forEach(callback);
}

// Тестування функцій
console.log(calculateSum(10)); // 55
console.log(multiply(3, 4)); // 12
console.log(power(2, 3)); // 8
console.log(harmonicSeries(5)); // Приблизно 2.28
const double = createMultiplier(2);
console.log(double(5)); // 10
console.log(applyFunction(4, square)); // 16
const numbersSet = new Set([1, 2, 3, 4]);
processSet(numbersSet, (num) => console.log(num * 2)); // 2, 4, 6, 8