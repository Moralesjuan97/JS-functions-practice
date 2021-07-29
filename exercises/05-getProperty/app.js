
var car = {
  model: 'Toyota'
};

function getProperty(obj, key) {
  if (obj[key])
    return obj[key]
  return undefined
}
var output = getProperty(car, 'model');

console.log(output);