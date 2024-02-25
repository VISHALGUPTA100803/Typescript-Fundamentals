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
// function extractValue<Type> (atIndex: number, from: Type[]) : Type | undefined {
//   return from[atIndex];
// }
// const firstValue = extractValue(0, [1, 2, 3]); // Type is number
// const secondValue = extractValue(1, [1, 2, 3]); // Type is number
// const thirdValue = extractValue(2, [1, 2, 3]); // Type is number
// const fourthValue = extractValue(3, [1, 2, 3]); // Type is undefined
// console.log(firstValue, secondValue, thirdValue, fourthValue);

// class Circle {
  
//   x: number;
//   y: number;
//   radius: number;
//   constructor(x: number, y: number, radius: number) {
//     this.x = x;
//     this.y = y;
//     this.radius = radius;
//   }
//   area(): number {
//     return Math.PI * this.radius * this.radius;
//   }
// }

// const circle = new Circle(10, 20, 30);
// console.log(circle.x); // 10
// console.log(circle.y); // 20
// console.log(circle.radius); // 30
// console.log(circle.area()); // 2827.4333882308138

// enum Color {
//   Red = 1,
//   Green = 2,
//   Blue = 3,
// }

// class Vehicle {
//   constructor(public color: Color) {}
// }

// class Car extends Vehicle {
//   constructor(public wheels: number, color: Color) {
//     super(color);
//   }
// }

// class RedCar extends Car {
//   constructor(public wheels: number) {
//     super(wheels, Color.Red);
//   }
// }

// const redCar = new RedCar(4);
// console.log(redCar.wheels); // 4
// console.log(redCar.color); // Color.Red

// class Person {
//   constructor(public name: string) {}
// }

// class Employee extends Person {
//   constructor(name: string, protected department: string) {
//     super(name);
//   }
// }

// class Manager extends Employee {
//   constructor(name: string, department: string, private reports: Employee[]) {
//     super(name, department);
//   }
//   // this exposes an aspect of an otherwise private field
//   // to the public interface of the class
//   reportCount: number = this.reports.length;
//   describe() {
//     console.log(`Manager: ${this.name}`);
//     console.log(`Department: ${this.department}`);
//     console.log(`Reports: ${this.reportCount}`);
//   }
// }

// const manager = new Manager("Alice", "Sales", [
//   new Employee("Bob", "Sales"),
//   new Employee("Eve", "Sales"),
// ]);



// // not accessible outside the class
// // console.log(manager.reports); // error: this wont' compile

// manager.describe();
// console.log(manager.reportCount);

//PROMISES
class User {
  constructor(public username: string) {}
}

function logIn(username: string, password: string): Promise<User> {
  return new Promise<User>((resolve, reject) => {
    // do some async work
    if (password !== "password") reject("Invalid password");
    resolve(new User(username));
  });
}

const test = async () => {
  try {
    // correct password
    const user = await logIn("john", "password");
    console.log(user); // User { username: 'john' }
    // incorrect password, will throw error
    const user2 = await logIn("john", "password2");
    console.log(user2);
  } catch (error) {
    // error from `user2` creation
    console.log(error);
  }
};

test();
