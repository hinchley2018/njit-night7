console.log("Script loaded")

//we can navigate the DOM tree with 
//let courseHeader = document.body.children[0]
//but this is fragile if someone changes the order of elements or changes the element to a different tag

//get the h2
//tag
//#id in css
//.class in css
//[attribute] in css
let courseHeader = document.querySelector("#main-header")

//have the ref set text content 
courseHeader.textContent ="NJIT Department of Computer Science"

let course1 = {
    department: "CSCE",
    courseName: "CSCE-121: Fundamentals of Programming",
    requiredClassYear: 1,
    available_spots: 0
}

let course2 = {
    department: "CSCE",
    courseName: "CSCE-310: Operating Systems",
    requiredClassYear: 3,
    available_spots: 3
}

let available_courses = [course1, course2]


//select all elements
let courseListItems = document.querySelectorAll(".course")
console.log("my course lis", courseListItems)

//green means there are available spots
for (let index = 0; index < courseListItems.length; index++) {
    courseListItems[index].style.backgroundColor = "green"

}