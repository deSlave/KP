// =====================
// LOAD NAVBAR (OPSIONAL)
// =====================
const navbarContainer = document.getElementById("navbar");

if (navbarContainer) {
  // halaman selain index
  fetch("../../navbar.html")
    .then(res => res.text())
    .then(html => {
      navbarContainer.innerHTML = html;
      initNavbar();
    });
} else {
  // halaman index (navbar langsung di HTML)
  document.addEventListener("DOMContentLoaded", initNavbar);
}


// =====================
// INIT NAVBAR (GLOBAL)
// =====================
function initNavbar() {
  const menuBar = document.querySelector(".hamburger");
  const menuNav = document.querySelector(".navbar");
  const menuNavigation = document.querySelector(".menu");

  if (!menuBar || !menuNav || !menuNavigation) return;

  menuBar.addEventListener("click", () => {
    menuBar.classList.toggle("is-active");
    menuNavigation.classList.toggle("menu-active");
  });

  window.addEventListener("scroll", () => {
    const windowsPosition = window.scrollY > 200;
    menuNav.classList.toggle("nav-scroll-active", window.scrollY > 0);
    menuBar.classList.toggle("btn-active", windowsPosition);
    menuBar.classList.remove("is-active");
    menuNavigation.classList.remove("menu-active");
  });
}


// =====================
// GLOBAL SCRIPT (AMAN)
// =====================
document.addEventListener("contextmenu", e => {
  if (e.target.closest("img")) e.preventDefault();
});

document.addEventListener("dragstart", e => {
  if (e.target.closest("img")) e.preventDefault();
});

// =====================
// LOADER
// =====================
const loader = document.querySelector(".loader");

if (loader) {
  function loaderActive() {
    loader.classList.add("loader-active");
  }

  window.addEventListener("load", () => {
    setTimeout(loaderActive, 3000);
  });
}

// =====================
// POPUP
// =====================
document.querySelectorAll(".details-btn").forEach(btn => {
  btn.addEventListener("click", function () {
    const target = this.dataset.target;
    const popup = document.getElementById(target);
    if (popup) popup.style.display = "flex";
  });
});

document.querySelectorAll(".popup .close").forEach(close => {
  close.addEventListener("click", function () {
    this.closest(".popup").style.display = "none";
  });
});

window.addEventListener("click", e => {
  if (e.target.classList.contains("popup")) {
    e.target.style.display = "none";
  }
});

// =====================
// PASTEL HOVER
// =====================
function pastelColor() {
  return `hsl(${Math.floor(Math.random() * 360)}, 70%, 80%)`;
}

document.querySelectorAll(".pastel-hover span").forEach(word => {
  word.addEventListener("mouseover", () => {
    word.style.color = pastelColor();
  });

  word.addEventListener("mouseout", () => {
    word.style.color = "";
  });
});

// =====================
// Faq 
// =====================

document.querySelectorAll(".faq-question").forEach(btn => {
  btn.addEventListener("click", () => {
    const item = btn.parentElement;
    item.classList.toggle("active");
  });
});

document.querySelectorAll(".faq-question").forEach(btn => {
  btn.addEventListener("click", () => {
    const icon = btn.querySelector("span");
    icon.textContent = btn.parentElement.classList.contains("active") ? "-" : "+";
  });
});


// =====================
// LOAD FOOTER
// =====================
fetch("../../footer.html")
  .then(res => res.text())
  .then(html => {
    const footer = document.getElementById("footer");
    if (footer) footer.innerHTML = html;
  });

