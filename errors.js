const fs = require("fs");

function readFile() {
  try {
    const fileData = fs.readFileSync("data.json");
  } catch (error) {
    console.log(`An error occurred ${error.message}`);
  }

  console.log("Howdy pardner!!");
  const hobbies = ["Sports", "Cooking"];
  const newHobbies = hobbies;
  newHobbies.push("Reading");
  console.log(hobbies);
}

readFile();
