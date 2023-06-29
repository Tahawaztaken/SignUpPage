window.onload = function() {
    populateGrid(16)
    console.log("Page loaded!");
};


const slider = document.querySelector("#myRange")
const sliderP = document.querySelector(".controls p")

slider.addEventListener("input", () => {
    sliderP.textContent = slider.value
})

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function populateGrid(size) {
    const container = document.querySelector("#container")
    removeAllChildNodes(container)
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div")
        row.className = "row"
        for (let j = 0; j < size; j++) {
            const square = document.createElement("div")
            square.className = "square"
            row.appendChild(square)
        }
        container.appendChild(row)
    }
}



const sizeButton = document.querySelector("#sizeButton")

sizeButton.addEventListener("click", () => {
    populateGrid(slider.value)
})

