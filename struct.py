students = []

for i in range(3):
 name = input("Name: ")
 lastName = input("Last name: ")

 student = {"name": name, "lastName": lastName}
 students.append(student)

for student in students:
 print(student['name'] + " is a " + student['lastName'])