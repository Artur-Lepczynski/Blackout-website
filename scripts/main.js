const wheel = document.querySelector("#wheel");
let lastAngle; 

wheel.addEventListener("click", (event)=>{
    let angle = getRandomNumber(3000);
    if(Math.abs(lastAngle - angle) < 90) angle = 90; 
    wheel.style.transform = `rotate(${angle}deg)`;
    lastAngle = angle; 
});

const decks = Array.from(document.querySelectorAll(".deck"));

decks.forEach((item, i)=>{
    item.addEventListener("click", (event)=>{
        if(decks[i].lastElementChild.classList.contains("card-hidden")){
            let randomNumber = getRandomNumber(3);
            decks[i].lastElementChild.src = `./images/Talia${i+1}/karta${randomNumber}.png`; 
        }
        decks[i].lastElementChild.classList.toggle("card-hidden");  
    });
});

function getRandomNumber(max){
    return Math.floor(Math.random() * max) + 1; 
};











