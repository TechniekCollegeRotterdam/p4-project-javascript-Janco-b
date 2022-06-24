const llama = document.getElementById("llama");
const mochi = document.getElementById("mochi");
const start = document.getElementById("button");
var timer = new Date().getTime(),
  score = '0.1';


start.addEventListener("click", () => {
    mochi.classList.add("block");
    
});

var interval = window.setInterval(function() {
    var time = new Date().getTime() - timer;
    
    score = Math.floor(time / 1000);
    
    if(score === 100) { 
      window.clearInterval(interval); 
      if(!alert("You win!\nPress 'OK' to play again")){
          window.location.reload();
      } 
    }
  
    document.getElementById('displayScore').innerHTML = score += '.00 Score';
  });


//geeft de jump class aan de llama zodat die springt
function jump() {
    if(llama.classList != "jump"){
    llama.classList.add("jump");

    //haalt de jump class weg zodat je het weer opnieuw kan geven
    setTimeout(function (){
        llama.classList.remove("jump");
    }, 300)
  }
}

let isAlive = setInterval(function () {
    //huidige llama y position, ziet de top van de llama
    let llamaTop = parseInt(window.getComputedStyle(llama).getPropertyValue("top"));


    //huidige x positie, ziet waar de mochi is op de horizontale as
    let mochiLeft = parseInt(window.getComputedStyle(mochi).getPropertyValue("left"));
        
    //kijkt voor botsing tussen llama en mochi
    if (mochiLeft < 50 && mochiLeft > 0 && llamaTop >= 100) {
        //botsing
        mochi.classList.remove("block");
       alert ("Game Over");
       
    }

}, 10);

document.addEventListener("keydown", function (event){
    jump();
})