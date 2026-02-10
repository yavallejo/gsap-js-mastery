import "./main.css";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

gsap.to(".box", {
    y: 200,
    opacity: 0,
    rotate: 360,
    stagger: 0.2,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: ".container",
        start: "top center",
        end: "bottom 20%",
        scrub: 1.5,
        markers: true,
    },
});
