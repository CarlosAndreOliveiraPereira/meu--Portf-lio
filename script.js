document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    const navToggle = document.getElementById("nav-toggle");
    const navList = document.getElementById("nav-list");

    if (navToggle && navList) {
        navToggle.addEventListener("click", (e) => {
            e.stopPropagation();
            navList.classList.toggle("show");
        });

        navList.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                navList.classList.remove("show");
            });
        });
    }

    document.addEventListener("click", (e) => {
        if (navList.classList.contains("show") && !e.target.closest(".nav")) {
            navList.classList.remove("show");
        }
    });

    const header = document.querySelector(".header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});
