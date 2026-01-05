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

/*her der fader min menu når den n¨r resultat*/

const menu = document.querySelector(".Menu");
const resultat = document.querySelector(".Resultat_Section");

if (menu && resultat) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      menu.classList.toggle("is_fading", !entry.isIntersecting);
      menu.classList.toggle("is_unstuck", !entry.isIntersecting);

      if (!entry.isIntersecting) {
        const nav = document.querySelector(".nav");
        const burger = document.querySelector(".burger");
        nav?.classList.remove("is_open");
        burger?.setAttribute("aria-expanded", "false");
      }
    },
    {
      threshold: 0.01,
    }
  );

  observer.observe(resultat);
}
