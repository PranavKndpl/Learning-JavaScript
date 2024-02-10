const box= document.getElementById("box");

box.addEventListener("click" , () => {
    box.textContent= "😊";
    box.style.background="yellow";
})

box.addEventListener("mouseover" , () => {
    box.textContent= "😶";
    box.style.background="green";
})

box.addEventListener("mouseout" ,() => {
    box.textContent= "😞";
    box.style.background="rgb(86, 86, 213)";
})

const moveAmount=10;
let x=0;
let y=0;
document.addEventListener("keydown", event =>{
    if(event.key.startsWith("Arrow")){

        event.preventDefault();

        switch(event.key){
            case("ArrowUp"):
            y-=moveAmount;
            break;

            case("ArrowDown"):
            y+=moveAmount;
            break;

            case("ArrowLeft"):
            x-=moveAmount;
            break;

            case("ArrowRight"):
            x+=moveAmount;
            break;
        }

        box.style.top= `${y}px`;
        box.style.left= `${x}px`;


    }
})

document.addEventListener("keydown" ,() => {
    box.textContent= "😮";
    box.style.background="rgb(219, 64, 64)";
    box.style.boxShadow= "5px 5px 30px gold";
})

document.addEventListener("keyup" ,() => {
    box.textContent= "😞";
    box.style.background="rgb(86, 86, 213)";
    box.style.boxShadow= "none";
})