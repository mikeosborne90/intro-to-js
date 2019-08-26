//Try it Out Day 4
let movie1 = ["Pulp Fiction", "Vincent Vega", 1994];
let movie2 = ["Appocalypse Now", "Cap. Benjamin L. Willard", 1979];
let movie3 = ["Full Metal Jacket", "Joker", 1987];
let movie4 = ["Saving Private Ryan", "Private Ryan", 1998];
let movie5 = ["Eternal Sunshine of The Spotless Mind", "Joel Barish", 2004];

let favoriteMovies = [movie1, movie2, movie3, movie4, movie5];

for (let i = 0;i < favoriteMovies.length; i++)
{
    if(favoriteMovies[i][0] == "Full Metal Jacket")
    {
        alert(`${favoriteMovies[i][0]}, ${favoriteMovies[i][2]}`);
    }
}

//Takehome Day4
let numberOfItems = 3;
let toDoList = [];

for(let i = 0; i < numberOfItems; i++)
{
    toDoList.push([prompt(`Enter todo Item# ${i+1}`)]); //enter todo items as arrays
}

for(let i = 0; i < toDoList.length; i++)
{
    toDoList[i].push((i+1)*2); //add amount of days item will take
}

let longestTaskName = toDoList[0][0]; //default to first name value in list
let longestTaskDays = toDoList[0][1]; //default to first day(s) value in list
let iterator = 0;

while(iterator < toDoList.length)
{
    if(toDoList[iterator][1] > longestTaskDays)
    {
        longestTaskName = toDoList[iterator][0];
        longestTaskDays = toDoList[iterator][1];
    }
    iterator++;
}

console.log(`The longest task will be: ${longestTaskName}, it will take: ${longestTaskDays} days.`);

let j = 0;

do
{
    if(longestTaskName != toDoList[j][0])
    {
        toDoList[j].push("easy-peasy");
        alert(`${toDoList[j][0]}, is easy!`);
    }
    else
    {
        toDoList[j].push("difficult");
    }

    j++;

} while(j < toDoList.length)

console.log(toDoList);