class Solution(object):
    def __init__(self):
        self.list = []
    def inorderTraversal(self, root):
        if root != None:
            self.inorderTraversal(root.left)
            self.list.append(root.val)
            self.inorderTraversal(root.right)
        return self.list