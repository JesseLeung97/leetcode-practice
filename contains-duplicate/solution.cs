// Optimized Solution
public class Solution {
    public bool ContainsDuplicate(int[] nums) {
        Dictionary<int, int> dict = new Dictionary<int, int>();
        for(int i = 0; i < nums.Length; i++) {
            try {
                dict.Add(nums[i], i);
            }
            catch (ArgumentException) {
                return true;
            }
        }
        return false;
    }
}