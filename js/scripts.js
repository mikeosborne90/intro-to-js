function printOneHundred()
{
    for(i = 1; i <= 100; i++)
    {
        const oneHundredDiv = document.getElementById("oneHundred");
        let numberSpan = document.createElement("span");
        const breakLine = document.createElement("br");

        if(i % 3 == 0 && i % 5 == 0) //multiple of 3 and 5
        {
            numberSpan.innerText = "FizzBuzz,";
        }
        else if(i % 3 == 0 || i % 5 == 0) //multiple of 3 or 5
        {
            if(i % 3 == 0)
            {
                numberSpan.innerText = "Fizz,";
            }
            else            //multiple of 5
            {
                if(i == 100) //End 100th number with a period
                {
                    numberSpan.innerText = "Buzz.";
                }
                else
                {
                    numberSpan.innerText = "Buzz,";
                }
            }
        }
        else       //not a multiple of 3 or 5
        {
            numberSpan.innerText = `${i},`;
        }

        oneHundredDiv.appendChild(numberSpan);

        if(i % 10 == 0)    // break line after every 10 numbers
        {
            oneHundredDiv.appendChild(breakLine);
        }
    
    }
}

printOneHundred();