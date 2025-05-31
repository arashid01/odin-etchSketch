const container = document.querySelector(".container");
const btnContainer = document.createElement("div");
btnContainer.classList.add("btnContainer");
document.body.appendChild(btnContainer);
document.body.insertBefore(btnContainer, container);
const clearBtn = document.createElement("button");
clearBtn.textContent = "Clear";
btnContainer.appendChild(clearBtn);
clearBtn.classList.add("btn");
const resizeBtn = document.createElement("button");
resizeBtn.textContent = "Resize Grid";
btnContainer.appendChild(resizeBtn);
resizeBtn.classList.add("btn");

let size = 16;
let gridSize = size * size;

function drawGrid(gridSize, size) {
	container.style.width = `${size * 20}px`;
	let num = container.style.height = `${size * 20}px`;
	let isDrawing = false;
	document.addEventListener("mousedown", () => isDrawing = true);
	document.addEventListener("mouseup", () => isDrawing = false);
	function randomNum(num) {
		return (Math.floor(Math.random() * num));
	}

	for (let i = 0; i < gridSize; i++) {
		const temp = document.createElement("div");
		temp.classList.add("grid");
		temp.setAttribute("style", "background-color: white; border: 2px solid black; width: 20px; height: 20px");
		container.appendChild(temp);
		temp.addEventListener("mouseover", () => {
			if (isDrawing) {
				temp.style.backgroundColor = `rgb(${randomNum(256)}, ${randomNum(256)}, ${randomNum(256)})`;
			}
		});
	}
}

clearBtn.addEventListener("click", () => {
	const squares = document.querySelectorAll(".grid");
	squares.forEach(square => {
		square.style.backgroundColor = "white";
	});
});

drawGrid(gridSize, size);

resizeBtn.addEventListener("click", () => {
	const newSize = prompt("Enter the size of the new grid (up to 100): ");
	const oldGrid = document.querySelectorAll(".grid");
	oldGrid.forEach(box => {
		box.remove();
	});
	const newGridSize = newSize * newSize;
	drawGrid(newGridSize, newSize);
});