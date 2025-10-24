
const colors = ["red", "green", "blue", "purple", "orange"];
document.getElementById("btn").addEventListener("click", () => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.background = randomColor;
});
