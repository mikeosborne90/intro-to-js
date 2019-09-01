//In class challenge Day6
magicButton.addEventListener("click", () => {
    alert("Magic Button Clicked!");
});

btnDiv.addEventListener("mouseover", () => {
    btnDiv.style.backgroundColor = "#aabaaa";
});

btnDiv.addEventListener("mouseout", () => {
    btnDiv.style.backgroundColor = "#09AAAA";
});

document.addEventListener("keyup", () => {
    btnH1.style.color = "#fff";
});

document.addEventListener("keydown", () => {
    btnH1.style.color = "#000";
});

// takes user to facebook on any click, commented out for less annoyance :-)
// document.addEventListener("click", () =>
// {
//     window.location = "https://www.facebook.com/";
// });

//Take Home Day6

let myScale = prompt("Enter f or c to convert!");

while (myScale != 'f' && myScale != 'c') //make sure only 'f' or 'c' given
{
    myScale = prompt("Enter f or c to convert!")
}

let myTemp = prompt("Enter a temp(number) to convert!");

while (isNaN(myTemp))                    //make sure a number is given
{
    myTemp = prompt("Enter a temp(number) to convert!");
}

function convertTemperature(scale, temp) 
{
    if (scale == 'f') //convert f to c
    {
        return ((temp - 32) * (5 / 9));
    }
    else if (scale == 'c')  //convert c to f
    {
        return ((temp * (9 / 5)) + 32);
    }
    else 
    {
        alert("You must enter f or c!");
    }
}

document.getElementById("temp").innerHTML = `${myTemp}&deg${myScale.toUpperCase()}`;

temp.addEventListener("click", () => 
{
    myTemp = convertTemperature(myScale, myTemp).toFixed(1); //set to one decimal for degrees

    //change value of myScale after conversion
    if (myScale == 'f') 
    {
        myScale = 'c';
    }
    else 
    {
        myScale = 'f';
    }

    document.getElementById("temp").innerHTML = `${myTemp}&deg${myScale.toUpperCase()}`;
});