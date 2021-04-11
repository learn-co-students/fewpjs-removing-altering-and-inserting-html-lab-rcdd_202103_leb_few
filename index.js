// Write your code here!

let m1 = document.querySelector("main#main");
m1.remove();

let newHeader = document.createElement('h1');
document.body.appendChild(newHeader).id = "victory"
newHeader.innerHTML = "YOUR-NAME is the champion";

/*newheader.id = "victory";

newheader.innerHTML = "YOUR-NAME is the champion";*/