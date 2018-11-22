from sys import argv

# python is excluded from the argument vector argv
# so argv[0] is the name of the file
if len(argv) == 2:
 print("Hello, " + argv[1])
else:
 print("Hello, world")

# argv is an array
# iterate over each string in argv
for s in argv:
 print(s)
