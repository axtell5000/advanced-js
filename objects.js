// const job = {
//   title: "Developer",
//   location: "Cape Town",
//   salary: 240000,
// };

class Job {
  constructor(jobTitle, place, salary) {
    this.title = jobTitle;
    this.location = place;
    this.salary = salary;
  }

  describe() {
    console.log(
      `I am a ${this.title}, I work in ${this.location} and I earn R${this.salary}`
    );
  }
}

const developer = new Job("Developer", "Cape Town", 240000);
// console.log(developer);
developer.describe();

// Destructuring with arrays
const input = ["Stephen", "Axtell"];
const [firstName, lastName] = input;
console.log(lastName);

// Destructuring with objects
const book = {
  title: "The Hobbit",
  author: "J.R.R Tolkien",
  pages: 350,
};

const { title, author: authour, pages } = book;
console.log(pages);
console.log(authour);
