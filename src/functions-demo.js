// Тестовые данные и вызовы функций
console.log("=== ТЕСТИРОВАНИЕ calculateTotal ===");
console.log("calculateTotal([1000, 2000, 3000]):", calculateTotal([1000, 2000, 3000]));
console.log("calculateTotal([]):", calculateTotal([]));
console.log("calculateTotal([-100, 200, -50]):", calculateTotal([-100, 200, -50]));

console.log("\n=== ТЕСТИРОВАНИЕ calculateAverage ===");
console.log("calculateAverage([1000, 2000, 3000]):", calculateAverage([1000, 2000, 3000]));
console.log("calculateAverage([]):", calculateAverage([]));
console.log("calculateAverage([10, 20, 30, 40]):", calculateAverage([10, 20, 30, 40]));

console.log("\n=== ТЕСТИРОВАНИЕ formatCurrency ===");
console.log("formatCurrency(1000, '₽'):", formatCurrency(1000, '₽'));
console.log("formatCurrency(2500.50, '$'):", formatCurrency(2500.50, '$'));

console.log("\n=== ТЕСТИРОВАНИЕ getTopValues ===");
console.log("getTopValues([100, 500, 200, 800], 2):", getTopValues([100, 500, 200, 800], 2));
console.log("getTopValues([10, 20, 30], 5):", getTopValues([10, 20, 30], 5));

console.log("\n=== ТЕСТИРОВАНИЕ printSummary ===");
console.log("printSummary([100, 500, 1000, 2000, 800]):");
printSummary([100, 500, 1000, 2000, 800]);