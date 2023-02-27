const fs = require("fs").promises;

async function readFile() {
  let fileData;
  // Using callbacks
  // fileData = fs.readFile("data.txt", (error, data) => {
  // if(error) {
  //  // handle error
  // }
  //   console.log("File parsing done");
  //   console.log(data.toString());
  // });

  // Using Promises
  // fs.readFile("data.txt")
  //   .then((data) => {
  //     console.log("File parsing done");
  //     console.log(data.toString());
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  // console.log("Hello there");

  // Using Asyn Await, can use try / catch , couldnt with callbacks and the Promises with then
  try {
    fileData = await fs.readFile("data.txt");
  } catch (error) {
    console.log(error);
  }

  console.log("File parsing done");
  console.log(fileData.toString());
  console.log("Hello there");
}

readFile();
