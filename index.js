const counter = document.querySelector('.counter');
const button = document.querySelector('button');
const p = document.querySelector('p');
body = document.querySelector('body');
let count = 0;

let timeOut;
p.style.fontSize = '60px';
p.style.color = 'purple';
button.style.fontSize = '40px';
button.style.padding = "15px 15px";
button.style.background = "purple";
button.style.marginTop = "purple";
button.style.color = "white";
body.style.marginLeft = "40px";


button.addEventListener('click', () => {
    clearTimeout(timeOut)
    count++
    counter.innerHTML = count;
  
}); 

button.addEventListener('mouseleave', () => {
    timeOut = setTimeout(() => {
        count = 0;
        counter.innerHTML = count;
    }, 5000)
});