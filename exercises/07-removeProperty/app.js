var obj = {
  name: 'Sam',
  age: 20
}


function removeProperty(obj, key) {
  delete obj[key]
}

removeProperty(obj, 'name');
console.log(obj.name); // --> undefined