// 8x8 = 64

const PIXEL_SIZE = 80;
const CANVAS_SIZE = PIXEL_SIZE * 8;
const COLORS = [
  [245, 110, 238],
  [5, 24, 49],
  [18, 48, 162],
  [114, 198, 222],
  [237, 53, 110],
  [175, 10, 236],
  [243, 46, 240],
  [248, 152, 13]
];

// Board:
var board = [];
while(board.push([]) < 10);

function setup() {
  createCanvas(CANVAS_SIZE, CANVAS_SIZE, P2D);
  //blendMode(OVERLAY);
  noStroke();
  background(255);

  for(let i = 0; i < 10; i++) {
        let xval = round(random(0, 7));
        let yval = round(random(0, 7));
        let c = COLORS[round(random(0,COLORS.length - 1))];
        // Shadow
        for (let k = 0; k < CANVAS_SIZE; k += 0.5){
          let inter = map(k*2,100, CANVAS_SIZE, 0, 1);
          let c1 = color(c[0], c[1], c[2], 120);
          let c2 = color(c[0], c[1], c[2], 0);
          let col = lerpColor(c1, c2, inter);
          stroke(col);
          line(xval*PIXEL_SIZE + k, yval*PIXEL_SIZE + PIXEL_SIZE + k, xval*PIXEL_SIZE+PIXEL_SIZE + k, yval*PIXEL_SIZE + k);
        }
        noStroke();
        fill(c);
        rect(xval*PIXEL_SIZE,yval*PIXEL_SIZE, PIXEL_SIZE, PIXEL_SIZE);
      for(let j = 0; j < 8; j++) {
        if (random(0,8) < 1) {
          fill(COLORS[round(random(0,COLORS.length - 1))]);
          let xval = round(random(0, CANVAS_SIZE));
          let yval = round(random(0, CANVAS_SIZE));
          rect(xval,yval,PIXEL_SIZE/4, PIXEL_SIZE/4);
        }
        if (random(0,6) < 1) {
          fill(COLORS[round(random(0,COLORS.length - 1))]);
          let xval = round(random(0, CANVAS_SIZE));
          let yval = round(random(0, CANVAS_SIZE));
          rect(xval,yval,PIXEL_SIZE/8, PIXEL_SIZE/8);
        }
        if (random(0,4) < 1) {
          fill(COLORS[round(random(0,COLORS.length - 1))]);
          let xval = round(random(0, CANVAS_SIZE));
          let yval = round(random(0, CANVAS_SIZE));
          rect(xval,yval,PIXEL_SIZE/16, PIXEL_SIZE/16);
        }
    }
  }

  // Noise
  blendMode(OVERLAY);
  let noiseScale = 0.02;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      //noiseDetail(500, 0.9);
      //noiseVal = noise(x*noiseScale, y*noiseScale);
      noiseVal = random(0,0.3);
      stroke(255, noiseVal*255);
      point(x,y);
    }
  }

}

function draw() {


}
