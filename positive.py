def main():
 n = get_positive_int("Positive integer: ")
 print(n)

def get_positive_int(prompt):
 while True:
  n = int(input(prompt))
  if n > 0:
   return n

if __name__ == '__main__':
 main()