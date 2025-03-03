

document.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", () => {
        let displayId = input.id.replace("Input", "Display"); // Convert "nameInput" → "nameDisplay"
        let displayElement = document.getElementById(displayId);
        if (displayElement) { // this code will check if that display element is present or not
            displayElement.innerText = input.value;
        }
    });
});