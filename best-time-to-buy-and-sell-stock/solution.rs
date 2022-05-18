impl Solution {
    pub fn max_profit(prices: Vec<i32>) -> i32 {
        let mut min: usize = 0;
        let mut profit: i32 = 0;
        for i in 1..prices.len() {
            if(prices[min] < prices[i]) {
                profit = if(prices[i] - prices[min] > profit) { prices[i] - prices[min]} else { profit };
            } else {
                min = i;
            }
        }
        return profit;
    }
}