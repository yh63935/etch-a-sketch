const containerEl = document.querySelector(".container");
const buttonEl = document.querySelector("button");

function createGrid(num) {
    for (let i=1; i<=num*num; i++) {
        const divEl = document.createElement("div");
        divEl.innerText=i;
        divEl.style.width= `calc(100%/${num})`
        divEl.style.height= `calc(100%/${num})`
        containerEl.append(divEl);
        divEl.addEventListener("mouseover", () => {
            divEl.style.backgroundColor = "green";
        } )
    }
}

buttonEl.addEventListener("click", ()=> {
    let numSquares = parseInt(prompt("Insert number of squares per grid"));
    createGrid(numSquares);     
})

