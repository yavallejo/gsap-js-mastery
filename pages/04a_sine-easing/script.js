import gsap from "gsap";

const button = document.querySelector(".scroll-to-top");

let isFloating = false;

window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        button.classList.add("show");

        if (!isFloating) {
            gsap.to(button, {
                y: -2,
                duration: 1,
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut",
            });

            isFloating = true;
        }

    } else {
        button.classList.remove("show");
    }
});

button.addEventListener("mouseenter", () => {
    gsap.to(button, {
        scale: 1.5,
        duration: 1,
        ease: "sine.inOut",
    });
});

button.addEventListener("mouseleave", () => {
    gsap.to(button, {
        scale: 1,
        duration: 1,
        ease: "sine.inOut",
    });
});

button.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});