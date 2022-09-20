class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def invertTree(self, root):
        if not root: 
            return None
        self.invertTree(root.left)
        self.invertTree(root.right)
        temp = root.right
        root.right = root.left
        root.left = temp
        return root;

def printTree(root):
    if not root:
        return
    print(root.val)
    printTree(root.left)
    printTree(root.right)

def solve():
    root = TreeNode(4)
    root.left = TreeNode(2)
    root.right = TreeNode(7)
    root.left.left = TreeNode(1)
    root.left.right = TreeNode(3)
    root.right.left = TreeNode(6)
    root.right.right = TreeNode(9)
    sol = Solution()
    beep = sol.invertTree(root)
    printTree(beep)

solve()
