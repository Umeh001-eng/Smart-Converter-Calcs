const display=document.getElementById("display")

function press(v){
display.value+=v
}

function clearDisplay(){
display.value=""
}

function del(){
display.value=display.value.slice(0,-1)
}

function calculate(){
try{
display.value=eval(display.value)
}catch{
display.value="Error"
}
}

function sci(type){

let v=parseFloat(display.value)

if(isNaN(v)) return

if(type==="sin") display.value=Math.sin(v)
if(type==="cos") display.value=Math.cos(v)
if(type==="tan") display.value=Math.tan(v)
if(type==="log") display.value=Math.log10(v)
if(type==="ln") display.value=Math.log(v)

}

function convert(){

let value=parseFloat(display.value)
if(isNaN(value)) return

let from=document.getElementById("fromUnit").value
let to=document.getElementById("toUnit").value

let result=value

if(from==="g" && to==="kg") result=value/1000
if(from==="kg" && to==="g") result=value*1000
if(from==="m" && to==="km") result=value/1000
if(from==="km" && to==="m") result=value*1000
if(from==="ft" && to==="in") result=value*12
if(from==="in" && to==="ft") result=value/12

const names={
kg:" (kg)",
g:" (g)",
m:" (m)",
km:" (km)",
ft:" (ft)",
in:" (in)"
}

display.value=result+" "+names[to]

}

function toggleNight(){
document.body.classList.toggle("dark")

document.addEventListener("DOMContentLoaded", function() {
  // Main converter button
  const convertBtn = document.querySelector(".convert");
  if (convertBtn) convertBtn.addEventListener("click", convert);

  // Night mode switch
  const nightSwitch = document.querySelector(".switch input");
  if (nightSwitch) nightSwitch.addEventListener("click", toggleNight);

  // If you want a clear button class (replace AC button)
  const clearBtn = document.querySelector(".clear");
  if (clearBtn) clearBtn.addEventListener("click", clearDisplay);
});

}