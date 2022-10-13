class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None


class BuildTree:
    def __init__(self, arr):
        self.arr = arr
        self.root = self._build()
    
    def _build(self):
        queue = []
        root = Node(self.arr[0])
        queue.append(root)
        i = 1
        while queue: 
            head = queue.pop(0)
            if(head == None):
                continue
            if(i+1 < len(self.arr)):
                if self.arr[i]:
                    head.left = Node(self.arr[i])
                    queue.append(head.left)
                else:
                    head.left = None
                    queue.append(head.left)
                i+=1
            if(i < len(self.arr)):                
                if self.arr[i]:
                    head.right = Node(self.arr[i])
                    queue.append(head.right)
                else:
                    head.right = None
                    queue.append(head.right)
                i+=1
        return root

    def _print_tree(self, root):
        if not root:
            print(root)
            return
        print(root.val)
        if root.left or root.right:
            self._print_tree(root.left)
            self._print_tree(root.right)


# [1, 2, 3, None, 3, None, 3]

#test code, building binary tree from array definition
tree = BuildTree([1,2,3,None,4,None,5])
tree._print_tree(tree.root)

