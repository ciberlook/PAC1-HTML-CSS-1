import { gsap } from "gsap/gsap-core";
import { MotionPathPlugin } from "gsap/all";





gsap.registerPlugin(MotionPathPlugin);

  
const bomenu=document.querySelector('#bomenu');
const menu=document.querySelector('#menu');

let tl = gsap.timeline({ reversed: true , paused:true});
bomenu.addEventListener('click',(ev)=>{
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
          )
},true);

window.addEventListener('resize',(ev)=>{
    if (window.innerWidth>=720)
        menu.classList.remove('oculto');
    else
        menu.classList.add('oculto');
},true);

window.addEventListener('load',()=>{
  if (window.innerWidth>=720)
    menu.classList.remove('oculto');
})

let navT1=gsap.timeline();
navT1.to('#menu',{
  duration:0,
  display:"block",
  ease: "Expo.easeInOut"
});

navT1.reversed(!navT1.reversed())



  
