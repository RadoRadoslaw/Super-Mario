import { Player } from "../entities/player.js";
import { clear, sfx } from "../main.js";
import { Box } from "../objects/box.js";
import { dezert } from "../objects/dezert.js";
import { trawka } from "../objects/trawka.js";
import { soldier } from "../entities/soldier.js";
import { points } from "../objects/points.js";
import { underground } from "../objects/underground.js";
import { mushroom } from "../entities/mushroom.js";

export function level3 (){
	for(let name in sfx){
		sfx[name].currentTime=0;
		sfx[name].pause();
	}
	sfx.level3.play()
	game.level=3;
	clear();
	game.objects.push(new underground(0, 0));
	game.objects.push(new Player(81,520));
	game.objects.push(new Box(0,game.height - 60,1292 ,100,"brown"));
	game.objects.push(new mushroom(1000, game.height - 105, "images/mushroom.png"));
	game.objects.push(new points(100 ,20));
	game.objects.push(new Box(368,524, 93, 70, "", "", "box2"));
	game.objects.push(new Box(933,350, 100, 180, ""));
	game.objects.push(new Box(674,238, 100, 180, ""));
	game.objects.push(new Box(365,211, 100, 180, ""));
	game.objects.push(new Box(54,238, 100, 282, ""));
	game.objects.push(new Box(1140,421, 100, 182, ""));
	game.objects.push(new Box(0, 38,1292 ,100, "", "", ));	
}
