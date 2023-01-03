let input = document.getElementById("textarea");
let buttonInput = document.getElementById("submitButton");
let output = document.getElementById("front");

document.getElementsByClassName("flashcard")[0].style.display = "none";

let inputText;

input.addEventListener("input", () => {
  inputText = input.value;
});

buttonInput.addEventListener("click", function () {
  document.getElementById("wrapper").style.display = "none";
  document.getElementsByClassName("flashcard")[0].style.display = "block";
  output.innerHTML = input.value;
});
