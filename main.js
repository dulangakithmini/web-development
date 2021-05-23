// give an alert
alert("Hello world");

// output to the console
console.log('Hello');

// write an error method to the console
console.error("This is an error");

// write a warning to the console
console.warn("This is a warning");

// difference between let and const
let score = 20;
score = 50;

console.log(score);

const age = 25;
// age = 26;

// test the type of a variable
console.log(typeof age);

// string concatenation-old way
const name = 'Dula';
const myAge = 26;
console.log('My name is ' + name + ' and my age is ' + myAge);

// string concatenation-better way
console.log(`My name is ${name} and my age is ${myAge}`);

// get length of a string
console.log(name.length);

// change a string to uppercase
console.log(name.toUpperCase());

// split
const s = 'Hello World';
console.log(s.split(' '));

// create an array
const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers)
// Or
const fruits = ['apple', 'orange', 10];
console.log(fruits);

console.log(typeof fruits[2]);

// add an element to an array
fruits[3] = 'pears';
console.log(fruits);

fruits.push('mango');
console.log(fruits);

// add an element to the beginning of the array
fruits.unshift('grapes');
console.log(fruits);

// index of an array element
console.log(fruits.indexOf('orange'))

// object literals
const person = {
    firstname: 'Dula',
    lastname: 'K',
    age: 26,
    hobbies: ['dancing', 'music'],
    address: {
        street: 'First street',
        city: 'Seoul',
        Country: 'SK'
    }
}

console.log(person)
console.log(person.firstname, person.lastname)
console.log(person.hobbies[1])
console.log(person.address.city)

// add new properties
person.email = 'dulak@gmail.com'

console.log(person)
