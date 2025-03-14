let taskbtns = document.querySelectorAll(".btn")
let boards = document.querySelectorAll  (".board")
let cards= document.querySelectorAll(".card")
let newcardboard= document.querySelector("#newcardboard")
let boardscontainer=document.getElementById("container")


let btns=document.querySelectorAll(".delboard")
btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        btn.parentElement.remove()
    })
})

function addEventListeners(board) {
    let reqboard = document.querySelector(`#${board}`); 
    let task = prompt("Please Enter your task")
    if (task) {
        let taskdiv = document.createElement("div")
        taskdiv.classList.add("card","flying")
        taskdiv.setAttribute("draggable", "true")

        let taskp = document.createElement("p")
        taskp.innerText = task

        let btns = document.createElement("div")
        btns.classList.add("btns")
        let delbtn = document.createElement("button")
        delbtn.classList.add("delbtn")
        delbtn.innerText = "Delete"
        delbtn.addEventListener("click", () => {
            taskdiv.remove()
        })

        let editbtn = document.createElement("button")
        editbtn.innerText = "Edit"
        editbtn.classList.add("editbtn")
        editbtn.addEventListener("click", () => {
            let newtask = prompt("Edit the task")
            taskp.innerText = newtask
        })
        reqboard.appendChild(taskdiv)
        btns.appendChild(delbtn)
        btns.appendChild(editbtn)
        taskdiv.appendChild(taskp)
        taskdiv.appendChild(btns)
        
        
       attachdragitems(taskdiv)
    }
}
taskbtns.forEach((btn) => 
    btn.addEventListener("click", (event) => {
    let board = event.target.closest(".board")?.id;
    event.stopPropagation()
    if (board) {
        addEventListeners(board)
    }
}))
function attachdragitems(target){
target.addEventListener("dragstart", (event) => {     
        dragelement=event.target
        dragelement.classList.add("flying")    
    })
target.addEventListener("dragend", (event) => {
        dragelement.classList.remove("flying") 
        dragelement = null; // clear the reference

        }
    )
}
cards.forEach((card)=> attachdragitems(card))

function appenddragelements() {
    boards.forEach((board) => {
        attachDragoverListener(board);
    });
}
function attachDragoverListener(board) {
    board.addEventListener("dragover", () => {
        if (dragelement) {
            board.appendChild(dragelement);
        }
    });
}
appenddragelements(boards)
let newboard=0
newcardboard.addEventListener("click",()=>{
    newboard++
    console.log("btn is clicked")
    
    let p=document.createElement("p")
    let newcardboard=document.createElement("div")
    
    newcardboard.classList.add("newcardboard","board")
    newcardboard.id=`newboard${newboard}`
    p.innerText="New Board"
    boardscontainer.appendChild(newcardboard)
    newcardboard.appendChild(p)
    
    let taskbtn=document.createElement("button")
    taskbtn.classList.add("btn")
    taskbtn.innerText="Create task"
    newcardboard.appendChild(taskbtn)
    taskbtn.addEventListener("click",(event)=>{
        let newboard1 = event.target.closest(".board")?.id;
        event.stopPropagation()
    if (newboard1) {
        addEventListeners(newboard1)
    }
    })
    let delbtn=document.createElement("button")
    delbtn.innerText="Deltask";
    newcardboard.append(delbtn)
    delbtn.addEventListener("click",()=>{
        newcardboard.remove()
    })
    
    attachDragoverListener(newcardboard)
  
})
