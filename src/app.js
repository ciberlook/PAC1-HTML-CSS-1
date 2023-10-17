import { gsap } from "gsap/gsap-core";
import { MotionPathPlugin } from "gsap/all";
import SplitType from 'split-type';




gsap.registerPlugin(MotionPathPlugin);


const bomenu = document.querySelector('#bomenu');
const menu = document.querySelector('#menu');

let tl = gsap.timeline({ reversed: true, paused: true });
let navT1 = gsap.timeline({ reserved: true, paused: true });
let voyayerT1 = gsap.timeline();
let voyayerT2=gsap.timeline({reversed:true});





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
    
    navT1.to('#menu', {
      duration: 1,
      autoAlpha: 0,
      display: "flex",
      ease: "Expo.easeInOut"
    });
    navT1.to('#menu a',{
      duration:1.5,
      scale:100,
      
      stagger:0.2,
      ease:"Expo.easeInOut"
    },"-=.8");

  //navT1.reversed(!navT1.reversed());
  navT1.reversed() ? navT1.play() : navT1.reverse(1);
}, true);

window.addEventListener('resize', (ev) => {
  if (window.innerWidth >= 720 ){
    menu.classList.remove('oculto');
    menu.removeAttribute('style');
    document.querySelectorAll('#menu a').forEach((elem)=>elem.removeAttribute('style'));
    navT1.restart();
    navT1.clear();
  } else {
    menu.classList.add('oculto');
    navT1.to('#menu', {
      duration: 1,
      autoAlpha: 0,
      display: "flex",
      ease: "Expo.easeInOut"
    });
    
  }
    
}, true);

let typeSplit = new SplitType('#portada h1', {
  types: 'lines, words, chars',
  tagName: 'span'
});

window.addEventListener('load', () => {
  if (window.innerWidth >= 720 ){
    menu.classList.remove('oculto');
  }

})

voyayerT1.from('#nave',{
  duration:5,
  scale:0,
  translateX:'-50%'
});

voyayerT2.to('#nave',{
  duration:3,
  top:'+=10',
  ease:'ease',
  repeat:-1,
  yoyo:true
},'+=5.5').play()


voyayerT2.from('#portada h1 .word', {
  y: '50%',
  opacity: 0,
  rotationZ: '10',
  duration: 1,
  ease: 'power1.out',
  stagger: 0.25,
  
},"-=5").play()








