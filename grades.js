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
//console.log("students", enrolled_students)


for(let index = 0; index < enrolled_students.length; index++){
    //total_gpa = total_gpa + enrolled_students[index]
    let student = enrolled_students[index]
    // console.log("index", index, "gpa of that student", student)
    total_gpa = total_gpa + student.gpa
}

let average_gpa = total_gpa / enrolled_students.length
//console.log("Average gpa", average_gpa)
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

//console.log("Available courses", available_courses)
//What is a grade in a course?
/*
    some numerical value that represents performance on an assignement for a student
*/

let assignments = [
    {
        activityId: 570372,
        name: "Dog DOM manipulation",
        url: "https://digitalskills.instructure.com/courses/4684/modules/items/570372",
        grades: {
            "1234": {
                submissionUrl: "https://github.com/hinchley2018/mysolution",
                grade: 100
            },
            "2341": {
                submissionUrl: "https://github.com/noj2018/mysolution",
                grade: 70
            }
        },
        averageGrade: 85
    },
    {
        activityId: 570357,
        name: "Portfolio",
        url: "https://digitalskills.instructure.com/courses/4684/modules/items/570357",
        grades: {
            "1234": {
                submissionUrl: "https://github.com/hinchley2018/mysolution",
                grade: 62
            },
            "2341": {
                submissionUrl: "https://github.com/noj2018/mysolution",
                grade: 104
            }
        },
        averageGrade: 64
    }
]

console.log("Assignments", assignments)

//show how to do it once

    // //create list element by giving a li tag as input
    // let li = document.createElement("li")
    // li.textContent = assignments[0].name
    // //creates an empty li tag
    // console.log(li)

    // //it doesn't add by default so append it to the container
    // let assignmentsUl = document.querySelector("#assignments-list")
    // console.log("before append", assignmentsUl)

    // assignmentsUl.append(li)
    // console.log("after append", assignmentsUl)

//only ref the assignments UL once 
let assignmentsUl = document.querySelector("#assignments-list")

//do it for real go through all assignments
for(let index = 0; index < assignments.length; index ++){
    console.log("index", index, assignments[index])

    //create list element by giving a li tag as input
    let assignmentLi = document.createElement("li")
    let avgGrade = assignments[index].averageGrade

    //create a course info h3
    let assignmentInfo = document.createElement("h3")
    assignmentInfo.textContent = assignments[index].name + ` Avg Grade: ${avgGrade}`
    assignmentLi.append(assignmentInfo)

    //create a button
    let deleteAssignmentButton = document.createElement("button")
    deleteAssignmentButton.textContent = "Delete Assignment"

    //register a click listener to delete the assignment li if clicked
    deleteAssignmentButton.addEventListener('click', function (event) {
        console.log("my event", event)

        //who was this event's target aka who was clicked / interacted with
        removeAssignmentByReference(assignmentLi)
    })

    assignmentLi.append(deleteAssignmentButton)

    //set id to have the activity id
    assignmentLi.setAttribute("id", assignments[index].activityId)

    //change the bg color based on grade 
    //if failing (below 70) red
    
    if(avgGrade < 70){
        //we can apply styles manually but it is messy, hard to maintain, etc
        // assignmentLi.style.backgroundColor = "red"

        //set the attribute of this tag to failing
        assignmentLi.setAttribute("class", "failing")
       
    }
    // green if passing above 70
    else{
        // assignmentLi.style.backgroundColor = "green"

        //set the attribute of this tag to failing
        assignmentLi.setAttribute("class", "passing")
    }
    

    //creates an empty li tag
    // console.log(assignmentLi)

    //it doesn't add by default so append it to the container
    
    // console.log("before append", assignmentsUl)

    assignmentsUl.append(assignmentLi)
    // console.log("after append", assignmentsUl)
}

//lets remove the last assignment
let lastAssignemnt = document.querySelector("ul").children[1]
// console.log("last assignment we removed", lastAssignemnt)

//this is the expected way to do it but that's not the right way
// assignmentsUl.remove(lastAssignemnt) //don't do this or you delete all list items

//this is the right way
// lastAssignemnt.remove()


//when funciton is called it deletes the element we passed by index
function removeAssignmentByReference(assignmentToRemove){
    assignmentToRemove.remove()
    window.alert("Removed assignment from gradebook")
}
// can do the same thing
//removeAssignmentByIndex(1)