class Node:
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None

class BST:
    def __init__(self):
        self.root = None

    def insert(self, key):
        node = Node(key)
        if self.root==None:
            self.root = node
            return
        temp = self.root
        prev = None
        while temp:
            if temp.key > key:
                prev = temp
                temp = temp.left
            elif temp.key < key:
                prev = temp
                temp = temp.right
        if prev.key > key:
            prev.left = node
        else:
            prev.right = node

    def inorder(self, root=None, start=True):
        if not root and start:
            root = self.root
        if root:
            self.inorder(root.left, False)
            print(root.key)
            self.inorder(root.right, False)


bst = BST()
bst.insert(1)
bst.insert(12)
bst.insert(13)
bst.insert(2)
bst.insert(3)

bst.inorder()

