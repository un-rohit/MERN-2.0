const timerTextElem =document.getElementById("timer-text");



let timeInSec =0;

setInterval(()=>  {
    timeInSec++;
    console.log(timeInSec);
    const sec=timeInSec %60;
    let min=Math.floor(timeInSec/60);
    min=min%60
    const hrs= Math.floor(timeInSec/3600);
    timerTextElem.innerText= `${hrs}:${min.toString().padStart(2,"0")}:${sec.toString().padStart(2,"0")}`;
    
}, 1000);

const handleReset =() => {
    timeInSec =0;
};

const handlePause=() => {
    clearInterval(setInterval)
};

const handleResume = () => {
    intervalID =setInterval(timerFunc,1000);
};

const handleLap =() => {
    const para =document.createElement("p");
    para.innerText=timerTextElem.innerText;
    document.getElementById(root).appendChild(para);
}