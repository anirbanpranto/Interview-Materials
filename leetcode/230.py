class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def __init__(self):
        self.k = 0
        self.c = 0
        self.ans = None
    def inOrder(self, root):
        if not root:
            return
        self.inOrder(root.left)
        self.c += 1
        if(self.c == self.k):
           self.ans = root.val 
        self.inOrder(root.right)

    def kthSmallest(self, root, k):
        self.k = k
        self.c = 0
        if not root: 
            return None
        self.inOrder(root)
        return self.ans

def solve():
    root = TreeNode(3)
    root.left = TreeNode(1)
    root.right = TreeNode(4)
    #root.left.left = TreeNode(1)
    root.left.right = TreeNode(2)
    #root.right.left = TreeNode(6)
    #root.right.right = TreeNode(9)
    sol = Solution()
    k = 3
    beep = sol.kthSmallest(root, k)

solve()
