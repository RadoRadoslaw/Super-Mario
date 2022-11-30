import { keyboard } from "../keyboard.js";
import { clear, game, get } from "../main.js";
import { Model } from "../model.js";


export class points extends Model {
	constructor(x, y) {
		super("points", x, y, 10, 15);
		this.wynik = 0;
		this.update = function () {
			this.html = `Twoj wynik: ${this.wynik}`


			if (keyboard.escape == true) {
				clear();
				get(".bg").classList.remove("hide");
				game.points.push(this.wynik)
				localStorage.setItem("wyniki", JSON.stringify(game.points));

				get("#SCORE").innerHTML="";
				game.points.forEach(function(value,i){
					get("#SCORE").innerHTML+=value;
				});
			}

		}
	}
}