# declare an empty list
# ask for the user to input integers until he breaks out of it
# if the inputted number is already in the list, don't add it

numbers = []

while True:
 number = input("Integer: ")

 if not number:
  break
 
 if number not in numbers:
  numbers.append(number)

for number in numbers:
 print(number)
