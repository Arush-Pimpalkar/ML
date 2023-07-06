function rWeights(array, xCoor) {
  for (let i = 0; i < xCoor; i++) {
    array[i] = Math.random() * 2 - 1; // range : -1 to +1
  }
  return array;
}

function desired(x, y) {
  // desired is DBPAL
  let DBPAL = [];
  for (let i = 0; i < x.length; i++) {
    DBPAL[i] = Math.abs(y[i] - graph(x[i])) / Math.sqrt(1 + slope * slope); //works
  }
  return DBPAL;
}
function guess(inputs, weights) {
  //inputs are in array
  let sum = [];
  for (let i = 0; i < inputs.length; i++) {
    sum[i] = inputs[i] * weights[i]; //works
  } // multiplies the weights and coors
  console.log(sum);
  return sum;
  //output sum is a array
}
let error = [];

function train(weight, input, desired) {
  // inputs are an Array
  for (let j = 0; j < input.length; j++) {
    error[j] = guess(input, weight)[j] - desired[j];
    weight[j] += learnc * error[j] * input[j];
  }
}

for (let k = 0; k < error.length; k++) {
  if (error[k] != 0) {
    train();
  }
}
