import {Model} from "./model.js";

export class lifebar extends Model{
	constructor(x,y){
		super("lifebar","",x,y,32,4);
		this.color="red";
		this.update=function(){
		}
	}
}