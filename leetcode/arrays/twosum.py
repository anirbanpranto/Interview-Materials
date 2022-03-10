class Solution(object):
    def twoSum(self, nums, target):
        dict = {}
        for i in range(len(nums)):
            if (target-nums[i]) in dict:
                return [i, dict[target-nums[i]]]
            else:
                dict[nums[i]] = i

# O(1), O(n) -> O(n), O(n^3)
# set, get, k in d -> O(1) -> O(n^3)
nums = [2,7,11,15]
target = 9
sol = Solution()
print(sol.twoSum(nums=nums, target=target))