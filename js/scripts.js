const body = document.body;
const container = document.createElement("div");

container.className = "container text-center";

let test = body.appendChild(container);

console.log("my html: ", test);

const row = document.createElement("main");
row.className = "row";

const content = document.createElement("div");

content.className = "col-md-6 col-md-offset-2 content";

row.appendChild(content);
container.appendChild(row);
body.appendChild(container);

// form tag > input:email:t-email - input:subject:t-text - textarea:t-text - button:t-submit

const form = document.createElement("form");

form.method = "GET";
form.action = "js/form-submission.js";
form.name = "myForm";

const inputEmail = document.createElement("input");

inputEmail.name = "email";
inputEmail.type = "email";
inputEmail.className = "form-control";
inputEmail.placeholder = "Enter email here";

const inputSubject = document.createElement("input");

inputSubject.name = "subject";
inputSubject.type = "text";
inputSubject.className = "form-control";

const textArea = document.createElement("textarea");

textArea.name = "textArea";
textArea.type = "text";
textArea.className = "form-control";

const button = document.createElement("button");

button.name = "button";
button.type = "submit";

form.appendChild(inputEmail);
form.appendChild(inputSubject);
form.appendChild(textArea);
form.appendChild(button);

content.appendChild(form);

// function globalFormElements(element, elementType, elementName, elementClass, elementPlaceholder, elementTextArea = 0, elementId)
// {
//     const newElement = document.createElement(element);
    
//     newElement.setAttribute("type",elementType);
//     newElement.className = elementClass;
//     newElement.name = elementName;
//     newElement.placeholder = elementPlaceholder;
//     newElement.textArea = elementTextArea;
//     newElement.id = elementId;

//     return newElement;
// }

// console.log(globalFormElements("input", "text", "example", "form-control bg-primary", "Type your example here"));

// console.log(globalFormElements("textarea", "text", "message", "bg-danger", "Please let us know your concerns here."));

const textAreaElement = (name, placeHolder, elementClass, cols = 4, rows = 2, elementId) => 
{
    const element = document.createElement("textarea");
    element.setAttribute("type", "text");
    element.className = elementClass;
    element.setAttribute("name", name);
    element.setAttribute("placeholder", placeHolder);
    element.setAttribute("cols", cols);
    element.setAttribute("rows", rows);
    element.id = elementId;

    return element;
}

// console.log(gloabalFormElements("input", "text", "example", ))

const labelGenerator = (forElement, text) => 
{
    const label = document.createElement("label");
    label.setAttribute("for", forElement);
    label.innerText = text;

    return label;
}