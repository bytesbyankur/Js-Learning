const para = document.getElementById("text");
const btn = document.getElementById("toggleBtn");

btn.addEventListener("click", () => {
  para.style.display = para.style.display === "none" ? "block" : "none";
});
