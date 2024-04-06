let navButtons = document.querySelectorAll("nav li");
for (let i = 0; i < navButtons.length; i++) {
    const element = navButtons[i];
    element.addEventListener("mouseover", function addBorder() {
        element.style.border = "3px solid black";
    });
    element.addEventListener("mouseleave", function removeBorder() {
        element.style.border = "3px solid transparent";
    })
}

let nightMode = document.getElementById("night-mode");
nightMode.addEventListener("click", function toggleNightMode(event) {
    event.preventDefault();

    document.querySelector("body").classList.toggle("mode-night");
    if (document.querySelector("body").classList.contains("mode-sepia")) {
        document.querySelector("body").classList.remove("mode-sepia");
    }
});

let sepiaMode = document.getElementById("sepia-mode");
sepiaMode.addEventListener("click", function toggleSepiaMode(event) {
    event.preventDefault();

    document.querySelector("body").classList.toggle("mode-sepia");
    if (document.querySelector("body").classList.contains("mode-night")) {
        document.querySelector("body").classList.remove("mode-night");
    }
});