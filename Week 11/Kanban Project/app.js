let taskbtns = document.querySelectorAll(".btn")
<<<<<<< Updated upstream
let boards = document.querySelectorAll  (".board")
let cards= document.querySelectorAll(".card")
let newboardbtn= document.querySelector("#newcardboard")
let boardscontainer=document.getElementById("container")
let btns=document.querySelectorAll(".delboard")

// Function to update count of tasks in a board
function updatetaskcount(triggeredElement,excludeFlying) {
=======
let boards = document.querySelectorAll(".board")
let cards = document.querySelectorAll(".card")
let newboardbtn = document.querySelector("#newcardboard")
let boardscontainer = document.getElementById("container")
let btns = document.querySelectorAll(".delboard")

// Function to update count of tasks in a board
function updatetaskcount(triggeredElement, excludeFlying) {
>>>>>>> Stashed changes
    if (!triggeredElement) return; // Prevent errors if element is null
    const parent = triggeredElement.closest(".board"); // Find the closest parent board

    if (!parent) return; // If no board found, exit
<<<<<<< Updated upstream
  let siblings = [...parent.querySelectorAll(".card")];
=======
    let siblings = [...parent.querySelectorAll(".card")];
>>>>>>> Stashed changes

    if (excludeFlying) {
        siblings = siblings.filter(card => !card.classList.contains("flying"));
    }
    let taskcount = parent.querySelector(".taskcount"); // Find the counter inside the board
    if (taskcount) {
        taskcount.innerText = siblings.length; // Update the count
    }
}
// Function to drag items form one board to another board
<<<<<<< Updated upstream
function attachdragitems(target){
    target.addEventListener("dragstart", (event) => {    
         
        dragelement = event.target;
        // const parentBoard = dragelement.closest(".board");
        
        setTimeout(() => {
            document.querySelectorAll(".board").forEach(board => updatetaskcount(board));
        }, 0);
    
        dragelement.classList.add("flying","hide");
    })
    
=======
function attachdragitems(target) {
    target.addEventListener("dragstart", (event) => {
        dragelement = event.target;
        const parentBoard = dragelement.closest(".board");
        setTimeout(() => {
            document.querySelectorAll(".board").forEach(board => updatetaskcount(board));
        }, 0);  // This will update the task count when card will be moved to next board
       

        dragelement.classList.add("flying");
    })

>>>>>>> Stashed changes
    target.addEventListener("dragend", (event) => {
        if (dragelement) {
            const newBoard = dragelement.closest(".board"); // Board after drop
            updatetaskcount(newBoard, false); // Update new board
<<<<<<< Updated upstream
    
            setTimeout(() => {
                document.querySelectorAll(".board").forEach(board => updatetaskcount(board));
            }, 0);
        }     
        dragelement.classList.remove("flying","hide");
        dragelement = null;        
    })
    }
// Function to attach drag item over listener board
function attachDragoverListener(board) {
    
=======

            setTimeout(() => {
                document.querySelectorAll(".board").forEach(board => updatetaskcount(board));
            }, 0);   
        }

        dragelement.classList.remove("flying");
        dragelement = null;

    })
}
// Function to attach drag item over listener board
function attachDragoverListener(board) {

>>>>>>> Stashed changes
    board.addEventListener("dragover", (event) => {
        event.preventDefault();
        if (dragelement) {
            board.appendChild(dragelement);
<<<<<<< Updated upstream
            
=======

>>>>>>> Stashed changes
        }
    });
}
// Function to attach drag item over board
function appenddragelements() {
<<<<<<< Updated upstream
    boards.forEach((board) => {
        attachDragoverListener(board);  
=======
    console.log(boards)
    boards.forEach((board) => {
        attachDragoverListener(board);
>>>>>>> Stashed changes
    });
}
//Function to create cards for static boards
function createcard(board) {
<<<<<<< Updated upstream
    let reqboard = document.querySelector(`#${board}`); 
    let task= prompt("Please Enter your task") 
=======
    let reqboard = document.querySelector(`#${board}`);
    let task = prompt("Please Enter your task")
>>>>>>> Stashed changes
    if (task) {
        let taskdiv = document.createElement("div")
        taskdiv.classList.add("card", "flying")
        taskdiv.setAttribute("draggable", "true")

        let taskp = document.createElement("p")
        taskp.innerText = task

        let btns = document.createElement("div")
        btns.classList.add("btns")
        let time = document.createElement("p")
        const now = new Date()
        const hours = now.getHours()
        const minutes = now.getMinutes()
        const seconds = now.getSeconds()
        time.innerText = `Task created at ${hours}:${minutes}:${seconds}`
        let delbtn = document.createElement("button")
        delbtn.classList.add("delbtn")
        delbtn.innerText = "Delete"
        delbtn.addEventListener("click", () => {
            const parentBoard = taskdiv.closest(".board"); // Store parent before removing the task
            taskdiv.remove(); // Remove the task
<<<<<<< Updated upstream
            
=======

>>>>>>> Stashed changes
            updatetaskcount(parentBoard); // Now update the task count using the board
        })

        let editbtn = document.createElement("button")
        editbtn.innerText = "Edit"
        editbtn.classList.add("editbtn")
        editbtn.addEventListener("click", () => {
            let newtask = prompt("Edit the task")
            taskp.innerText = newtask
<<<<<<< Updated upstream
            const now= new Date()
        const hours= now.getHours()
        const minutes= now.getMinutes()
        const seconds= now.getSeconds()
        time.innerText= `Task edited at ${hours}:${minutes}:${seconds}`
        
=======
            const now = new Date()
            const hours = now.getHours()
            const minutes = now.getMinutes()
            const seconds = now.getSeconds()
            time.innerText = `Task edited at ${hours}:${minutes}:${seconds}`

>>>>>>> Stashed changes
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
//Delete static boards
<<<<<<< Updated upstream
btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
=======
btns.forEach((btn) => {
    btn.addEventListener("click", () => {
>>>>>>> Stashed changes
        btn.parentElement.remove()
    })
})
// Create cards for static boards
<<<<<<< Updated upstream
taskbtns.forEach((btn) => 
    btn.addEventListener("click", (event) => {
    let board = event.target.closest(".board")?.id;
    event.stopPropagation()
    if (board) {
        createcard(board)
        updatetaskcount(btn)
    }
}))

cards.forEach((card)=> attachdragitems(card))
appenddragelements()


let newboard=0
newboardbtn.addEventListener("click",()=>{
    newboard++
    
    // Create card boards dynamically by clicking btn
    let newcard=document.createElement("div")
    newcard.classList.add("newcard","board")
    newcard.id=`newboard${newboard}`

    // Create p element for card
    let p=document.createElement("p")
    p.innerText=`newboard ${newboard}`
    p.classList.add("bold")

    // Create create task button for creating task
    let taskbtn=document.createElement("button")
    taskbtn.classList.add("btn")
    taskbtn.innerText="Create task"

    // Create delete task button for deleting task
    let delbtn=document.createElement("button")
    delbtn.innerText="Delete board";
    delbtn.classList.add("delboard")

    // create p element for displaying the taskcount
    let taskcountp=document.createElement("p")
    taskcountp.innerText=0
    taskcountp.classList.add("taskcount")
    
    // Add event listener function for create taskbtn
    taskbtn.addEventListener("click",(event)=>{
    let newboard1 = event.target.closest(".board")?.id;
    event.stopPropagation()
    if (newboard1) {
        createcard(newboard1)
        updatetaskcount(taskbtn)   
       }
    })
    
    // Add event listener function for delete taskbtn
    delbtn.addEventListener("click",()=>{
=======
taskbtns.forEach((btn) =>
    btn.addEventListener("click", (event) => {
        let board = event.target.closest(".board")?.id;
        event.stopPropagation()
        if (board) {
            createcard(board)
            updatetaskcount(btn)
        }
    }))

cards.forEach((card) => attachdragitems(card))
appenddragelements()


let newboard = 0
newboardbtn.addEventListener("click", () => {
    newboard++
    console.log("btn is clicked")

    // Create card boards dynamically by clicking btn
    let newcard = document.createElement("div")
    newcard.classList.add("newcard", "board")
    newcard.id = `newboard${newboard}`

    // Create p element for card
    let p = document.createElement("p")
    p.innerText = "New Board"

    // Create create task button for creating task
    let taskbtn = document.createElement("button")
    taskbtn.classList.add("btn")
    taskbtn.innerText = "Create board"

    // Create delete task button for deleting task
    let delbtn = document.createElement("button")
    delbtn.innerText = "Deltask";

    // create p element for displaying the taskcount
    let taskcountp = document.createElement("p")
    taskcountp.innerText = 0
    taskcountp.classList.add("taskcount")

    // Add event listener function for create taskbtn
    taskbtn.addEventListener("click", (event) => {
        let newboard1 = event.target.closest(".board")?.id;
        event.stopPropagation()
        if (newboard1) {
            createcard(newboard1)
            updatetaskcount(taskbtn)
        }
    })

    // Add event listener function for delete taskbtn
    delbtn.addEventListener("click", () => {
>>>>>>> Stashed changes
        newcard.remove()
        updatetaskcount(delbtn)
    })

    boardscontainer.appendChild(newcard)
    newcard.appendChild(p)
<<<<<<< Updated upstream
    newcard.appendChild(taskcountp)
    newcard.appendChild(taskbtn)
    newcard.append(delbtn)
    
    attachDragoverListener(newcard)
  
=======
    newcard.appendChild(taskbtn)
    newcard.append(delbtn)
    newcard.appendChild(taskcountp)
    attachDragoverListener(newcard)

>>>>>>> Stashed changes
})