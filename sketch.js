document.addEventListener("contextmenu", (event) => event.preventDefault());

const generateId = () => Date.now() + Math.floor(Math.random() * 100);

let points = {
  kw123hhajsdfk: new Point(100, 100, "kw123hhajsdfk"),
  s23125asdfk: new Point(300, 300, "s23125asdfk")
};

let lines = {
  asdfhajsdfk: new Line("kw123hhajsdfk", "s23125asdfk", "asdfhajsdfk")
  // s231sdfs5r6: new Line(300, 100, "s231sdfs5r6")
};

let connection = {
  a: null,
  b: null
};

function setup() {
  createCanvas(400, 400);
}

const updatePoints = () => {
  const keys = Object.keys(points);
  for (let i = 0; i < keys.length; i++) {
    const point = points[keys[i]];
    point.update();
    point.draw();
  }
};

const updateLines = () => {
  const keys = Object.keys(lines);
  for (let i = 0; i < keys.length; i++) {
    const line = lines[keys[i]];
    line.draw();
  }
};

const mouseOverPoint = () => {
  const keys = Object.keys(points);

  for (let i = 0; i < keys.length; i++) {
    const point = points[keys[i]];
    if (point.mouseOver === true) return point.id;
  }

  return false;
};

const deleteLines = (id) => {
  const keys = Object.keys(lines);

  for (let i = 0; i < keys.length; i++) {
    const line = lines[keys[i]];
    if (line.a === id || line.b === id) {
      delete lines[line.id];
    }
  }
}

function mousePressed() {
  const mouseClickPoint = mouseOverPoint();

  if (mouseButton === "right") {
    if (mouseClickPoint) {
      deleteLines(mouseClickPoint);
      delete points[mouseClickPoint];
    } else {
      const id = generateId();
      points[id] = new Point(mouseX, mouseY, id);
    }
  } else if (mouseButton === "center") {
    if (mouseClickPoint) {
      const point = points[mouseClickPoint]
      if (connection.a === point.id || connection.b === point.id) return;
      if (connection.a === null) {
        connection.a = point.id;
      } else {
        connection.b = point.id;
      }
      console.log(connection);
      return;
    }
  }
}

const createLine = () => {
  if (connection.a && connection.b) {
    const id = generateId();
    lines[id] = new Line(connection.a, connection.b, id);

    connection.a = null;
    connection.b = null;
  }
};

// const main = () => {

// }

function draw() {
  // background(220);
  strokeWeight(4);
  fill("width");
  stroke(220);
  rect(0, 0, width, height);
  // main();

  createLine();
  updateLines();
  updatePoints();
}
