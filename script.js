const clip = document.querySelector(".clip");
const content = document.querySelector(".content");
const iconMoon = document.querySelector(".mon");
const iconSun = document.querySelector(".sun");

const { x, y } = iconMoon.getBoundingClientRect();

clip.style.clipPath = `circle(0% at ${x}px ${y}px)`;

iconSun.addEventListener("click", (event) => {
  const attr = event.target.getAttribute("name");

  if (attr === "sun") {
    iconSun.classList.toggle("hide");
    iconMoon.classList.toggle("hide");
  }

  clip.style.clipPath = `circle(200% at ${x}px ${y}px)`;
  content.classList.add("dark-mode");
});

iconMoon.addEventListener("click", (event) => {
  const { x, y } = event;
  const attr = event.target.getAttribute("name");

  if (attr === "moon") {
    iconSun.classList.toggle("hide");
    iconMoon.classList.toggle("hide");
  }
  clip.style.clipPath = `circle(0% at ${x}px ${y}px)`;
  content.classList.remove("dark-mode");
  clip.style.transition = "400ms ease";

  setTimeout(() => {
    clip.style.transition =
      "clip-path 1.5s cubic-bezier(0.43, 0.94, 0.75, 0.92)";
  }, 50);
});
