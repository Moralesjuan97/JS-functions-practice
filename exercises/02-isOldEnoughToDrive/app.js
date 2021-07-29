function isOldEnoughToDrive(age) {
  if (age >= 16) return true;
  return false;
}

console.log(isOldEnoughToDrive(15));
console.log(isOldEnoughToDrive(16));
console.log(isOldEnoughToDrive(24));
