width = 16;
height = 16;
let boxes = new Array(height).fill(null).map(() => new Array(width).fill(null));
const container = document.querySelector(".container");

let rowContainer = [];

for(let i = 0; i < width; i++)
{   
    rowContainer[i] = document.createElement("div");
    for(let j = 0; j < height; j++)
    {
        boxes[i][j] = document.createElement("div");
        boxes[i][j].classList.add("box");

        boxes[i][j].addEventListener("mouseover", () => {
            boxes[i][j].classList.add("color-box")
        });

        rowContainer[i].appendChild(boxes[i][j]);
        container.appendChild(rowContainer[i]);
    }
}

//console.table(boxes);
console.log(container);





