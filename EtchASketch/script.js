window.onload = function() {
    let input = 16
    const container = document.querySelector("#container")
    for (let i = 0; i < input; i++) {
        const row = document.createElement("div")
        row.className = "row"
        for (let j = 0; j < input; j++) {
            const square = document.createElement("div")
            square.className = "square"
            row.appendChild(square)
        }
        container.appendChild(row)
    }
    console.log("Page loaded!");
};

