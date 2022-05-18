// This was slower
function maxProfitWhile(prices: number[]): number {
    let min = 0;
    let max = 1;
    let profit = 0;
    while(max < prices.length) {
        const newProfit = prices[max] - prices[min];
        if(prices[min] < prices[max]) {
            profit = newProfit > profit ? newProfit : profit;
        } else {
            min = max;
        }
        max += 1;
    }
    return profit;
}

// This was faster
function maxProfitFor(prices: number[]): number {
    let profit = 0;
    let min = 0;
    for(let i = 1; i < prices.length; i++) {
        const newProfit = prices[i] - prices[min];
        if(prices[min] < prices[i]) {
            profit = newProfit > profit ? newProfit : profit;
        } else {
            min = i;
        }
    }
    return profit;
};

