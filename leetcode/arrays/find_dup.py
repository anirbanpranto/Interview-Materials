class Solution(object):
    def findDuplicate(self, nums):
        exists = {}
        for num in nums:
            if(num in exists):
                return num
            else:
                exists[num] = True