import { Bullet } from "../objects/bullet.js";
import { keyboard } from "../keyboard.js";
import { level2 } from "../levels/level2.js";
import { game } from "../main.js";
import { Model } from "../model.js";
import { level1 } from "../levels/level1.js";
import { level3 } from "../levels/level3.js";
import { level4 } from "../levels/level4.js";

export class Player extends Model {
	constructor(x, y) {
		// Pierwszy parametr to klasa w HTML'u, drugi to adres do zdjęcia, trzeci parametr to oś X, czwarty to oś Y, piąty to szerokość, szósty to wysokość
		// super(className,image,x,y,width,height)
		super("player", "images/player.png", x, y, 42, 42);
		const that = this;
		this.canShot = 0;
		this.canJump = false;
		this.speedY = 0;
		this.stop = false;
		this.life = 1;
		this.update = function () {
			// >>>>>
			

			this.timer -= 1;

			if (this.timer == 60 * 3) {
				game.objects.push(new Zombie(this.x, this.y + 6,));
			}

			if (this.life <= 0) {
				this.destroy = true;
			}
			if(this.destroy==true){
				this.destroy=false;
				this.image="images/dead.jpg"
				this.w =264;
				this.h =264;
				this.stop = true;
			}
			if (this.stop == false) {
				if (keyboard.left) {
					this.rotate = -1;
					this.x -= 4;
				}
				if (keyboard.right) {
					this.rotate = 1;
					this.x += 4;
				}
				if (keyboard.up == true && this.canJump == true) {
					this.speedY = -12;
					this.canJump = false;
				}
			}

			if (this.x < 0) {
				this.x = 0;
			}

			if (this.x >= game.width - this.w && game.level != 2 && game.level !=3) {
				level2();
			}
			if (this.x <= 1 && game.level != 1) {
				level1(game.width - this.w - 1);
			}
			
			if (this.x >= game.width - this.w && game.level != 1 && game.level !=3) {
				this.x = game.width -this.w
			}

			if (this.x >= game.width - 90 && game.level != 1 && game.level !=2) {
				this.x = game.width - 90
			}
			if (this.x <= 41 && game.level != 1 && game.level !=2) {
				this.x = 41
			}

			// if (this.x >= window.innerWidth - this.w) {
			// 	this.x = window.innerWidth - this.w
			// }


			if (keyboard.space == true && this.canShot <= 0) {
				game.objects.push(new Bullet(this.x , this.y +=12, this.rotate));
				keyboard.space = false
				this.canShot = 60;
			}
			if (this.canShot > 0) {
				this.canShot -= 1;
			}


			if (this.canJump == false) {
				this.speedY *= .99;
				this.y += this.speedY;
				this.y += 6
			}

			that.canJump = false;

			let trawka = this.get("trawka");
			if (this.y >= trawka.y - this.h) {
				this.y = trawka.y - this.h
				this.canJump = true;
			}

			this.collide("box", function (box, x, y) {
				if (x) {
					this.x = this.old.x;
				}
				if (y) {
					this.y = this.old.y;
					this.canJump = true;
					if(box.y+box.h<this.y){
						this.speedY+=2;
						this.canJump=false;
					}
				}
			});

			



			this.collide("pipe", function (pipe, x, y) {
				if (x) {
					this.x = this.old.x;
				}
				if (y) {
					this.y = this.old.y;
					this.canJump = true;
				}
	
				if (keyboard.down == true ){
				level3();
				keyboard.down=false;
				}
			});
			this.collide("box2", function (box2, x, y) {
				if (x) {
					this.x = this.old.x;
				}
				if (y) {
					this.y = this.old.y;
					this.canJump = true;
				}
	
				if (keyboard.down == true ){
				level4();
				keyboard.down=false;
				}
			});
		}

	}
}