'use strict';

//an array of objects to work with
const peopleArray = [
  {name: 'Ada', height: 64, weight: 135},
  {name: 'Bob', height: 74, weight: 156, pronouns: 'they/them'},
  {name: 'Chris', height: 69, weight: 139},
  {name: 'Diya', height: 69, weight: 144},
  {name: 'Emma', height: 71, weight: 152}
]
console.log(peopleArray);


// console.log(typeof sayHello) // 'function'

const x = 5

const msg = "hello"

const array = [1,2,3]

// function sayHello(name) { 
//   console.log("Hello, "+name);
// }

const sayHello = function(person) {
  console.log("Hello, "+person);
}

const sayGoodbye = function(person) {
  console.log("Goodbye," + person);
}

// sayHello("class");

//takes ANOTHER FUNCTION as an arg
//will call the arg function, 
//passing it "world"
function doWithWorld(aFunction) {
  aFunction("world");
}

// doWithWorld(sayHello);
// doWithWorld(function(person) {
//   console.log("Goodbye," + person);
// });

//call function and pass value

function sayHi() { //version with no args
  return "Hi";
}

// console.log( Math.sqrt(4) );

// console.log( sayHi() );


function doTogether(firstCallback, secondCallback){
  firstCallback();  //execute the first function
  secondCallback();  //execute the second function
  console.log('at the "same time"!');
}

function patHead() {
  console.log('pat your head');
}

function rubBelly() {
  console.log('rub your belly');
}

//doTogether(patHead, rubBelly);


for(const person of peopleArray){
  console.log(person.name);
}

peopleArray.forEach(function(person){
  console.log(person.name);
});

const makeListItem = function(person) {
  return "<li>"+person.name+"</li>";
}

const numbers = [1,2,3,4,5];  //an initial array

//map the numbers using the `square` transforming function
const listItemArray = peopleArray.map(function(person) {
  return "<li>"+person.name+"</li>";
});

console.log(listItemArray);

//MAP TEMPLATE
//define the new array -- don't forget
//call .map on the old array
// const newArray = oldArray.map(function(singleItem) {
//   const transformed = ... //change singleItem
//   return transformed; //put the transformed value in the new array
//                       //don't forget
// })



//array.filter(isTall).filter(areOld).filter(areAvailableForInterview)








