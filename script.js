const invertButton = document.getElementById("invertButton");

invertButton.addEventListener("click", () => {
    document.documentElement.classList.toggle("inverted");
});