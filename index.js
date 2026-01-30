function b1() {
  let r, g, b, hex;
  r = Math.round(Math.random() * 255);
  g = Math.round(Math.random() * 255);
  b = Math.round(Math.random() * 255);
  hex = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
  hex = hex.toUpperCase();
  if (r * 0.299 + g * 0.587 + b * 0.114 <= 150) {
    document.getElementById("colour1").style.color = "white";
  } else {
    document.getElementById("colour1").style.color = "black";
  }
  document.getElementById("colour1").style.backgroundColor =
    `rgb(${r},${g},${b})`;
  document.getElementById("colour1").textContent =
    `RGB : (${r},${g},${b})\nHEX : ${hex}`;

  document.getElementById("colour1").style.display = "block";
  document.getElementById("colour2").style.display = "none";
  document.getElementById("colour3").style.display = "none";
  document.getElementById("colour4").style.display = "none";
  document.getElementById("colour5").style.display = "none";
}

function b2() {
  let r, g, b, hex;
  r = Math.round(Math.random() * 255);
  g = Math.round(Math.random() * 255);
  b = Math.round(Math.random() * 255);
  hex = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
  hex = hex.toUpperCase();
  if (r * 0.299 + g * 0.587 + b * 0.114 <= 150) {
    document.getElementById("colour1").style.color = "white";
  } else {
    document.getElementById("colour1").style.color = "black";
  }
  document.getElementById("colour1").style.backgroundColor =
    `rgb(${r},${g},${b})`;
  document.getElementById("colour1").textContent =
    `RGB : (${r},${g},${b})\nHEX : ${hex}`;

  r = Math.round(Math.random() * 255);
  g = Math.round(Math.random() * 255);
  b = Math.round(Math.random() * 255);
  hex = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
  hex = hex.toUpperCase();
  if (r * 0.299 + g * 0.587 + b * 0.114 <= 150) {
    document.getElementById("colour2").style.color = "white";
  } else {
    document.getElementById("colour2").style.color = "black";
  }
  document.getElementById("colour2").style.backgroundColor =
    `rgb(${r},${g},${b})`;
  document.getElementById("colour2").textContent =
    `RGB : (${r},${g},${b})\nHEX : ${hex}`;

  r = Math.round(Math.random() * 255);
  g = Math.round(Math.random() * 255);
  b = Math.round(Math.random() * 255);
  hex = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
  hex = hex.toUpperCase();
  if (r * 0.299 + g * 0.587 + b * 0.114 <= 150) {
    document.getElementById("colour3").style.color = "white";
  } else {
    document.getElementById("colour3").style.color = "black";
  }
  document.getElementById("colour3").style.backgroundColor =
    `rgb(${r},${g},${b})`;
  document.getElementById("colour3").textContent =
    `RGB : (${r},${g},${b})\nHEX : ${hex}`;

  document.getElementById("colour1").style.display = "block";
  document.getElementById("colour2").style.display = "block";
  document.getElementById("colour3").style.display = "block";
  document.getElementById("colour4").style.display = "none";
  document.getElementById("colour5").style.display = "none";
}

function b3() {
  let r, g, b, hex;
  r = Math.round(Math.random() * 255);
  g = Math.round(Math.random() * 255);
  b = Math.round(Math.random() * 255);
  hex = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
  hex = hex.toUpperCase();
  if (r * 0.299 + g * 0.587 + b * 0.114 <= 150) {
    document.getElementById("colour1").style.color = "white";
  } else {
    document.getElementById("colour1").style.color = "black";
  }
  document.getElementById("colour1").style.backgroundColor =
    `rgb(${r},${g},${b})`;
  document.getElementById("colour1").textContent =
    `RGB : (${r},${g},${b})\nHEX : ${hex}`;

  r = Math.round(Math.random() * 255);
  g = Math.round(Math.random() * 255);
  b = Math.round(Math.random() * 255);
  hex = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
  hex = hex.toUpperCase();
  if (r * 0.299 + g * 0.587 + b * 0.114 <= 150) {
    document.getElementById("colour2").style.color = "white";
  } else {
    document.getElementById("colour2").style.color = "black";
  }
  document.getElementById("colour2").style.backgroundColor =
    `rgb(${r},${g},${b})`;
  document.getElementById("colour2").textContent =
    `RGB : (${r},${g},${b})\nHEX : ${hex}`;

  r = Math.round(Math.random() * 255);
  g = Math.round(Math.random() * 255);
  b = Math.round(Math.random() * 255);
  hex = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
  hex = hex.toUpperCase();
  if (r * 0.299 + g * 0.587 + b * 0.114 <= 150) {
    document.getElementById("colour3").style.color = "white";
  } else {
    document.getElementById("colour3").style.color = "black";
  }
  document.getElementById("colour3").style.backgroundColor =
    `rgb(${r},${g},${b})`;
  document.getElementById("colour3").textContent =
    `RGB : (${r},${g},${b})\nHEX : ${hex}`;

  r = Math.round(Math.random() * 255);
  g = Math.round(Math.random() * 255);
  b = Math.round(Math.random() * 255);
  hex = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
  hex = hex.toUpperCase();
  if (r * 0.299 + g * 0.587 + b * 0.114 <= 150) {
    document.getElementById("colour4").style.color = "white";
  } else {
    document.getElementById("colour4").style.color = "black";
  }
  document.getElementById("colour4").style.backgroundColor =
    `rgb(${r},${g},${b})`;
  document.getElementById("colour4").textContent =
    `RGB : (${r},${g},${b})\nHEX : ${hex}`;

  r = Math.round(Math.random() * 255);
  g = Math.round(Math.random() * 255);
  b = Math.round(Math.random() * 255);
  hex = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
  hex = hex.toUpperCase();
  if (r * 0.299 + g * 0.587 + b * 0.114 <= 150) {
    document.getElementById("colour5").style.color = "white";
  } else {
    document.getElementById("colour5").style.color = "black";
  }
  document.getElementById("colour5").style.backgroundColor =
    `rgb(${r},${g},${b})`;
  document.getElementById("colour5").textContent =
    `RGB : (${r},${g},${b})\nHEX : ${hex}`;

  document.getElementById("colour1").style.display = "block";
  document.getElementById("colour2").style.display = "block";
  document.getElementById("colour3").style.display = "block";
  document.getElementById("colour4").style.display = "block";
  document.getElementById("colour5").style.display = "block";
}

document.getElementById("button1").onclick = b1;
document.getElementById("button2").onclick = b2;
document.getElementById("button3").onclick = b3;
