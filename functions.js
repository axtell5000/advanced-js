// default values, must appear last if multiple parameters
function greetUser(userName = "user") {
  console.log(`Hello there ${userName}`); // using template literals
}

greetUser("Roy");
greetUser();

// rest paramaters, wraps it in an array structure
function sumUp(...numbers) {
  let result = 0;

  for (const number of numbers) {
    result += number;
  }

  return result;
}

console.log(sumUp(10, 20, 33));

const inputNums = [5, 20, 33, 45, 60];
console.log(sumUp(...inputNums)); // here the ... means spread operator, takes an array and spreads it into individual items

console.log(sumUp);
