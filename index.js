// Write your code here!
let ul = document.querySelector('body');
ul.removeChild(ul.querySelector('main'));
let newHeader = document.createElement('h1');
newHeader.setAttribute("id","victory");
newHeader.innerHTML = "YOUR - NAME is the champion";
