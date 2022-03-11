from collections import deque

class Graph:
    def __init__(self, n):
        self.adjanceny_list = [[] for _ in range(n)] #n = nodes, m = edges
        self.nodes = n
        self.used = [False for _ in range(n)]
        self.q = deque()
        self.d =  [-1 for _ in range(n)]
        self.p =  [-1 for _ in range(n)]
    
    def add_edge(self, a, b):
        self.adjanceny_list[a].append(b)
        self.adjanceny_list[b].append(a)
    
    def add_edge_un(self, a, b):
        self.adjanceny_list[a].append(b)

    def bfs(self, s=0):
        self.q.append(s)
        self.used[s] = True
        self.p[s] = -1
        self.d[s] = 0
        while len(self.q) > 0:
            v = self.q.popleft()
            for u in self.adjanceny_list[v]:
                if not self.used[u]:
                    self.used[u] = True
                    self.q.append(u)
                    self.d[u] = self.d[v]+1
                    self.p[u] = v
        return [self.d, self.p]

g = Graph(5)
g.add_edge(1, 2)
g.add_edge(2, 3)
g.add_edge(0, 1)
g.add_edge(0, 2)
print(g.bfs())
