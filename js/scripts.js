let bbQuote = document.createElement("h1");
bbQuote.className = "text-center";
const body = document.getElementsByTagName("body")[0];
body.appendChild(bbQuote);

//Plain HTTPS request and json returned.
function queryRandomUserAPI() {
  var url = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes';
  fetch(url) // Call the fetch function passing the url of the API as a parameter
    .then(function(resp){
      return resp.json()// Transform the data into json
    })
    .then(function(data) {
      bbQuote.innerHTML = data[0].quote +" - " + data[0].author;
      console.log(data);
      //How can we display this data?
    })
    .catch(function() {
        // This is where you run code if the server returns any errors
    });
};

queryRandomUserAPI();

// const exampleJson = '{"name": "Michael", "age": 29}';
// const exampleTwo = '{"random": "phrase": "This is suppa cool!"}';

// const exampleParse = JSON.parse(exampleJson);
// const exampleStringify = JSON.stringify(exampleTwo);
// console.log(exampleStringify);

// function practiceScope()
// {
//     let random = "Inside scope";
//     const phrase = function ()
//     {
//         console.log(random);
//     }

//     return phrase();
// }

// let practiceOutside = practiceScope();

// const example = [1,2,3];

// const exampleBreakdown = example.forEach( (val) => 
// {
//     return val + 5;
// });

// console.log(exampleBreakdown);

// https://dog.ceo/api/breed/!!!!/images/random
class Dog 
{
    constructor(breed) 
    {
      this.breed = breed;
    }

    //slightly more complicated example using same structure
    fetchDogPicture() {
    //How can we dynamically get queryCategory and query?
    
    const url =`https://dog.ceo/api/breed/${this.breed}/images/random`;
    fetch(url)
    .then(function(resp){
      return resp.json()// Transform the data into json
    })
    .then(function(data) {
      const dogPic = document.createElement("img");

      dogPic.className = "center-block";
      dogPic.setAttribute("src", data.message);

      body.appendChild(dogPic);
      console.log(data);
    })
    .catch(function(err) {
      console.log(err);
    })
  }
}

let myDog = new Dog("dane");
myDog.fetchDogPicture();


class Produce
{
    constuctor(name, price, organic)
    {
        this.name = name;
        this.price = price;
        this.organic = organic;
    }
}

const cherry = new Produce("Cherry", 2.99, false);

console.log(cherry);

const produce = '{"Cherry": {"price": 2.99, "organic": false}}, "Orange": { "price": 1.99, "organic": true}';

console.log(JSON.parse(produce));

//import {ProduceApi } from '../js/produceapi.js';

