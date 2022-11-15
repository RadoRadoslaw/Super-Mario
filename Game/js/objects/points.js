import { game } from "../main.js";
import {Model} from "../model.js";


export class points extends Model{
	constructor(x,y){
		super("points", x,y,10,15);
		this.wynik = 0
		this.update=function(){
			this.html = `Twoj wynik: ${this.wynik}`
		}
	}
}