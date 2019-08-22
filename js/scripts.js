// const greeting = "hello";

// if(greeting === "hi")
// {
//     console.log("Yes, this matches to HI");
// }
// else if(greeting === "hello")
// {
//     console.log("Yes, this matched HELLO");
// }
// else if(greeting == 1)
// {
//     console.log("Yeah this matches an integer of one.");
// }
// else
// {
//     console.log("None of them matched.");
// }

// let myArrayOfRandomInfo = ["Full Metal Jacket", 19, true, "2008"];

// console.log(myArrayOfRandomInfo);
// console.log(Array.isArray(myArrayOfRandomInfo));
// myArrayOfRandomInfo.push("I Like Waterpolo"); // adds on to end of array
// myArrayOfRandomInfo.unshift("I am now number one"); //adds to beginning of array

// console.log(myArrayOfRandomInfo[0]);
// myArrayOfRandomInfo.shift(); //removes first element in array
// myArrayOfRandomInfo.pop(); //removes first element

// myArrayOfRandomInfo.splice(1,1,5); //position, (1 overwrite, 0 to add prior), 3rd param: content value
// console.log(myArrayOfRandomInfo);

// myArrayOfRandomInfo = myArrayOfRandomInfo.slice(1);
// console.log(myArrayOfRandomInfo);

// let findPos = myArrayOfRandomInfo.indexOf("2008");
// console.log(myArrayOfRandomInfo.indexOf("2008"));

// let refreshed = myArrayOfRandomInfo.splice(findPos, 1);
// console.log(refreshed);

// let movie1 = ["Pulp Fiction", "Vincent Vega"];
// let movie2 = ["Appocalypse Now", "Cap. Benjamin L. Willard"];
// let movie3 = ["Full Metal Jacket", "Joker"];
// let movie4 = ["Saving Private Ryan", "Private Ryan"];
// let movie5 = ["Eternal Sunshine of The Spotless Mind", "Joel Barish"];

// let favoriteMovies = [movie1, movie2, movie3, movie4, movie5];
// let favoriteMovieTitles = [movie1[0],movie2[0],movie3[0],movie4[0],movie5[0]];
// alert(favoriteMovieTitles);
// let topBottomPick = [favoriteMovieTitles[2],favoriteMovieTitles[4]];
// console.log(topBottomPick);
// alert(`Length of favorite movies array is: ${favoriteMovies.length}`);


// let x = 0;

// while(x < 10)
// {
//     console.log(x);
//     x++;
// }

// for (let i = 0; i < 20; i++)
// {
//     console.log(i);
// }

// let i = 0;

// do
// {
//     console.log(i);
//     i++;
// } while(i < 10)

let arr3 = [1,2,3,4,5];

// arr3.forEach(function(x){console.log(x)});

// let myString = "Hi, my name is Dj";

// for (i of myString)
// {
//     console.log(i);
// }

let people = 
[
    { 
        firstName : "Dj", 
        lastName : "Rodriguez", 
        age : 22
    },
    { 
        firstName : "John", 
        lastName : "Doe", 
        age : 30
    }
];

for (person of people)
{
    console.log(person.firstName);
}


