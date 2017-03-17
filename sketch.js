function setup() {
  resizeCanvas(500,500);
}

function draw() {
  for(var i = 0; i < stacks.length; i++) {
    stacks[i].draw();
  }
}

var stacks = [];
function mouseDragged() {
  var stack = new Stack();
  stack.center.x = mouseX;
  stack.center.y = mouseY;
  stacks.push(stack);
}

function Stack() {
  this.center = {x: 0, y:0};
  this.total = 10;
  this.step = 20;
  this.record = [];
  
  this.draw = function() {
    this.total--;
    if(this.total <= 0) {
      return;
    }
    this.radius += this.step;
    colorMode(HSB);
    this.record.push(color(random(255), 80, 80));
    for(var i = this.record.length - 1; i >= 0; i--) {
      fill(this.record[i]);
      rect(this.center.x, this.center.y, i * this.step, i * this.step);
    }
  }
}
