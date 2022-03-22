class Solution:
    def __init__(self):
        self.memo = {}
    def dp(self, id, nums):
        if id >= len(nums):
            return 0
        if id not in self.memo:
            self.memo[id] = max(self.dp(id+1, nums), self.dp(id+2, nums) + nums[id])
        return self.memo[id]
    def rob(self, nums):
        return self.dp(0, nums)
    
    def rob_iter(self, nums):
        if len(nums)==1: return nums[0]
        dp = [0 for _ in range(len(nums))]
        dp[0] = nums[0]
        dp[1] = max(nums[0], nums[1])
        for i in range(2, len(nums)):
            dp[i] = max(dp[i-1], dp[i-2] + nums[i])
            #idea
            # at this current state, maximum we can get is eithe the previous index's max (means we didn't pick this house)
            # or this house + house i-2
        return max(dp[len(nums)-1], dp[len(nums)-2])


sol = Solution()
nums = [2,7,9,3,1]
print(sol.rob(nums))