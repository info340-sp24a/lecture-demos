'use strict';

console.log("executing other.js");

export const oldJoel = {name: "Joel", age: "old"};
console.log("other person", oldJoel);

export default function otherFunc(){
  console.log("other.js is best js");
}

const secret = "I am secret";