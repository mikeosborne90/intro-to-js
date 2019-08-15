// var firstName = "Michael";
// var age = 29;
// // old way
// console.log("My name is " + firstName + " and my age is " + age);
// // better way
// console.log(`My name is ${firstName} and my age is ${age}`);

// alert(`Hello, I am ${firstName}`);

// const birthday = "02/19/1990";
// let fixDate = new Date(birthday);
// console.log(fixDate);

// let hello = new String("Hello There");
// alert(hello);

let firstName = prompt("What is your First Name?");
let lastName = prompt("What is your Last Name?");

console.log(`${firstName} ${lastName}`);

alert(`You entered ${lastName} as your last name!`);

let birthday = prompt("What is your birthday?");
let correctBirthday = confirm(`${birthday}, Is this correct?`);
alert(`${birthday}`);
