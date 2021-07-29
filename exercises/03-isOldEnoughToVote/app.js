function isOldEnoughToVote(age) {
  if (age >= 18) return true;
  return false;
}

console.log(isOldEnoughToVote(15));
console.log(isOldEnoughToVote(16));
console.log(isOldEnoughToVote(24));