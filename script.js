

const bodyEl = document.querySelector("body");
const buttons = document.querySelectorAll(".btn");
const buttonText = document.querySelector(".btn-txt");
function colorSwitch(button) {
    for (const currentButton of buttons) {
        currentButton.classList.remove("selected");
    }
    button.classList.add("selected");
    
    bodyEl.classList.remove("blue");
    bodyEl.classList.remove("purple");
    bodyEl.classList.remove("green");
    
    if (button.classList.contains("blue-btn")) {
        bodyEl.classList.add("blue");
        buttonText.textContent ="Selected color: Blue";
    } else if (button.classList.contains("purple-btn")) {
        bodyEl.classList.add("purple");
        buttonText.textContent ="Selected color: Purple";
    } else {
        bodyEl.classList.add("green");
        buttonText.textContent ="Selected color: Green";
    }
}

for (const button of buttons) {
    button.addEventListener("click", () => {
        colorSwitch(button);
    });
}