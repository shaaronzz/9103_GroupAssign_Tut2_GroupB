//**iteration idea**
//continue finish drawing the artwork: chain of small circles (make it better), the zip-lines
//streamline codes
//randomness(could be totally random or choose from a list): color, shape, position?

function setup() {
  createCanvas(550, 550);
  noCursor();
  background(60, 80, 110);

  //position of each big circle
  positions = [
    //redius: 75, space-between_horizontal: 20, space-between_vertical: 0
    { xPos: 75, yPos: 75 }, { xPos: 245, yPos: 35 }, { xPos: 415, yPos: -5 },
    { xPos: 18, yPos: 225 }, { xPos: 188, yPos: 185 }, { xPos: 358, yPos: 145 }, { xPos: 528, yPos: 105 },
    { xPos: -35, yPos: 375 }, { xPos: 135, yPos: 335 }, { xPos: 305, yPos: 295 }, { xPos: 475, yPos: 255 },
    { xPos: 85, yPos: 485 }, { xPos: 255, yPos: 445 }, { xPos: 425, yPos: 405 }, { xPos: 595, yPos: 365 },
    { xPos: 368, yPos: 555 }, { xPos: 538, yPos: 515 }
  ];

  //Background colors inside each big circle
  CirBgColor = [
    { Out: color(200, 230, 241) }, { Out: color(250, 158, 7) }, { Out: color(252, 238, 242) },
    { Out: color(252, 191, 49) }, { Out: color(207, 241, 242) }, { Out: color(248, 197, 56) }, { Out: color(252, 191, 49) },
    { Out: color(221, 254, 254) }, { Out: color(250, 158, 7) }, { Out: color(252, 238, 242) }, { Out: color(254, 247, 243) },
    { Out: color(252, 238, 242) }, { Out: color(252, 191, 49) }, { Out: color(241, 224, 76) }, { Out: color(250, 158, 7) },
    { Out: color(252, 238, 242) }, { Out: color(207, 241, 242) }
  ]

  //Shape colors inside each big circle
  ShapeColor = [
    //line #1
    { Out: color(15, 8, 104), Mid: color(12, 102, 50) }, { Out: color(227, 13, 2), Mid: color(249, 81, 8) },
    { Out: color(245, 20, 2) },
    //line #2
    { Out: color(21, 95, 151), Mid: color(251, 85, 63) }, { Out: color(15, 133, 52), Mid: color(251, 85, 63) },
    { Out: color(213, 153, 217), Mid: color(60, 146, 195) }, { Out: color(21, 95, 151), Mid: color(249, 209, 244) },
    //line #3
    { Out: color(0, 150, 145) }, { Out: color(227, 13, 2), Mid: color(243, 7, 11) },
    { Out: color(245, 20, 2), Mid: color(251, 85, 63) }, { Out: color(243, 110, 9), Mid: color(12, 102, 50) },
    //line #4
    { Out: color(245, 20, 2), Mid: color(60, 146, 195) }, { Out: color(196, 21, 90) },
    { Out: color(20, 112, 185), Mid: color(251, 85, 63) }, { Out: color(227, 13, 2) },
    //line #5
    { Out: color(245, 20, 2), Mid: color(117, 194, 116) }, { Out: color(15, 133, 52) }
  ]
}

function draw() {
  //draw big circles
  drawCircle();
  drawDotOut();
  drawDotMid();
  drawRingMid();
  drawInnerCir();
  drawLineOut();
  drawLineMid();
  drawHexagons();
  drawCurves();

  //draw the first straight line
  stroke(255, 28, 0);
  strokeWeight(2);
  line(188, 85, 285, 0);

  //draw the second straight line
  stroke(255, 28, 0);
  strokeWeight(2);
  line(193, 488, 315, 405);
}

//draw big circles
function drawCircle() {
  for (let i = 0; i < positions.length; i++) {
    fill(CirBgColor[i].Out);
    noStroke();
    ellipse(positions[i].xPos, positions[i].yPos, 150, 150);
    fill(181, 77, 162);
    ellipse(positions[i].xPos, positions[i].yPos, 85, 85);
    fill(71, 83, 63);
    ellipse(positions[i].xPos, positions[i].yPos, 45, 45);
    fill(0);
    ellipse(positions[i].xPos, positions[i].yPos, 25, 25);
    if (i === 0 || i === 1 || i === 4 || i === 9 || i === 10 || i === 11) {
      fill(34, 151, 66);
      ellipse(positions[i].xPos, positions[i].yPos, 17, 17);
    }
    else {
      fill(240, 67, 32);
      ellipse(positions[i].xPos, positions[i].yPos, 17, 17);
    }
    fill(183, 190, 189);
    ellipse(positions[i].xPos, positions[i].yPos, 9, 9);
  }
}

