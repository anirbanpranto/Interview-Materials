class Solution:
    memo = {}
    def climbStairs_recurr(self, n):
        if n == 0:
            return 1
        if n == 1:
            return 1
        if n not in self.memo:
            self.memo[n] = self.climbStairs(n-1) + self.climbStairs(n-2)
        return self.memo[n]

    def climbStairs(self, n):
        steps = [0]*(n+1)
        steps[0] = 1
        steps[1] = 1
        for index in range(2, n+1):
            steps[index] += (steps[index-1] + steps[index-2])
        return steps[n]


sol = Solution()
print(sol.climbStairs(6))