class Solution(object):
    def setZeroes(self, matrix):
        m = len(matrix)
        n = len(matrix[0])
        col = set()
        for i in range(m):
            ok = False
            for j in range(n):
                if matrix[i][j] == 0:
                    col.add(j)
                    ok = True
            if ok:
                matrix[i] = [0 for _ in range(n)]
        
        for j in col:
            for i in range(m):
                matrix[i][j] = 0

        return matrix