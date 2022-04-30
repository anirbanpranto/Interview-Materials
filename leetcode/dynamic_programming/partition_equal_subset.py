class Solution(object):
    def __init__(self):
        self.memo = {}
    def knapsack(self, index, nums, target):
        if target==0:
            return True
        if target < 0:
            return False
        if index >= len(nums):
            return False
        if target in self.memo:
            return self.memo[target]
        if target < nums[index]:
            self.memo[target] = self.knapsack(index+1, nums, target)
        else:
            self.memo[target] = (self.knapsack(index+1, nums, target-nums[index]) or self.knapsack(index+1, nums, target))
        return self.memo[target]
    
    def canPartition(self, nums):
        total_sum = sum(nums)
        if total_sum%2 == 1:
            return False
        else:
            target = total_sum//2
            return self.knapsack(0, nums, target)

nums = [1,6,7]
sol = Solution()
print(sol.canPartition(nums))
