import { collision } from "./logic.js";
import { game } from "./main.js";

export class Model {
	constructor(className, image, x, y, w, h) {
		const div = document.createElement("div");
		div.className = className;
		document.querySelector("#game").append(div);
		this.element = div;
		this.className = className;
		this.image = image || "";
		this.old={
			x:x,
			y:y
		}
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.color = "";
		this.rotate = 1;
		this.size = '100% 100%';
		this.destroy = false;
		this.html = "";
		this.collide = function (className="",result=function(){}) {
			const l = game.objects;
			for (let i = 0; i < l.length; i++) {
				let x = false;
				let y= false;
				const e = l[i];
				if (e.className == className) {
					var obj1={x:this.x,y:this.old.y,w:this.w,h:this.h};
					var obj2={x:e.x,y:e.old.y,w:e.w,h:e.h};

					if (collision(obj1, obj2)) {
						x=true;
					}

					var obj1={x:this.old.x,y:this.y,w:this.w,h:this.h};
					var obj2={x:e.old.x,y:e.y,w:e.w,h:e.h};

					if(collision(obj1,obj2)){
						y=true;
					}

					if(x || y){
						result.apply(this,[e,x,y]);
					}
				}
			}
			return result;
		}
		
		this.get = function (className) {
			let result = false;
			const l = game.objects;
			for (let i = 0; i < l.length; i++) {
				const e = l[i];
				if (e.className == className) {
					result = e;
				}
			}
			return result;
		}
		this.update = function () {

		}
		this.render = function () {
			this.element.setAttribute("style", `
				position:absolute;
				left:${this.x}px;
				top:${this.y}px;
				width:${this.w}px;
				height:${this.h}px;
				background-image:url(${this.image});
				background-color:${this.color};
				background-size:${this.size};
				transform:scale(${this.rotate},1);
			`);
			this.element.innerHTML = this.html;
		}
	}
}