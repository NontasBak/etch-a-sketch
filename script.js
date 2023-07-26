let dimension = 16;
const body = document.querySelector("body");
let container = document.createElement("div");
container.classList.add("container");

createBoard(dimension);
body.appendChild(container);

const button = document.createElement("button");
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
button.textContent = "Change grid";
body.appendChild(button);



function createBoard(dimension) {
    for(let i = 0; i < dimension; i++)
    {   
        let rowContainer = document.createElement("div");

        for(let j = 0; j < dimension; j++)
        {
            let square = document.createElement("div")
            square.classList.add("square");

            square.addEventListener("mouseover", () => {
                square.classList.add("color-square")
            });

            rowContainer.appendChild(square);
        }

        container.appendChild(rowContainer);
    }
}


