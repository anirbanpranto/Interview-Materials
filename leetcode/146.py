class Node:
    def __init__(self, key, val):
        self.next = None
        self.prev = None
        self.val = val
        self.key = key
    

class LRUCache(object):
    def __init__(self, capacity):
        """
        :type capacity: int
        """
        self.capacity = capacity
        self.keymap = dict()
        self.head = Node(0, 0)
        self.tail = Node(0, 0)
        self.head.next = self.tail
        self.tail.prev = self.head
        self.curr_size = 0

    def get(self, key):
        if key in self.keymap:
            node = self.keymap[key]
            self._update(node)
            return node.val
        return -1
        

    def put(self, key, value):
        if key in self.keymap:
            node = self.keymap[key]
            node.val = value
            self._update(node)
        else:
            node = Node(key, value)
            self._add(node)
        
    def _remove(self, node):
        new_node = self.keymap[node.key]
        self.keymap.pop(node.key)
        temp = new_node.prev
        temp.next = new_node.next
        new_node.next.prev = temp
        new_node.next = None
        new_node.prev = None

    def _update(self, node):
        self._remove(node)
        temp = self.head.next
        self.head.next = node
        node.prev = self.head
        node.next = temp
        temp.prev = node
        self.keymap[node.key] = node
        
    def _add(self, node):
        if self.curr_size == self.capacity:
            self._remove(self.tail.prev)
        else:
            self.curr_size += 1
        temp = self.head.next
        self.head.next = node
        node.prev = self.head
        node.next = temp
        temp.prev = node
        self.keymap[node.key] = node

# Your LRUCache object will be instantiated and called as such:
obj = LRUCache(1)
param_1 = obj.get(2)
obj.put(1, 2)
obj.put(1,1)
obj.put(2,3)
obj.put(3,3)
num = obj.get(3)
print(obj.keymap, num, obj.head)
