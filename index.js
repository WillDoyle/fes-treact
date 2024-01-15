function openMenu() {
  document.body.classList += " menu--open";
}

function closeMenu() {
  document.body.classList.remove("menu--open");
}

// Function to check if an element is near the viewport
function isElementNearViewport(element, threshold = 200) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= window.innerHeight + threshold && rect.bottom >= 0 - threshold
  );
}

// Function to handle scroll events
function handleScroll() {
  const revealElements = document.querySelectorAll(".reveal");

  revealElements.forEach((element) => {
    if (isElementNearViewport(element)) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
}

// Attach the scroll event listener
window.addEventListener("scroll", handleScroll);

// Initial check in case the elements are already visible on page load
handleScroll();
