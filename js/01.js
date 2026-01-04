const nav = document.querySelector(".nav");
const burger = document.querySelector(".burger");

let backdrop = document.querySelector(".menu_backdrop");
if (!backdrop) {
  backdrop = document.createElement("div");
  backdrop.className = "menu_backdrop";
  nav.insertAdjacentElement("afterend", backdrop);
}

function openMenu() {
  nav.classList.add("is_open");
  burger.setAttribute("aria-expanded", "true");
}

function closeMenu() {
  nav.classList.remove("is_open");
  burger.setAttribute("aria-expanded", "false");
}

function toggleMenu() {
  if (nav.classList.contains("is_open")) closeMenu();
  else openMenu();
}

closeMenu();

burger.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleMenu();
});

backdrop.addEventListener("click", closeMenu);

document.addEventListener("click", (e) => {
  if (!nav.contains(e.target)) closeMenu();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});
