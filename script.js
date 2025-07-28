document.addEventListener("DOMContentLoaded", readyNow);

function readyNow() {
  console.log("DOM is loaded!");
}

// Nav bar hamburger
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
// toggle menu on hamburger icon
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  hamburger.classList.toggle("open");

    // switch icon from = to X
    if (hamburger.classList.contains("open")){
    hamburger.innerHTML = "&times"; 
    } else {
    hamburger.innerHTML = "&#9776;"
    }
});

// close menu when link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
        hamburger.classList.remove("open");
        hamburger.innerHTML = "&#9776";
    });
});

