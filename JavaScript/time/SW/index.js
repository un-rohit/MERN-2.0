let sec=0;

let timer=null

let tt=document.getElementById("timeinsec");
tt.innerText=0

function tm(){
    timer= setInterval(()=>{
        sec++;
        tt.innerText=sec
        console.log(sec)
},1000)
} 

// clearInterval(tm);


