const containerEl = document.querySelector(".container");
const createGridBtn = document.querySelector(".create-grid");
const rainbowGridBtn = document.querySelector(".rainbow");
const blckWhiteGridBtn = document.querySelector(".blk-white");
const resetGridBtn = document.querySelector(".reset-grid");
const eraserBtn = document.querySelector(".eraser");
const darkenBtn = document.querySelector(".darken");
const inputEl = document.querySelector("input");
const inputMin = inputEl.getAttribute("min");
const inputMax = inputEl.getAttribute("max");

let colorVal = "eraser"; // Default color will be white
let count = 0;
let alphaValue = 0;

function increaseAlphaValue(el) {
    if (el.count === undefined) {
        el.count = 0;
        el.alphaValue = 0;
    }
    else if (count<10) {
        el.count++;
        el.alphaValue += 0.10;
        return el.alphaValue;
    }
}

// Create square grid with number of squares user inputted
function createGrid(num) {
    for (let i=1; i<=num*num; i++) {
        const divEl = document.createElement("div");
        divEl.style.width= `calc(100%/${num})`
        divEl.style.height= `calc(100%/${num})`
        containerEl.append(divEl);
        divEl.addEventListener("mouseover", (e) => {
            determineColorMode(e, colorVal, divEl)
        } )
    }
}

resetGridBtn.addEventListener("click", ()=> {
    let containerDivs = containerEl.querySelectorAll("div");
    containerDivs.forEach(containerDiv => containerDiv.style.background = "unset")
})

// Change divs' background colors depending on the color mode button clicked
function determineColorMode(event, colorMode, element) {
    if (colorMode ==="rainbow") {
        element.style.backgroundColor =`rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    }
    else if (colorMode ==="darken") {
        element.style.backgroundColor = `rgb(0,0,0,${increaseAlphaValue(event.target)})`;
    }
    else if (colorMode === "eraser") {
        element.style.backgroundColor = "rgb(255,255,255)";
    }
    else {
        element.style.backgroundColor = "rgb(0,0,0)";
    }
}

function validateMinMax() {
    if (parseInt(inputEl.value) < inputMin) {
        alert(`Value must be greater than or equal to ${inputMin}`);
        return false;
    } else if (parseInt(inputEl.value) > inputMax) {
        alert(`Value must be less than or equal to ${inputMax}`);
        return false;
    }
    else if (inputEl.value==="") {
        alert("Enter a numerical value");
        return false;
    }
    return true;
}


createGridBtn.addEventListener("click", ()=> {
    let numSquares = parseInt(inputEl.value);
    clearGrid();
    if (validateMinMax()) {
        createGrid(numSquares);
    }
})

// Set colorVal based on clicked button
rainbowGridBtn.onclick = () => colorVal = "rainbow";
blckWhiteGridBtn.onclick = () => colorVal = "bw";
eraserBtn.onclick = () => colorVal = "eraser";
darkenBtn.onclick = () => colorVal = "darken";


function clearGrid() {
    containerEl.textContent ="";
}

function randomColor() {
    // Get random number between 0 and 255)
    let color = (Math.floor(Math.random() * 256));
    return color;
}