let curve_40 = [];
let curve_25 = [];

//draw lines at outer circle of the big circle
function drawLineOut() {
  for (let i = 0; i < positions.length; i++) {
    if (i == 1 || i == 8 || i == 14) {
      let numCircles = 5;
      let curve_70 = [];
      let curve_35 = [];
      for (let j = 0; j < numCircles; j++) {
        let numDot = (j + 3.5) * 10;
        // angleMode(DEGREES);
        let angle = 360 / numDot;
        noFill();
        stroke('#ef1e1e');


        for (let k = 0; k < numDot; k++) {
          let x = positions[i].xPos + cos(angle * k) * (j * 7 + 45);
          let y = positions[i].yPos + sin(angle * k) * (j * 7 + 45);
          if (numDot > 70) {
            curve_70.push({ "x": x, "y": y })
          } else if (numDot == 35) {
            curve_35.push({ "x": x, "y": y })
          }
        }

        if (curve_70.length > 0 && curve_35.length > 0) {
          for (var qw = 0; qw < curve_70.length; qw++) {
            var num = qw / 2;
            num = Math.round(num);
            if (num >= (curve_35.length - 1)) {
              num = curve_35.length - 1;
            }
            line(curve_70[qw].x, curve_70[qw].y, curve_35[num].x, curve_35[num].y);
          }
        }
      }
    }

    if (curve_40.length > 0 && curve_25.length > 0) {
      for (var qw = 0; qw < curve_40.length; qw++) {
        var num = qw / 2;
        num = Math.round(num);
        if (num >= (curve_25.length - 1)) {
          num = curve_25.length - 1;
        }
        line(curve_40[qw].x, curve_40[qw].y, curve_25[num].x, curve_25[num].y);
      }
    }
  }
}

//draw dots (outer circle) inside of the big circle
function drawDotOut() {
  for (let i = 0; i < positions.length; i++) {
    if (i !== 1 && i !== 8 && i !== 14) {
      let numCircles = 5;
      for (let j = 0; j < numCircles; j++) {
        let numDot = (j + 3.5) * 10;
        let DotRadius = 5;
        angleMode(DEGREES);
        let angle = 360 / numDot;
        for (let k = 0; k < numDot; k++) {
          let x = positions[i].xPos + cos(angle * k) * (j * 7 + 45);
          let y = positions[i].yPos + sin(angle * k) * (j * 7 + 45);
          fill(ShapeColor[i].Out);
          ellipse(x, y, DotRadius, DotRadius);
        }
      }
    }
  }
}

//draw dots (mid circle) inside of the big circle
function drawDotMid() {
  for (let i = 0; i < positions.length; i++) {
    if (i === 1 || i === 3 || i === 6 || i === 8 || i === 15) {
      let numCircles = 3;
      for (let j = 0; j < numCircles; j++) {
        let numDot = (j + 2.5) * 10;
        let DotRadius = 5;
        angleMode(DEGREES);
        let angle = 360 / numDot;
        for (let k = 0; k < numDot; k++) {
          let x = positions[i].xPos + cos(angle * k) * (j * 7 + 25);
          let y = positions[i].yPos + sin(angle * k) * (j * 7 + 25);
          fill(ShapeColor[i].Mid);
          ellipse(x, y, DotRadius, DotRadius);
        }
      }
    }
  }
}

//draw rings at mid circle of the big circle
function drawRingMid() {
  for (let i = 0; i < positions.length; i++) {
    if (i === 0 || i === 4 || i === 5 || i === 10 || i === 11 || i === 13) {
      for (let j = 0; j < 3; j++) {
        let radius = (j + 3) * 8;
        noFill();
        stroke(ShapeColor[i].Mid);
        strokeWeight(3); // Set the stroke weight to make the outer circle thicker
        ellipse(positions[i].xPos, positions[i].yPos, radius * 2, radius * 2);
        noStroke(); // Reset the stroke settings to their default values
      }
    }
  }
}

//draw lines at mid circle of the big cirlce
function drawLineMid() {
  for (let i = 0; i < positions.length; i++) {
    if (i == 9 && curve_40.length == 0) {
      let numCircles = 3;

      for (let j = 0; j < numCircles; j++) {
        let numDot = (j + 2.5) * 10;
        let DotRadius = 5;
        angleMode(DEGREES);
        let angle = 360 / numDot;
        for (let k = 0; k < numDot; k++) {
          let x = positions[i].xPos + cos(angle * k) * (j * 7 + 25);
          let y = positions[i].yPos + sin(angle * k) * (j * 7 + 25);
          fill(ShapeColor[i].Mid);
          if (numDot == 25) {
            curve_25.push({ "x": x, "y": y });
          }
          if (numDot >= 40) {
            curve_40.push({ "x": x, "y": y });
          }
        }
      }
    }
  }
}

