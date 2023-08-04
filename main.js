const openSortingBtnElement = document.querySelector('#sortMenuBtn')
const nameInputElement = document.querySelector('#inputForm')
let studentAreaElement = document.querySelector('#studentArea')
let allStudents = []
let uniqueStudentID = 0;



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
    
    //Sorts the new user into a house
    sortStudent(userNameElement)

    //Renders the full list of sorted students
    renderGoodStudentsList(allStudents)


    uniqueStudentID++
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
        studentObj.number = uniqueStudentID
        allStudents.push(studentObj)
    }
    else if(sortingNumber < 2){
        studentObj.house = "Ravenclaw"
        studentObj.number = uniqueStudentID
        allStudents.push(studentObj)
    }
    else if (sortingNumber < 3){
        studentObj.house = "Hufflepuff"
        studentObj.number = uniqueStudentID
        allStudents.push(studentObj)
    }
    else if (sortingNumber < 4){
        studentObj.house = "Slytherin"
        studentObj.number = uniqueStudentID
        allStudents.push(studentObj)
    }

    console.log(allStudents)
    return (studentObj)
}




function renderGoodStudentsList(array){
    box = ""
    for(const element of array){
        box +=             
        `<div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${element.name}</h5>
                <p class="card-text">${element.house}</p>
                <a href="#" class="btn btn-primary" id="expel-button-${element.number}">EXPEL</a>
            </div>
        </div>`
    }
    studentAreaElement.innerHTML = box
    for(let i = 0; i < array.length; i++){
        document.getElementById(`expel-button-${array[i].number}`).addEventListener('click', function(){
            console.log(`Expel Button Nmber ${array[i].number} Clicked!`)
        })
    }

}