function maxSubArray(nums: number[]): number {
    let iterSum = 0;
    let cumuSum = 0;
    
    for(let i = 0; i < nums.length; i++) {
        iterSum = iterSum + nums[i] > nums[i] ? iterSum + nums[i] : nums[i];
        if(iterSum > cumuSum || i === 0) cumuSum = iterSum;
    }
    
    return cumuSum;
};