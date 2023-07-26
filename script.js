let dimension = 16;
const bigContainer = document.querySelector(".big-container");
let container = document.createElement("div");
container.classList.add("container");

createBoard(dimension);
bigContainer.appendChild(container);

const button = document.querySelector("button");
button.style.margin = "auto";
button.style.width = "150px"
button.style.height = "100px"
button.style.fontSize = "25px"
button.textContent = "Change grid";

button.addEventListener("click", () => {
    dimension = prompt("Enter the number of rows/columns.")
    if(dimension < 2 || dimension > 100)
    {
        console.error("Invalid input");
        alert("Input should be between 2 and 100");
        return;
    }
    container.textContent = "";
    createBoard(dimension);
})


function createBoard(dimension) {
    for(let i = 0; i < dimension; i++)
    {   
        let rowContainer = document.createElement("div");

        for(let j = 0; j < dimension; j++)
        {
            let square = document.createElement("div");
            size = 500 / dimension;
            square.style.cssText = `width: ${size}px; height: ${size}px;`;
            square.classList.add("square");

            square.addEventListener("mouseover", () => {
                square.classList.add("color-square")
            });

            rowContainer.appendChild(square);
        }

        container.appendChild(rowContainer);
    }
}


