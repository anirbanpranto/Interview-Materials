class ListNode:
    def __init__(self, data=0, next=None, prev=None):
        self.data = data
        self.next = next
        self.prev = prev

#Deque is a Doubly Linked List
class Deque:
    __head = None
    __last = None
    def __init__(self):
        #initial nodes
        self.__head = ListNode()
        self.__last = ListNode()
        self.__head.next = self.__last
        self.__last.prev = self.__head

    def push_front(self, data=0):
        node = ListNode(data)
        node.next = self.__head.next
        node.prev = self.__head
        self.__head.next.prev = node
        self.__head.next = node

    def push_back(self, data=0):
        node = ListNode(data)
        node.prev = self.__last.prev
        node.next = self.__last
        self.__last.prev.next = node
        self.__last.prev = node

    def pop_back(self):
        # make sure that you actually need to delete something
        if self.__last.prev != self.__head:
            self.__last.prev.prev.next = self.__last
            self.__last.prev = self.__last.prev.prev

    def pop_front(self):
        if self.__head.next != self.__last:
            self.__head.next.next.prev = self.__head
            self.__head.next = self.__head.next.next
    
    def get_front(self):
        if self.__head.next != self.__last:
            return self.__head.next.data
        else:
            return None
    
    def get_back(self):
        if self.__last.prev != self.__head:
            return self.__last.prev.data
        else:
            return None

    def empty(self):
        return self.__head.next == self.__last

    def printList(self):
        temp = self.__head.next
        while temp != self.__last:
            print(temp.data)
            temp = temp.next

dq = Deque()
dq.push_back(3) #O(1)
dq.push_back(4) #O(1)
dq.push_front(2) #O(1)
dq.printList()
dq.pop_back()
dq.printList()
dq.pop_front()
dq.printList()
print(dq.get_front())
print(dq.get_back())
print(dq.empty())
dq.pop_back()
print(dq.empty())
print(dq.get_back())
