function scrollCarousel(direction) {
  const carousel = document.getElementById("productCarousel");
  const scrollAmount = 320; // Adjust scroll step as needed
  carousel.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
}
