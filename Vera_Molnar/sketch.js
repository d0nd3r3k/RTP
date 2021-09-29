function setup() {
  createCanvas(700, 700); //Needed for 8x8 Squares
  noFill();
  rectMode(CENTER);
  //frameRate(5);
  noLoop();
}

function draw() {
  background(251,251,252);
  var color_arr=[[169,208,120],[54,47,148],[223,169,51],[165,76,123],[95,160,182],[186,29,49],[251,251,252],[251,251,252],[251,251,252],[251,251,252],[251,251,252],[251,251,252],[251,251,252],[251,251,252],[251,251,252]];

  for (var y = 50; y < 700; y = y + 84) {
    for (var x = 50; x < 700; x = x + 84) {
      var r = 2;
      var index = 0;
      for (var w = 80; w > 0; w = w - r) {

        r = random(2, 20);
        index = random (0,15);
        var selected_color = Math.floor(index);
        var c = color(color_arr[selected_color][0],color_arr[selected_color][1],color_arr[selected_color][2]);
        noFill();
        strokeWeight(2.2);
        stroke(c);
        rect(x, y, w, w);
      }
    }
  }

}
