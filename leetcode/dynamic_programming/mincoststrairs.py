class Solution(object):
    def minCostClimbingStairsIter(self, cost):
        n = len(cost)
        ans = [1e9+1]*n
        ans[0] = cost[0]
        ans[1] = cost[1]
        for i in range(2, n):
            ans[i] = min(ans[i-1]+cost[i], ans[i-2]+cost[i])
        return min(ans[n-1],ans[n-2])
    
    def __init__(self):
        self.memo = {}
    def dp(self, n, cost):
        if n == len(cost):
            return 0
        if n > len(cost):
            return 1e9+7
        if n not in self.memo:
            if n == -1:
                self.memo[n] = min(self.dp(n+1, cost), self.dp(n+2, cost))
            else:
                self.memo[n] = min(self.dp(n+1, cost) + cost[n], self.dp(n+2, cost) + cost[n])
        return self.memo[n]

    def minCostClimbingStairs(self, cost):
        return self.dp(-1, cost)

sol = Solution()
cost = [10,15,20]
print(sol.minCostClimbingStairs(cost))
            