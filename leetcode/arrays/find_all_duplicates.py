class Solution:
    def findDuplicates(self, nums):
        duplicates = []
        exists = {}
        for num in nums:
            if num in exists:
                duplicates.append(num)
            else:
                exists[num] = True
        return duplicates