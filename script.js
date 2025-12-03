const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const id = btn.id;

    if (id === "C") {
      display.innerText = "";
    } 
    else if (id === "back") {
      display.innerText = display.innerText.slice(0, -1);
    } 
    else if (id === "equal") {
      try {
        if (display.innerText.trim() === "") {
          display.innerText = "";
          return;
        }

        const result = eval(display.innerText);

        if (result === Infinity || isNaN(result)) {
          display.innerText = "Error";
        } else {
          display.innerText = result;
        }
      } catch {
        display.innerText = "Error";
      }
    } 
    else if (id === "divi") {
      display.innerText += "/";
    } 
    else if (id === "plus") {
      display.innerText += "+";
    } 
    else if (id === "-") {
      display.innerText += "-";
    } 
    else if (id === "*") {
      display.innerText += "*";
    } 
    else if (id === "op") {
      display.innerText += "(";
    } 
    else if (id === "cl") {
      display.innerText += ")";
    } 
    else if (id === "dot") {
      display.innerText += ".";
    } 
    else {
      display.innerText += id;
    }
  });
});
