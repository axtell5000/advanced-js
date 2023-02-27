const hobbies = ["reading", "sport", "hiking"]; // a pointer to the array is stored in 'hobbies'
const age = 40; // the value itself is stored in primitive variables

hobbies.push("swimming"); // thats why you can do this, you are adding to the array in memory, not changing the address in the variable
// hobbies = ["reading"]; // this wouldnt work

console.log(hobbies);

const person = { age: 44 };

function getAdultYears(p) {
  p.age -= 18;
  return p.age;
  // return p.age - 18; // rsther do something like this
}

console.log(getAdultYears({ ...person })); // another way - making a copy of object
console.log(person);
