function numberguess(){
    window.alert("enter the range you want to play in");
    min=Number(window.prompt("enter the minimum value:"));
    max=Number(window.prompt("enter the maximum value:"));
    let guess= Math.floor(Math.random() *(max-min)) +min;
    console.log(guess);
    window.alert(`guess the number between ${min} and ${max}`)
    while(true){

        let x=window.prompt("enter the number");

        if(x==guess){
            window.alert("you are correct!");
            break;
        }

        else if(x==="" || x==null){                             // or x==""
            window.alert("please enter some value")
        }

        else if(x<guess){
            window.alert("number is low, try again");
        }

        else if(x>guess){
            window.alert("number is high, try again");
        }

        else{
            window.alert("error , try again")
        }
    }
}

function roll(){
    const dies= document.getElementById("nodie").value
    const res= document.getElementById("dievalue");
    const images= document.getElementById("diceimg");
    let val=[];
    let img=[];
    
    for(let i=0;i<dies;i++){
        const value= Math.floor(Math.random() *6)+1;
        val.push(value);
        img.push(`<img src="../dice_images/${value}.jpg" alt= dice${value}>`)
    }
    res.textContent= `die: ${val.join(", ")}`;
    images.innerHTML= img.join("  ");
}

