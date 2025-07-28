document.addEventListener("DOMContentLoaded", readyNow);

function readyNow() {
  console.log("DOM is loaded!");
}

// Call them on page load
document.addEventListener("DOMContentLoaded", () => {
  loadPartial("nav-placeholder", "../partials/nav.html");
  loadPartial("cta-placeholder", "../partials/cta.html");
  loadPartial("footer-placeholder", "../partials/footer.html");
});


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


// Build Recipe Cards

document.addEventListener("DOMContentLoaded", () => {
  fetch('recipes.json')
    .then(res => res.json())
    .then(data => {
      const container = document.querySelector('.info-cards');
      container.innerHTML = ""; // Clear existing HTML

      data.forEach(recipe => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
          <a href="${recipe.link}">
            <img class="card-image" src="${recipe.image}" alt="${recipe.category} Image">
          </a>
          <p>${recipe.category}</p>
        `;

        container.appendChild(card);
      });
    });
});


// fallback image
document.addEventListener("error", function (e) {
  const target = e.target;
  if (target.tagName === 'IMG') {
    target.src = "img/default.jpg";
  }
}, true);


// Load partials into placeholders
function loadPartial(id, url) {
  fetch(url)
    .then((res) => res.text())
    .then((html) => {
      document.getElementById(id).innerHTML = html;

      // Run JS that depends on those elements being present
      if (id === "nav-placeholder") {
        setupHamburgerMenu(); // assuming this exists in your script.js
      }
    })
    .catch((err) => console.error(`Error loading ${url}:`, err));
}

