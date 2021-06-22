const grid1 = document.querySelector(".grid1");
const grid2 = document.querySelector(".grid2");
let tiles1 = Array.from(document.querySelectorAll(".tile"));
let tiles2 = Array.from(document.querySelectorAll(".til"));
const resetButton = document.querySelector('.resetbutton');
const startButton = document.querySelector('.startbutton');
 let moves = document.getElementById("move");
 let moval=0;

startButton.onclick=function start(){
    startsound.play();                                         //starting and randomizing
   startButton.innerHTML = "RESET";
    startTimer();

        moval = 0;    
        moves.innerHTML = moval;   
       let jumbled2 = shuffle(colors2);
      
   
       tiles2.forEach((color, i) => {
           color.style.backgroundColor = jumbled2[i];
       });
       
       let jumbled1 = shuffle(colors1);
       
       tiles1.forEach((color, i) => {
           color.style.backgroundColor = jumbled1[i];
       
       });
       resetTimer();}

    let victory = new Audio();                                     //for the sound effects
    victory.src = "winsound.mp3";

    let startsound = new Audio();
    startsound.src = "start.wav";

    let tilesound = new Audio();
    tilesound.src = "tile.wav";

tiles2.forEach((color,i) => {
    color.addEventListener('click', event => {

      check(i);
    })
  })
function shuffle(array){
                                                                    //for shuffling the colours
for (let i = array.length - 1; i >=0; i--)
{   let temp =0;
    let j = Math.floor(Math.random() * (i+1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
return array;
}




const colors1= ["Red", "Blue","#22c022", 
                "Yellow", "Yellow","Orange", 
                "Violet", "Violet","Orange"]

const colors2= ["Red", "Red", "Red", "Red", 
                "Blue", "Blue", "Blue", "Blue", 
                "#22c022", "#22c022", "#22c022", "#22c022",
                "Yellow", "Yellow", "Yellow", "Yellow",
                "Orange", "Orange", "Orange", "Orange", 
                "Violet", "Violet", "Violet", "Violet",
            "Black"]


            


 const check = (i) =>{                           //checking if the tile adjacent to the clicked tile is black
 
    
 if(i !== 0 && i !==5 && i !==10&&i !==15&&i !==20)
      { if(tiles2[i-1].style.backgroundColor === 'black')
       {
           
          swap(i,i-1);
       }
      }

if(i !== 4&&i !==9&&i !==14&&i !==19&&i !==24)
{
       if( tiles2[i+1].style.backgroundColor === 'black')
       {
        swap(i,i+1);
       }
    }       
 if(i !== 0&&i !==1&&i !==2&&i !==3&&i !==4)
     {  
         if( tiles2[i-5].style.backgroundColor === 'black')
       {
        swap(i,i-5);
       }
    }
 if(i !== 20&&i !==21&&i !==22&&i !==23&&i !==24)
     {  if( tiles2[i+5].style.backgroundColor === 'black')
       {
        swap(i,i+5);
       }
    }
}

function swap(a,b){                                    //for swapping the black tile with the clicked one
    moval++;
    moves.innerHTML = moval;
    tilesound.play();
   
    let temp = tiles2[a].style.backgroundColor;
    tiles2[a].style.backgroundColor = tiles2[b].style.backgroundColor;
    tiles2[b].style.backgroundColor = temp;

    win();
}

function win(){                                      //conditions for winning
    let x=0;
for(i=0;i<=2;i++)
{
    if(tiles1[i].style.backgroundColor === tiles2[i+6].style.backgroundColor)
    {
        x++;  
    }
}    
for(i=3;i<=5;i++)
{
    if(tiles1[i].style.backgroundColor === tiles2[i+8].style.backgroundColor)
    {
        x++;  
    }
}    
for(i=6;i<=8;i++)
{
    if(tiles1[i].style.backgroundColor === tiles2[i+10].style.backgroundColor)
    {
        x++;  
    }
}

if(x === 9){
    alert("you win!");
  victory.play();
  stopTimer();
  location.reload();
}

}

const timer = document.getElementById('timer');            //setting and controlling the stopwatch
var min = 0;
var sec = 0;
var stoptime = true;

function startTimer() {
  if (stoptime === true) {
        stoptime = false;
        timerCycle();
    }
}
function stopTimer() {
  if (stoptime === false) {
    stoptime = true;
  }
}

function timerCycle() {
    if (stoptime === false) {
    sec = parseInt(sec);
    min = parseInt(min);
    sec = sec + 1;

    if (sec === 60) {
      min = min + 1;
      sec = 0;
    }
    

    if (sec < 10 || sec === 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min === 0) {
      min = '0' + min;
    }
    timer.innerHTML =  min + ':' + sec;

    setTimeout("timerCycle()", 1000);
  }
}

function resetTimer() {
    timer.innerHTML = '00:00';
    min = 0;
    sec = 0;

}
    
