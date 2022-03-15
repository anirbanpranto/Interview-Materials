class Solution(object):
    def __init__(self) -> None:
        self.memo = {}
    def fib(self, n):
        if n == 0:
            return 0
        if n == 1:
            return 1
        if n not in self.memo:
            self.memo[n] = self.fib(n-1) + self.fib(n-2)
        return self.memo[n]
    
    def fib_iter(self, n):
        f = [0]*(n+1)
        if n == 0:
            return 0
        if n == 1:
            return 1
        f[0] = 0
        f[1] = 1
        for i in range(2,n+1):
            f[i] = f[i-1] + f[i-2]
        return f[n]

sol = Solution()
print(sol.fib(10))
print(sol.fib_iter(10))
    
        