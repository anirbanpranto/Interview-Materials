class Solution(object):
    def merge(self, nums1, m, nums2, n):
        pt = 0
        temp = None
        for i in range(m+n):
            if(i < m and nums2[pt] < nums1[i]):
                temp = nums1[i]
                nums1[i] = nums2[pt]
                pt+=1
            elif(i >= m and temp == None):
                nums1[i] = nums2[pt]
                pt+=1
            else:
                nums1[i] = temp
        return nums1

nums1 = [1,2,3,0,0,0]
m = 3
nums2 = [2,5,6]
n = 3
sol = Solution()
print(sol.merge(nums1, m, nums2, n))