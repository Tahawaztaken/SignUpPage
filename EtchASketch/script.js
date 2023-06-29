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
            square.setAttribute("tabindex", "0");
            row.appendChild(square)
        }
        container.appendChild(row)
    }
}



const sizeButton = document.querySelector("#sizeButton")

sizeButton.addEventListener("click", () => {
    populateGrid(slider.value)
})


const container = document.querySelector("#container");
let isMouseDown = false;

container.addEventListener("mousemove", (event) => {
  const selectedSquare = event.target;
  if (selectedSquare.classList.contains("square") && isMouseDown && event.button === 0) {
    selectedSquare.classList.add("clickedOn");
  }
});

container.addEventListener("mousedown", (event) => {
  const selectedSquare = event.target;
  if (selectedSquare.classList.contains("square") && event.button === 0) {
    selectedSquare.classList.add("clickedOn");
    isMouseDown = true;
  }
});

container.addEventListener("mouseup", (event) => {
  const selectedSquare = event.target;
  if (selectedSquare.classList.contains("square") && event.button === 0) {
    isMouseDown = false;
  }
});

container.addEventListener("contextmenu", (event) => {
    event.preventDefault(); // Prevent the context menu from showing up
    isMouseDown = false; // Set isMouseDown to false when the context menu is triggered
  });

container.addEventListener("mouseleave", () => {
  isMouseDown = false;
});

container.addEventListener("dragstart", () => {
  isMouseDown = false;
});
