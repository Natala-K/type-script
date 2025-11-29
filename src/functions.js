var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function calculateTotal(values) {
    return values.reduce(function (sum, current) { return sum + current; }, 0);
}
function calculateAverage(values) {
    if (values.length === 0) {
        return 0;
    }
    var sum = values.reduce(function (total, current) { return total + current; }, 0);
    return sum / values.length;
}
function formatCurrency(amount, symbol) {
    return "".concat(amount, " ").concat(symbol);
}
function getTopValues(values, count) {
    if (count <= 0 || values.length === 0) {
        return [];
    }
    // Сортируем по убыванию и берем первые count элементов
    var sorted = __spreadArray([], values, true).sort(function (a, b) { return b - a; });
    return sorted.slice(0, count);
}
function printSummary(values) {
    var count = values.length;
    var sum = values.reduce(function (total, current) { return total + current; }, 0);
    var average = count > 0 ? sum / count : 0;
    console.log("\u0412\u0441\u0435\u0433\u043E \u0437\u0430\u043F\u0438\u0441\u0435\u0439: ".concat(count));
    console.log("\u0421\u0443\u043C\u043C\u0430: ".concat(sum));
    console.log("\u0421\u0440\u0435\u0434\u043D\u0435\u0435: ".concat(average));
}
