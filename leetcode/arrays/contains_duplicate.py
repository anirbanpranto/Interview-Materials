class Solution(object):
    def containsDuplicate(self, nums):
        dict = {}
        for num in nums:
            if num in dict:
                return True
            else:
                dict[num] = True
        return False

# O(n)
sol = Solution()
nums = [1,2,3,4]
print(sol.containsDuplicate(nums=nums))