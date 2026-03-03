let [milliseconds,seconds,minutes,hours] = [0,0,0,0];

let timerDisplay = document.querySelector(".timer");

let int = null;

let start = document.querySelector("#start-btn");
start.addEventListener("click",()=>{
    if(int !== null){
        clearInterval(int);
    }
    int = setInterval(displayTimer,10);
});

let pause = document.querySelector("#stop-btn");
pause.addEventListener("click",()=>{
clearInterval(int);
});
let reset = document.querySelector("#reset-btn");
reset.addEventListener("click",()=>{
    clearInterval(int);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    timerDisplay.innerHTML = "00:00:00:000";
});

function displayTimer() {
     milliseconds=milliseconds+10;
    if(milliseconds===1000){
        milliseconds = 0;
        seconds++;
        if(seconds===60){
             seconds = 0;
             minutes++;
             if(minutes===60){
                minutes = 0;
                hours++;
              }
        }
    }
    let h, m, s, ms;

// Hours format
if (hours < 10) {
  h = "0" + hours;
} else {
  h = hours;
}

// Minutes format
if (minutes < 10) {
  m = "0" + minutes;
} else {
  m = minutes;
}

// Seconds format
if (seconds < 10) {
  s = "0" + seconds;
} else {
  s = seconds;
}

// Milliseconds format
if (milliseconds < 10) {
  ms = "00" + milliseconds;      // e.g. 7 → 007
} else if (milliseconds < 100) {
  ms = "0" + milliseconds;       // e.g. 85 → 085
} else {
  ms = milliseconds;             // e.g. 345 → 345
}

// Display on screen
timerDisplay.innerHTML = `${h}:${m}:${s}:${ms}`;
//altarnative of this form
   // let h = hours<10 ? "0"+hours : hours;
   // let m = minutes<10?
   // "0"+minutes : minutes;
   // let s = seconds<10?
   // "0"+seconds : seconds;
   // let ms = milliseconds<10?
    //"00"+milliseconds : milliseconds<100?
    //"0"+milliseconds : milliseconds;
   //  timerDisplay.innerHTML=
    //`${h} :${m}:${s}:${ms} `;
}