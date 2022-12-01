import { lifebar } from "../lifebar.js";
import { game } from "../main.js";
import { Model } from "../model.js";
import { Bullet } from "../objects/bullet.js";


export class soldier extends Model {
	constructor(x, y, image) {
		super("soldier", "images/soldier.png", x, y, 72, 72);
		const that = this
		this.life = 100;
		this.timer = 60 * 2
		this.stop = false
		let bar = new lifebar(this.x, this.y);
		game.objects.push(bar);
		this.update = function () {
			bar.x = this.x
			bar.y = this.y - 10
			bar.w = 32 / 100 * this.life

			// this.x -= 1;

			this.y += 4
			if (this.stop == false) {
				this.x -= 1
			}

			this.timer -= 1;
			// co to?

			if (this.timer <= 0) {
				this.timer = 60 * 4;
				this.stop = true;
			}
			if (this.timer == 60 * 3) {
				game.objects.push(new Bullet(this.x, this.y + 6, -this.rotate, ["player"]));
			}
			if (this.timer == 60 * 2) {
				this.stop = false
			}

			if (this.get("player").x > this.x) {
				this.rotate = -1
			} else if 
				(this.get("player").x < this.x) {
					this.rotate = 1
				}
			

				if (this.x == 0) {
					this.destroy = true
					bar.destroy = true
				}


				this.collide("box", function (box, x, y) {

					if (y) {
						this.y = this.old.y;
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
