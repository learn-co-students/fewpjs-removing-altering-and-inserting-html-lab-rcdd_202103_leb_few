let element = document.createElement('div');
document.body.appendChild(element);
let ul = document.createElement('ul');

for (let i = 0; i < 3; i++) {
let li = document.createElement('li');
li.innerHTML = (i + 1).toString();
ul.appendChild(li);
}

element.appendChild(ul);

document.getElementById('main').remove();

var newHeader = document.createElement('h1');
newHeader.setAttribute("id","victory");
newHeader.innerHTML = "Ali is the champion";
innerText = document.createTextNode("Ali is the champion");
newHeader.appendChild(innerText);
document.body.appendChild(newHeader);
