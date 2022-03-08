Z, N = input().split()
Z=int(Z)
N=int(N)

R = []
T = []

for i in range(Z):
    x,y = input().split()
    x=int(x)
    y=int(y)
    R.append(x)
    T.append(y)

dp = [[0 for i in range(N+1)] for j in range(Z+1)]

for i in range(0, Z+1):
    for j in range(0, N+1):
        if i == 0 or j == 0:
            dp[i][j] = 0
        if(T[i-1] <= j):
            dp[i][j] = max(dp[i-1][j], R[i-1]+dp[i-1][j - T[i-1]])
        else:
            dp[i][j] = dp[i-1][j]

res = dp[Z][N]
ans = dp[Z][N]
minute = 0
#now count the minutes
n = N
for i in range(Z, 0, -1):
    if res <= 0:
        break
    if res == dp[i-1][n]:
        continue
    else:
        print(T[i-1])
        res = res - R[i-1]
        n = n - T[i-1]

print(ans, minute)

