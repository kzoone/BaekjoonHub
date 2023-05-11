a,b=input().split()
a_list = list(a)
b_list = list(b)
a_list.reverse()
b_list.reverse()
c=''.join(a_list)
d=''.join(b_list)
if c > d:
    print(c)
else:
    print(d)