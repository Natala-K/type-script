// Объявление и инициализация переменных
let income = 50000;        // общий доход за месяц
let expenses = 35000;      // общий расход за месяц
let savings = 10000;       // сумма, которую хотите отложить
let netIncome;             // чистый доход (будет рассчитан)
let remaining;             // оставшаяся сумма (будет рассчитана)

// Вычисления
netIncome = income - expenses;         // чистый доход = доход - расходы
remaining = netIncome - savings;       // оставшаяся сумма = чистый доход - сбережения

// Вывод переменных в консоль
console.log("Доход за месяц:", income);
console.log("Расходы за месяц:", expenses);
console.log("Сумма для сбережений:", savings);
console.log("Чистый доход:", netIncome);
console.log("Оставшаяся сумма:", remaining);