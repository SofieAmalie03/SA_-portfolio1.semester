const nav = document.querySelector(".nav");
const burger = document.querySelector(".burger");
const menu = document.querySelector("#burger_menu");

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
  const clickedInsideNav = nav.contains(e.target);
  if (!clickedInsideNav) closeMenu();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});

/* jeg leger lige lidt med noget popup*/
const imageTrigger = document.querySelector(".SofieAmalie_img");
const modal = document.getElementById("imageModal");
const closeBtn = document.querySelector(".image_modal_close");

imageTrigger.addEventListener("click", () => {
  modal.classList.add("is_open");
  modal.setAttribute("aria-hidden", "false");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("is_open");
  modal.setAttribute("aria-hidden", "true");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("is_open");
    modal.setAttribute("aria-hidden", "true");
  }
});
