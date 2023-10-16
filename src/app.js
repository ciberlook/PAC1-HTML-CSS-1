import { gsap } from "gsap/gsap-core";
import { MotionPathPlugin } from "gsap/all";





gsap.registerPlugin(MotionPathPlugin);


const bomenu = document.querySelector('#bomenu');
const menu = document.querySelector('#menu');

let tl = gsap.timeline({ reversed: true, paused: true });
let navT1 = gsap.timeline({ reserved: true, paused: true });
navT1.from('#menu', {
  duration: 1,
  autoAlpha: 0,
  display: "flex",
  ease: "Expo.easeInOut"
}).reverse();
bomenu.addEventListener('click', (ev) => {
  menu.classList.toggle('oculto');
  tl.reversed() ? tl.play() : tl.reverse(0.2);
  tl.to(".line1", {
    duration: 0.05,
    strokeDasharray: "90 207",
    strokeDashoffset: "-134",
  })
    .to(
      ".line2",
      {
        duration: 0.05,
        strokeDasharray: "1 60",
        strokeDashoffset: "-30",
      },
      "-=0.1"
    )
    .to(
      ".line3",
      {
        duration: 0.05,
        strokeDasharray: "90 207",
        strokeDashoffset: "-134",
      },
      "-=0.2"
    );




  navT1.reversed(!navT1.reversed());


}, true);

window.addEventListener('resize', (ev) => {
  if (window.innerWidth >= 720)
    menu.classList.remove('oculto');
  else
    menu.classList.add('oculto');
}, true);

window.addEventListener('load', () => {
  if (window.innerWidth >= 720)
    menu.classList.remove('oculto');
})






