// For the following five blocks of code, predict the output. If a line of code will throw an error, state the error.

// Problem 1

const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars

//Predict the output

console.log(oneCar)
// output: Telsa

console.log(otherRandomCar)
// output: Mercedes





// Problem 2

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;

//Predict the output

// console.log(name);
// error, name is not referanced
console.log(otherName);
// Elon




// Problem 3

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  

//Predict the output
console.log(password);
// output: 12345


console.log(hashedPassword);
// person undefined






// Problem 4

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;

//Predict the output
console.log(first == second);
// output: flase

console.log(first == third);
// output: flase

console.log(first)
console.log(second)
console.log(third)







// Problem 5

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
// output: value
console.log(secondKey);
// [ 1, 5, 1, 8, 3, 3 ]
console.log(secondKey[0]);
// 1
console.log(willThisWork);
// 5









