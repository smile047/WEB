// Завдання 1: Передбачення результатів виконання
var a = 10;
let b = 20;
const c = 30;

// Тепер доступ до змінних після їх ініціалізації
console.log(a); // 10
console.log(b); // 20
console.log(c); // 30

// Завдання 2: Тестування області видимості змінних
function testScope() {
    if (true) {
        var x = 5;  // var - функціональна область видимості
        let y = 10; // let - блочна область видимості
        const z = 15; // const - блочна область видимості
    }
    console.log(x); // 5 (x доступна поза блоком if, оскільки var має функціональну область видимості)
    // Змінні y та z недоступні поза блоком if, тому виведеться помилка:
    try {
        console.log(y); // ReferenceError (y доступна лише в межах блоку if)
    } catch (error) {
        console.log("Error with y:", error.message);
    }
    try {
        console.log(z); // ReferenceError (z доступна лише в межах блоку if)
    } catch (error) {
        console.log("Error with z:", error.message);
    }
}
testScope();

// Завдання 3: Приведення типів та їх результат
console.log(5 + "5");  // "55" (число 5 буде перетворене в рядок)
console.log("5" - 2);  // 3 (рядок "5" буде перетворений на число)
console.log(true + false);  // 1 (true = 1, false = 0, результат 1)
console.log(null + 1);  // 1 (null при додаванні до числа стає 0)
console.log(undefined + 1);  // NaN (undefined не можна привести до числа)
console.log(0 == false);  // true (перевірка за допомогою == виконує приведення типів)
console.log(0 === false); // false (строге порівняння без приведення типів)

// Завдання 4: Використання Object.freeze() для захисту об'єкта від змін
const person = {
    name: "John",
    age: 30
};

Object.freeze(person);

person.age = 31; // Не зміниться
person.city = "New York"; // Не буде додано
console.log(person); // { name: "John", age: 30 }

// Спроба присвоїти нове значення змінній, яка оголошена через const
// person = { name: "Alice", age: 25 }; // TypeError: Assignment to constant variable.

// Завдання 5: Функція для визначення типу змінної
function checkType(value) {
    return typeof value;
}

console.log(checkType(10));  // "number"
console.log(checkType("Hello"));  // "string"
console.log(checkType(null));  // "object" (це особливість JavaScript)
