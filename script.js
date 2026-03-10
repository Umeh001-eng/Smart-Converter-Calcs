// Display variable
let display;

document.addEventListener("DOMContentLoaded", function () {

  display = document.getElementById("display");

  // Convert button
  const convertBtn = document.querySelector(".convert");
  if (convertBtn) convertBtn.addEventListener("click", convertUnit);

  // Night mode
  const nightSwitch = document.getElementById("nightModeSwitch");
  if (nightSwitch) nightSwitch.addEventListener("click", toggleNight);

});


// ---------- Calculator ----------

function press(value) {
  if (!display) return;
  display.value += value;
}

function clearDisplay() {
  if (!display) return;
  display.value = "";
}

function del() {
  if (!display) return;
  display.value = display.value.slice(0, -1);
}

function calculate() {

  if (!display) return;

  try {

    let result = eval(display.value);

    if (result === undefined || result === Infinity || isNaN(result)) {
      display.value = "Error";
    } else {
      display.value = result;
    }

  } catch {
    display.value = "Error";
  }

}


// ---------- Scientific Functions ----------

function sci(type) {

  if (!display) return;

  let v = parseFloat(display.value);

  if (isNaN(v)) return;

  if (type === "sin") display.value = Math.sin(v);
  if (type === "cos") display.value = Math.cos(v);
  if (type === "tan") display.value = Math.tan(v);
  if (type === "log") display.value = Math.log10(v);
  if (type === "ln") display.value = Math.log(v);

}


// ---------- Unit Converter ----------

function convertUnit() {

  if (!display) return;

  let value = parseFloat(display.value);

  if (isNaN(value)) return;

  let from = document.getElementById("fromUnit").value;
  let to = document.getElementById("toUnit").value;

  let result = value;

  // Mass
  if (from === "g" && to === "kg") result = value / 1000;
  else if (from === "kg" && to === "g") result = value * 1000;

  // Length
  else if (from === "m" && to === "km") result = value / 1000;
  else if (from === "km" && to === "m") result = value * 1000;

  else if (from === "ft" && to === "in") result = value * 12;
  else if (from === "in" && to === "ft") result = value / 12;

  else if (from === to) result = value;

  const names = {
    kg: " kg",
    g: " g",
    m: " m",
    km: " km",
    ft: " ft",
    in: " in"
  };

  display.value = result + names[to];

}


// ---------- Night Mode ----------

function toggleNight() {

  document.body.classList.toggle("dark");

}