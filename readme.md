# Mentor and Student Assigning with Database


* Assign-Mentor API This documentation provides details about the Assign-Mentor API, implemented using Node.js and Express. This API allows you to manage mentors and students, assign mentors to students, change mentors, and retrieve mentor-student relationships.

### POST Create Mentor http://localhost:5001/api/mentor/create
![1](<Screenshot 2024-12-19 192419.png>)

### POST Create Student http://localhost:5001/api/student/create
![2](<Screenshot 2024-12-19 192433.png>)
### GET Display All Mentors https://assign-mentor-acmu.onrender.com/api/mentor/all-mentors
![3](<Screenshot 2024-12-19 192519.png>)
### GET Display all Students https://assign-mentor-acmu.onrender.com/api/student/all-students
![4](<Screenshot 2024-12-19 192533.png>)
### PUT Assign students to mentor http://localhost:5001/api/mentor/assign/67641755b87ab7ca8bec107c
![5](<Screenshot 2024-12-19 193051.png>)
### PUT Change mentor for one student http://localhost:5001/api/mentor/change-mentor/67641fcf6c604301ce054658
![6](<Screenshot 2024-12-19 193440.png>)
### GET Display students of the mentor http://localhost:5001/api/mentor/students/67641755b87ab7ca8bec107c
![7](<Screenshot 2024-12-19 193601.png>)
### GET Previous Mentor http://localhost:5001/api/mentor/previous-mentors/67641fcf6c604301ce054658
![8](<Screenshot 2024-12-19 193719.png>)