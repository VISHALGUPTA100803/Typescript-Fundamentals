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
// const names = ["Alice", "Bob", "Eve"];

// // destructuring the array
// let [alice, bob, eve] = names;
// alice = "ddfg";
// console.log(alice, bob, eve); // Alice Bob Eve

// // go through all the names
// names.forEach((name) => {
//   console.log(name.toUpperCase());
// });
// // add a new name to the end of the list
// names.push("Mallory");
// // remove the last name and store it
// const last = names.pop();
// console.log(last); // Mallory

// // mapping names to their lengths
// // and specifying the data type of the array
// const lengths: number[] = names.map((name) => name.length);
// console.log(lengths); // [5, 3, 3]

// a variable whose type is a union of string and number
// meaning that this variable can be either a string or a number
// let nameOrAge: string | number = "John";
// console.log(nameOrAge);
// nameOrAge = 25;
// console.log(nameOrAge);

// this is invalid since the declared type is string | number
// but the value we are assigning to this variable is an array
// of type (string | number)[] (an array of strings and numbers)
// nameOrAge = ['John', 25];
// an array of strings and numbers
// let namesAndAges: (string | number)[] = [
//   "John",
//   40,
//   "Jane",
//   50,
//   60,
//   "Adam",
//   "Eve",
// ];
// namesAndAges.push(30);
// console.log(namesAndAges);

// function plus(a: number, b: number): number {
//   return a + b;
// }

// function concat(a: string, b: string): string {
//   return a + b;
// }

// console.log(plus(1, 2));
// console.log(concat("a", "b"));

// function extractValue<Type>(atIndex: number, from: Type[]): Type | undefined {
//   return from[atIndex];
//}
function extractValue<Type> (atIndex: Number, from:)
const firstValue = extractValue(0, [1, 2, 3]); // Type is number
const secondValue = extractValue(1, [1, 2, 3]); // Type is number
const thirdValue = extractValue(2, [1, 2, 3]); // Type is number
const fourthValue = extractValue(3, [1, 2, 3]); // Type is undefined
console.log(firstValue, secondValue, thirdValue, fourthValue);