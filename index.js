// Write your code here!
const main = document.getElementById('main');
main.remove();
let newHeader = document.createElement('h1');
document.body.appendChild(newHeader);
// document.querySelector('h1').setAttribute("id", "victory");
// document.querySelector('h1').innerText = "YOUR-NAME is the champion";
newHeader.setAttribute("id", "victory");
newHeader.innerHTML = "NOUR is the champion";
