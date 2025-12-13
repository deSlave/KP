const menuBar = document.querySelector(".hamburger");
const menuNav = document.querySelector(".navbar");
const menuNavigation = document.querySelector(".menu");
const buttons = document.querySelectorAll(".details-btn");
const closes = document.querySelectorAll(".popup .close");
const pastelHover = document.querySelectorAll(".pastel-hover span");

document.addEventListener("contextmenu", e => {
  if (e.target.closest("img")) e.preventDefault();
});

document.addEventListener("dragstart", e => {
  if (e.target.closest("img")) e.preventDefault();
});

document.addEventListener("contextmenu", function (e) {
  if (e.target.closest(".popup img")) {
    e.preventDefault();
  }
});

document.addEventListener("dragstart", function (e) {
  if (e.target.closest(".popup img")) {
    e.preventDefault();
  }
});

menuBar.addEventListener("click", () => {
  menuBar.classList.toggle("is-active");
  menuNavigation.classList.toggle("menu-active");
});

window.addEventListener("scroll", () => {
  menuNav.classList.toggle("nav-scroll-active", window.scrollY > 0);

  windowsPosition = window.scrollY > 200;
  menuBar.classList.toggle("btn-active", windowsPosition);
  menuBar.classList.remove("is-active");
  menuNavigation.classList.remove("menu-active");
});

const loader = document.querySelector(".loader");

function loaderActive() {
  loader.classList.add("loader-active");
}

function loaderActiveTime() {
  setInterval(loaderActive, 3000);
}

window.onload = loaderActiveTime();

// Buka popup
buttons.forEach(btn => {
  btn.addEventListener("click", function() {
    const target = this.getAttribute("data-target");
    document.getElementById(target).style.display = "flex";
  });
});

// Tutup popup
closes.forEach(close => {
  close.addEventListener("click", function() {
    this.parentElement.parentElement.style.display = "none";
  });
});

// Klik luar popup = close
window.addEventListener("click", function(e) {
  if (e.target.classList.contains("popup")) {
    e.target.style.display = "none";
  }
});


  function pastelColor() {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 70%, 80%)`; 
  }

  pastelHover.forEach(word => {
    word.addEventListener("mouseover", () => {
      word.style.color = pastelColor();
    });

    word.addEventListener("mouseout", () => {
      word.style.color = "";
    });
  });

