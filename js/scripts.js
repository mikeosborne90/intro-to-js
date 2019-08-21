//Try it out #1
function checkEquivalence(myValue, otherValue) {
    if (myValue == otherValue) {
        console.log("Values are loosely equal.");

        if (myValue === otherValue) {
            console.log("Values are also strictly equal.")
        }
        else {
            console.log("Values are not strictly equal.")
        }
    }
    else {
        console.log("Values are not loosely or strictly equal.");
    }
}

let value1 = "catchphrase";
let value2 = new String("catchphrase");
// let value2 = "catchphrase";

checkEquivalence(value1, value2);

//Try it out #2
let number1 = prompt("Please enter a Number.", 10);
let number2 = prompt("Please enter a second Number.", 10);

number1 = parseInt(number1);
number2 = parseInt(number2);

alert(number1 + number2);

//Try it out #3
let isAdult = confirm("Are you over 18?");
let not80Plus;
let likeStarWars;
let likePrunes;

if (isAdult) {
    not80Plus = confirm("Are you less than 80?");

    if (not80Plus) {
        likeStarWars = confirm("Do you like Star Wars?");

        if (!likeStarWars) {
            alert("How is this possible?");
        }
    }
    else {
        likePrunes = confirm("Do you like prunes?");

        if (likePrunes) {
            alert("I guess they're healthy...");
        }
        else {
            alert("I don't like prunes either!");
        }
    }
}
else {
    alert("Sorry you are not old enough!");
}

//Take Home
const H1 = document.getElementById('greeting');
let userName = prompt("Enter Name: ");
let favColor = prompt("Choose your preferred color: red, orange, yellow, green, blue, pink, purple, black, white, and grey.");

switch (favColor) {
    case "red":
        H1.style.backgroundColor = 'red';
        H1.innerHTML = `You chose ${favColor}.. which reminds me of that song, Lady in red...`;
        break;
    case "orange":
        H1.style.backgroundColor = 'orange';
        H1.innerHTML = `You chose ${favColor} orangatang`;
        break;
    case "yellow":
        H1.style.backgroundColor = 'yellow';
        H1.innerHTML = `You chose ${favColor}, you must like Coldplay!`;
        break;
    case "green":
        H1.style.backgroundColor = 'green';
        H1.innerHTML = `You chose ${favColor}, you must like Nature?`;
        break;
    case "blue":
        H1.style.backgroundColor = 'blue';
        H1.innerHTML = `You chose ${favColor} I'm blue dabadee`;
        break;
    case "pink":
        H1.style.backgroundColor = 'pink';
        H1.innerHTML = `You chose ${favColor}, pinkie!`;
        break;
    case "purple":
        H1.style.backgroundColor = 'purple';
        H1.innerHTML = `You chose ${favColor}, do you like eggplant?`;
        break;
    case "black":
        H1.style.backgroundColor = 'black';
        H1.innerHTML = `You chose ${favColor}, you must like space?`;
        break;
    case "white":
        H1.style.backgroundColor = 'white';
        H1.innerHTML = `You chose ${favColor}, little plain don't you think?`;
        break;
    case "grey":
        H1.style.backgroundColor = 'grey';
        H1.innerHTML = `You chose ${favColor}, do you prefer cloudy days?`;
        break;
    default:
        H1.innerHTML = "You didn't enter the color name correctly!";
        break;
}