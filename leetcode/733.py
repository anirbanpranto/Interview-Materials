class Solution(object):
    def floodFill(self, image, sr, sc, color):
        n = len(image[0])
        m = len(image)
        visited = [[False for i in range(n)] for j in range(m)]
        def dfs(i, j, sym):
            if not ((i < n and i >= 0) and (j < m and j >= 0)):
                return
            if image[i][j] != sym:
                return
            if visited[i][j]:
                return
            visited[i][j] = True
            image[i][j] = color
            dfs(i+1, j, sym)
            dfs(i-1, j, sym)
            dfs(i, j+1, sym)
            dfs(i, j-1, sym)
            return
        dfs(sr, sc, image[sr][sc])
        return image

image = [[1,1,1],[1,1,0],[1,0,1]]
sc = 1
sr = 1
color = 2

sol = Solution()

ans = sol.floodFill(image, sr, sc, color)
print(ans)

