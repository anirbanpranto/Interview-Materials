class ListNode:
    def __init__(self, data=0, next_node=None):
        self.data = data
        self.next = next_node

class LinkedList:
    __head = None
    def __init__(self):
        self.__head = ListNode()

    def insert(self, data=0):
        temp = self.__head
        while temp.next:
            temp = temp.next
        temp.next = ListNode(data=data)
    
    def delete_end(self):
        temp = self.__head
        while temp.next.next:
            temp = temp.next
        temp.next = temp.next.next

    def printList(self, data=0):
        temp = self.__head.next
        while temp:
            print(temp.data)
            temp = temp.next

def main():
    List = LinkedList()
    List.insert(2)
    List.insert(3)
    List.insert(4)
    List.printList()
    List.delete_end()
    List.printList()

if __name__ == "__main__":
    main()
