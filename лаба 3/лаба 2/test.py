x_first = 1.82
x_second = 2.82
y = 18
z = -3.29
n = 30
step = (x_second-x_first)/n

while True:
    W_x = (y-x_first)*((y-(z/(y-x_first)))/(1+(y-x_first)**2))
    x_first += step
    print(W_x)
    if x_first >= x_second:
        break