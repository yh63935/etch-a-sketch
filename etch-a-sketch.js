const containerEl = document.querySelector(".container");
const createGridBtn = document.querySelector(".create-grid");
const rainbowGridBtn = document.querySelector(".rainbow");
const blckWhiteGridBtn = document.querySelector(".blk-white")
const inputEl = document.querySelector("input");
let colorVal = ""; // Default color mode is black and white mode
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
        divEl.innerText=i;
        divEl.style.width= `calc(100%/${num})`
        divEl.style.height= `calc(100%/${num})`
        containerEl.append(divEl);
        divEl.addEventListener("mouseover", (e) => {
            determineColorMode(e, colorVal, divEl)
        } )
    }
}

// Change divs' background colors depending on the color mode button clicked
function determineColorMode(event, colorMode, element) {
    if (colorMode ==="rainbow") {
        element.style.backgroundColor=`rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    }
    else {
        element.style.backgroundColor= `rgb(0,0,0,${increaseAlphaValue(event.target)})`;
    }
}

createGridBtn.addEventListener("click", ()=> {
    let numSquares = parseInt(inputEl.value);
    clearGrid();
    createGrid(numSquares);
})

rainbowGridBtn.onclick = () => colorVal = "rainbow"
blckWhiteGridBtn.onclick = () => colorVal = "bw"

function clearGrid() {
    containerEl.textContent ="";
}

function randomColor() {
    // Get random number between 0 and 255)
    let color = (Math.floor(Math.random() * 256));
    return color;
}
