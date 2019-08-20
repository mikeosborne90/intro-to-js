const exampleString = "I am a string.";
const exampleObjectString = new String(1);
const anotherString = "I am a string.";
const H1 = document.getElementById('greeting');

// console.log(H1); testing only

// function checkExamples() {
//     // if (exampleString == exampleObjectString) 
//     // {
//     //     console.log(`Yes, ${exampleString} and ${exampleObjectString} do loosely equal.`);
//     // }
//     if (exampleString === anotherString) 
//     {
//         console.log(`Yes, ${exampleString} and ${anotherString} do loosely equal.`);
//     }
//     else 
//     {
//         console.log("Sorry, theyare equal all.");
//     }
// }

// checkExamples();

// const luckyNumber = 5;

// if(luckyNumber === 5 || luckyNumber == '3' )
// {
//     console.log("Sorry, your number is not lucky to me.");
// }
// else
// {
//     console.log(`Hey you're lucky number is ${luckyNumber}.`);
// }

// function checkEquivalence(myValue, otherValue)
// {
//     if(myValue == otherValue)
//     {
//         console.log("Values are loosely equal.");

//         if(myValue === otherValue)
//         {
//             console.log("Values are also strictly equal.")
//         }
//         else
//         {
//             console.log("Values are not strictly equal.")
//         }
//     }
//     else
//     {
//         console.log("Values are not loosely or strictly equal.");
//     }
// }

// let value1 = "catchphrase";
// let value2 = new String("catchphrase");
// // let value2 = "catchphrase";

// checkEquivalence(value1, value2);

// let a = 5;
// let b = 2;

// let result = a - b;

// console.log(result);

// let a = '5.99';
// // let transformMe = parseInt(a);
// let transformMe = parseFloat(a,2);

// console.log(`Before ${a}, after: ${transformMe}`, typeof(a), typeof(transformMe));

// ternary operators
// let valueNan = "I am indeen NaN";
// let testNan = isNaN(valueNan);
// let result;

// testNan ? result = "This is true." : result = console.log("This is false.");

// H1.innerHTML = result;

// const askColor = prompt("Pick one of the following colors: red, blue, or orange.");

// switch(askColor)
// {
//     case "red":
//         H1.style.backgroundColor = 'red';
//         H1.innerHTML = `You chose ${askColor}.. which reminds me of that song, Lady in red...`;
//         break;
//     case "blue":
//         H1.style.backgroundColor = 'blue';
//         H1.innerHTML = `You chose ${askColor} I'm blue dabadee`;
//         break;
//     case "orange":
//         H1.style.backgroundColor = 'orange';
//         H1.innerHTML = `You chose ${askColor} orangatang`;
//         break;
//     default:
//         H1.innerHTML = "You didn't enter the color name correctly!";
//         break;
// }