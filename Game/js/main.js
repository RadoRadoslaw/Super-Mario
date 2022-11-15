import { level1 } from "./levels/level1.js";
import { level2 } from "./levels/level2.js";
import { level3 } from "./levels/level3.js";
import { level4 } from "./levels/level4.js";

export const game = {
  objects: [],
  level: 0,
  width: 1292,
  height: 656,
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

function reset() {
  clear();
  start();
}
window.game = game;

window.addEventListener("load", level3.call());

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
