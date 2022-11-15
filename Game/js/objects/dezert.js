import { game } from "../main.js";
import {Model} from "../model.js";


export class dezert extends Model{
	constructor(x,y){
		super("dezert","images/dezert.jpg",x,y,1292, 150);
		this.size = "100% 100%";
		this.x = 0
		this.y = 0
		this.w = 1292
		this.h = game.height ;
	}
}