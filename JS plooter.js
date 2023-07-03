console.log("hello");
var xMin = -100;
var xMax = 100;
var yMin = -100;
var yMax = 100;

console.log("heheheh"); 

let colorPointBlackX = [];
let colorPointBlackY = [];
let colorPointOrangeX = [];
let colorPointOrangeY = [];
const xValues = [];
const yValues = [];

//making dataset array
for (let x = xMin; x < xMax;) {
  xValues.push((xMax - xMin) * Math.random() + xMin);
  x = x + 0.5;
}
for (let y = yMin; y < yMax;) {
  yValues.push((yMax - yMin) * Math.random() + yMin);
  y = y + 0.5;
}
function graph(x) {
  return 3 * x + 0.75;
}
function desired(y, x) {
  return y - graph(x);
}


const ptron = new Perceptron(2, 0.0005);

ptron.train(xValues[i], yValues[i], desired(yValues[i], xValues[i]))

/*
for (let i = 0; i < xValues.length; i++)
  if (3 * xValues[i] + 0.75 - yValues[i] > 0) {
    colorPointBlackX.push(xValues[i]);
    colorPointBlackY.push(yValues[i]);
  } else {
    colorPointOrangeX.push(xValues[i]);
    colorPointOrangeY.push(yValues[i]);
  }
*/
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
