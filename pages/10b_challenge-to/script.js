import gsap from "gsap";

const toastDuration = 0.8;
const toastDelay = 1.6;
const toastScale = 1;

gsap.to(".toast.one", {
    y: -200,
    duration: toastDuration,
    scale: toastScale,
    ease: "elastic.out(1, 1.25)",
    onComplete: () => {
        gsap.to(".toast.one", {
            y: 0,
            duration: toastDuration,
            delay: toastDelay,
            scale: 0.9,
            ease: "power1.out",
        });
    }
});

gsap.to(".toast.two", {
    y: -200,
    duration: toastDuration,
    delay: toastDelay,
    scale: toastScale,
    ease: "elastic.out(1, 1.25)",
    onComplete: () => {
        gsap.to(".toast.two", {
            y: 0,
            duration: toastDuration,
            delay: toastDelay,
            scale: 0.9,
            ease: "power1.out",
        });
    }
});
