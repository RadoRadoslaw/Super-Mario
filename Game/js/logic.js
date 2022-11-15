export function collision(obj1,obj2) {
	if(obj1.x<obj2.x+obj2.w &&
		obj1.x+obj1.w>obj2.x &&
		obj1.y<obj2.y+obj2.h &&
		obj1.h+obj1.y>obj2.y){
		return true;
	} else {
		return false;
	}
}

export function random(min, max) {
	return Math.random() * (max - min) + min;
}
  