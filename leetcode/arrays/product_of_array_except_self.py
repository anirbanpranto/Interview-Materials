class Solution(object):
    def productExceptSelf(self, nums):
        #forward pass
        ans = [1]*len(nums)
        mul = 1
        for i in range(len(ans)):
            ans[i] *= mul
            mul *= nums[i]
        mul = 1
        #backword pass
        for i in range(len(ans)-1, -1, -1):
            ans[i] *= mul
            mul *= nums[i]
        return ans

#O(n) solution, memory O(n), without division operator
nums = [-1,1,0,-3,3]
sol = Solution()
print(sol.productExceptSelf(nums=nums))