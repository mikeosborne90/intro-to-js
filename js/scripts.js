//Day5 In Class Challenge

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

//Day5 Try it Out

function convertToDogYears(years)
{
    if(isNaN(years))
    {
        console.log("This value is Not a number!");
    }
    else
    {
        return `${years*7} dog years`;
    }
}

function calculateLifetimeSupply(ageOfPersonNow, amountOfProductPerDay, maxAge)
{
    let yearsToLive = maxAge - ageOfPersonNow;
    let daysToLive = yearsToLive*365; //365 days in a year

    alert(`You will need ${amountOfProductPerDay*daysToLive}(amt of product) to last you until you're ${maxAge}.`);
}

console.log(convertToDogYears(12.5));
calculateLifetimeSupply(29, 3, 82);

//Day5 takehome

function squareNumber(number)
{
    while(isNaN(number))
    {
        number = prompt("Please enter a number!");
    }

    return number*number;
}


let userNumber = prompt("Please enter a number to square.");

alert(`Your number is now: ${squareNumber(userNumber)}.`);


function capitalizeFirstPeriodToEnd(sentence)
{
    sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);

    sentence = sentence.concat('.'); //add period to end

    console.log(sentence);
}

capitalizeFirstPeriodToEnd("i like dogs");

function flipString(sentence)
{
    let middleIndexOfSentence = Math.floor(sentence.length/2);

    let firstHalf = sentence.substring(0, middleIndexOfSentence);
    let secondHalf = sentence.substring(middleIndexOfSentence, sentence.length);

    return secondHalf.concat(firstHalf); //swap sections
}

console.log(flipString("Jacque is legit."));

function checkPalindrome(sentence)
{
    let isPalindrome = false;
    let flippedSentence = sentence.split('').reverse().join('');

    if(sentence == flippedSentence)
    {
        isPalindrome = true;
    }

    return isPalindrome;
}

let palindromeToTest = prompt("Please enter a sentence to check if it is a palindrome!");

if(checkPalindrome(palindromeToTest))
{
    alert("Your sentence was a palindrome!");
}
else
{
    alert("Sorry, that was not a palindrome...");
}