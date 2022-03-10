class Solution(object):
    def maxSubArray(self, nums):
        ans = int(-1e9+7)
        sum = 0
        for i in range(len(nums)):
            sum += nums[i]
            ans = max(ans, sum)
            if sum < 0:
                sum = 0
        return ans

# O(n) solution // pass
nums = [5,4,-1,7,8]
sol = Solution()
print(sol.maxSubArray(nums=nums))