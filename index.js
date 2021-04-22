// Write your code here!
const body = document.body;
const main = document.getElementById('main')
main.remove();

const newHeader = document.createElement("h1")
newHeader.setAttribute('id','victory')
newHeader.innerHTML = `Mohamad is the champion`;
body.appendChild(newHeader);
