// const turnValueUppercase = val => console.log(val.toUpperCase());
// const multipleValues = (arg1, arg2) => console.log(arg1 * arg2); //don't need return

// turnValueUppercase("hi");
// multipleValues(2,6);

// //create an array of three names
// let names = ["John", "Jacob", "Julien", "Jacque"];
// //create a greeting that will be taking in a name value
// const greeting = name => `Good evening, ${name}`;

// //test result first:
// console.log(`The array of names ${names}`, `greeting function value: ${greeting ('Example')}`);

// //loop through names and add greeting function to it

// for(j = 0; j < names.length; j++)
// {
//     console.log(greeting(names[j]));
// }

//grab elements from HTML
const groceryList = document.getElementById("groceryList");
const groceryItem = document.getElementById("groceryItem");
const greeting = document.getElementById("greeting");
const getGroceryItem = document.getElementById("getGroceryItem");

let arrayOfGroceryItems = [];

greeting.innerHTML = "Michael's Grocery List";

//create function to add onto grocery list

const addGroceryItem = (arr, value) => arr.push(value);

// console.log(addGroceryItem(arrayOfGroceryItems, "Carrots"));
// console.log(arrayOfGroceryItems);

// function addGroceryItemsAndDisplay(arr, value) 
// {
//     arr.push(value);
// }

// //goal: push array items to list on html
// function ejectGroceryItemToList(val) {
//     //grab list item

//     for (grocery = 0; grocery < arrayOfGroceryItems.length; grocery++) 
//     {
//         groceryItem.innerHTML = val;
//     }
// }

addGroceryItem("carrots");
addGroceryItem("brocolli");
