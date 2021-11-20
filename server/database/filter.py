with open('top20.sql') as sql_file:
    tomb = sql_file.readlines()

for i in tomb[:1]:
    i = i.split(',')
    for k in range(len(i)):
        print(k, i[k])