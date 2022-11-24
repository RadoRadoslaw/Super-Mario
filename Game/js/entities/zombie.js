import { lifebar } from "../lifebar.js";
import { game } from "../main.js";
import { Model } from "../model.js";

export class Zombie extends Model {
	constructor(x, y, image) {
		super("zombie", image || "images/zombie.png", x, y, 52, 52);
		const that = this
		this.life = 100;
		this.timer = 60 * 8
		let bar = new lifebar(this.x, this.y);
		game.objects.push(bar);
		this.update = function () {
			bar.x = this.x
			bar.y = this.y - 10
			bar.w = 32 / 100 * this.life
			this.timer -= 1;
			this.x -= 1;

			if (this.timer == 60 * 6) {
				//game.objects.push(new Zombie(game.width, 464));
			}

			this.collide("player",function(player, x, y){
				player.image = "images/mariozombie.jpg";
			
			});
			
			this.y += 4

			this.collide("box",function(box,x,y){
				
				if(y){
					this.y=this.old.y;
				}
			});

			

			let trawka = this.get("trawka");
			if (this.y >= trawka.y - this.h) {
				this.y = trawka.y - this.h
			}
			if (this.life <= 0) {
				this.destroy = true
				bar.destroy = true
				let wynik = this.get("points")
				wynik.wynik += 1
			}
		
			this.collide("player", function (player) {
				this.destroy = true
				bar.destroy = true
			});
			
		
		}
	}
}
