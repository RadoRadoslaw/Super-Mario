import { Model } from "../model.js";
import { keyboard } from "../keyboard.js";

export class Bullet extends Model {
	constructor(x, y, rotate,kill=["zombie","soldier","bat"]) {
		super("bullet", "images/bullet.jpg", x, y, 12, 12);
		this.stop = false;
		this.kill=kill;
		const that = this;
		this.update = function () {

			// >>>>
			this.kill.forEach(function(kill){
				that.collide(kill, function (target,x,y) {
					that.destroy = true
					target.life -= 40
				});
			});
			
			

			if (rotate == 1) {
				this.rotate = -1;
				this.x += 6
			}
			if (rotate == -1) {
				this.rotate = 1
				this.x -= 6
			}
		}
		// >>>>
	}
}