const containerEl = document.querySelector(".container");
const buttonEl = document.querySelector("button");
let count = 0;
let alphaValue = 0;

function increaseAlphaValue(el) {
    if (el.count === undefined) {
        el.count = 0;
        el.alphaValue = 0;
    }
    else if (count<10) {
        el.count++;
        console.log(count);
        el.alphaValue += 0.10;
        console.log(alphaValue)
        return el.alphaValue;
    }
}


function createGrid(num) {
    for (let i=1; i<=num*num; i++) {
        const divEl = document.createElement("div");
        divEl.innerText=i;
        divEl.style.width= `calc(100%/${num})`
        divEl.style.height= `calc(100%/${num})`
        containerEl.append(divEl);
        divEl.addEventListener("mouseover", (event) => {
            divEl.style.backgroundColor=`rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
            divEl.style.backgroundColor= `rgb(0,0,0,${increaseAlphaValue(event.target)}`;
        } )
    }
}

buttonEl.addEventListener("click", ()=> {
    let numSquares = parseInt(prompt("Insert number of squares per grid"));
    createGrid(numSquares);     
    clearGrid();
})

function clearGrid() {
    containerEl.textContent ="";
}
function randomColor() {
    // Get random number between 0 and 255)
    let color = (Math.floor(Math.random() * 256));
    return color;
}

