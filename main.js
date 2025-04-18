let d1 = document.querySelector('#d1');
let d2 = document.querySelector('#d2');
let d3 = document.querySelector('#d3');
let d4 = document.querySelector('#d4');
let d5 = document.querySelector('#d5');
let d6 = document.querySelector('#d6');
let d7 = document.querySelector('#d7');
let d8 = document.querySelector('#d8');
let d9 = document.querySelector('#d9');
let d10 = document.querySelector('#d10');
let d11 = document.querySelector('#d11');
let d12 = document.querySelector('#d12');
let d13 = document.querySelector('#d13');
let d14 = document.querySelector('#d14');
let d15 = document.querySelector('#d15');
let d16 = document.querySelector('#d16');

let rndm =Math.floor(Math.random()*16 + 1);
console.log(rndm);

let overSound = new Audio('music/gameover.mp3');
let startSound = new Audio('music/gamewin.mp3');

let count = 0;

function gameOverlay(){
    let gameOverScreen = document.querySelector('#gameOver');
    gameOverScreen.style.display = 'flex';

}

function gameOverSound(){
    overSound.play();
}

function gameWinSound(){
    startSound.play();
}

function gameWinOverlay(){
    let gameWinScreen = document.querySelector('#gameWon');
    gameWinScreen.style.display = 'flex';

}


if(rndm==1){
    d1.addEventListener("click", ()=>{
        d1.style.backgroundColor = "red";
        // d1.innerText = 1;
        gameOverSound();
        gameOverlay()
    })
}else {
    d1.addEventListener("click", ()=>{
        d1.style.backgroundColor = "green";
        // d1.innerText = 1;
        count++;
        if(count==15){
            gameWinOverlay()
            gameWinSound()

        }

})}

if(rndm==2){
    d2.addEventListener("click", ()=>{
        d2.style.backgroundColor = "red";
        // d2.innerText = 1;
        gameOverSound();
        gameOverlay()
    })
}else {
    d2.addEventListener("click", ()=>{
        d2.style.backgroundColor = "green";
        // d2.innerText = 1;
        count++;
        if(count==15){
            gameWinOverlay()
            gameWinSound()

        }


})}

if(rndm==3){
    d3.addEventListener("click", ()=>{
        d3.style.backgroundColor = "red";
        // d3.innerText = 1;
        gameOverSound();
        gameOverlay()
    })
}else {
    d3.addEventListener("click", ()=>{
        d3.style.backgroundColor = "green";
        // d3.innerText = 1;
        count++;
        if(count==15){
            gameWinOverlay()
            gameWinSound()

        }

})}

if(rndm==4){
    d4.addEventListener("click", ()=>{
        d4.style.backgroundColor = "red";
        // d4.innerText = 1;
        gameOverSound();
        gameOverlay()
    })
}else {
    d4.addEventListener("click", ()=>{
        d4.style.backgroundColor = "green";
        // d4.innerText = 1;
        count++;
        if(count==15){
            gameWinOverlay()
            gameWinSound()

        }

})}

if(rndm==5){
    d5.addEventListener("click", ()=>{
        d5.style.backgroundColor = "red";
        // d5.innerText = 1;
        gameOverSound();
        gameOverlay()
    })
}else {
    d5.addEventListener("click", ()=>{
        d5.style.backgroundColor = "green";
        // d5.innerText = 1;
        count++;
        if(count==15){
            gameWinOverlay()
            gameWinSound()

        }

})}

if(rndm==6){
    d6.addEventListener("click", ()=>{
        d6.style.backgroundColor = "red";
        // d6.innerText = 1;
        gameOverSound();
        gameOverlay()
    })
}else {
    d6.addEventListener("click", ()=>{
        d6.style.backgroundColor = "green";
        // d6.innerText = 1;
        count++;
        if(count==15){
            gameWinOverlay()
            gameWinSound()

        }

})}

