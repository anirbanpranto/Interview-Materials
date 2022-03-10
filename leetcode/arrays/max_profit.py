class Solution(object):
    def maxProfit(self, prices):
        smallest = int(1e9)
        ans = 0
        for price in prices:
            if price > smallest:
                ans = max(ans, price - smallest)
            smallest = min(smallest, price)
        return ans

# O(n) solution // pass
prices = [7,1,5,3,6,4]
sol = Solution()
print(sol.maxProfit(prices=prices))