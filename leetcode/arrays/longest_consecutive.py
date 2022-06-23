class Solution:
    def longestConsecutive(self, nums):
        s = set(nums)
        ans = 0
        for x in s:
            if x-1 not in s:
                y = x+1
                while y in s:
                    y = y+1
                ans = max(ans, y-x)
        return ans

sol = Solution()

sol.longestConsecutive([0,3,7,2,5,8,4,6,0,1])