//draw rings at inner circle of the big circle
function drawInnerCir() {
  for (let i = 0; i < positions.length; i++) {
    for (let j = 0; j < 2; j++) {
      let radius = (j + 2.5) * 6;
      noFill();
      stroke(157, 165, 163);
      strokeWeight(3); // Set the stroke weight to make the outer circle thicker
      ellipse(positions[i].xPos, positions[i].yPos, radius * 2, radius * 2);
      noStroke(); // Reset the stroke settings to their default values
    }
  }
}

//draw chain of small circles
function drawHexagons() {
  for (let i = 0; i < positions.length; i++) {
    let hexagonRadius = 90;
    let hexagonX = positions[i].xPos;
    let hexagonY = positions[i].yPos;


    for (let j = 0; j < 6; j++) {
      let angle = 360 / 6 * j;
      let x = hexagonX + hexagonRadius * cos(angle);
      let y = hexagonY + hexagonRadius * sin(angle);

      fill(0);
      stroke(221, 97, 40);
      strokeWeight(2);
      ellipse(x, y, 7.5, 7.5);
    }

    for (let j = 0; j < 6; j++) {
      let angle1 = 360 / 6 * j;
      let angle2 = 360 / 6 * ((j + 1) % 6); // Next vertex
      for (let k = 0; k < 4; k++) {
        let fraction = k / 4;
        let x = lerp(hexagonX + hexagonRadius * cos(angle1), hexagonX + hexagonRadius * cos(angle2), fraction);
        let y = lerp(hexagonY + hexagonRadius * sin(angle1), hexagonY + hexagonRadius * sin(angle2), fraction);

        fill(0);
        stroke(221, 97, 40);
        strokeWeight(2);
        ellipse(x, y, 7.5, 7.5);
      }
    }

    for (let j = 0; j < 6; j++) {
      let angle = 360 / 6 * j;
      let x = hexagonX + hexagonRadius * cos(angle);
      let y = hexagonY + hexagonRadius * sin(angle);

      //draw a white inner circle inside the small circle
      fill(255);
      stroke(0);
      ellipse(x, y, 6.5, 6.5);
    }
  }
}


function drawSmoothCurve(points) {
  beginShape();
  // First point
  vertex(points[0].x, points[0].y);

  // Use bezierVertex to connect other points
  for (let i = 1; i < points.length - 2; i++) {
    let xc = (points[i].x + points[i + 1].x) / 2;
    let yc = (points[i].y + points[i + 1].y) / 2;
    bezierVertex(points[i].x, points[i].y, xc, yc, xc, yc);
  }

  // End point
  vertex(points[points.length - 1].x, points[points.length - 1].y);

  endShape();
}

function drawCurves() {
  noFill();
  stroke('#E93468');
  strokeWeight(5);

  let curve1 = [
    { x: 75, y: 75 },
    { x: 67, y: 92 },
    { x: 64, y: 120 },
    { x: 75, y: 145 },
    { x: 95, y: 160 },
    { x: 110, y: 162 },
  ];

  let curve2 = [
    { x: 188, y: 185 },
    { x: 193, y: 172 },
    { x: 208, y: 150 },
    { x: 250, y: 125 },
    { x: 260, y: 130 },
  ];

  let curve3 = [
    { x: 415, y: -5 },
    { x: 420, y: 20 },
    { x: 440, y: 40 },
    { x: 470, y: 45 },
    { x: 495, y: 35 },
  ];

  let curve4 = [
    { x: -35, y: 375 },
    { x: -2.5, y: 360 },
    { x: 20, y: 340 },
    { x: 47, y: 325 },
    { x: 55, y: 327 },
  ];

  let curve5 = [
    { x: 305, y: 295 },
    { x: 325, y: 280 },
    { x: 350, y: 275 },
    { x: 375, y: 275 },
    { x: 405, y: 300 },
    { x: 410, y: 315 },
  ];

  let curve6 = [
    { x: 475, y: 255 },
    { x: 477, y: 240 },
    { x: 485, y: 225 },
    { x: 500, y: 212 },
    { x: 510, y: 205 },
    { x: 530, y: 200 },
    { x: 550, y: 195 },
  ];

  let curve7 = [
    { x: 85, y: 485 },
    { x: 105, y: 510 },
    { x: 130, y: 525 },
    { x: 150, y: 530 },
    { x: 170, y: 528 },
    { x: 190, y: 523 },
    { x: 195, y: 520 },
  ];

  drawSmoothCurve(curve1);
  drawSmoothCurve(curve2);
  drawSmoothCurve(curve3);
  drawSmoothCurve(curve4);
  drawSmoothCurve(curve5);
  drawSmoothCurve(curve6);
  drawSmoothCurve(curve7);
}