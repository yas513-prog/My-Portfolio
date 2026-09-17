// =========================
// SCROLL ANIMATIONS
// =========================

const animatedElements = document.querySelectorAll(
    ".about-content, .skill, .project, .contact-content"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);


animatedElements.forEach((element) => {

    element.classList.add("hidden");

    observer.observe(element);

});


// =========================
// SKILLS ANIMATION
// =========================

const skillsSection = document.querySelector("#skills");

const skillBars = document.querySelectorAll(
    ".skill-progress"
);


const skillsObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                skillBars.forEach((bar) => {
                    bar.classList.add("animate");
                });

                skillsObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.3
    }
);


if (skillsSection) {
    skillsObserver.observe(skillsSection);
}


// =========================
// NAVBAR SCROLL EFFECT
// =========================

const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


// =========================
// UPDATE FOOTER YEAR
// =========================

const footerText = document.querySelector("footer p");


if (footerText) {

    const currentYear = new Date().getFullYear();

    footerText.innerHTML =
        `© ${currentYear} Nada. Built with HTML, CSS & JavaScript.`;

}


// =========================
// PROJECT HOVER EFFECT
// =========================

const projectImages = document.querySelectorAll(
    ".project-image"
);


projectImages.forEach((project) => {

    project.addEventListener("mouseenter", () => {
        project.style.transform = "translateY(-8px)";
    });


    project.addEventListener("mouseleave", () => {
        project.style.transform = "translateY(0)";
    });

});


// =========================
// SMOOTH NAVIGATION
// =========================

const navLinks = document.querySelectorAll(
    ".navbar nav a"
);


navLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId = link.getAttribute("href");

        const targetSection = document.querySelector(targetId);


        if (targetSection) {

            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// =========================
// HERO BUTTONS
// =========================

const projectButton = document.querySelector(
    ".primary-btn"
);

const contactButton = document.querySelector(
    ".secondary-btn"
);


if (projectButton) {

    projectButton.addEventListener("click", (event) => {

        const projectsSection =
            document.querySelector("#projects");

        if (projectsSection) {

            event.preventDefault();

            projectsSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

}


if (contactButton) {

    contactButton.addEventListener("click", (event) => {

        const contactSection =
            document.querySelector("#contact");

        if (contactSection) {

            event.preventDefault();

            contactSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

}


// =========================
// CONSOLE MESSAGE
// =========================

console.log("Welcome to Nada's Portfolio! 🚀");