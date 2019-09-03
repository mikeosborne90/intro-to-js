// const container = document.querySelector(".container");
// console.log(container);

// // const h1 = document.getElementsByTagName("h1");
// const h1 = document.querySelector("h1");

// // console.log(h1);
// // let message = h1.innerHTML = "I am a message.";
// // // console.log(h1.textContent);

// function globalListItems()
// {
//     //create ul/ol, li, any classes or attributes or ids needed

//     //create ul
//     const ul = document.createElement("ul");

//     const li = document.createElement("li");
//     //attributes/classes/id
//     li.className = "list-group-item list-group-item-info";
//     li.innerText = "I am a list item.";
//     li.id = "mySpecialListItem";

//     const image = document.createElement("img");
//     image.setAttribute("alt", "I am an empty image");

//     console.log(image);

//     //append to container->ul->li
//     ul.appendChild(li);

//     container.appendChild(ul);
// }

// globalListItems();

// const container = document.querySelector(".container");
// const button = document.createElement("button");
// button.id = "triggerMagic";
// button.className = "btn btn-primary"
// container.appendChild(button);

const body = document.querySelector("body")

const div = document.createElement("div");
div.className = "panel text-center col-md-6";

const div2 = document.createElement("div");
div2.className = "col-md-6";

const h1 = document.createElement("h1");
h1.innerText = "Item";

const img = document.createElement("img");
img.className = "img-responsive";
img.setAttribute("src", "img/hero_4.jpeg");
img.setAttribute("alt", "Example Image");

const p = document.createElement("p");
p.innerText = "Example Paragraph...";

const i = document.createElement("i");
i.className = "fab fab-facebook";

const a = document.createElement("a");
a.setAttribute("href", "facebook.com");
a.setAttribute("role", "btn");

i.appendChild(a);
div2.appendChild(h1);
div2.appendChild(img);
div2.appendChild(p);
div2.appendChild(i);

div.appendChild(div2);

body.appendChild(div);