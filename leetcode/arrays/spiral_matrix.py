import math

class Solution(object):
    def spiralOrder(self, matrix):
        ans = []
        n = len(matrix)
        m = len(matrix[0])
        visited = [[False for i in range(m)] for i in range(n)]

        for i in range(math.ceil(n/2)):
            for j in range(i, m-i):
                if not visited[i][j]:
                    ans.append(matrix[i][j])
                    visited[i][j] = True
            for j in range(i+1, n-i):
                if(m-i-1 >= 0) and not visited[j][m-i-1]:
                    ans.append(matrix[j][m-i-1])
                    visited[j][m-i-1] = True
            for j in range(m-i-2, i-1, -1):
                if not visited[n-i-1][j]:
                    ans.append(matrix[n-i-1][j])
                    visited[n-i-1][j] = True
            for j in range(n-i-2, i, -1):
                if j < n and i < m and not visited[j][i]:
                    ans.append(matrix[j][i])
                    visited[j][i] = True
        return ans

                
sol = Solution()
print(sol.spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))