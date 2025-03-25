
// Get DOM elements
let inputDiv=document.getElementById("markdown-input")
let clearBtn=document.getElementById("clear-btn")
let outputDiv=document.getElementById("markdown-output")

marked.setOptions({ breaks: true });


//  Update the preview of Markdown in realtime
const updatepreview=()=>{
    const markdownText = inputDiv.value
    outputDiv.innerHTML= marked.parse(markdownText);
}

// Add Event Listeners
inputDiv.addEventListener("input",updatepreview)
clearBtnearbtn.addEventListener("click",()=>{
    inputDiv.value=""
    outputDiv.innerHTML=""
})

// Initialize the preview
updatepreview()

