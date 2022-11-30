import { level1 } from "./levels/level1.js";
import { level2 } from "./levels/level2.js";
import { level3 } from "./levels/level3.js";
import { level4 } from "./levels/level4.js";

export const sfx={
  level1: new Audio("./music/level1.mp3"),
  level2: new Audio("./music/level2.mp3"),
  level3: new Audio("./music/level3.mp3"),
  level4: new Audio("./music/level4.mp3"),
  jump: new Audio("./music/jump.mp3"),
  shot: new Audio("./music/shot.mp3"),
}
sfx.level1.loop=true;
sfx.level2.loop=true;
sfx.level3.loop=true;
sfx.level4.loop=true;

export const game = {
  objects: [],
  level: 0,
  width: 1292,
  height: 656,
  points: [],
};

function update() {
  const l = game.objects;
  for (let i = 0; i < l.length; i++) {
    const e = l[i];
    e.old.x = e.x;
    e.old.y = e.y;
    e.update();
    e.render();
    if (e.destroy) {
      e.element.remove();
      l.splice(i, 1);
      i--;
    }
  }

  requestAnimationFrame(update);
}
update();

export function clear() {
  const l = game.objects;
  for (let i = 0; i < l.length; i++) {
    const e = l[i];
    e.destroy = true;
  }
}

window.game = game;

//window.addEventListener("load", level3.call());

function resize() {
  let w = window.innerWidth / game.width;
  let h = window.innerHeight / game.height;

  if (w < h) {
    document.querySelector("#game").setAttribute(
      "style",
      `
		width:${game.width}px;
		height:${game.height}px;
		-webkit-transform:translate(-50%,-50%) scale(${window.innerWidth / game.width})
		`
    );
  } else {
    document.querySelector("#game").setAttribute(
      "style",
      `
		width:${game.width}px;
		height:${game.height}px;
		-webkit-transform:translate(-50%,-50%) scale(${
      window.innerHeight / game.height
    })
		`
    );
  }
}
resize();
window.addEventListener("resize", resize);


// FUnkcja pomocnicza
export function get(query){
  return document.querySelector(query);
}


document.querySelectorAll(".button a").forEach(function(element){
  element.addEventListener("click",function(event){
    if(document.location.hash!=""){
      event.preventDefault();
      document.location.hash="";
    }
  })
})

get(".newgame").addEventListener("click",function(){
  get(".bg").classList.add("hide");
  level1();
  
});

get("#LEVEL1").addEventListener("click",function(){
  get(".bg").classList.add("hide");
  level1();
});
get("#LEVEL2").addEventListener("click",function(){
  get(".bg").classList.add("hide");
  level2();
  
});
get("#LEVEL3").addEventListener("click",function(){
  get(".bg").classList.add("hide");
  level3();
  
});
get("#LEVEL4").addEventListener("click",function(){
  get(".bg").classList.add("hide");
  level4();
  
});
let first=localStorage.getItem("wynik")
if(first!=null){
  get("#first").innerHTML = first;
}


get("#SCORE").innerHTML="";
const wyniki=localStorage.getItem("wyniki");
if(wyniki!=null){
  game.points=JSON.parse(wyniki);
  game.points.forEach(function(value,i){
    get("#SCORE").innerHTML+=value;
  });
}