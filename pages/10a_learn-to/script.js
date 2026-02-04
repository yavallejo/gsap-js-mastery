import gsap from "gsap";

const showToastLoop = () => {
    gsap.to(".toast", {
        y: -120,
        opacity: 1,
        duration: 0.8,
        scale: 1,
        ease: "power2.inOut",
        onComplete: () => {
            gsap.to(".toast", {
                delay: 2,
                y: 0,
                opacity: 0,
                scale: 0.9,
                duration: 0.8,
                ease: "power2.inOut",
                onComplete: () => {
                    setTimeout(showToastLoop, 2000);
                }
            });
        }
    });
}

showToastLoop();