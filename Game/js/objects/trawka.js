import { game } from "../main.js";
import { Model } from "../model.js";


export class trawka extends Model {
	constructor(x, y) {
		super("trawka", "images/trawa.jpeg", x, y, 1292, 163);
		this.size = "auto";
		this.h = 63
		this.update = function () {
		}
	}
}