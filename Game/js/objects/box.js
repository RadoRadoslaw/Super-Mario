import {Model} from "../model.js";

export class Box extends Model{
	constructor(x,y,w,h,image,color="",name = "box"){
		super(name,image,x,y,w,h);
		this.color=color;
		this.update=function(){
			// >>>>

			// >>>>
		}
	}
}