class ListNode:
    def __init__(self, data=0, next=None, prev=None):
        self.data = data
        self.next = next
        self.prev = prev

class LinekedList:
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

    def printList(self):
        temp = self.__head.next
        while temp != self.__last:
            print(temp.data)
            temp = temp.next

L = LinekedList()
L.push_back(3) #O(1)
L.push_back(4) #O(1)
L.push_front(2) #O(1)
L.pop_front() #O(1)
L.printList()
