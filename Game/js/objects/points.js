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
				if (game.points.length >=4){
		
					game.points.splice(4,10)

				}
					
				game.points.push(this.wynik)
				game.points.sort(function(a,b){return b-a});
				localStorage.setItem("wyniki", JSON.stringify(game.points));

				get("#SCORE").innerHTML="";
				game.points.forEach(function(value,i){
					get("#SCORE").innerHTML+=`${i+1}. ${value} <br>`;
				});
			}

		}
	}
}