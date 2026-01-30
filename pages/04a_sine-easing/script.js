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