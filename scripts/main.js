const wheel = document.querySelector("#wheel");

wheel.addEventListener("click", (event)=>{
    let angle = Math.floor(Math.random() * 5000);
    wheel.style.transform = `rotate(${angle}deg)`;
    console.log(angle);
});
