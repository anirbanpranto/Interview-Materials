class Solution(object):
    def search(self, nums, target):
        hi = len(nums)-1
        lo = 0
        while(hi > lo):
            mid = (hi+lo)//2
            if nums[mid] < target:
                lo = mid+1
            else:
                hi = mid
        if nums[hi] == target:
            return hi
        else:
            return -1

nums = [-1,0,3,5,9,12]
target = 2
sol = Solution()
print(sol.search(nums, target=target))