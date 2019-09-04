let title = prompt("Title?");

titleH1 = document.getElementById("title");
titleH1.innerText = title;

let activities = prompt("What did you do today?");

sentencesP = document.getElementById("sentences");
sentencesP.innerText = activities;

function isValidColor(strColor) //verifies color entered works
{
    let test = new Option().style;
    test.color = strColor;

    if(test.color == strColor)
    {
        return true;
    }
    else
    {
        return false;
    }
}

let favColor = prompt("Favorite Color? [i.e: red, blue, salmon...]");
favColor = favColor.toLowerCase();

while(!isValidColor(favColor))
{
    favColor = prompt("Not valid Color! Try again.");
    favColor = favColor.toLowerCase();
}

sentencesP.style.backgroundColor = favColor;