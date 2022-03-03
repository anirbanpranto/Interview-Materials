class Node:
    def __init__(self, data=0, next = None):
        self.data = data
        self.next = next

class Stack:
    __head = None
    def __init__(self):
        self.__head = Node()

    #push
    def push(self, data=0):
        new_node = Node(data)
        new_node.next = self.__head.next
        self.__head.next = new_node

    #pop
    def pop(self):
        if self.__head.next != None:
            self.__head.next = self.__head.next.next

    #top
    def top(self):
        return self.__head.next.data

    #print
    def print_stack(self):
        temp = self.__head.next
        while temp != None:
            print(temp.data)
            temp = temp.next


st = Stack()
st.push(1)
st.push(2)
st.push(3)
st.push(4)
st.print_stack()
st.pop()
st.print_stack()
print(st.top())
