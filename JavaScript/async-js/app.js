console.log("Start");


const timeDelayInMS =10000;
const callbackFunc =() => {
console.log("hello");

}

window.setTimeout(callbackFunc,timeDelayInMS);
console.log("END");
