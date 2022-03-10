class Solution(object):
    def maxProduct(self, nums):
        ans = int(-1e9+7)
        product = 1
        for i in range(len(nums)):
            product *= nums[i]
            print(product)
            ans = max(ans, product)
            if product == 0:
                product = 1
        return ans

# O(n) solution // pass
nums = [3,-1,4]
sol = Solution()
print(sol.maxProduct(nums=nums))