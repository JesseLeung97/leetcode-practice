//Brute Force
function twoSumBruteForce(nums: number[], target: number): number[] {
    let res: number[] = [];
    for(let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        for(let j = 0; j < nums.length; j++) {
            if(j === i) continue;
            if(nums[j] === diff) { 
                res = [i,j]; 
                return res; 
            }
        }
    }
    return res;
};

//Optimized Solution
function twoSumOptimized(nums: number[], target: number): number[] {
    let map = new Map<number, number>();
    for(let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if(map.has(diff)) {
            return [map.get(diff), i];
        }
        map.set(nums[i], i);
    }
    return [];
};