class Math:
    def GCD(self, a, b):
        if b == 0:
            return a
        else:
            return self.GCD(b, a%b)
    
    def LCM(self, a, b):
        return a // self.GCD(a,b) * b

m = Math()
print(m.GCD(3, 15))
print(m.LCM(3, 15))