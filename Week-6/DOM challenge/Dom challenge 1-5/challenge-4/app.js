const input = document.getElementById("taskInput")
const addbtn = document.getElementById("addButton")
const taskscontainer = document.getElementById("taskList")
let taskscount = document.getElementById("totalTasks")
let comptask = document.getElementById("completedTasks")

addbtn.addEventListener("click", () => {
    let task = input.value;

    // Li creation and insertion
    const li = document.createElement("li")
    li.classList.add("task-item", "task-text")
    li.append(task)

    // Checkbox creation and insertion
    let checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.classList.add("complete-checkbox")
    li.append(checkbox)

    // Del btn creation and insertion
    let btn = document.createElement("button")
    btn.innerText = "delete"
    btn.classList.add("delete-button")
    li.append(btn)

    // Append list into ul
    taskscontainer.append(li)
    
    // Delete a task
    btn.addEventListener("click", () => {
        li.remove()

            })
    // Update taskcount
     counttask=()=>{
      let length = taskscontainer.children.length
      taskscount.innerText = `Total tasks: ${length}`
      
     }

    // Update completed task count
     countdeltask= () => {
        let checkedCount = taskscontainer.querySelectorAll('input[type="checkbox"]:checked').length;
        comptask.innerText = `Completed task :${checkedCount}`
        }
      
    //  Managing both task count
    taskscontainer.addEventListener("click", (event) => {
        if(event.target.matches(".complete-checkbox ,.delete-button")){
            countdeltask();
            counttask();
            
        }
        
} )     
    
        counttask();
        countdeltask();
    input.value = ""
})
