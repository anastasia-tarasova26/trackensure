const track = document.querySelector(".services-track");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const cardWidth = 300 + 20; // ширина карточки + отступы
let position = 0;

prevButton.addEventListener("click", () => {
  position = Math.min(position + cardWidth, 0);
  track.style.transform = `translateX(${position}px)`;
});

nextButton.addEventListener("click", () => {
  const maxPosition = -(track.scrollWidth - track.clientWidth);
  position = Math.max(position - cardWidth, maxPosition);
  track.style.transform = `translateX(${position}px)`;
});
