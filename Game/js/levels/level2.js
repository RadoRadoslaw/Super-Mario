import { Player } from "../entities/player.js";
import { clear, sfx } from "../main.js";
import { Box } from "../objects/box.js";
import { dezert } from "../objects/dezert.js";
import { trawka } from "../objects/trawka.js";
import { soldier } from "../entities/soldier.js";
import { points } from "../objects/points.js";

export function level2 (){
	for(let name in sfx){
		sfx[name].currentTime=0;
		sfx[name].pause();
	}
	sfx.level2.play()
	game.level=2;
	clear();
	game.objects.push(new dezert(0, 0));
	game.objects.push(new Box(970,490, 100, 100, "images/pipe.jpg","","pipe"));
	game.objects.push(new Player(2,game.height - 60-42));
	game.objects.push(new Box(0,game.height - 60,1292 ,100,""));
	game.objects.push(new soldier(game.width -30 , game.height - 105, "images/soldier.png"));
	game.objects.push(new points(100 ,20));
	game.objects.push(new Box(300,490, 200, 50, "images/box.png"));
	
}
