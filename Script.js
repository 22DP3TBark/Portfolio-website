console.log("Script loaded");
function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle('active');
    icon.classList.toggle('active');

}

let darkModeEnabled = false;
const darkModeButton = document.getElementById("darkModeButton");
darkModeButton.addEventListener("click", () => {
    darkModeEnabled = !darkModeEnabled;
    if  (darkModeEnabled) {
        EnableDarkMode();
    }   else {
        DisableDarkMode();
    }
});

const EnableDarkMode = () => {
    document.body.classList.add("dark-mode");
}

const DisableDarkMode = () => {
    document.body.classList.remove("dark-mode");
}