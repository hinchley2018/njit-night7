console.log("Script has loaded")

//What is a student?
/*
 studentName
 studentId
 department
 classYear
*/

let student1 = {
    studentName: 'Jon',
    studentId: 1234,
    department: "CSCE",
    classYear: 2018,
    gpa: 3.5
}

let student2 = {
    studentName: 'Noj',
    studentId: 2341,
    department: "CSCE",
    classYear: 2019,
    gpa: 2.7
}

//enrolled at this university
let enrolled_students = [student1, student2]

//how can i calculate the average gpa for the CSCE department???
let total_gpa = 0
//add all the values and divide by the number of students
//total_gpa = total_gpa + enrolled_students[0]
//total_gpa = total_gpa + enrolled_students[1]
console.log("students", enrolled_students)


for(let index = 0; index < enrolled_students.length; index++){
    //total_gpa = total_gpa + enrolled_students[index]
    let student = enrolled_students[index]
    console.log("index", index, "gpa of that student", student)
    total_gpa = total_gpa + student.gpa
}

let average_gpa = total_gpa / enrolled_students.length
console.log("Average gpa", average_gpa)
//What is a course?
/*
    department
    courseName
    requiredClassYear
*/

let course1 = {
    department: "CSCE",
    courseName: "CSCE-121: Fundamentals of Programming",
    requiredClassYear: 1
}

let course2 = {
    department: "CSCE",
    courseName: "CSCE-310: Operating Systems",
    requiredClassYear: 3
}

let available_courses = [course1, course2]

console.log("Available courses", available_courses)
//What is a grade in a course?
/*
    some numerical value that represents performance on an assignement
*/