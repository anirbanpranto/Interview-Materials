class Solution:
    def findDuplicates(self, nums):
        n = len(nums)
        duplicates = []
        for i in range(n):
            index = abs(nums[i]) - 1
            if(nums[index] < 0):
                duplicates.append(abs(nums[i]))
            else:
                nums[index] = nums[index]*-1
        return duplicates