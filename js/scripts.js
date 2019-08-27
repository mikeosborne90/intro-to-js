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

//grab element from HTML
const greeting = document.getElementById("greeting");

greeting.innerHTML = "Michael's Grocery List";

//create function to add onto grocery list

function addItemToList()
{
    const groceryList = document.getElementById("groceryList"); //our ul from html
    let groceryItem = document.getElementById("groceryItem"); //user inputted grocery item
    let li = document.createElement("li"); //create new li in html

    li.appendChild(document.createTextNode(groceryItem.value)); //add grocery item to li
    groceryList.appendChild(li); //add li to ul
}