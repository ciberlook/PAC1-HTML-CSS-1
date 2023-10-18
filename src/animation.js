import { gsap } from "gsap/gsap-core";
import { MotionPathPlugin } from "gsap/all";

gsap.registerPlugin(MotionPathPlugin);

let tl = gsap.timeline({ reversed: true, paused: true });
let navT1 = gsap.timeline({ reserved: true, paused: true });

import { animateShip } from "./app";

animateShip();