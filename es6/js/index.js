'use strict';

import { oldJoel } from './other.js';

import functionFromOther from './other.js';


const monsterArray = [
  {name: 'Dracula', type: 'vampire', height: 64},
  {name: 'Frankenstein', type: 'zombie', height: 74},
  {name: 'Mr. Hyde', type: 'mad scientist', height: 69},
  {name: 'Mummy', type: 'mummy', height: 69},
  {name: 'Creature from the Black Lagoon', type: 'fish', height: 71}
]

const person = {name: 'Ada', height: 64, weight: 135}
console.log(person);

monsterArray.push(oldJoel);
console.log(monsterArray);

//otherFunc();
functionFromOther();

//console.log(monsterArray);

// const foo = (params) => 'foo '+params;


// // //function declaration
// // function sayHello() {
// //   return "Hello world";
// // }

// // //function literal
// // const sayHello = function() {
// //   return "Hello world";
// // }

// // //arrow functoin (block)
// // const sayHello = () => {
// //   return "Hello world";
// // }

// // //arrow function (concise)
// // const sayHello = () => "hello world";

// // const sayHello = (name) => 

// const myArray = [1, 2];
// const [x, y, z] = myArray;
// // const x = myArray[0];
// // const y = myArray[1];
// // const z = myArray[2];

// const myObject = {a: 1, b: 2, e: 4};
// const {a, c, b} = myObject; //myObject.a to a, etc.
// console.log(a); //=> 1
// console.log(b); //=> 2;
// console.log(c); //=> 3;

// function getBMI({height, weight}) {

//   return 703*weight/(height*height);
// }

// const originalArray = ['a', 'b', 'c', 'd'];

// const newArray = [...originalArray];
// console.log(newArray);

// const person = {name: 'Ada', height: 64, weight: 135}

// const copyOfPerson = {name: 'Ada the Great', ...person}; //clone an object!
// console.log(copyOfPerson);

