var myObj = {}

function addProperty(obj, key) {
  obj[key] = true;
}

addProperty(myObj, 'myProperty');
console.log(myObj.myProperty);