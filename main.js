document.addEventListener("DOMContentLoaded", function() {

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.closest(".mainContent").classList.add("isOn"); // Add class to div, not img
      } else {
        entry.target.closest(".mainContent").classList.remove("isOn"); // Remove class even when not visible
      }
    });
  }, { threshold: .1 });

  const lazyDivs = document.querySelectorAll(".mainContent");

  lazyDivs.forEach((div) => {
    const topicImg = div.querySelector("img"); // Select only the first img within each div
    if (topicImg) { // Ensure img exists before observing
      observer.observe(topicImg);
    }
  });

});
