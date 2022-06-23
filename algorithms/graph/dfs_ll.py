class Node:
    def __init__(self, data=0):
        self.adjacent = []
        self.data = data

class Graph:
    def __init__(self):
        self.nodes = {}
        self.visited = {}
    
    def add_edge(self, a, b):
        self.nodes[a].adjacent.append(b)
        self.nodes[b].adjacent.append(a)

    def add_egde_dir(self, a, b):
        self.nodes[a].adjacent.append(b)

    def dfs(self, v):
        if v in self.visited:
            return
        self.visited[v] = True
        print(self.nodes[v].data)
        for u in self.nodes[v].adjacent:
            self.dfs(u)

g = Graph()
m = int(input("Number of edges : "))
nodes = []
for i in range(m):
    a,b = input().split()
    if a not in g.nodes :
        g.nodes[a] = Node(a)
        nodes.append(a)
    if b not in g.nodes :
        g.nodes[b] = Node(b)
        nodes.append(b)
    g.add_edge(a, b)

for vertex in nodes:
    if vertex not in g.visited:
        g.dfs(vertex)
