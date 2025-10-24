// Hint:
const input = document.getElementById("name");
const output = document.getElementById("display");
const btn = document.getElementById("show");

btn.addEventListener("click", () => {
  output.textContent = "Hello, " + input.value + "!";
});
