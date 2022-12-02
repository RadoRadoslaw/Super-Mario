import { Model } from "../model.js";
import { game } from "../main.js";
import { random } from "../logic.js";
import { lifebar } from "../lifebar.js";

export class bat extends Model {
	constructor(x, y) {
		super("bat", "images/bat.jpg", x, y, 82, 82);
		this.life=100;
		let bar = new lifebar(this.x, this.y);
			game.objects.push(bar);
		bar.x = 62
		this.update = function () {
			let cordX=random( -3, -3);
			let cordY=random(-6,6);
			this.x += cordX;
			this.y += cordY;
			

			if (this.life <= 0) {
				this.destroy = true
				bar.destroy = true
				let wynik = this.get("points")
				wynik.wynik += 1
			}

			// this.collide("bat", function (bat) {
			// 	this.destroy = true
			// 	bat.life -= 40
			// });

			// let player = this.collide("player");
			// if (player) {
			// 	player.image="images/dead.jpg"
			// 	player.w=264;
			// 	player.h=264;
			// 	player.stop = true
		
			// }

			
			// this.collide("player",function (player, x, y) {
			// 	player.image="images/dead.jpg"
			// 	player.w=264;
			// 	player.h=264;
			// 	player.stop = true
			// });
				

			if (this.x >= window.innerWidth) {
				this.x = -2 ;
			}
			if (this.y >= window.innerHeight) {
				this.y = -2 ;
			}
			if (this.x <= 0) {
				this.x = window.innerWidth;
			}
			if (this.y <= 0) {
				this.y = 0;
			}
				bar.x = this.x
				bar.y = this.y - 10
				bar.w = 62 / 100 * this.life
			if (this.life <= 0) {
				this.destroy = true
				bar.destroy = true
			}
			
				
	
		}
	}

}
