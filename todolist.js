let todoInput= document.querySelector("input")
let todoButton = document.getElementById("button")
let filterTodo = document.querySelector(".filter-todo")
let listTodo= document.querySelector(".list-todo")

todoButton.addEventListener("click", addTodo)
listTodo.addEventListener("click", complateOrDleted)
filterTodo.addEventListener("click",fFilterTodo)

let todoDiv
function addTodo (event){
    event.preventDefault();
    todoDiv = document.createElement("div")
    todoDiv.classList.add("tododiv")
    const todoLi = document.createElement("li")
    todoLi.innerText= todoInput.value
    todoDiv.appendChild(todoLi)
    listTodo.appendChild(todoDiv)
    
    const trashButton = document.createElement("button")
    trashButton.innerHTML = "<i class='fas fa-trash'></i>";
    trashButton.classList.add("trash-button")
    
    const completed = document.createElement("button")
    completed.innerHTML = "<i class='fas fa-check'></i>";
    completed.classList.add("complatedButten")
    todoDiv.appendChild(completed)
    todoDiv.appendChild(trashButton)
   
    saveStorageTodo(todoInput.value)
   
    todoInput.value= ""





}
function complateOrDleted (event){

    let item = event.target.className
    const parrentE=event.target.parentElement

    if (item =="complatedButten"){
        parrentE.classList.toggle("complatedd")
        
    }
    if(item=="trash-button"){
        removeLocalStorge(parrentE)
        parrentE.remove()
    }
   
}
function fFilterTodo(event){
    let events=event.target.value
    
    let todo=listTodo.childNodes
    
    todo.forEach(function (done){
        switch (events){
            case "all":
              done.style.display = "flex"
            break;
            case "complated":
                if (done.classList.contains("complatedd")){
                    done.style.display="flex"
                }else {
                    done.style.display="none"
                }
            break;
            case "uncompalted":
                if(done.classList.contains("complatedd")){
                    done.style.display="none"
                }else {
                    done.style.display = "flex"
                }
            break

        }
    })

   
} 
function saveStorageTodo (todo){
   
    let todos
    if (localStorage.getItem("todos") === null){
        todos = []
    
    }else {
        todos = JSON.parse(localStorage.getItem("todos")) 

    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos) )
}
function removeLocalStorge(todo){
   
    let todos
    if (localStorage.getItem("todos") === null){
        todos = []
    
    }else {
        todos = JSON.parse(localStorage.getItem("todos")) 

    }
    const todoIndex= todo.children[0].innerText
    todos.splice(todos.indexOf (todoIndex),1)
  
    localStorage.setItem("todos", JSON.stringify(todos) )
}

