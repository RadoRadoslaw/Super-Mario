import { lifebar } from "../lifebar.js";
import { game } from "../main.js";
import { Model } from "../model.js";
import { Bullet } from "../objects/bullet.js";


export class mushroom extends Model {
	constructor(x, y, image) {
		super("mushroom", "images/mushroom.png", x, y, 42, 42);
		const that = this
		this.life = 100;
		this.kierunek = "left";
		
		this.update = function () {
			// this.x -= 1;
			if (this.kierunek == "left"){
			this.x -= 4
			} else {
				this.x +=4
			}

			this.y += 4

			this.collide("box", function (box, x, y) {

				if (y) {
					this.y = this.old.y;
				}
				if(x){
					if (this.kierunek =="left") {
						this.kierunek = "right"
					}else {this.kierunek =="right"
						this.kierunek = "left"
					}
				}
			
			});
			this.collide("box2", function (box2, x, y) {

				if (y) {
					this.y = this.old.y;
				}
				if(x){
					if (this.kierunek =="left") {
						this.kierunek = "right"
					}else {this.kierunek =="right"
						this.kierunek = "left"
					}
				}
			
			});
			this.collide("player", function (player, x, y) {

				if (y) {
					this.destroy = true
				}
				if(x) {
					player.destroy = true
					this.destroy = false
				}
				});




		}
	}
}
