function setup() {
  createCanvas(windowWidth, windowHeight);
}
var n = 0;
var n2 = 0;
var n3 = 0;

function draw() {
  background(220);

  let x = 200;
  let y = 200;
  let r = 100;


  let x2 = 500;
  let y2 = 200;
  let r2 = 100;

  let x3 = 800;
  let y3 = 200;
  let r3 = 100;

  noFill();

  circulo(x, y, r);
  circulo(x2, y2, r2);
  circulo(x3, y3, r3);
  
}

function circulo(x, y, r) {
  let p = 5 / 4 - r;
  let x1 = 0;
  let y1 = r;

  while (x1 <= y1) {
    point(x + x1, y + y1);
    point(x + y1, y + x1);
    point(x + y1, y - x1);
    point(x + x1, y - y1);
    point(x - x1, y - y1);
    point(x - y1, y - x1);
    point(x - y1, y + x1);
    point(x - x1, y + y1);

    if (p < 0) {
      x1 += 1;
      p += 2 * x1 + 1;
    } else {
      x1 += 1;
      y1 -= 1;
      p += 2 * (x1 - y1) + 1;
    }
  }
}