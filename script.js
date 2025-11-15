document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear().toString();
  }

  const navToggle = document.getElementById("nav-toggle");
  const navList = document.getElementById("nav-list");

  if (navToggle && navList) {
    const closeMenu = () => {
      navList.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    };

    navToggle.addEventListener("click", (event) => {
      event.stopPropagation();
      const isOpen = navList.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navList.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", (event) => {
      if (!navList.contains(event.target) && !navToggle.contains(event.target)) {
        closeMenu();
      }
    });
  }
});
