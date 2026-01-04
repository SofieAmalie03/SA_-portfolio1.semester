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

/*jeg leger lige igen med lidt intro til mit site*/

window.addEventListener("DOMContentLoaded", async () => {
  const intro = document.getElementById("intro");
  const introInner = document.getElementById("introInner");

  document.body.classList.add("is_loading");

  try {
    const res = await fetch("./img/SA.logoTHEjaja.svg");
    const svgText = await res.text();
    introInner.innerHTML = svgText;

    const svg = introInner.querySelector("svg");
    if (!svg) throw new Error("SVG not found");

    svg.removeAttribute("width");
    svg.removeAttribute("height");

    const shapes = svg.querySelectorAll(
      "path, circle, line, polyline, polygon, rect, ellipse"
    );

    shapes.forEach((el) => {
      el.classList.add("draw");
      el.setAttribute("fill", "none");
      el.setAttribute("stroke", "#231f20");
      el.setAttribute("stroke-linecap", "round");
      el.setAttribute("stroke-linejoin", "round");

      let len = 0;
      try {
        len = el.getTotalLength();
      } catch {
        len = 2000;
      }

      el.style.setProperty("--len", `${Math.ceil(len)}px`);
    });

    setTimeout(() => {
      intro.classList.add("is_out");
      document.body.classList.remove("is_loading");
      document.body.classList.add("is_loaded");

      window.scrollTo({ top: 0, left: 0, behavior: "instant" });

      setTimeout(() => {
        intro.remove();
      }, 450);
    }, 1500);
  } catch (e) {
    intro.remove();
    document.body.classList.remove("is_loading");
    document.body.classList.add("is_loaded");
  }
});
