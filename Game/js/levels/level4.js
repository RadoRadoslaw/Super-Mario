// import { Player } from "../entities/player.js";
import { clear, sfx } from "../main.js";
import { Box } from "../objects/box.js";
import { dezert } from "../objects/dezert.js";
import { trawka } from "../objects/trawka.js";
import { soldier } from "../entities/soldier.js";
import { points } from "../objects/points.js";
import { underground } from "../objects/underground.js";
import { mushroom } from "../entities/mushroom.js";
import { water } from "../objects/water.js";
import { watermario } from "../entities/watermario.js";

export function level4 (){
	for(let name in sfx){
		sfx[name].currentTime=0;
		sfx[name].pause();
	}
	sfx.level4.play();
	game.level=4;
	clear();
	game.objects.push(new water(81,520));
	game.objects.push(new watermario(294, 223, 62, 62, "", "watermario.gif"));
	game.objects.push(new Box(0,game.height -100 ,330 ,100,"", ""));
	game.objects.push(new Box(1089, 96, 98, 170, "", "", "pipewater"));
	game.objects.push(new Box(543, 560, 484, 93, "",""));
	game.objects.push(new Box(708,411 ,50, 147, "",""));
	game.objects.push(new Box(280 ,38, 98, 180, "",""));
	game.objects.push(new Box(112, 51, 1292, 70, "",""));
	game.objects.push(new Box(922 ,124, 53, 189, "",""));
	game.objects.push(new Box(0, 21 ,1292 ,50, "", "", ));	
	game.objects.push(new Box(439, 121 ,160 ,47, "", "", ));	
	game.objects.push(new Box(1180, 121 ,160 ,47, "", "", ));	
	game.objects.push(new Box(8,466 ,50, 85, "",""));
	game.objects.push(new Box(58,510 ,50, 50, "",""));
	game.objects.push(new Box(492 ,268 ,50, 50, "","","questionmark"));
	game.objects.push(new points(100 ,20));
	game.objects.push(new Box(1245 ,560, 53, 95, "",""));
}

