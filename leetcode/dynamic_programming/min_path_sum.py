from functools import lru_cache
class Solution:
    def minPathSum(self, grid) -> int:
        n = len(grid)
        m = len(grid[0])
        @lru_cache(None)
        def dp(i, j):
            if(i==(n-1) and j==(m-1)):
                return grid[i][j]
            if(i >= n):
                return 2000000
            if(j >= m):
                return 2000000
            return min(dp(i+1, j) + grid[i][j], dp(i, j+1) + grid[i][j])
        return dp(0, 0)