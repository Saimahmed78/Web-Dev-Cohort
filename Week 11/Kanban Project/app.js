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


function updatetaskcount(triggeredElement,excludeFlying) {
    if (!triggeredElement) return; // Prevent errors if element is null
    const parent = triggeredElement.closest(".board"); // Find the closest parent board

    if (!parent) return; // If no board found, exit
  let siblings = [...parent.querySelectorAll(" .card")];

    if (excludeFlying) {
        siblings = siblings.filter(card => !card.classList.contains("flying"));
    }
    let taskcount = parent.querySelector(".taskcount"); // Find the counter inside the board
    if (taskcount) {
        taskcount.innerText = siblings.length; // Update the count
    }
}

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
        let time=document.createElement("p")
        const now= new Date()
        const hours= now.getHours()
        const minutes= now.getMinutes()
        const seconds= now.getSeconds()
        time.innerText= `Task created at ${hours}:${minutes}:${seconds}`
        let delbtn = document.createElement("button")
        delbtn.classList.add("delbtn")
        delbtn.innerText = "Delete"
        delbtn.addEventListener("click", () => {
            const parentBoard = taskdiv.closest(".board"); // Store parent before removing the task
            taskdiv.remove(); // Remove the task
            updatetaskcount(parentBoard); // Now update the task count using the board
        })

        let editbtn = document.createElement("button")
        editbtn.innerText = "Edit"
        editbtn.classList.add("editbtn")
        editbtn.addEventListener("click", () => {
            let newtask = prompt("Edit the task")
            taskp.innerText = newtask
            const now= new Date()
        const hours= now.getHours()
        const minutes= now.getMinutes()
        const seconds= now.getSeconds()
        time.innerText= `Task edited at ${hours}:${minutes}:${seconds}`
            
        })
        reqboard.appendChild(taskdiv)
        btns.appendChild(delbtn)
        btns.appendChild(editbtn)
        taskdiv.appendChild(taskp)
        taskdiv.appendChild(btns)
        taskdiv.appendChild(time)
        
       attachdragitems(taskdiv)

    }
}
taskbtns.forEach((btn) => 
    btn.addEventListener("click", (event) => {
    let board = event.target.closest(".board")?.id;
    event.stopPropagation()
    if (board) {
        addEventListeners(board)
        updatetaskcount(btn)
    }
}))
function attachdragitems(target){
target.addEventListener("dragstart", (event) => {    
     
    dragelement = event.target;
    const parentBoard = dragelement.closest(".board");

    if (parentBoard) {
        updatetaskcount(parentBoard, true); // Update BEFORE moving
    }

    dragelement.classList.add("flying");
})

target.addEventListener("dragend", (event) => {
    if (dragelement) {
        const newBoard = dragelement.closest(".board"); // Board after drop
        updatetaskcount(newBoard, false); // Update new board

        setTimeout(() => {
            document.querySelectorAll(".board").forEach(board => updatetaskcount(board));
        }, 0);
    }

    dragelement.classList.remove("flying");
    dragelement = null;
        
})
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
            // updatetaskcount(board); // Update task count
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
        console.log(newboard)
        event.stopPropagation()
    if (newboard1) {
        console.log(newboard)
        addEventListeners(newboard1)
        updatetaskcount(taskbtn)
        console.log(12);
        
    }
    })
    let delbtn=document.createElement("button")
    delbtn.innerText="Deltask";
    newcardboard.append(delbtn)
    delbtn.addEventListener("click",()=>{
        newcardboard.remove()
        updatetaskcount(delbtn)
    })

    let taskcountp=document.createElement("p")
        taskcountp.innerText=0
        taskcountp.classList.add("taskcount")
        newcardboard.appendChild(taskcountp)

    attachDragoverListener(newcardboard)
  
})