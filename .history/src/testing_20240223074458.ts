// function testAgeAndAddress() {
//   // define a variable with on initial value
//   var age;
//   console.log(age);
//   // set its value to a number
//   age = 20;
//   console.log(age);
//   // all of a sudden change the data type to a string
//   age = "Hello";
//   console.log(age);

//   if (age === "Hello") {
//     // define a variable of type string or undefined
//     var address: string | undefined = "World";
//     address = "Hello World";
//   }

//   // outside the definition of the if statement
//   // the variable is still accessible which can
//   // be a huge nightmare sometimes
//   console.log(address);
// }

// testAgeAndAddress();

// without explicit data types
// {
//   const homeAddress = "123 Main St.";
//   const houseNumber = 123;
//   const isHome = true;
//   console.log(homeAddress, houseNumber, isHome);
// }

// // with explicit data types
// {
//   const homeAddress: string = "123 Main St.";
//   const houseNumber: number = 123;
//   const isHome: boolean = true;
//   console.log(homeAddress, houseNumber, isHome);
// }

// data type is inferred as string[]
const names = ["Alice", "Bob", "Eve"];

// destructuring the array
let [alice, bob, eve] = names;
alice = "ddfg";
console.log(alice, bob, eve); // Alice Bob Eve

// go through all the names
names.forEach((name) => {
  console.log(name.toUpperCase());
});
// add a new name to the end of the list
names.push("Mallory");
// remove the last name and store it
const last = names.pop();
console.log(last); // Mallory

// mapping names to their lengths
// and specifying the data type of the array
const lengths: number[] = names.map((name) => name.length);
console.log(lengths); // [5, 3, 3]
