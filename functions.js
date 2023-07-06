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
  let l = 0;

  for (let i = 0; i < inputs.length; i++) {
    sum[i] = inputs[i] * weights[i]; //works
  } // multiplies the weights and coors
  console.log(l);
  console.log(sum);
  l++;
  return sum;

  //output sum is a array
}

function train(weight, input, desired) {
  // inputs are an Array
  let count = 1;
  for (let j = 0; j < input.length; j++) {
    error[j] = guess(input, weight)[j] - desired[j];
    weight[j] += learnc * error[j] * input[j];
    console.log(`count = ${count}`);
    count++;
  }
}
