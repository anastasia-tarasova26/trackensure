let currentSlide = 0;

function updateIndicator() {
  const indicators = document.querySelectorAll(".indicator div");
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle("active", index === currentSlide);
  });
}

function nextSlide() {
  const slides = document.querySelectorAll(".slide");
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
  updateIndicator();
}
