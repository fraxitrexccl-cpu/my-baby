const packageContainer = document.getElementById("package-container");
const packageScreen = document.getElementById("package-screen");
const messageScreen = document.getElementById("message-screen");

packageContainer.addEventListener("click", () => {
  packageScreen.classList.add("hidden");
  messageScreen.classList.remove("hidden");
});
