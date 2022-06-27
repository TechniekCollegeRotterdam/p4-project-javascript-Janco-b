const llama = document.getElementById("llama");
const mochi = document.getElementById("mochi");
const start = document.getElementById("button");
const pauze = document.getElementById("pauze");


start.addEventListener("click", () => {
    mochi.classList.add("block");
    
});

pauze.addEventListener("click", function() {
    mochi.classList.remove("block");
})


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