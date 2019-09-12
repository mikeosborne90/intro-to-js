const container = document.createElement("main");
//container.className = "container";
container.classList.add("container");
// container.classList.remove("container");
document.body.appendChild(container);
container.innerHTML = "<h1>Hello</h1>";
console.log(container);

function movieQuote()
{
    alert("This is as good as it gets.");
}

let timer;

function callQuote()
{
    // let timer = setTimeout(movieQuote, 5000);
    // let timer = setInterval(movieQuote, 3000);
    timer = setInterval(movieQuote, 3000);
    console.log("triggered");
}

function stopFromRunning()
{
    let stop = clearInterval(timer);
}

const button = document.createElement("button");
button.setAttribute("onclick", "callQuote()");

button.innerText = "Click me for a movie quote";
button.className = "btn btn-primary btn-lg"

container.appendChild(button);

const stopButton = document.createElement("button");
stopButton.className = "alert alert-danger border-danger border";
stopButton.setAttribute("onclick", "stopFromRunning()");

stopButton.innerText = "STOP";

button.addEventListener("click", () =>
{
    container.appendChild(stopButton);
});

//Session Storage
sessionStorage.setItem("TEMPORARY", "Every problem is temporary");
sessionStorage.getItem("TEMPORARY");
localStorage.setItem("DEATH", "Except for death - Grace");
localStorage.getItem("DEATH");
//Local Storage