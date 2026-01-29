import gsap from "gsap";

gsap.to(".box", {
    opacity: 1,
    scale: 1.2,
    boxShadow: "0 20px 80px rgba(29, 209, 161, 0.6)",
    rotate: 120,
    borderRadius: "50%",
    duration: 1,
    ease: "power2.inOut",
    yoyo: true,
    repeat: -1,
});


