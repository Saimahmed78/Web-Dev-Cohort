let btn=document.getElementById("toggleButton")
btn.addEventListener("click",()=>{
    let bulboff=document.getElementById("bulb")
    let p = document.getElementById("status")
    let originalColor = bulb.style.backgroundColor;
    if(btn.innerText.toLowerCase()=="turn on"){
    bulboff.style.backgroundColor="yellow"
    bulboff.style.boxShadow = "0px 0px 20px 10px yellow";
    p.innerText="Status : ON"
    btn.innerText="Turn OFF"
     console.log("button is On")
      document.body.style.backgroundColor="white"
        document.body.style.color="black"
        
    } 
    else 
    {
        bulboff.style.backgroundColor  = "grey"
        bulboff.style.boxShadow = "none";
        btn.innerText="Turn ON"
        p.innerText="Status : OFF"
        console.log("button is off")
        document.body.style.backgroundColor="black"
        document.body.style.color="white"
    } 
})