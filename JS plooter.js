console.log("hello");
var xMin = -10;
var xMax = 10;
var yMin = -10;
var yMax = 10;
let colorPointBlackX = [];
let colorPointBlackY = [];
let colorPointOrangeX = [];
let colorPointOrangeY = [];
const xValues = [];
const yValues = [];

let learnc = 0.001;
// Compute Random Weights
let xWeights = [];
let yWeights = [];

//making dataset array
for (let x = xMin; x < xMax; ) {
  xValues.push((xMax - xMin) * Math.random() + xMin);
  x = x + 0.5;
}
for (let y = yMin; y < yMax; ) {
  yValues.push((yMax - yMin) * Math.random() + yMin);
  y = y + 0.5;
}

rWeights(xWeights, xValues.length);
rWeights(yWeights, yValues.length); // works

slope = 3;
intercept = 0.75;
function graph(x) {
  return slope * x + intercept;
}

let guessed = guess(xValues, xWeights);

let error = [2, 3];

let desiredarr = desired(xValues, yValues);
for (let k = 0; k < error.length; k++) {
  if (error[k] != 0) {
    train(xWeights, guessed, desiredarr);
    console.log(`${xWeights}`);
  }
}

console.log(`trained = ${(xWeights, yWeights)}`);

for (let i = 0; i < xValues.length; i++) {
  if (3 * xValues[i] + 0.75 - yValues[i] > 0) {
    colorPointBlackX.push(xValues[i]);
    colorPointBlackY.push(yValues[i]);
  } else {
    colorPointOrangeX.push(xValues[i]);
    colorPointOrangeY.push(yValues[i]);
  }
}

var yVal2 = [];
xValues.forEach((element) => {
  yVal2.push(graph(element));
});

const lines = {
  x: xValues,
  y: yVal2,
  mode: "lines",
  line: { color: "green" },
};

const orangePoints = {
  x: colorPointOrangeX,
  y: colorPointOrangeY,
  mode: "markers",
  marker: { color: "rgb(237, 128, 19)" },
};

const blackPoints = {
  x: colorPointBlackX,
  y: colorPointBlackY,
  mode: "markers",
  marker: { color: "black" },
};

var data = [lines, blackPoints, orangePoints];
Plotly.newPlot("myPlot", data);
