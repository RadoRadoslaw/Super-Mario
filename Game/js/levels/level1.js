// Eksportuje player żeby później sprawdzić kolizję z zombiakiem

import { bat } from "../entities/bat.js";
import { Player } from "../entities/player.js";
import { Zombie } from "../entities/zombie.js";
import { clear, sfx } from "../main.js";
import { Box } from "../objects/box.js";
import { points } from "../objects/points.js";
import { trawka } from "../objects/trawka.js";
import { background } from "../objects/background.js";



// Tutaj mamy funkcję start czyli po uruchomieniu gry co ma się stać
export function level1(x = 64) {
	for(let name in sfx){
		sfx[name].currentTime=0;
		sfx[name].pause();
	}
	sfx.level1.play();
	game.level = 1;
	clear();
	// Tworzymy obiekt Player z koordynatami x 64 i y 64
	game.objects.push(new background(100, 100));
	game.objects.push(new Player(x, 64)); // Tutaj dodajemy go do gry
	game.objects.push(new Box(256, 456, 94, 34, "images/box.png"));
	game.objects.push(new Box(456, 356, 44, 34, "images/box.png"));
	game.objects.push(new Box(856, 406, 94, 34, "images/box.png"));
	game.objects.push(new Box(1056, 306, 74, 34, "images/box.png"));

	for (let i = 0; i < 3; i+=1){
		game.objects.push(new Zombie(game.width+(i*48), 164));
	}

	game.objects.push(new trawka(0, game.height - 63));
	game.objects.push(new bat(game.width, 176));
	game.objects.push(new points(100, 20));

}

window.addEventListener('resize', function () {

});
var x = document.getElementById("myAudio"); 


