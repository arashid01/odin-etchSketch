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

function drawGrid() {
	for (let i = 0; i < 256; i++) {
		const temp = document.createElement("div");
		temp.classList.add("grid");
		temp.setAttribute("style", "border: 2px solid black; width: 20px; height: 20px");
		container.appendChild(temp);
		temp.addEventListener("mouseover", () => {
			temp.style.backgroundColor = "black";
		});
	}
}

clearBtn.addEventListener("click", () => {
	const squares = document.querySelectorAll(".grid");
	squares.forEach(square => {
		square.style.backgroundColor = "white";
	});
});

drawGrid();