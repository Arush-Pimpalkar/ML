console.log("hello");
var xMin = -100;
var xMax = 100;
var yMin = -100;
var yMax = 100;
let bias = 1;
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

function rWeights(array, xCoor) {
  for (let i = 0; i < xCoor; i++) {
    return (array[i] = Math.random() * 2 - 1); // range : -1 to +1
  }
}
rWeights(xWeights, xValues.length);
rWeights(yWeights, yValues.length); // works

function graph(x) {
  return 3 * x + 0.75;
}
function desired(y, x) {
  if (y - graph(x) > 0) {
    return 1;
  } else {
    return 0;
  }
}

function guess(inputs, weights) {
  //inputs are in array
  let sum = [];
  for (let i = 0; i < inputs.length; i++) {
    sum[i] = inputs[i] * weights[i]; //works
  } // multiplies the weights and coors
  return sum;
  //output sum is a array
}

function train(weight, input, desired) {
  // inputs are an Array
  for (let i = 0; i < input.length; i++) {
    let error = guess(input, weight)[i] - desired[i];
    if (error != 0) {
      weight[i] += learnc * error * input[i];
    }
    //no returns just adjusts the value of weights
  }
}

function classify(x, y) {
  if (x) {
    colorPointBlackX.push(x);
    colorPointBlackY.push(y);
  } else {
    colorPointOrangeX.push(x);
    colorPointOrangeY.push(y);
  }
}
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