if(rndm==7){
    d7.addEventListener("click", ()=>{
        d7.style.backgroundColor = "red";
        // d7.innerText = 1;
        gameOverSound();
        gameOverlay()
    })
}else {
    d7.addEventListener("click", ()=>{
        d7.style.backgroundColor = "green";
        // d7.innerText = 1;
        count++;
        if(count==15){
            gameWinOverlay()
            gameWinSound()

        }

})}

if(rndm==8){
    d8.addEventListener("click", ()=>{
        d8.style.backgroundColor = "red";
        // d8.innerText = 1;
        gameOverSound();
        gameOverlay()
    })
}else {
    d8.addEventListener("click", ()=>{
        d8.style.backgroundColor = "green";
        // d8.innerText = 1;
        count++;
        if(count==15){
            gameWinOverlay()
            gameWinSound()

        }

})}

if(rndm==9){
    d9.addEventListener("click", ()=>{
        d9.style.backgroundColor = "red";
        // d9.innerText = 1;
        gameOverSound();
        gameOverlay()
    })
}else {
    d9.addEventListener("click", ()=>{
        d9.style.backgroundColor = "green";
        // d9.innerText = 1;
        count++;
        if(count==15){
            gameWinOverlay()
            gameWinSound()

        }

})}

if(rndm==10){
    d10.addEventListener("click", ()=>{
        d10.style.backgroundColor = "red";
        // d10.innerText = 1;
        gameOverSound();
        gameOverlay()
    })
}else {
    d10.addEventListener("click", ()=>{
        d10.style.backgroundColor = "green";
        // d10.innerText = 1;
        count++;
        if(count==15){
            gameWinOverlay()
            gameWinSound()

        }

})}

if(rndm==11){
    d11.addEventListener("click", ()=>{
        d11.style.backgroundColor = "red";
        // d11.innerText = 1;
        gameOverSound();
        gameOverlay()
    })
}else {
    d11.addEventListener("click", ()=>{
        d11.style.backgroundColor = "green";
        // d11.innerText = 1;
        count++;
        if(count==15){
            gameWinOverlay()
            gameWinSound()

        }

})}

if(rndm==12){
    d12.addEventListener("click", ()=>{
        d12.style.backgroundColor = "red";
        // d12.innerText = 1;
        gameOverSound();
        gameOverlay()
    })
}else {
    d12.addEventListener("click", ()=>{
        d12.style.backgroundColor = "green";
        // d12.innerText = 1;
        count++;
        if(count==15){
            gameWinOverlay()
            gameWinSound()

        }

})}

if(rndm==13){
    d13.addEventListener("click", ()=>{
        d13.style.backgroundColor = "red";
        // d13.innerText = 1;
        gameOverSound();
        gameOverlay()
    })
}else {
    d13.addEventListener("click", ()=>{
        d13.style.backgroundColor = "green";
        // d13.innerText = 1;
        count++;
        if(count==15){
            gameWinOverlay()
            gameWinSound()

        }

})}

if(rndm==14){
    d14.addEventListener("click", ()=>{
        d14.style.backgroundColor = "red";
        // d14.innerText = 1;
        gameOverSound();
        gameOverlay()
    })
}else {
    d14.addEventListener("click", ()=>{
        d14.style.backgroundColor = "green";
        // d14.innerText = 1;
        count++;
        if(count==15){
            gameWinOverlay()
            gameWinSound()

        }

})}

if(rndm==15){
    d15.addEventListener("click", ()=>{
        d15.style.backgroundColor = "red";
        // d15.innerText = 1;
        gameOverSound();
        gameOverlay()
    })
}else {
    d15.addEventListener("click", ()=>{
        d15.style.backgroundColor = "green";
        // d15.innerText = 1;
        count++;
        if(count==15){
            gameWinOverlay()
            gameWinSound()

        }

})}

if(rndm==16){
    d16.addEventListener("click", ()=>{
        d16.style.backgroundColor = "red";
        // d16.innerText = 1;
        gameOverSound();
        gameOverlay()
    })
}else {
    d16.addEventListener("click", ()=>{
        d16.style.backgroundColor = "green";
        // d16.innerText = 1;
        count++;
        if(count==15){
            gameWinOverlay()
            gameWinSound()

        }

})}
