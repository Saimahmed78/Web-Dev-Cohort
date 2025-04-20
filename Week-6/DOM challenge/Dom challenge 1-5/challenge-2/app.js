let selectedbtn=document.getElementById("color-buttons")
let h1=document.getElementById("mainHeading")
selectedbtn.addEventListener("click",(event)=>{
    if (event.target.tagName === "BUTTON") {
        let buttonId = event.target.id; 
        handleButtonClick(buttonId);
    }})

function handleButtonClick(buttonId){
    switch (buttonId) {
        case "greenButton":
            h1.style.color="green"
            break;
        case "redButton":
            h1.style.color="red"
            break;
        case "purpleButton":
            h1.style.color="purple"
            break;
        case "blueButton":
            h1.style.color="blue"
            break;
    
        default:
            h1.style.color="black"
    }
}