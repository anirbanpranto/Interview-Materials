class Solution(object):
    def minCostClimbingStairs(self, cost):
        n = len(cost)
        ans = [1e9+1]*n
        ans[0] = cost[0]
        ans[1] = cost[1]
        for i in range(2, n):
            ans[i] = min(ans[i-1]+cost[i], ans[i-2]+cost[i])
        return min(ans[n-1],ans[n-2])


sol = Solution()
cost = [10, 15, 20]
print(sol.minCostClimbingStairs(cost))
            