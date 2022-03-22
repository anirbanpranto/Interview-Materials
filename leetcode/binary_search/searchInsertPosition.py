class Solution(object):
    def searchInsert(self, nums, target):
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
            if target > nums[hi]:
                return hi + 1 
            else:
                return hi

nums = [1,3,5,6]
target = 7
sol = Solution()
print(sol.searchInsert(nums, target=target))