import gsap from "gsap";

const animation = gsap.to(".box", {
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

const play = document.querySelector(".play");

const pause = document.querySelector(".pause");

const resume = document.querySelector(".resume");

const restart = document.querySelector(".restart");

const reverse = document.querySelector(".reverse");

const repeat = document.querySelector(".repeat");

const kill = document.querySelector(".kill");

const yoyo = document.querySelector(".yoyo");

play.addEventListener("click", () => {
    animation.play();
});

pause.addEventListener("click", () => {
    animation.pause();
});

resume.addEventListener("click", () => {
    animation.resume();
});

restart.addEventListener("click", () => {
    animation.restart();
});

reverse.addEventListener("click", () => {
    animation.reverse();
});

repeat.addEventListener("click", () => {
    animation.repeat();
});

kill.addEventListener("click", () => {
    animation.kill();
});

yoyo.addEventListener("click", () => {
    animation.yoyo();
});