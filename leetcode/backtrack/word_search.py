class Solution:
    def __init__(self):
        self.ok = False
    def exist(self, board, word):
        n = len(board)
        m = len(board[0])
        self.ok = False
        vis = [[False for _ in range(m)] for _ in range(n)]
        def backtrack(w, col, row):
            if(row == n or row < 0):
                return
            if(col == m or col < 0):
                return
            if(vis[row][col]):
                return
            if(board[row][col] != word[len(w)]):
                return
            w += board[row][col]
            vis[row][col] = True
            if(w == word):
                self.ok = True
                return
            backtrack(w, col+1, row)
            backtrack(w, col, row+1)
            backtrack(w, col-1, row)
            backtrack(w, col, row-1)
            vis[row][col] = False
        
        for i in range(n):
            for j in range(m):
                if(not self.ok and board[i][j] == word[0]):
                    backtrack("", j, i)
        return self.ok

sol = Solution()

print(sol.exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED"))