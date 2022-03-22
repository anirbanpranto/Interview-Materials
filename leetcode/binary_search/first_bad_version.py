# The isBadVersion API is already defined for you.
# @param version, an integer
# @return a bool
def isBadVersion(version):
    pass

class Solution(object):
    def firstBadVersion(self, n):
        hi = n
        lo = 0
        while hi > lo:
            mid = (hi+lo)//2
            if not isBadVersion(mid):
                lo = mid+1
            else:
                hi = mid
        return hi