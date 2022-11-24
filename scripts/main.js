const wheel = document.querySelector("#wheel");

wheel.addEventListener("click", (event)=>{
    let angle = Math.floor(Math.random() * 5000);
    wheel.style.transform = `rotate(${angle}deg)`;
    console.log(angle);
});

const decks = Array.from(document.querySelectorAll(".deck"));
const flipped = [false, false, false];

decks.forEach((item, i)=>{
    item.addEventListener("click", (event)=>{
        
        decks[i].src 
        
    });
});













