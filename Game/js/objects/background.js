import { game } from "../main.js";
import {Model} from "../model.js";
import { trawka } from "./trawka.js";


export class background extends Model{
	constructor(x,y){
		super("sky","images/sky.jpeg",x,y,100,150);
		this.size = "100% 100%";
		this.x = 0
		this.y = 0
		this.w = 1292
		this.h = game.height  ;
	}
}