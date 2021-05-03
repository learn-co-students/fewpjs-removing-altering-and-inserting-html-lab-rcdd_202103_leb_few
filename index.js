// Write your code here!
/*
let a=document.createElement("p");
document.body.appendChild(a);
let u = document.createElement('ul')

for (let i = 0; i < 3; i++) {
  let li = document.createElement('li')
  li.innerHTML = (i + 1).toString()
  u.appendChild(li)
}

element.appendChild(u);
a.className="dog";
a.className="doga";
a.classList.add("pet");
a.classList.remove("doga");
u.removeChild(u.querySelector('li:nth-child(2)'))
u.remove()*/
document.querySelector('main').remove();
const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = "MARWA School is the champion!";
