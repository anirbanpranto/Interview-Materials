class Solution(object):
    def tribonacci_iter(self, n):
        t = [None]*(n+1)
        if n == 0:
            return 0
        if n == 1:
            return 1
        if n == 2:
            return 1
        t[0] = 0
        t[1] = 1
        t[2] = 1
        for i in range(3,n+1):
            t[i] = t[i-1] + t[i-2] + t[i-3]
        return t[n]

    memo = {}
    def tribonacci(self, n):
        if n == 0:
            return 0
        if n == 1:
            return 1
        if n == 2:
            return 1
        if n not in self.memo:
            self.memo[n] = self.tribonacci(n-1) + self.tribonacci(n-2) + self.tribonacci(n-3)
        return self.memo[n]
        
        
sol = Solution()
print(sol.tribonacci_iter(10))
print(sol.tribonacci(10))