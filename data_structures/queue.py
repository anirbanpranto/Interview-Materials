class Node:
    def __init__(self, data = 0, next = None, prev=None):
        self.data = data
        self.next = next
        self.prev = prev

class Queue:
    def __init__(self):
        self.__head = Node()
        self.__last = Node()
        self.__head.next = self.__last
        self.__last.prev = self.__head

    def push_back(self, data):
        new_node = Node(data)
        new_node.prev = self.__last.prev
        new_node.next = self.__last
        self.__last.prev.next = new_node
        self.__last.prev = new_node

    def pop_front(self):
        data = None
        if self.__head.next != self.__last:
            self.__head.next.next.prev = self.__head
            data = self.__head.next.data
            self.__head.next = self.__head.next.next
        else:
            print("Queue is empty")
        return data

    def print_queue(self):
        start = self.__head.next
        while(start!=self.__last):
            print(start.data)
            start = start.next

q = Queue()
q.push_back(2)
q.push_back(3)
q.push_back(34)
q.print_queue()
f = q.pop_front()
print("Popped : ", f)
q.print_queue()