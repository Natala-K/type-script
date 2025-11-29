function calculateTotal(values: number[]): number {
    return values.reduce((sum, current) => sum + current, 0);
}

function calculateAverage(values: number[]): number {
    if (values.length === 0) {
        return 0;
    }
    
    const sum = values.reduce((total, current) => total + current, 0);
    return sum / values.length;
}


function formatCurrency(amount: number, symbol: string): string {
    return `${amount} ${symbol}`;
}



function getTopValues(values: number[], count: number): number[] {
    if (count <= 0 || values.length === 0) {
        return [];
    }
    
    // Сортируем по убыванию и берем первые count элементов
    const sorted = [...values].sort((a, b) => b - a);
    return sorted.slice(0, count);
}


function printSummary(values: number[]): void {
    const count = values.length;
    const sum = values.reduce((total, current) => total + current, 0);
    const average = count > 0 ? sum / count : 0;
    
    console.log(`Всего записей: ${count}`);
    console.log(`Сумма: ${sum}`);
    console.log(`Среднее: ${average}`);
}


