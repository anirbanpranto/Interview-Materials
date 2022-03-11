class Graph:
    def __init__(self, n):
        self.adjanceny_list = [[] for _ in range(n)] #n = nodes, m = edges
        self.nodes = n
        self.visited = [False for _ in range(n)]
    
    def add_edge(self, a, b):
        self.adjanceny_list[a].append(b)
        self.adjanceny_list[b].append(a)
    
    def add_edge_un(self, a, b):
        self.adjanceny_list[a].append(b)

    def dfs(self, v=0):
        if self.visited[v]:
            return
        self.visited[v] = True
        for u in self.adjanceny_list[v]:
            self.dfs(u)

    def count_connected(self):
        component = 0
        for i in range(self.nodes):
            if not self.visited[i]:
                self.dfs(i)
                component+=1
        return component

g = Graph(5)
g.add_edge(1, 2)
g.add_edge(2, 3)
g.add_edge(0, 1)
g.add_edge(0, 2)
print(g.count_connected())
