//Abdiel Flores 

//Circulo 1
let x = 200
let y = 200
let r = 100

//Circulo 2
let x2 = 500
let y2 = 200
let r2 = 100

//Circulo 3
let x3 = 800
let y3 = 200
let r3 = 100

var n = 0 
var angulo = 0

//Evento boton
function onClick() {
  val = parseInt(document.getElementById("num").value)
  if( val !== 1){
    n = val 
  }else {
    n = 0
    document.getElementById("num").value = ''
  }

  angulo = TWO_PI / n
}

function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  background(255)

  //Funciones de algoritmos
  puntoPendiente()
  dda()
  //TODO:  dda & bresenham

  circulo(x, y, r)
  circulo(x2, y2, r2)
  circulo(x3, y3, r3)
  
}

function circulo(x, y, r) {
  let p = 5 / 4 - r
  let x1 = 0
  let y1 = r

  while (x1 <= y1) {
    point(x + x1, y + y1)
    point(x + y1, y + x1)
    point(x + y1, y - x1)
    point(x + x1, y - y1)
    point(x - x1, y - y1)
    point(x - y1, y - x1)
    point(x - y1, y + x1)
    point(x - x1, y + y1)

    if (p < 0) {
      x1 += 1
      p += 2 * x1 + 1
    } else {
      x1 += 1
      y1 -= 1
      p += 2 * (x1 - y1) + 1
    }
  }
}

function puntoPendiente() {
  for (let i = 0; i < n; i++) {
    let a = i * angulo - PI

    let px = x + r * cos(a)
    let py = y + r * sin(a)

    if (px == x) {
      let y0 = min(y, py)
      let y1 = max(y, py)

      for (let yi = y0; yi <= y1; yi++) {
        point(x, yi)
      }
    } 
    else {
      let m = (py - y) / (px - x)
      let b = y - m * x

      if (abs(px - x) >= abs(py - y)) {
        let x0 = min(x, px)
        let x1 = max(x, px)

        for (let xi = x0; xi <= x1; xi++) {
          let yi = round(m * xi + b)
          point(xi, yi)
        }
      } else {
        let y0 = min(y, py)
        let y1 = max(y, py)

        for (let yi = y0; yi <= y1; yi++) {
          let xi = round((yi - b) / m)
          point(xi, yi)
        }
      }
    }
  }
}

function dda() {
  for (let i = 0; i < n; i++) {
    let a = i * angulo - PI
  
    let px = x2 + r2 * cos(a)
    let py = y2 + r2 * sin(a)
  
    let x0 = round(x2)
    let y0 = round(y2)
    let x1 = round(px)
    let y1 = round(py)
  
    let dx = x1 - x0;
    let dy = y1 - y0;
  
    if (dx == 0) {

      let y = min(y0, y1)
      for (let yi = y; yi <= max(y0, y1); yi++) {
        point(x0, yi)
      }
    } else {
      let m = dy / dx
      let b = y0 - m * x0
  
      if (abs(dx) >= abs(dy)) {
        let x = min(x0, x1);
  
        for (let xi = x; xi <= max(x0, x1); xi++) {
          let yi = round(m * xi + b)
          point(xi, yi)
        }
      } else {
        let y = min(y0, y1)
  
        for (let yi = y; yi <= max(y0, y1); yi++) {
          let xi = round((yi - b) / m)
          point(xi, yi)
        }
      }
    }
  }
}
