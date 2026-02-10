import "../../style.css"
import gsap from "gsap";

import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

gsap.to(".box", {
    xPercent: 1000,
    rotate: 360,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".box",
        start: "top center",
        markers: true,
        scrub: 100.5
    },
});
