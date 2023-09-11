const containerEl = document.querySelector(".container");

for (let i=1; i<=256; i++) {
    const divEl = document.createElement("div");
    divEl.innerText=i;
    containerEl.append(divEl);
}
