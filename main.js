const openSortingBtnElement = document.querySelector('#sortMenuBtn')
const nameInputElement = document.querySelector('#inputForm')
let studentAreaElement = document.querySelector('#studentArea')
let Gryffindors = []
let Ravenclaws = []
let Hufflepuffs = []
let Slytherins = []
let allStudents = []



openSortingBtnElement.addEventListener('click', function(e){
    e.preventDefault()
    nameInputElement.innerHTML = `
    <form>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Enter Your Name Below</label>
            <input type="text" class="form-control" id="userName" aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text"></div>
    <button type="button" class="btn btn-info" id="sortBtn">Sort Me!</button>
  </div>
  `
  const sortBtnElement = document.querySelector('#sortBtn')
  sortBtnElement.addEventListener('click', function(e){
    e.preventDefault()
    //Retrieves the name in the userInput box on the screen
    let userNameElement = document.getElementById("userName").value
    let newStudent = sortStudent(userNameElement)
    studentAreaElement.innerHTML +=  `    
    <div class="half-box" id="studentDisplay">
        <div id="studentContainer">Good Kids</div>
            <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${newStudent.name}</h5>
                <p class="card-text">${newStudent.house}</p>
                <a href="#" class="btn btn-primary">EXPEL</a>
            </div>
        </div>
        </div>`
    nameInputElement.innerHTML = ""
})
})



function sortStudent(student){
//Draws a number between 0 and 4 and sorts accordingly (0-0.9 Gryffindor, 1-1.9 Ravenclaw, 2-2.9 Hufflepuff, 3-3.9 Slytherin)
//Creates and returns a student Object that contains the student's name and House
//Then pushes this data to the allStudents array
    let sortingNumber = Math.random()*4
    let studentObj = { name: student }
    if(sortingNumber < 1){
        studentObj.house = "Gryffindor"
        allStudents.push(studentObj)
    }
    else if(sortingNumber < 2){
        studentObj.house = "Ravenclaw"
        allStudents.push(studentObj)
    }
    else if (sortingNumber < 3){
        studentObj.house = "Hufflepuff"
        allStudents.push(studentObj)
    }
    else if (sortingNumber < 4){
        studentObj.house = "Slytherin"
        allStudents.push(studentObj)
    }
    console.log(allStudents)
    return (studentObj)
}

