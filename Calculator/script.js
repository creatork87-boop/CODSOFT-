function append(char) {
  document.getElementById("display").value += char;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function delChar() {
  let val = document.getElementById("display").value;
  document.getElementById("display").value = val.slice(0, -1);
}

function calculate() {
  try {
    document.getElementById("display").value = eval(document.getElementById("display").value);
  } catch {
    document.getElementById("display").value = "Error";
  }
}
