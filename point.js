class Point {
  constructor(x, y, id, radius = 10) {
    //color = "black"
    this.id = id;

    this.mouseOver = false;
    this.dragging = false;

    this.radius = radius;
    this.pos = { x: x, y: y };
    this.offset = { x: x, y: y };
    // this.color = color;
  }

  update() {
    this.mouseOver = false;

    if (dist(mouseX, mouseY, this.pos.x, this.pos.y) <= this.radius + 3) {
      this.mouseOver = true;
    }

    if (!mouseIsPressed) this.dragging = false;

    if (this.mouseOver && mouseIsPressed && !this.dragging) {
      if (mouseButton === "left") {
        this.offset.x = this.pos.x - mouseX;
        this.offset.y = this.pos.y - mouseY;

        this.dragging = true;
      }
    }

    if (this.dragging) {
      this.pos = { x: mouseX + this.offset.x, y: mouseY + this.offset.y };
      // this.pos = { x: mouseX, y: mouseY };
    }
  }

  draw() {
    stroke(connection.a == this.id ? "cyan" : "black");
    // fill("black");
    strokeWeight(3);
    fill(this.dragging ? "gray" : this.mouseOver ? "#383838" : "black");

    circle(this.pos.x, this.pos.y, this.radius * 2);
  }
}
