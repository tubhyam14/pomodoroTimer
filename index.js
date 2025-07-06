const timerEl=document.getElementById("timer");
let toSecond=60
let timeLeft = 25*toSecond;
let intervel = null;


function update(){
    let minute=Math.floor(timeLeft/60).toString().padStart(2,"0");
    let second=Math.floor(timeLeft%60).toString().padStart(2,"0");
    timerEl.innerText=`${minute}:${second}`;
    if(timeLeft<=0){
        alert("Time Completed");
        stop();
    }
    timeLeft--

}
function start(){
    if (intervel !== null || timeLeft<=0) return;
    update();
    intervel=setInterval(update,1000);
}
function stop() {
    clearInterval(intervel);
    intervel = null;
}

function reset() {
    stop();
    timeLeft = 25 * toSecond;
    update();
}
