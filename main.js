const openSortingBtnElement = document.querySelector('#sortMenuBtn')
const nameInputElement = document.querySelector('#inputForm')
let Gryffindors = []
let Ravenclaws = []
let Hufflepuffs = []
let Slytherins = []
let allStudents = [Gryffindors, Ravenclaws, Hufflepuffs, Slytherins]



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
  sortBtnElement.addEventListener('click', function(){
    let userNameElement = document.getElementById("userName").value
    let sortingNumber = Math.random()*4
    if (sortingNumber < 1){
        Gryffindors.push(userNameElement)
    }
    else if(sortingNumber < 2){
        Ravenclaws.push(userNameElement)
    }
    else if(sortingNumber < 3){
        Hufflepuffs.push(userNameElement)
    }
    else{
        Slytherins.push(userNameElement)
    }
    console.log(sortingNumber)
    console.log(allStudents) 
    //Next step: Create the array to add and render this entry to. Also need a sorting mechanism
})
})