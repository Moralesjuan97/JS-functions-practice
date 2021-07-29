function checkAge(name, age) {
  if (age >= 21) return `Welcome ${name}`;
  return `Go home ${name}`;
}

console.log(checkAge('Adrian', 22))
console.log(checkAge('Juan', 20))
console.log(checkAge('ELisa', 21))


