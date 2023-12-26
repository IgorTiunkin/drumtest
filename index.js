
for (let drum of document.querySelectorAll(".drum")) {
    drum.addEventListener("click", function () {
        var buttonName = this.innerHTML;
        choosePlay(buttonName);
        markPressedButton(buttonName);
    });
}

document.addEventListener("keypress", (event) => {
    choosePlay(event.key);
    markPressedButton(event.key);
})


function choosePlay (buttonName) {
    switch (buttonName) {
        case "w" : new Audio("./sounds/tom-1.mp3").play();
            break;
        case "a" : new Audio("./sounds/tom-2.mp3").play();
            break;
        case "s" : new Audio("./sounds/tom-3.mp3").play();
            break;
        case "d" : new Audio("./sounds/tom-4.mp3").play();
            break;
        case "j" : new Audio("./sounds/crash.mp3").play();
            break;
        case "k" : new Audio("./sounds/kick-bass.mp3").play();
            break;
        case "l" : new Audio("./sounds/snare.mp3").play();
            break;
        default : console.log(buttonName);
    }
}

function markPressedButton(buttonName) {
    let pressedButton = document.querySelector("."+buttonName);
    pressedButton.classList.add("pressed");
    setTimeout(()=>{pressedButton.classList.remove("pressed");}, 100);
}

