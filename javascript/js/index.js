'use strict';

// console.log("Hello world");

// console.log("At least its not raining");
// console.log("more stuff");

// let x = "hello";
// console.log(x);
// x = 42;
// console.log(x);

// let hoursSlept;
// console.log(hoursSlept);

const lettersArray = ['a', 'b', 'c'];
console.log(lettersArray);
// console.log(lettersArray[4]);
// lettersArray[100] = 'f';
// console.log(lettersArray);

// const neighborsArray = ['Joel', "Andy", 'Joe'];
// console.log(neighborsArray);

// console.log('40' + 2);
// console.log('forty' - 2);

// const num = 10
// const str = '10'

// console.log("are num == str the same", num == str);
// console.log("are num === str the same", 
//   num === str
// );
// console.log("are '' and 0 the same?", '' == 0);

const ages = {sarah:42, amit:35, zhang:13};
console.log(ages);

const numWords = {1:'one', 2:'two', 3:'three'}

//global function to get the keys of an object
const keys = Object.keys(numWords) //[ '1', '2', '3' ]
console.log(keys);

ages['fred'] = 19;
console.log(ages);

const peopleArray = [
  {name: 'Ada', height: 64, weight: 135},
  {name: 'Bob', height: 74, weight: 156},
  {name: 'Chris', height: 69, weight: 139},
  {name: 'Diya', height: 69, weight: 144},
  {name: 'Emma', height: 71, weight: 152}
]

//standard
for(let i=0; i<array.length; i++) { }

//for(String name : names) {}
//for(const name of names) {}

for(let i=0; i<peopleArray.length; i++) { 
  const person = peopleArray[i];
  console.log(person);
}

for(const person of peopleArray) {
  console.log(person);
}
