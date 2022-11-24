export const keyboard = {
	right: false,
	left: false,
	space: false,
	up: false,
	down: false,
	escape: false,
}

// Przycisk wciśnięty
window.addEventListener("keydown", function (event) {
	event.preventDefault();
	const key = event.key;
	if (key == "ArrowRight") {
		keyboard.right = true;
	}
	if (key == "ArrowLeft") {
		keyboard.left = true;
	}
	if (key == " ") {
		keyboard.space = true;
	}
	if (key == "ArrowUp") {
		keyboard.up = true;
	}
	if (key == "ArrowDown") {
		keyboard.down = true;
	}
	if (key == "Escape") {
		keyboard.escape = true;
	}
});

// Przycisk odpuszczono
window.addEventListener("keyup", function (event) {
	const key = event.key;
	if (key == "ArrowRight") {
		keyboard.right = false;
	}
	if (key == "ArrowLeft") {
		keyboard.left = false;
	}
	if (key == " ") {
		keyboard.space = false;
	}
	if (key == "ArrowUp") {
		keyboard.up = false;
	}
	if (key == "ArrowDown") {
		keyboard.down = false;
	}
	console.log(key);
	if (key == "Escape") {
		keyboard.escape = false;
	}
});