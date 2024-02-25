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

const helloWorld = "Hello, world!";
console.log(helloWorld);
// The following will throw an error since you cannot
// change the value of a const variable after declaration
// helloWorld = 123;

// const variables must have an initial value so the
// following declaration is invalid
// const age;
