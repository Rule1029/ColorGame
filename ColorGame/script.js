var numSquare = 6;
var colors = [];
var target;
var square = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var mode = document.querySelectorAll(".mode");

init();

function init() {
    //mode listenner
    for (var i = 0; i < mode.length; i++) {
        mode[i].addEventListener("click", function () {
            mode[0].classList.remove("selected");
            mode[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquare = 3 : numSquare = 6;
            reset();
        });
    }
    //color listener
    for (var i = 0; i < square.length; i++) {
        square[i].addEventListener("click", function () {
            var clickedcolor = this.style.backgroundColor;
            if (clickedcolor === target) {
                message.textContent = "Correct!";
                changeColor();
                h1.style.backgroundColor = target;
                reset.textContent = "Try Again?";
            } else {
                this.style.backgroundColor = "#232323";
                message.textContent = "Try Again!";
            }
        });
    }
    reset();
}





function changeColor() {
    for(var i = 0; i < square.length; i++){
        square[i].style.backgroundColor = target;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateColors(num) {
    var colors = [];
    for(var i = 0; i < num; i++){
        colors.push(randomColor());
    }
    return colors;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function reset() {
    colors = generateColors(numSquare);
    target = pickColor();
    colorDisplay.textContent = target;
    h1.style.backgroundColor = "steelblue";
    reset.textContent = "New Game";
    message.textContent = "";
    for (var i = 0; i < square.length; i++) {
        if(colors[i]){
            square[i].style.display = "block";
            square[i].style.backgroundColor = colors[i];
        } else {
            square[i].style.display = "none";
        }
        
    }
}

resetButton.addEventListener("click", function() {
    reset();
});
