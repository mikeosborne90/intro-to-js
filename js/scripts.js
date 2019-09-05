//Structure dynamically created to html:
//body -> div.conatiner -> main.row -> div.content -> form

//----------------Setup-------------------

const body = document.body;
const container = document.createElement("div");
container.className = "container text-center";

const row = document.createElement("main");
row.className = "row";

const content = document.createElement("div");
content.className = "col-md-6 col-md-offset-2 content";

row.appendChild(content);
container.appendChild(row);
body.appendChild(container);

function createLabel(forValue, textValue)
{
    const label = document.createElement("label");

    label.setAttribute("for", forValue);
    label.innerText = textValue;

    return label;
}
//----------Form Generation Functions----------

function createInput(typeValue, nameValue, placeholderValue, classValue, idValue)
{
    const input = document.createElement("input");

    input.type = typeValue;
    input.name = nameValue;
    input.placeholder = placeholderValue;
    input.className = classValue;
    input.id = idValue;

    return input;
}

//receives array of labels and array of inputs
function createForm(name, method, action, labels, inputs)
{
    const form = document.createElement("form");

    form.name = name;
    form.method = method;
    form.action = action;

    if(labels.length == inputs.length) // equal # of labels and inputs
    {
        for(i = 0; i < labels.length; i++)
        {
            form.appendChild(labels[i]);
            form.appendChild(inputs[i]);
        }
    }
    else
    {
        console.log("Form # of labels and inputs do not match!");
    }

    const button = document.createElement("button");
    button.className = "btn-primary btn";
    button.type = "submit";
    button.innerText = "Submit";

    form.appendChild(button);

    return form;
}

//----------------Add labels and inputs to Arrays-------------------

let myLabels = [];
let label1 = createLabel("email", "Email");
let label2 = createLabel("subject", "Subject");
let label3 = createLabel("message", "Message");

myLabels.push(label1);
myLabels.push(label2);
myLabels.push(label3);

let myInputs = [];
let input1 = createInput("email", "email", "Enter Email Here","form-control", "email");
let input2 = createInput("text", "subject", "Enter Subject Here","form-control", "subject");
let input3 = createInput("text", "message", "Enter Message Here","form-control", "message");

myInputs.push(input1);
myInputs.push(input2);
myInputs.push(input3);

//----------Call createForm Function and attach to div.content-------------

let myForm = createForm("basicForm", "GET", "js/form-submission.js", myLabels, myInputs);

content.appendChild(myForm);