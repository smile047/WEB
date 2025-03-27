// Added multiple debugging methods
(function() {
    // First method: window alert for very early debugging
    alert("Script is being loaded!");

    // Logging to console
    console.log("Script is loaded successfully!");
    console.warn("Debugging started");

    // Attach logging to window for global access
    window.debugLog = function(message) {
        console.log(message);
        alert(message);
    };

    // Debugging wrapper for tasks
    function safeTaskExecute(taskFunction) {
        try {
            debugLog("Attempting to execute task");
            taskFunction();
        } catch (error) {
            console.error("Error in task:", error);
            alert("Error: " + error.message);
        }
    }

    // Modify existing tasks to use safe execution
    window.task1 = function() {
        safeTaskExecute(function() {
            debugLog("Task 1 started");
            let n = parseInt(prompt("Введіть розмір n для завдання 1:"));
            
            if (isNaN(n) || n <= 0) {
                throw new Error("Некоректне введення");
            }
            
            let result = "";
            for (let i = 1; i <= n; i++) {
                result += "1".repeat(i) + "\n";
            }
            
            debugLog("Завдання 1 (Рядок цифр):\n" + result);
        });
    };

    window.task2 = function() {
        safeTaskExecute(function() {
            debugLog("Task 2 started");
            let n = parseInt(prompt("Введіть число n для завдання 2:"));
            
            if (isNaN(n) || n <= 0) {
                throw new Error("Некоректне введення");
            }
            
            let sum = 0;
            for (let i = 1; i <= n; i++) {
                sum += 1 / i;
            }
            
            debugLog(`Завдання 2 (Сума ряду): S = ${sum.toFixed(4)}`);
        });
    };

    window.task3 = function() {
        safeTaskExecute(function() {
            debugLog("Task 3 started");
            const randomNumber = Math.floor(Math.random() * 100) + 1;
            let attempts = 0;
            let userGuess;
            
            do {
                userGuess = parseInt(prompt("Введіть число від 1 до 100:"));
                attempts++;
                
                if (userGuess > randomNumber) {
                    debugLog("Менше!");
                } else if (userGuess < randomNumber) {
                    debugLog("Більше!");
                } else {
                    debugLog(`Вітаю! Ви вгадали число ${randomNumber} за ${attempts} спроб.`);
                }
            } while (userGuess !== randomNumber);
        });
    };

    // Final startup log
    console.log("🚀 Script initialization complete!");
})();