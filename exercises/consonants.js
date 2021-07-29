
const rapid = (myString) => {
    let consonants = [];
    for(let position in myString){
        if(['a','e','i','o','u'].includes(myString[position]) == false)
            consonants.push(myString[position])
    }
    return consonants.join('').toUpperCase();
}

let str = "John";
console.log(rapid(str));