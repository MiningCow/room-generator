class Line {
  constructor(a, b, id) {
    this.id = id;

    this.a = a;
    this.b = b;
  }

  draw() {
    stroke("black");
    strokeWeight(3);

    const a = points[this.a].pos;
    const b = points[this.b].pos;

    // if () {

    // }

    // line(a.x, a.y, a.x, b.y);
    // line(a.x, b.y, b.x, b.y);

    const start = {
      x: a.x,
      y: a.y
    };

    const end = {
      x: a.x + (b.x - a.x) / 2,
      y: a.y
    };

    if (abs(a.x - b.x) < abs(a.y - b.y)) {
      line(a.x, a.y, a.x, a.y + (b.y - a.y) / 2);
      line(a.x, a.y + (b.y - a.y) / 2, b.x, a.y + (b.y - a.y) / 2);
      line(b.x, a.y + (b.y - a.y) / 2, b.x, b.y);
    } else {
      line(a.x, a.y, a.x + (b.x - a.x) / 2, a.y);
      line(a.x + (b.x - a.x) / 2, a.y, a.x + (b.x - a.x) / 2, b.y);
      line(a.x + (b.x - a.x) / 2, b.y, b.x, b.y);
    }
    // Maybe if the points are exactly diagonal it should draw a straight line between them
  }
}

// HALF WAY
// const start = {
//   x: a.x,
//   y: a.y
// };

// const end = {
//   x: a.x + (b.x - a.x) / 2,
//   y: a.y
// };
