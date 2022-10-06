const userInput = document.querySelector("#input");
const output = document.querySelector("#output");

function countWord() {
  const regex = /\s+/gi;
  if (userInput.value) {
    output.innerText = userInput.value
      .trim()
      .replace(regex, " ")
      .split(" ").length;
  } else {
    output.innerText = "0";
  }
}
