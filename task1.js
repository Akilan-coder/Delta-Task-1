const grid1 = document.querySelector(".grid1");
const grid2 = document.querySelector(".grid2");
let tiles1 = Array.from(document.querySelectorAll(".tile"));
let tiles2 = Array.from(document.querySelectorAll(".til"));

const myButton = document.querySelector('.startbutton');

myButton.onclick=function(){
   myButton.textContent = 'RESET';

    let jumbled2 = shuffle(colors2);


tiles2.forEach((color, i) => {
    color.style.backgroundColor = jumbled2[i];
});

let jumbled1 = shuffle(colors1);

tiles1.forEach((color, i) => {
    color.style.backgroundColor = jumbled1[i];

});


console.log(tiles2[6].style.backgroundColor);

tiles2.forEach((color,i) => {
    color.addEventListener('click', event => {
      console.log("clicked",color.style.backgroundColor,i)
      check(i);
    })
  })


}

function shuffle(array){

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


            


 const check = (i) =>{
   
    {  console.log("hello");
       if(tiles2[i-1].style.backgroundColor === "Black")
       {
           console.log("recognized 1");
          swap(i,i-1);
       }

       if( tiles2[i+1].style.backgroundColor === "Black")
       {console.log("recognized 2");
        swap(i,i+1);
       }

       if( tiles2[i-5].style.backgroundColor === "Black")
       {console.log("recognized 3 ");
        swap(i,i-5);
       }

       if( tiles2[i+5].style.backgroundColor === "Black")
       {console.log("recognized 4");
        swap(i,i+5);
       }
    }
       

function swap(a,b){
    console.log("recognized swap");
    let temp = tiles2[a].style.backgroundColor;
    tiles2[a].style.backgroundColor = tiles2[b].style.backgroundColor;
    tiles2[b].style.backgroundColor = temp;
}}

function win(){

for(i=6;i<=18;i++){
    let checkarray = tiles2[i].style.backgroundColor;
}
if(tiles1.forEach(color,i) === checkarray.forEach(i))
{
   alert("you win!");

}
}

console.log(tiles2[1].style.backgroundColor);
