document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".company-slider");
  const indicatorsContainer = document.querySelector(".slider-indicators");
  const slides = document.querySelectorAll(".company-slide");
  let currentSlideIndex = 0;

  // Создание индикаторов (точек)
  slides.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("indicator-dot");
    if (index === 0) dot.classList.add("active");
    indicatorsContainer.appendChild(dot);
  });

  const indicatorDots = document.querySelectorAll(".indicator-dot");

  // Обновление слайдера
  function updateSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
    indicatorDots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  // Переключение слайдов при клике на индикаторы
  indicatorDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentSlideIndex = index;
      updateSlide(currentSlideIndex);
    });
  });

  // Переключение слайдов при клике на слайдер
  slider.addEventListener("click", () => {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    updateSlide(currentSlideIndex);
  });
});
