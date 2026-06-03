const menuBtn = document.getElementById("menuBtn");
const drawer = document.getElementById("drawer");
const overlay = document.getElementById("overlay");
const navLinks = document.querySelectorAll(".drawer-nav a");

function openMenu() {
  drawer.classList.add("is-open");
  overlay.classList.add("is-open");
  document.body.classList.add("is-fixed");
}

function closeMenu() {
  drawer.classList.remove("is-open");
  overlay.classList.remove("is-open");
  document.body.classList.remove("is-fixed");
}

menuBtn.addEventListener("click", () => {
  if (drawer.classList.contains("is-open")) {
    closeMenu();
  } else {
    openMenu();
  }
});

overlay.addEventListener("click", closeMenu);

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});
