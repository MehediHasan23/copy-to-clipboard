/* load window function */
window.onload = function () {
  main();
};

function main() {
  const btn = document.querySelector("#btn");
  const container = document.querySelector("#root");
  const output = document.querySelector("#output");
  const copyBtn = document.querySelector("#copyBtn");

  //TODO: change bg color

  btn.addEventListener("click", function () {
    const bgColor = hexColor();
    container.style.background = bgColor;
    output.value = bgColor;
  });

  //TODO: copy color code
  copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(output.value);
    alert(`${output.value} has been coppied`);
  });
}

/* generate hex color */

function hexColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
