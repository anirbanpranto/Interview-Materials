class Node:
    def __init__(self,key):
        self.left = None
        self.right = None
        self.val = key

def inorder(root):
    if root:
        inorder(root.left)
        print(root.val)
        inorder(root.right)

def preorder(root):
    if root:
        print(root.val)
        preorder(root.left)
        preorder(root.right)

def postorder(root):
    if root:
        postorder(root.left)
        postorder(root.right)
        print(root.val)

def inorder_iter(root):
    stack = []
    curr = root
    while curr or len(stack) > 0:
        while curr:
            stack.append(curr)
            curr = curr.left
        curr = stack.pop()
        print(curr.val)
        curr = curr.right


root = Node(1)
root.left = Node(2)
root.right = Node(3)
l1 = root.left
l1.left = Node(4)
l1.right = Node(3)

inorder(root)
inorder_iter(root)
