function t(t,e,r,n){Object.defineProperty(t,e,{get:r,set:n,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},i=e.parcelRequire853e;null==i&&((i=function(t){if(t in r)return r[t].exports;if(t in n){var e=n[t];delete n[t];var i={id:t,exports:{}};return r[t]=i,e.call(i.exports,i,i.exports),i.exports}var s=Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){n[t]=e},e.parcelRequire853e=i);var s=i.register;s("9ycdn",function(e,r){t(e.exports,"animateShip",function(){return f});var n=i("gMDMw"),s=i("byNbX"),a=i("bC9KT");(0,n.gsap).registerPlugin(s.MotionPathPlugin);let o=(0,n.gsap).timeline({reversed:!0,paused:!0}),u=(0,n.gsap).timeline({reserved:!0,paused:!0}),h=document.querySelector("#bomenu"),l=document.querySelector("#menu");function f(){let t=(0,n.gsap).timeline(),e=(0,n.gsap).timeline({reversed:!0});new a.default("#portada h1",{types:"lines, words, chars",tagName:"span"}),t.from("#nave",{duration:5,scale:0,translateX:"-50%"}),e.to("#nave",{duration:3,top:"+=10",ease:"ease",repeat:-1,yoyo:!0},"+=5.5").play(),e.from("#portada h1 .word",{y:"50%",opacity:0,rotationZ:"10",duration:1,ease:"power1.out",stagger:.25},"-=5").play()}h.addEventListener("click",t=>{l.classList.toggle("oculto"),o.reversed()?o.play():o.reverse(.2),o.to(".line1",{duration:.05,strokeDasharray:"90 207",strokeDashoffset:"-134"}).to(".line2",{duration:.05,strokeDasharray:"1 60",strokeDashoffset:"-30"},"-=0.1").to(".line3",{duration:.05,strokeDasharray:"90 207",strokeDashoffset:"-134"},"-=0.2"),u.to("#menu",{duration:1,autoAlpha:0,display:"flex",ease:"Expo.easeInOut"}),u.reversed()?u.play():u.reverse(1)},!0),window.addEventListener("resize",t=>{window.innerWidth>=720?(l.classList.remove("oculto"),l.removeAttribute("style"),document.querySelectorAll("#menu a").forEach(t=>t.removeAttribute("style")),u.restart(),u.clear()):(l.classList.add("oculto"),u.to("#menu",{duration:1,autoAlpha:0,display:"flex",ease:"Expo.easeInOut"}))},!0),window.addEventListener("load",()=>{window.innerWidth>=720&&l.classList.remove("oculto")})}),s("gMDMw",function(e,r){function n(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function i(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}t(e.exports,"gsap",function(){return rb});/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*//* eslint-disable */var s,a,o,u,h,l,f,c,p,d,_,g,m,v,y,w,T,x,b,C,P,M,k,E,R,/*
 * --------------------------------------------------------------------------------------
 * TICKER
 * --------------------------------------------------------------------------------------
 */S,A={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},D={duration:.5,overwrite:!1,delay:0},L=2*Math.PI,O=L/4,N=0,z=Math.sqrt,B=Math.cos,F=Math.sin,I=function(t){return"string"==typeof t},$=function(t){return"function"==typeof t},j=function(t){return"number"==typeof t},U=function(t){return void 0===t},q=function(t){return"object"==typeof t},W=function(t){return!1!==t},G=function(){return"undefined"!=typeof window},V=function(t){return $(t)||I(t)},X="function"==typeof ArrayBuffer&&ArrayBuffer.isView||function(){},Y=Array.isArray,H=/(?:-?\.?\d|\.)+/gi,Q=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Z=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,K=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,J=/[+-]=-?[.\d]+/,tt=/[^,'"\[\]\s]+/gi,te=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,tr={},tn={},ti=function(t){return(tn=tD(t,tr))&&rb},ts=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},ta=function(t,e){return!e&&console.warn(t)},to=function(t,e){return t&&(tr[t]=e)&&tn&&(tn[t]=e)||tr},tu=function(){return 0},th={suppressEvents:!0,isStart:!0,kill:!1},tl={suppressEvents:!0,kill:!1},tf={suppressEvents:!0},tc={},tp=[],td={},t_={},tg={},tm=30,tv=[],ty="",tw=function(t){var e,r,n=t[0];if(q(n)||$(n)||(t=[t]),!(e=(n._gsap||{}).harness)){for(// find the first target with a harness. We assume targets passed into an animation will be of similar type, meaning the same kind of harness can be used for them all (performance optimization)
r=tv.length;r--&&!tv[r].targetTest(n););e=tv[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new eI(t[r],e)))||t.splice(r,1);return t},tT=function(t){return t._gsap||tw(er(t))[0]._gsap},tx=function(t,e,r){return(r=t[e])&&$(r)?t[e]():U(r)&&t.getAttribute&&t.getAttribute(e)||r},tb=function(t,e){return(t=t.split(",")).forEach(e)||t},tC=function(t){return Math.round(1e7*t)/1e7||0},tP=function(t,e){var r=e.charAt(0),n=parseFloat(e.substr(2));return t=parseFloat(t),"+"===r?t+n:"-"===r?t-n:"*"===r?t*n:t/n},tM=function(t,e){for(//searches one array to find matches for any of the items in the toFind array. As soon as one is found, it returns true. It does NOT return all the matches; it's simply a boolean search.
var r=e.length,n=0;0>t.indexOf(e[n])&&++n<r;);return n<r},tk=function(){var t,e,r=tp.length,n=tp.slice(0);for(t=0,td={},tp.length=0;t<r;t++)(e=n[t])&&e._lazy&&(e.render(e._lazy[0],e._lazy[1],!0)._lazy=0)},tE=function(t,e,r,n){tp.length&&!T&&tk(),t.render(e,r,n||T&&e<0&&(t._initted||t._startAt)),tp.length&&!T&&tk()},tR=function(t){var e=parseFloat(t);return(e||0===e)&&(t+"").match(tt).length<2?e:I(t)?t.trim():t},tS=function(t){return t},tA=function(t,e){for(var r in e)r in t||(t[r]=e[r]);return t},tD=function(t,e){for(var r in e)t[r]=e[r];return t},tL=function t(e,r){for(var n in r)"__proto__"!==n&&"constructor"!==n&&"prototype"!==n&&(e[n]=q(r[n])?t(e[n]||(e[n]={}),r[n]):r[n]);return e},tO=function(t,e){var r,n={};for(r in t)r in e||(n[r]=t[r]);return n},tN=function(t){var e,r=t.parent||b,n=t.keyframes?(e=Y(t.keyframes),function(t,r){for(var n in r)n in t||"duration"===n&&e||"ease"===n||(t[n]=r[n])}):tA;if(W(t.inherit))for(;r;)n(t,r.vars.defaults),r=r.parent||r._dp;return t},tz=function(t,e){for(var r=t.length,n=r===e.length;n&&r--&&t[r]===e[r];);return r<0},tB=function(t,e,r,n,i){void 0===r&&(r="_first"),void 0===n&&(n="_last");var s,a=t[n];if(i)for(s=e[i];a&&a[i]>s;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[r],t[r]=e),e._next?e._next._prev=e:t[n]=e,e._prev=a,e.parent=e._dp=t,e},tF=function(t,e,r,n){void 0===r&&(r="_first"),void 0===n&&(n="_last");var i=e._prev,s=e._next;i?i._next=s:t[r]===e&&(t[r]=s),s?s._prev=i:t[n]===e&&(t[n]=i),e._next=e._prev=e.parent=null},tI=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},t$=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(// performance optimization: if a child animation is passed in we should only uncache if that child EXTENDS the animation (its end time is beyond the end)
var r=t;r;)r._dirty=1,r=r.parent;return t},tj=function(t){for(var e=t.parent;e&&e.parent;)//sometimes we must force a re-sort of all children and update the duration/totalDuration of all ancestor timelines immediately in case, for example, in the middle of a render loop, one tween alters another tween's timeScale which shoves its startTime before 0, forcing the parent timeline to shift around and shiftChildren() which could affect that next tween's render (startTime). Doesn't matter for the root timeline though.
e._dirty=1,e.totalDuration(),e=e.parent;return t},tU=function(t,e,r,n){return t._startAt&&(T?t._startAt.revert(tl):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,n))},tq=function(t){return t._repeat?tW(t._tTime,t=t.duration()+t._rDelay)*t:0},tW=function(t,e){var r=Math.floor(t/=e);return t&&r===t?r-1:r},tG=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},tV=function(t){return t._end=tC(t._start+(t._tDur/Math.abs(t._ts||t._rts||1e-8)||0))},tX=function(t,e){// adjusts the animation's _start and _end according to the provided totalTime (only if the parent's smoothChildTiming is true and the animation isn't paused). It doesn't do any rendering or forcing things back into parent timelines, etc. - that's what totalTime() is for.
var r=t._dp;return r&&r.smoothChildTiming&&t._ts&&(t._start=tC(r._time-(t._ts>0?e/t._ts:-(((t._dirty?t.totalDuration():t._tDur)-e)/t._ts))),tV(t),r._dirty||t$(r,t)),t},/*
_totalTimeToTime = (clampedTotalTime, duration, repeat, repeatDelay, yoyo) => {
	let cycleDuration = duration + repeatDelay,
		time = _round(clampedTotalTime % cycleDuration);
	if (time > duration) {
		time = duration;
	}
	return (yoyo && (~~(clampedTotalTime / cycleDuration) & 1)) ? duration - time : time;
},
*/tY=function(t,e){var r;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(// in case, for example, the _start is moved on a tween that has already rendered, or if it's being inserted into a timeline BEFORE where the playhead is currently. Imagine it's at its end state, then the startTime is moved WAY later (after the end of this timeline), it should render at its beginning. Special case: if it's a timeline (has .add() method) and no duration, we can skip rendering because the user may be populating it AFTER adding it to a parent timeline (unconventional, but possible, and we wouldn't want it to get removed if the parent's autoRemoveChildren is true).
r=tG(t.rawTime(),e),(!e._dur||t9(0,e.totalDuration(),r)-e._tTime>1e-8)&&e.render(r,!0)),t$(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){//in case any of the ancestors had completed but should now be enabled...
if(t._dur<t.duration())for(r=t;r._dp;)r.rawTime()>=0&&r.totalTime(r._tTime),r=r._dp;t._zTime=-.00000001;// helps ensure that the next render() will be forced (crossingStart = true in render()), even if the duration hasn't changed (we're adding a child which would need to get rendered). Definitely an edge case. Note: we MUST do this AFTER the loop above where the totalTime() might trigger a render() because this _addToTimeline() method gets called from the Animation constructor, BEFORE tweens even record their targets, etc. so we wouldn't want things to get triggered in the wrong order.
}},tH=function(t,e,r,n){return e.parent&&tI(e),e._start=tC((j(r)?r:r||t!==b?t8(t,r,e):t._time)+e._delay),e._end=tC(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),tB(t,e,"_first","_last",t._sort?"_start":0),tJ(e)||(t._recent=e),n||tY(t,e),t._ts<0&&tX(t,t._tTime),t},tQ=function(t,e){return(tr.ScrollTrigger||ts("scrollTrigger",e))&&tr.ScrollTrigger.create(e,t)},tZ=function(t,e,r,n,i){return(eK(t,e,i),t._initted)?!r&&t._pt&&!T&&(t._dur&&!1!==t.vars.lazy||!t._dur&&t.vars.lazy)&&E!==eC.frame?(tp.push(t),t._lazy=[i,n],1):void 0:1},tK=function t(e){var r=e.parent;return r&&r._ts&&r._initted&&!r._lock&&(0>r.rawTime()||t(r))},tJ=function(t){var e=t.data;return"isFromStart"===e||"isStart"===e},t0=function(t,e,r,n){var i,s,a,o=t.ratio,u=e<0||!e&&(!t._start&&tK(t)&&!(!t._initted&&tJ(t))||(t._ts<0||t._dp._ts<0)&&!tJ(t))?0:1,h=t._rDelay,l=0;if(h&&t._repeat&&(s=tW(// in case there's a zero-duration tween that has a repeat with a repeatDelay
l=t9(0,t._tDur,e),h),t._yoyo&&1&s&&(u=1-u),s!==tW(t._tTime,h)&&(// if iteration changed
o=1-u,t.vars.repeatRefresh&&t._initted&&t.invalidate())),u!==o||T||n||1e-8===t._zTime||!e&&t._zTime){if(!t._initted&&tZ(t,e,n,r,l))return;for(a=t._zTime,t._zTime=e||(r?1e-8:0),r||(r=e&&!a),t.ratio=u,t._from&&(u=1-u),t._time=0,t._tTime=l,i=t._pt;i;)i.r(u,i.d),i=i._next;e<0&&tU(t,e,r,!0),t._onUpdate&&!r&&ep(t,"onUpdate"),l&&t._repeat&&!r&&t.parent&&ep(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===u&&(u&&tI(t,1),r||T||(ep(t,u?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},t1=function(t,e,r){var n;if(r>e)for(n=t._first;n&&n._start<=r;){if("isPause"===n.data&&n._start>e)return n;n=n._next}else for(n=t._last;n&&n._start>=r;){if("isPause"===n.data&&n._start<e)return n;n=n._prev}},t2=function(t,e,r,n){var i=t._repeat,s=tC(e)||0,a=t._tTime/t._tDur;return a&&!n&&(t._time*=s/t._dur),t._dur=s,t._tDur=i?i<0?1e10:tC(s*(i+1)+t._rDelay*i):s,a>0&&!n&&tX(t,t._tTime=t._tDur*a),t.parent&&tV(t),r||t$(t.parent,t),t},t5=function(t){return t instanceof ej?t$(t):t2(t,t._dur)},t3={_start:0,endTime:tu,totalDuration:tu},t8=function t(e,r,n){var i,s,a,o=e.labels,u=e._recent||t3,h=e.duration()>=1e8?u.endTime(!1):e._dur;return I(r)&&(isNaN(r)||r in o)?(//if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
s=r.charAt(0),a="%"===r.substr(-1),i=r.indexOf("="),"<"===s||">"===s)?(i>=0&&(r=r.replace(/=/,"")),("<"===s?u._start:u.endTime(u._repeat>=0))+(parseFloat(r.substr(1))||0)*(a?(i<0?u:n).totalDuration()/100:1)):i<0?(r in o||(o[r]=h),o[r]):(s=parseFloat(r.charAt(i-1)+r.substr(i+1)),a&&n&&(s=s/100*(Y(n)?n[0]:n).totalDuration()),i>1?t(e,r.substr(0,i-1),n)+s:h+s):null==r?h:+r},t4=function(t,e,r){var n,i,s=j(e[1]),a=(s?2:1)+(t<2?0:1),o=e[a];if(s&&(o.duration=e[1]),o.parent=r,t){for(n=o,i=r;i&&!("immediateRender"in n);)// inheritance hasn't happened yet, but someone may have set a default in an ancestor timeline. We could do vars.immediateRender = _isNotFalse(_inheritDefaults(vars).immediateRender) but that'd exact a slight performance penalty because _inheritDefaults() also runs in the Tween constructor. We're paying a small kb price here to gain speed.
n=i.vars.defaults||{},i=W(i.vars.inherit)&&i.parent;o.immediateRender=W(n.immediateRender),t<2?o.runBackwards=1:o.startAt=e[a-1]}return new e8(e[0],o,e[a+1])},t6=function(t,e){return t||0===t?e(t):e},t9=function(t,e,r){return r<t?t:r>e?e:r},t7=function(t,e){return I(t)&&(e=te.exec(t))?e[1]:""},et=[].slice,ee=function(t,e){return t&&q(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&q(t[0]))&&!t.nodeType&&t!==C},er=function(t,e,r){var n;return x&&!e&&x.selector?x.selector(t):I(t)&&!r&&(P||!eP())?et.call((e||M).querySelectorAll(t),0):Y(t)?(void 0===n&&(n=[]),t.forEach(function(t){var e;return I(t)&&!r||ee(t,1)?(e=n).push.apply(e,er(t)):n.push(t)})||n):ee(t)?et.call(t,0):t?[t]:[]},en=function(t){return t=er(t)[0]||ta("Invalid scope")||{},function(e){var r=t.current||t.nativeElement||t;return er(e,r.querySelectorAll?r:r===t?ta("Invalid scope")||M.createElement("div"):t)}},ei=function(t){return t.sort(function(){return .5-Math.random()})},//for distributing values across an array. Can accept a number, a function or (most commonly) a function which can contain the following properties: {base, amount, from, ease, grid, axis, length, each}. Returns a function that expects the following parameters: index, target, array. Recognizes the following
es=function(t){if($(t))return t;var e=q(t)?t:{each:t},r=eO(e.ease),n=e.from||0,i=parseFloat(e.base)||0,s={},a=n>0&&n<1,o=isNaN(n)||a,u=e.axis,h=n,l=n;return I(n)?h=l=({center:.5,edges:.5,end:1})[n]||0:!a&&o&&(h=n[0],l=n[1]),function(t,a,f){var c,p,d,_,g,m,v,y,w,T=(f||e).length,x=s[T];if(!x){if(!(w="auto"===e.grid?0:(e.grid||[1,1e8])[1])){for(v=-1e8;v<(v=f[w++].getBoundingClientRect().left)&&w<T;);w--}for(m=0,x=s[T]=[],c=o?Math.min(w,T)*h-.5:n%w,p=1e8===w?0:o?T*l/w-.5:n/w|0,v=0,y=1e8;m<T;m++)d=m%w-c,_=p-(m/w|0),x[m]=g=u?Math.abs("y"===u?_:d):z(d*d+_*_),g>v&&(v=g),g<y&&(y=g);"random"===n&&ei(x),x.max=v-y,x.min=y,x.v=T=(parseFloat(e.amount)||parseFloat(e.each)*(w>T?T-1:u?"y"===u?T/w:w:Math.max(w,T/w))||0)*("edges"===n?-1:1),x.b=T<0?i-T:i,x.u=t7(e.amount||e.each)||0,r=r&&T<0?eD(r):r}return T=(x[t]-x.min)/x.max||0,tC(x.b+(r?r(T):T)*x.v)+x.u;//round in order to work around floating point errors
}},ea=function(t){//pass in 0.1 get a function that'll round to the nearest tenth, or 5 to round to the closest 5, or 0.001 to the closest 1000th, etc.
var e=Math.pow(10,((t+"").split(".")[1]||"").length);//to avoid floating point math errors (like 24 * 0.1 == 2.4000000000000004), we chop off at a specific number of decimal places (much faster than toFixed())
return function(r){var n=tC(Math.round(parseFloat(r)/t)*t*e);return(n-n%1)/e+(j(r)?0:t7(r));// n - n % 1 replaces Math.floor() in order to handle negative values properly. For example, Math.floor(-150.00000000000003) is 151!
}},eo=function(t,e){var r,n,i=Y(t);return!i&&q(t)&&(r=i=t.radius||1e8,t.values?(n=!j((t=er(t.values))[0]))&&(r*=r):t=ea(t.increment)),t6(e,i?$(t)?function(e){return Math.abs((n=t(e))-e)<=r?n:e}:function(e){for(var i,s,a=parseFloat(n?e.x:e),o=parseFloat(n?e.y:0),u=1e8,h=0,l=t.length;l--;)(i=n?(i=t[l].x-a)*i+(s=t[l].y-o)*s:Math.abs(t[l]-a))<u&&(u=i,h=l);return h=!r||u<=r?t[h]:e,n||h===e||j(e)?h:h+t7(e)}:ea(t))},eu=function(t,e,r,n){return t6(Y(t)?!e:!0===r?(r=0,!1):!n,function(){return Y(t)?t[~~(Math.random()*t.length)]:(n=(r=r||1e-5)<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((t-r/2+Math.random()*(e-t+.99*r))/r)*r*n)/n})},eh=function(t,e,r){return t6(r,function(r){return t[~~e(r)]})},el=function(t){for(//replaces all occurrences of random(...) in a string with the calculated random value. can be a range like random(-100, 100, 5) or an array like random([0, 100, 500])
var e,r,n,i,s=0,a="";~(e=t.indexOf("random(",s));)n=t.indexOf(")",e),i="["===t.charAt(e+7),r=t.substr(e+7,n-e-7).match(i?tt:H),a+=t.substr(s,e-s)+eu(i?r:+r[0],i?0:+r[1],+r[2]||1e-5),s=n+1;return a+t.substr(s,t.length-s)},ef=function(t,e,r,n,i){var s=e-t,a=n-r;return t6(i,function(e){return r+((e-t)/s*a||0)})},ec=function(t,e,r){//used for nextLabel() and previousLabel()
var n,i,s,a=t.labels,o=1e8;for(n in a)(i=a[n]-e)<0==!!r&&i&&o>(i=Math.abs(i))&&(s=n,o=i);return s},ep=function(t,e,r){var n,i,s,a=t.vars,o=a[e],u=x,h=t._ctx;if(o)return n=a[e+"Params"],i=a.callbackScope||t,r&&tp.length&&tk(),h&&(x=h),s=n?o.apply(i,n):o.call(i),x=u,s},ed=function(t){return tI(t),t.scrollTrigger&&t.scrollTrigger.kill(!!T),1>t.progress()&&ep(t,"onInterrupt"),t},e_=[],eg=function(t){if(G()&&t){var e=// edge case: some build tools may pass in a null/undefined value
(t=!t.name&&t.default||t).name,r=$(t),n=e&&!r&&t.init?function(){this._props=[]}:t,i={init:tu,render:ri,add:eH,kill:ra,modifier:rs,rawVars:0},s={targetTest:0,get:0,getSetter:rt,aliases:{},register:0};if(eP(),t!==n){if(t_[e])return;tA(n,tA(tO(t,i),s)),tD(n.prototype,tD(i,tO(t,s))),t_[n.prop=e]=n,t.targetTest&&(tv.push(n),tc[e]=1),e=("css"===e?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}to(e,n),t.register&&t.register(rb,n,rh)}else t&&e_.push(t)},em={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},// let ctx = _doc.createElement("canvas").getContext("2d");
// _forEachName("aqua,lime,silver,black,maroon,teal,blue,navy,white,olive,yellow,orange,gray,purple,green,red,pink,cyan", color => {ctx.fillStyle = color; _colorLookup[color] = splitColor(ctx.fillStyle)});
ev=function(t,e,r){return(6*(t+=t<0?1:t>1?-1:0)<1?e+(r-e)*t*6:t<.5?r:3*t<2?e+(r-e)*(2/3-t)*6:e)*255+.5|0},ey=function(t,e,r){var n,i,s,a,o,u,h,l,f,c,p=t?j(t)?[t>>16,t>>8&255,255&t]:0:em.black;if(!p){if(","===t.substr(-1)&&(t=t.substr(0,t.length-1)),em[t])p=em[t];else if("#"===t.charAt(0)){if(t.length<6&&(t="#"+//for shorthand like #9F0 or #9F0F (could have alpha)
(n=t.charAt(1))+n+(i=t.charAt(2))+i+(s=t.charAt(3))+s+(5===t.length?t.charAt(4)+t.charAt(4):"")),9===t.length)return[// hex with alpha, like #fd5e53ff
(p=parseInt(t.substr(1,6),16))>>16,p>>8&255,255&p,parseInt(t.substr(7),16)/255];p=[(t=parseInt(t.substr(1),16))>>16,t>>8&255,255&t]}else if("hsl"===t.substr(0,3)){if(p=c=t.match(H),e){if(~t.indexOf("="))return(//if relative values are found, just return the raw strings with the relative prefixes in place.
p=t.match(Q),r&&p.length<4&&(p[3]=1),p)}else a=+p[0]%360/360,o=+p[1]/100,i=(u=+p[2]/100)<=.5?u*(o+1):u+o-u*o,n=2*u-i,p.length>3&&(p[3]*=1),p[0]=ev(a+1/3,n,i),p[1]=ev(a,n,i),p[2]=ev(a-1/3,n,i)}else p=t.match(H)||em.transparent;p=p.map(Number)}return e&&!c&&(u=((h=Math.max(n=p[0]/255,i=p[1]/255,s=p[2]/255))+(l=Math.min(n,i,s)))/2,h===l?a=o=0:(f=h-l,o=u>.5?f/(2-h-l):f/(h+l),a=(h===n?(i-s)/f+(i<s?6:0):h===i?(s-n)/f+2:(n-i)/f+4)*60),p[0]=~~(a+.5),p[1]=~~(100*o+.5),p[2]=~~(100*u+.5)),r&&p.length<4&&(p[3]=1),p},ew=function(t){// strips out the colors from the string, finds all the numeric slots (with units) and returns an array of those. The Array also has a "c" property which is an Array of the index values where the colors belong. This is to help work around issues where there's a mis-matched order of color/numeric data like drop-shadow(#f00 0px 1px 2px) and drop-shadow(0x 1px 2px #f00). This is basically a helper function used in _formatColors()
var e=[],r=[],n=-1;return t.split(ex).forEach(function(t){var i=t.match(Z)||[];e.push.apply(e,i),r.push(n+=i.length+1)}),e.c=r,e},eT=function(t,e,r){var n,i,s,a,o="",u=(t+o).match(ex),h=e?"hsla(":"rgba(",l=0;if(!u)return t;if(u=u.map(function(t){return(t=ey(t,e,1))&&h+(e?t[0]+","+t[1]+"%,"+t[2]+"%,"+t[3]:t.join(","))+")"}),r&&(s=ew(t),(n=r.c).join(o)!==s.c.join(o)))for(a=(i=t.replace(ex,"1").split(Z)).length-1;l<a;l++)o+=i[l]+(~n.indexOf(l)?u.shift()||h+"0,0,0,0)":(s.length?s:u.length?u:r).shift());if(!i)for(a=(i=t.split(ex)).length-1;l<a;l++)o+=i[l]+u[l];return o+i[a]},ex=function(){var t,e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";for(t in em)e+="|"+t+"\\b";return RegExp(e+")","gi")}(),eb=/hsl[a]?\(/,eC=(f=Date.now,c=500,p=33,_=d=f(),g=1e3/240,m=1e3/240,v=[],y=function t(e){var r,n,i,o,y=f()-_,w=!0===e;if(y>c&&(d+=y-p),_+=y,((r=(i=_-d)-m)>0||w)&&(o=++u.frame,h=i-1e3*u.time,u.time=i/=1e3,m+=r+(r>=g?4:g-r),n=1),w||(s=a(t)),n)for(l=0;l<v.length;l++)v[l](i,h,o,e)},u={time:0,frame:0,tick:function(){y(!0)},deltaRatio:function(t){return h/(1e3/(t||60))},wake:function(){k&&(!P&&G()&&(M=(C=P=window).document||{},tr.gsap=rb,(C.gsapVersions||(C.gsapVersions=[])).push(rb.version),ti(tn||C.GreenSockGlobals||!C.gsap&&C||{}),o=C.requestAnimationFrame,e_.forEach(eg)),s&&u.sleep(),a=o||function(t){return setTimeout(t,m-1e3*u.time+1|0)},S=1,y(2))},sleep:function(){(o?C.cancelAnimationFrame:clearTimeout)(s),S=0,a=tu},lagSmoothing:function(t,e){p=Math.min(e||33,c=t||1/0)},fps:function(t){g=1e3/(t||240),m=1e3*u.time+g},add:function(t,e,r){var n=e?function(e,r,i,s){t(e,r,i,s),u.remove(n)}:t;return u.remove(t),v[r?"unshift":"push"](n),eP(),n},remove:function(t,e){~(e=v.indexOf(t))&&v.splice(e,1)&&l>=e&&l--},_listeners:v}),eP=function(){return!S&&eC.wake()},/*
* -------------------------------------------------
* EASING
* -------------------------------------------------
*/eM={},ek=/^[\d.\-M][\d.\-,\s]/,eE=/["']/g,eR=function(t){for(//takes a string like "{wiggles:10, type:anticipate})" and turns it into a real object. Notice it ends in ")" and includes the {} wrappers. This is because we only use this function for parsing ease configs and prioritized optimization rather than reusability.
var e,r,n,i={},s=t.substr(1,t.length-3).split(":"),a=s[0],o=1,u=s.length;o<u;o++)r=s[o],e=o!==u-1?r.lastIndexOf(","):r.length,n=r.substr(0,e),i[a]=isNaN(n)?n.replace(eE,"").trim():+n,a=r.substr(e+1).trim();return i},eS=function(t){var e=t.indexOf("(")+1,r=t.indexOf(")"),n=t.indexOf("(",e);return t.substring(e,~n&&n<r?t.indexOf(")",r+1):r)},eA=function(t){//name can be a string like "elastic.out(1,0.5)", and pass in _easeMap as obj and it'll parse it out and call the actual function like _easeMap.Elastic.easeOut.config(1,0.5). It will also parse custom ease strings as long as CustomEase is loaded and registered (internally as _easeMap._CE).
var e=(t+"").split("("),r=eM[e[0]];return r&&e.length>1&&r.config?r.config.apply(null,~t.indexOf("{")?[eR(e[1])]:eS(t).split(",").map(tR)):eM._CE&&ek.test(t)?eM._CE("",t):r},eD=function(t){return function(e){return 1-t(1-e)}},eL=function t(e,r){for(var n,i=e._first;i;)i instanceof ej?t(i,r):!i.vars.yoyoEase||i._yoyo&&i._repeat||i._yoyo===r||(i.timeline?t(i.timeline,r):(n=i._ease,i._ease=i._yEase,i._yEase=n,i._yoyo=r)),i=i._next},eO=function(t,e){return t&&($(t)?t:eM[t]||eA(t))||e},eN=function(t,e,r,n){void 0===r&&(r=function(t){return 1-e(1-t)}),void 0===n&&(n=function(t){return t<.5?e(2*t)/2:1-e((1-t)*2)/2});var i,s={easeIn:e,easeOut:r,easeInOut:n};return tb(t,function(t){for(var e in eM[t]=tr[t]=s,eM[i=t.toLowerCase()]=r,s)eM[i+("easeIn"===e?".in":"easeOut"===e?".out":".inOut")]=eM[t+"."+e]=s[e]}),s},ez=function(t){return function(e){return e<.5?(1-t(1-2*e))/2:.5+t((e-.5)*2)/2}},eB=function t(e,r,n){var i=r>=1?r:1,s=(n||(e?.3:.45))/(r<1?r:1),a=s/L*(Math.asin(1/i)||0),o=function(t){return 1===t?1:i*Math.pow(2,-10*t)*F((t-a)*s)+1},u="out"===e?o:"in"===e?function(t){return 1-o(1-t)}:ez(o);return s=L/s,u.config=function(r,n){return t(e,r,n)},u},eF=function t(e,r){void 0===r&&(r=1.70158);var n=function(t){return t?--t*t*((r+1)*t+r)+1:0},i="out"===e?n:"in"===e?function(t){return 1-n(1-t)}:ez(n);return i.config=function(r){return t(e,r)},i};// a cheaper (kb and cpu) but more mild way to get a parameterized weighted ease by feeding in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEase = ratio => {
// 	let y = 0.5 + ratio / 2;
// 	return p => (2 * (1 - p) * p * y + p * p);
// },
// a stronger (but more expensive kb/cpu) parameterized weighted ease that lets you feed in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEaseStrong = ratio => {
// 	ratio = .5 + ratio / 2;
// 	let o = 1 / 3 * (ratio < .5 ? ratio : 1 - ratio),
// 		b = ratio - o,
// 		c = ratio + o;
// 	return p => p === 1 ? p : 3 * b * (1 - p) * (1 - p) * p + 3 * c * (1 - p) * p * p + p * p * p;
// };
tb("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var r=e<5?e+1:e;eN(t+",Power"+(r-1),e?function(t){return Math.pow(t,r)}:function(t){return t},function(t){return 1-Math.pow(1-t,r)},function(t){return t<.5?Math.pow(2*t,r)/2:1-Math.pow((1-t)*2,r)/2})}),eM.Linear.easeNone=eM.none=eM.Linear.easeIn,eN("Elastic",eB("in"),eB("out"),eB()),eq=2*(eU=1/2.75),eW=2.5*eU,eN("Bounce",function(t){return 1-eG(1-t)},eG=function(t){return t<eU?7.5625*t*t:t<eq?7.5625*Math.pow(t-1.5/2.75,2)+.75:t<eW?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*Math.pow(t-2.625/2.75,2)+.984375}),eN("Expo",function(t){return t?Math.pow(2,10*(t-1)):0}),eN("Circ",function(t){return-(z(1-t*t)-1)}),eN("Sine",function(t){return 1===t?1:-B(t*O)+1}),eN("Back",eF("in"),eF("out"),eF()),eM.SteppedEase=eM.steps=tr.SteppedEase={config:function(t,e){void 0===t&&(t=1);var r=1/t,n=t+(e?0:1),i=e?1:0;return function(t){return((n*t9(0,.99999999,t)|0)+i)*r}}},D.ease=eM["quad.out"],tb("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return ty+=t+","+t+"Params,"});var eI=function(t,e){this.id=N++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:tx,this.set=e?e.getSetter:rt},e$=/*#__PURE__*/function(){function t(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(// TODO: repeat: Infinity on a timeline's children must flag that timeline internally and affect its totalDuration, otherwise it'll stop in the negative direction when reaching the start.
this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,t2(this,+t.duration,1,1),this.data=t.data,x&&(this._ctx=x,x.data.push(this)),S||eC.wake()}var e=t.prototype;return e.delay=function(t){return t||0===t?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},e.duration=function(t){return arguments.length?this.totalDuration(this._repeat>0?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},e.totalDuration=function(t){return arguments.length?(this._dirty=0,t2(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(t,e){if(eP(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){//in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The start of that child would get pushed out, but one of the ancestors may have completed.
for(tX(this,t),!r._dp||r.parent||tY(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:-((r.totalDuration()-r._tTime)/r._ts))&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&t<this._tDur||this._ts<0&&t>0||!this._tDur&&!t)&&tH(this._dp,this,this._start-this._delay)}return this._tTime===t&&(this._dur||e)&&(!this._initted||1e-8!==Math.abs(this._zTime))&&(t||this._initted||!this.add&&!this._ptLookup)||(// check for _ptLookup on a Tween instance to ensure it has actually finished being instantiated, otherwise if this.reverse() gets called in the Animation constructor, it could trigger a render() here even though the _targets weren't populated, thus when _init() is called there won't be any PropTweens (it'll act like the tween is non-functional)
this._ts||(this._pTime=t),//if (!this._lock) { // avoid endless recursion (not sure we need this yet or if it's worth the performance hit)
//   this._lock = 1;
tE(this,t,e)),this},e.time=function(t,e){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+tq(this))%(this._dur+this._rDelay)||(t?this._dur:0),e):this._time;// note: if the modulus results in 0, the playhead could be exactly at the end or the beginning, and we always defer to the END with a non-zero value, otherwise if you set the time() to the very end (duration()), it would render at the START!
},e.totalProgress=function(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(t,e){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(1&this.iteration())?1-t:t)+tq(this),e):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(t,e){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*r,e):this._repeat?tW(this._tTime,r)+1:1}// potential future addition:
,e.timeScale=function(t){if(!arguments.length)return -.00000001===this._rts?0:this._rts;// recorded timeScale. Special case: if someone calls reverse() on an animation with timeScale of 0, we assign it -_tinyNum to remember it's reversed.
if(this._rts===t)return this;var e=this.parent&&this._ts?tG(this.parent._time,this):this._tTime;// make sure to do the parentToChildTotalTime() BEFORE setting the new _ts because the old one must be used in that calculation.
return(// future addition? Up side: fast and minimal file size. Down side: only works on this animation; if a timeline is reversed, for example, its childrens' onReverse wouldn't get called.
//(+value < 0 && this._rts >= 0) && _callback(this, "onReverse", true);
// prioritize rendering where the parent's playhead lines up instead of this._tTime because there could be a tween that's animating another tween's timeScale in the same rendering loop (same parent), thus if the timeScale tween renders first, it would alter _start BEFORE _tTime was set on that tick (in the rendering loop), effectively freezing it until the timeScale tween finishes.
this._rts=+t||0,this._ts=this._ps||-.00000001===t?0:this._rts,this.totalTime(t9(-Math.abs(this._delay),this._tDur,e),!0),tV(this),tj(this))},e.paused=function(t){return arguments.length?(this._ps!==t&&(this._ps=t,t?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(eP(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,1===this.progress()&&1e-8!==Math.abs(this._zTime)&&(this._tTime-=1e-8)))),this):this._ps},e.startTime=function(t){if(arguments.length){this._start=t;var e=this.parent||this._dp;return e&&(e._sort||!this.parent)&&tH(e,this,t-this._delay),this}return this._start},e.endTime=function(t){return this._start+(W(t)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(t){var e=this.parent||this._dp;// _dp = detached parent
return e?t&&(!this._ts||this._repeat&&this._time&&1>this.totalProgress())?this._tTime%(this._dur+this._rDelay):this._ts?tG(e.rawTime(t),this):this._tTime:this._tTime},e.revert=function(t){void 0===t&&(t=tf);var e=T;return T=t,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(t),this.totalTime(-.01,t.suppressEvents)),"nested"!==this.data&&!1!==t.kill&&this.kill(),T=e,this},e.globalTime=function(t){for(var e=this,r=arguments.length?t:e.rawTime();e;)r=e._start+r/(e._ts||1),e=e._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1/0:this._sat.globalTime(t):r;// the _startAt tweens for .fromTo() and .from() that have immediateRender should always be FIRST in the timeline (important for context.revert()). "_sat" stands for _startAtTween, referring to the parent tween that created the _startAt. We must discern if that tween had immediateRender so that we can know whether or not to prioritize it in revert().
},e.repeat=function(t){return arguments.length?(this._repeat=t===1/0?-2:t,t5(this)):-2===this._repeat?1/0:this._repeat},e.repeatDelay=function(t){if(arguments.length){var e=this._time;return this._rDelay=t,t5(this),e?this.time(e):this}return this._rDelay},e.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},e.seek=function(t,e){return this.totalTime(t8(this,t),W(e))},e.restart=function(t,e){return this.play().totalTime(t?-this._delay:0,W(e))},e.play=function(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},e.reverse=function(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},e.pause=function(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-.00000001:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-.00000001,this},e.isActive=function(){var t,e=this.parent||this._dp,r=this._start;return!!(!e||this._ts&&this._initted&&e.isActive()&&(t=e.rawTime(!0))>=r&&t<this.endTime(!0)-1e-8)},e.eventCallback=function(t,e,r){var n=this.vars;return arguments.length>1?(e?(n[t]=e,r&&(n[t+"Params"]=r),"onUpdate"===t&&(this._onUpdate=e)):delete n[t],this):n[t]},e.then=function(t){var e=this;return new Promise(function(r){var n=$(t)?t:tS,i=function(){var t=e.then;e.then=null,$(n)&&(n=n(e))&&(n.then||n===e)&&(e.then=t),r(n),e.then=t};e._initted&&1===e.totalProgress()&&e._ts>=0||!e._tTime&&e._ts<0?i():e._prom=i})},e.kill=function(){ed(this)},t}();tA(e$.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-.00000001,_prom:0,_ps:!1,_rts:1});var ej=/*#__PURE__*/function(t){function e(e,r){var i;return void 0===e&&(e={}),(i=t.call(this,e)||this).labels={},i.smoothChildTiming=!!e.smoothChildTiming,i.autoRemoveChildren=!!e.autoRemoveChildren,i._sort=W(e.sortChildren),b&&tH(e.parent||b,n(i),r),e.reversed&&i.reverse(),e.paused&&i.paused(!0),e.scrollTrigger&&tQ(n(i),e.scrollTrigger),i}i(e,t);var r=e.prototype;return r.to=function(t,e,r){return t4(0,arguments,this),this},r.from=function(t,e,r){return t4(1,arguments,this),this},r.fromTo=function(t,e,r,n){return t4(2,arguments,this),this},r.set=function(t,e,r){return e.duration=0,e.parent=this,tN(e).repeatDelay||(e.repeat=0),e.immediateRender=!!e.immediateRender,new e8(t,e,t8(this,r),1),this},r.call=function(t,e,r){return tH(this,e8.delayedCall(0,t,e),r)}//ONLY for backward compatibility! Maybe delete?
,r.staggerTo=function(t,e,r,n,i,s,a){return r.duration=e,r.stagger=r.stagger||n,r.onComplete=s,r.onCompleteParams=a,r.parent=this,new e8(t,r,t8(this,i)),this},r.staggerFrom=function(t,e,r,n,i,s,a){return r.runBackwards=1,tN(r).immediateRender=W(r.immediateRender),this.staggerTo(t,e,r,n,i,s,a)},r.staggerFromTo=function(t,e,r,n,i,s,a,o){return n.startAt=r,tN(n).immediateRender=W(n.immediateRender),this.staggerTo(t,e,n,i,s,a,o)},r.render=function(t,e,r){var n,i,s,a,o,u,h,l,f,c,p,d,_=this._time,g=this._dirty?this.totalDuration():this._tDur,m=this._dur,v=t<=0?0:tC(t),y=this._zTime<0!=t<0&&(this._initted||!m);if(this!==b&&v>g&&t>=0&&(v=g),v!==this._tTime||r||y){if(_!==this._time&&m&&(//if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
v+=this._time-_,t+=this._time-_),n=v,f=this._start,u=!(l=this._ts),y&&(m||(_=this._zTime),(t||!e)&&(this._zTime=t)),this._repeat){if(//adjust the time for repeats and yoyos
p=this._yoyo,o=m+this._rDelay,this._repeat<-1&&t<0)return this.totalTime(100*o+t,e,r);/*
        make sure children at the end/beginning of the timeline are rendered properly. If, for example,
        a 3-second long timeline rendered at 2.9 seconds previously, and now renders at 3.2 seconds (which
        would get translated to 2.8 seconds if the timeline yoyos or 0.2 seconds if it just repeats), there
        could be a callback or a short tween that's at 2.95 or 3 seconds in which wouldn't render. So
        we need to push the timeline to the end (and/or beginning depending on its yoyo value). Also we must
        ensure that zero-duration tweens at the very beginning or end of the Timeline work.
        */if(n=tC(v%o),v===g?(// the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
a=this._repeat,n=m):((a=~~(v/o))&&a===v/o&&(n=m,a--),n>m&&(n=m)),c=tW(this._tTime,o),!_&&this._tTime&&c!==a&&this._tTime-c*o-this._dur<=0&&(c=a),p&&1&a&&(n=m-n,d=1),a!==c&&!this._lock){var w=p&&1&c,x=w===(p&&1&a);if(a<c&&(w=!w),_=w?0:v%m?m:v,this._lock=1,this.render(_||(d?0:tC(a*o)),e,!m)._lock=0,this._tTime=v,!e&&this.parent&&ep(this,"onRepeat"),this.vars.repeatRefresh&&!d&&(this.invalidate()._lock=1),_&&_!==this._time||!this._ts!==u||this.vars.onRepeat&&!this.parent&&!this._act||(m=this._dur,g=this._tDur,x&&(this._lock=2,_=w?m:-.0001,this.render(_,!0),this.vars.repeatRefresh&&!d&&this.invalidate()),this._lock=0,!this._ts&&!u))return this;//in order for yoyoEase to work properly when there's a stagger, we must swap out the ease in each sub-tween.
eL(this,d)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(h=t1(this,tC(_),tC(n)))&&(v-=n-(n=h._start)),this._tTime=v,this._time=n,this._act=!l,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=t,_=0),!_&&n&&!e&&!a&&(ep(this,"onStart"),this._tTime!==v))return this;if(n>=_&&t>=0)for(i=this._first;i;){if(s=i._next,(i._act||n>=i._start)&&i._ts&&h!==i){if(i.parent!==this)return this.render(t,e,r);if(i.render(i._ts>0?(n-i._start)*i._ts:(i._dirty?i.totalDuration():i._tDur)+(n-i._start)*i._ts,e,r),n!==this._time||!this._ts&&!u){//in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
h=0,s&&(v+=this._zTime=-.00000001);break}}i=s}else{i=this._last;for(var C=t<0?t:n;i;){if(s=i._prev,(i._act||C<=i._end)&&i._ts&&h!==i){if(i.parent!==this)return this.render(t,e,r);if(i.render(i._ts>0?(C-i._start)*i._ts:(i._dirty?i.totalDuration():i._tDur)+(C-i._start)*i._ts,e,r||T&&(i._initted||i._startAt)),n!==this._time||!this._ts&&!u){//in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
h=0,s&&(v+=this._zTime=C?-.00000001:1e-8);break}}i=s}}if(h&&!e&&(this.pause(),h.render(n>=_?0:-.00000001)._zTime=n>=_?1:-1,this._ts))return(//the callback resumed playback! So since we may have held back the playhead due to where the pause is positioned, go ahead and jump to where it's SUPPOSED to be (if no pause happened).
this._start=f,tV(this),this.render(t,e,r));this._onUpdate&&!e&&ep(this,"onUpdate",!0),(v===g&&this._tTime>=this.totalDuration()||!v&&_)&&(f===this._start||Math.abs(l)!==Math.abs(this._ts))&&!this._lock&&(// remember, a child's callback may alter this timeline's playhead or timeScale which is why we need to add some of these checks.
(t||!m)&&(v===g&&this._ts>0||!v&&this._ts<0)&&tI(this,1),e||t<0&&!_||!v&&!_&&g||(ep(this,v===g&&t>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(v<g&&this.timeScale()>0)&&this._prom()))}return this},r.add=function(t,e){var r=this;if(j(e)||(e=t8(this,e,t)),!(t instanceof e$)){if(Y(t))return t.forEach(function(t){return r.add(t,e)}),this;if(I(t))return this.addLabel(t,e);if(!$(t))return this;t=e8.delayedCall(0,t)}return this!==t?tH(this,t,e):this;//don't allow a timeline to be added to itself as a child!
},r.getChildren=function(t,e,r,n){void 0===t&&(t=!0),void 0===e&&(e=!0),void 0===r&&(r=!0),void 0===n&&(n=-1e8);for(var i=[],s=this._first;s;)s._start>=n&&(s instanceof e8?e&&i.push(s):(r&&i.push(s),t&&i.push.apply(i,s.getChildren(!0,e,r)))),s=s._next;return i},r.getById=function(t){for(var e=this.getChildren(1,1,1),r=e.length;r--;)if(e[r].vars.id===t)return e[r]},r.remove=function(t){return I(t)?this.removeLabel(t):$(t)?this.killTweensOf(t):(tF(this,t),t===this._recent&&(this._recent=this._last),t$(this))},r.totalTime=function(e,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=tC(eC.time-(this._ts>0?e/this._ts:-((this.totalDuration()-e)/this._ts)))),t.prototype.totalTime.call(this,e,r),this._forcing=0,this):this._tTime},r.addLabel=function(t,e){return this.labels[t]=t8(this,e),this},r.removeLabel=function(t){return delete this.labels[t],this},r.addPause=function(t,e,r){var n=e8.delayedCall(0,e||tu,r);return n.data="isPause",this._hasPause=1,tH(this,n,t8(this,t))},r.removePause=function(t){var e=this._first;for(t=t8(this,t);e;)e._start===t&&"isPause"===e.data&&tI(e),e=e._next},r.killTweensOf=function(t,e,r){for(var n=this.getTweensOf(t,r),i=n.length;i--;)eV!==n[i]&&n[i].kill(t,e);return this},r.getTweensOf=function(t,e){for(var r,n=[],i=er(t),s=this._first,a=j(e);s;)s instanceof e8?tM(s._targets,i)&&(a?(!eV||s._initted&&s._ts)&&s.globalTime(0)<=e&&s.globalTime(s.totalDuration())>e:!e||s.isActive())&&n.push(s):(r=s.getTweensOf(i,e)).length&&n.push.apply(n,r),s=s._next;return n}// potential future feature - targets() on timelines
,r.tweenTo=function(t,e){e=e||{};var r,n=this,i=t8(n,t),s=e,a=s.startAt,o=s.onStart,u=s.onStartParams,h=s.immediateRender,l=e8.to(n,tA({ease:e.ease||"none",lazy:!1,immediateRender:!1,time:i,overwrite:"auto",duration:e.duration||Math.abs((i-(a&&"time"in a?a.time:n._time))/n.timeScale())||1e-8,onStart:function(){if(n.pause(),!r){var t=e.duration||Math.abs((i-(a&&"time"in a?a.time:n._time))/n.timeScale());l._dur!==t&&t2(l,t,0,1).render(l._time,!0,!0),r=1}o&&o.apply(l,u||[])}},e));return h?l.render(0):l},r.tweenFromTo=function(t,e,r){return this.tweenTo(e,tA({startAt:{time:t8(this,t)}},r))},r.recent=function(){return this._recent},r.nextLabel=function(t){return void 0===t&&(t=this._time),ec(this,t8(this,t))},r.previousLabel=function(t){return void 0===t&&(t=this._time),ec(this,t8(this,t),1)},r.currentLabel=function(t){return arguments.length?this.seek(t,!0):this.previousLabel(this._time+1e-8)},r.shiftChildren=function(t,e,r){void 0===r&&(r=0);for(var n,i=this._first,s=this.labels;i;)i._start>=r&&(i._start+=t,i._end+=t),i=i._next;if(e)for(n in s)s[n]>=r&&(s[n]+=t);return t$(this)},r.invalidate=function(e){var r=this._first;for(this._lock=0;r;)r.invalidate(e),r=r._next;return t.prototype.invalidate.call(this,e)},r.clear=function(t){void 0===t&&(t=!0);for(var e,r=this._first;r;)e=r._next,this.remove(r),r=e;return this._dp&&(this._time=this._tTime=this._pTime=0),t&&(this.labels={}),t$(this)},r.totalDuration=function(t){var e,r,n,i=0,s=this._last,a=1e8;if(arguments.length)return this.timeScale((this._repeat<0?this.duration():this.totalDuration())/(this.reversed()?-t:t));if(this._dirty){for(n=this.parent;s;)e=s._prev,s._dirty&&s.totalDuration(),(r=s._start)>a&&this._sort&&s._ts&&!this._lock?(//in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
this._lock=1,tH(this,s,r-s._delay,1)._lock=0):a=r,r<0&&s._ts&&(//children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
i-=r,(!n&&!this._dp||n&&n.smoothChildTiming)&&(this._start+=r/this._ts,this._time-=r,this._tTime-=r),this.shiftChildren(-r,!1,-1/0),a=0),s._end>i&&s._ts&&(i=s._end),s=e;t2(this,this===b&&this._time>i?this._time:i,1,1),this._dirty=0}return this._tDur},e.updateRoot=function(t){if(b._ts&&(tE(b,tG(t,b)),E=eC.frame),eC.frame>=tm){tm+=A.autoSleep||120;var e=b._first;if((!e||!e._ts)&&A.autoSleep&&eC._listeners.length<2){for(;e&&!e._ts;)e=e._next;e||eC.sleep()}}},e}(e$);tA(ej.prototype,{_lock:0,_hasPause:0,_forcing:0});var eU,eq,eW,eG,eV,eX,eY=function(t,e,r,n,i,s,a){//note: we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
var o,u,h,l,f,c,p,d,_=new rh(this._pt,t,e,0,1,rn,null,i),g=0,m=0;for(_.b=r,_.e=n,r+="",n+="",(p=~n.indexOf("random("))&&(n=el(n)),s&&(s(d=[r,n],t,e),r=d[0],n=d[1]),u=r.match(K)||[];o=K.exec(n);)l=o[0],f=n.substring(g,o.index),h?h=(h+1)%5:"rgba("===f.substr(-5)&&(h=1),l!==u[m++]&&(c=parseFloat(u[m-1])||0,_._pt={_next:_._pt,p:f||1===m?f:",",//note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
s:c,c:"="===l.charAt(1)?tP(c,l)-c:parseFloat(l)-c,m:h&&h<4?Math.round:0},g=K.lastIndex);return _.c=g<n.length?n.substring(g,n.length):"",_.fp=a,(J.test(n)||p)&&(_.e=0),this._pt=_,_},eH=function(t,e,r,n,i,s,a,o,u,h){$(n)&&(n=n(i||0,t,s));var l,f=t[e],c="get"!==r?r:$(f)?u?t[e.indexOf("set")||!$(t["get"+e.substr(3)])?e:"get"+e.substr(3)](u):t[e]():f,p=$(f)?u?e9:e6:e4;if(I(n)&&(~n.indexOf("random(")&&(n=el(n)),"="===n.charAt(1)&&((l=tP(c,n)+(t7(c)||0))||0===l)&&(n=l)),!h||c!==n||eX)return isNaN(c*n)||""===n?(f||e in t||ts(e,n),eY.call(this,t,e,c,n,p,o||A.stringFilter,u)):(// fun fact: any number multiplied by "" is evaluated as the number 0!
l=new rh(this._pt,t,e,+c||0,n-(c||0),"boolean"==typeof f?rr:re,0,p),u&&(l.fp=u),a&&l.modifier(a,this,t),this._pt=l)},eQ=function(t,e,r,n,i){if($(t)&&(t=e2(t,i,e,r,n)),!q(t)||t.style&&t.nodeType||Y(t)||X(t))return I(t)?e2(t,i,e,r,n):t;var s,a={};for(s in t)a[s]=e2(t[s],i,e,r,n);return a},eZ=function(t,e,r,n,i,s){var a,o,u,h;if(t_[t]&&!1!==(a=new t_[t]).init(i,a.rawVars?e[t]:eQ(e[t],n,i,s,r),r,n,s)&&(r._pt=o=new rh(r._pt,i,t,0,1,a.render,a,0,a.priority),r!==R))for(u=r._ptLookup[r._targets.indexOf(i)],h=a._props.length;h--;)u[a._props[h]]=o;return a},eK=function t(e,r,n){var i,s,a,o,u,h,l,f,c,p,d,_,g,m=e.vars,v=m.ease,y=m.startAt,x=m.immediateRender,C=m.lazy,P=m.onUpdate,M=m.onUpdateParams,k=m.callbackScope,E=m.runBackwards,R=m.yoyoEase,S=m.keyframes,A=m.autoRevert,L=e._dur,O=e._startAt,N=e._targets,z=e.parent,B=z&&"nested"===z.data?z.vars.targets:N,F="auto"===e._overwrite&&!w,I=e.timeline;if(!I||S&&v||(v="none"),e._ease=eO(v,D.ease),e._yEase=R?eD(eO(!0===R?v:R,D.ease)):0,R&&e._yoyo&&!e._repeat&&(//there must have been a parent timeline with yoyo:true that is currently in its yoyo phase, so flip the eases.
R=e._yEase,e._yEase=e._ease,e._ease=R),e._from=!I&&!!m.runBackwards,!I||S&&!m.stagger){if(_=//if there's an internal timeline, skip all the parsing because we passed that task down the chain.
(f=N[0]?tT(N[0]).harness:0)&&m[f.prop],i=tO(m,tc),O&&(O._zTime<0&&O.progress(1),r<0&&E&&x&&!A?O.render(-1,!0):O.revert(E&&L?tl:th),// don't just _removeFromParent(prevStartAt.render(-1, true)) because that'll leave inline styles. We're creating a new _startAt for "startAt" tweens that re-capture things to ensure that if the pre-tween values changed since the tween was created, they're recorded.
O._lazy=0),y){if(tI(e._startAt=e8.set(N,tA({data:"isStart",overwrite:!1,parent:z,immediateRender:!0,lazy:!O&&W(C),startAt:null,delay:0,onUpdate:P,onUpdateParams:M,callbackScope:k,stagger:0},y))),e._startAt._dp=0,e._startAt._sat=e,r<0&&(T||!x&&!A)&&e._startAt.revert(tl),x&&L&&r<=0&&n<=0){// check tTime here because in the case of a yoyo tween whose playhead gets pushed to the end like tween.progress(1), we should allow it through so that the onComplete gets fired properly.
r&&(e._zTime=r);return;//we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a Timeline, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
}}else if(E&&L&&!O){if(r&&(x=!1),a=tA({overwrite:!1,data:"isFromStart",//we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
lazy:x&&!O&&W(C),immediateRender:x,//zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
stagger:0,parent:z//ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
},i),_&&(a[f.prop]=_),tI(e._startAt=e8.set(N,a)),e._startAt._dp=0,e._startAt._sat=e,r<0&&(T?e._startAt.revert(tl):e._startAt.render(-1,!0)),e._zTime=r,x){if(!r)return}else t(e._startAt,1e-8,1e-8);//ensures that the initial values are recorded
}for(s=0,e._pt=e._ptCache=0,C=L&&W(C)||C&&!L;s<N.length;s++){if(l=(u=N[s])._gsap||tw(N)[s]._gsap,e._ptLookup[s]=p={},td[l.id]&&tp.length&&tk(),d=B===N?s:B.indexOf(u),f&&!1!==(c=new f).init(u,_||i,e,d,B)&&(e._pt=o=new rh(e._pt,u,c.name,0,1,c.render,c,0,c.priority),c._props.forEach(function(t){p[t]=o}),c.priority&&(h=1)),!f||_)for(a in i)t_[a]&&(c=eZ(a,i,e,d,u,B))?c.priority&&(h=1):p[a]=o=eH.call(e,u,a,"get",i[a],d,B,0,m.stringFilter);e._op&&e._op[s]&&e.kill(u,e._op[s]),F&&e._pt&&(eV=e,b.killTweensOf(u,p,e.globalTime(r)),g=!e.parent,eV=0),e._pt&&C&&(td[l.id]=1)}h&&ru(e),e._onInit&&e._onInit(e)}e._onUpdate=P,e._initted=(!e._op||e._pt)&&!g,S&&r<=0&&I.render(1e8,!0,!0)},eJ=function(t,e,r,n,i,s,a){var o,u,h,l,f=(t._pt&&t._ptCache||(t._ptCache={}))[e];if(!f)for(f=t._ptCache[e]=[],h=t._ptLookup,l=t._targets.length;l--;){if((o=h[l][e])&&o.d&&o.d._pt)for(// it's a plugin, so find the nested PropTween
o=o.d._pt;o&&o.p!==e&&o.fp!==e;)o=o._next;if(!o)return(// there is no PropTween associated with that property, so we must FORCE one to be created and ditch out of this
// if the tween has other properties that already rendered at new positions, we'd normally have to rewind to put them back like tween.render(0, true) before forcing an _initTween(), but that can create another edge case like tweening a timeline's progress would trigger onUpdates to fire which could move other things around. It's better to just inform users that .resetTo() should ONLY be used for tweens that already have that property. For example, you can't gsap.to(...{ y: 0 }) and then tween.restTo("x", 200) for example.
eX=1,t.vars[e]="+=0",eK(t,a),eX=0,1);f.push(o)}for(l=f.length;l--;)(o=(u=f[l])._pt||u).s=(n||0===n)&&!i?n:o.s+(n||0)+s*o.c,o.c=r-o.s,u.e&&(u.e=(Math.round(1e5*r)/1e5||0)+t7(u.e)),u.b&&(u.b=o.s+t7(u.b))},e0=function(t,e){var r,n,i,s,a=t[0]?tT(t[0]).harness:0,o=a&&a.aliases;if(!o)return e;for(n in r=tD({},e),o)if(n in r)for(i=(s=o[n].split(",")).length;i--;)r[s[i]]=r[n];return r},e1=function(t,e,r,n){var i,s,a=e.ease||n||"power1.inOut";if(Y(e))s=r[t]||(r[t]=[]),e.forEach(function(t,r){return s.push({t:r/(e.length-1)*100,v:t,e:a})});else for(i in e)s=r[i]||(r[i]=[]),"ease"===i||s.push({t:parseFloat(t),v:e[i],e:a})},e2=function(t,e,r,n,i){return $(t)?t.call(e,r,n,i):I(t)&&~t.indexOf("random(")?el(t):t},e5=ty+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",e3={};tb(e5+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return e3[t]=1});var e8=/*#__PURE__*/function(t){function e(e,r,i,s){"number"==typeof r&&(i.duration=r,r=i,i=null);var a,o,u,h,l,f,c,p,d,_=(a=t.call(this,s?r:tN(r))||this).vars,g=_.duration,m=_.delay,v=_.immediateRender,y=_.stagger,T=_.overwrite,x=_.keyframes,C=_.defaults,P=_.scrollTrigger,M=_.yoyoEase,k=r.parent||b,E=(Y(e)||X(e)?j(e[0]):"length"in r)?[e]:er(e);if(a._targets=E.length?tw(E):ta("GSAP target "+e+" not found. https://greensock.com",!A.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=T,x||y||V(g)||V(m)){if(r=a.vars,(o=a.timeline=new ej({data:"nested",defaults:C||{},targets:k&&"nested"===k.data?k.vars.targets:E})).kill(),o.parent=o._dp=n(a),o._start=0,y||V(g)||V(m)){if(l=E.length,p=y&&es(y),q(y))//users can pass in callbacks like onStart/onComplete in the stagger object. These should fire with each individual tween.
for(f in y)~e5.indexOf(f)&&(d||(d={}),d[f]=y[f]);for(u=0;u<l;u++)(h=tO(r,e3)).stagger=0,M&&(h.yoyoEase=M),d&&tD(h,d),c=E[u],h.duration=+e2(g,n(a),u,c,E),h.delay=(+e2(m,n(a),u,c,E)||0)-a._delay,!y&&1===l&&h.delay&&(// if someone does delay:"random(1, 5)", repeat:-1, for example, the delay shouldn't be inside the repeat.
a._delay=m=h.delay,a._start+=m,h.delay=0),o.to(c,h,p?p(u,c,E):0),o._ease=eM.none;o.duration()?g=m=0:a.timeline=0}else if(x){tN(tA(o.vars.defaults,{ease:"none"})),o._ease=eO(x.ease||r.ease||"none");var R,S,D,L=0;if(Y(x))x.forEach(function(t){return o.to(E,t,">")}),o.duration();else{for(f in h={},x)"ease"===f||"easeEach"===f||e1(f,x[f],h,x.easeEach);for(f in h)for(u=0,R=h[f].sort(function(t,e){return t.t-e.t}),L=0;u<R.length;u++)(D={ease:(S=R[u]).e,duration:(S.t-(u?R[u-1].t:0))/100*g})[f]=S.v,o.to(E,D,L),L+=D.duration;o.duration()<g&&o.to({},{duration:g-o.duration()})}}g||a.duration(g=o.duration())}else a.timeline=0;//speed optimization, faster lookups (no going up the prototype chain)
return!0!==T||w||(eV=n(a),b.killTweensOf(E),eV=0),tH(k,n(a),i),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(v||!g&&!x&&a._start===tC(k._time)&&W(v)&&function t(e){return!e||e._ts&&t(e.parent)}(n(a))&&"nested"!==k.data)&&(a._tTime=-.00000001,a.render(Math.max(0,-m)||0)),P&&tQ(n(a),P),a}i(e,t);var r=e.prototype;return r.render=function(t,e,r){var n,i,s,a,o,u,h,l,f,c=this._time,p=this._tDur,d=this._dur,_=t<0,g=t>p-1e-8&&!_?p:t<1e-8?0:t;if(d){if(g!==this._tTime||!t||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==_){if(//this senses if we're crossing over the start time, in which case we must record _zTime and force the render, but we do it in this lengthy conditional way for performance reasons (usually we can skip the calculations): this._initted && (this._zTime < 0) !== (totalTime < 0)
n=g,l=this.timeline,this._repeat){if(//adjust the time for repeats and yoyos
a=d+this._rDelay,this._repeat<-1&&_)return this.totalTime(100*a+t,e,r);if(n=tC(g%a),g===p?(// the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
s=this._repeat,n=d):((s=~~(g/a))&&s===g/a&&(n=d,s--),n>d&&(n=d)),(u=this._yoyo&&1&s)&&(f=this._yEase,n=d-n),o=tW(this._tTime,a),n===c&&!r&&this._initted)return(//could be during the repeatDelay part. No need to render and fire callbacks.
this._tTime=g,this);s===o||(l&&this._yEase&&eL(l,u),!this.vars.repeatRefresh||u||this._lock||(this._lock=r=1,this.render(tC(a*s),!0).invalidate()._lock=0))}if(!this._initted){if(tZ(this,_?t:n,r,e,g))return this._tTime=0,this;if(c!==this._time)return this;if(d!==this._dur)return this.render(t,e,r)}if(this._tTime=g,this._time=n,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=h=(f||this._ease)(n/d),this._from&&(this.ratio=h=1-h),n&&!c&&!e&&!s&&(ep(this,"onStart"),this._tTime!==g))return this;for(i=this._pt;i;)i.r(h,i.d),i=i._next;l&&l.render(t<0?t:!n&&u?-.00000001:l._dur*l._ease(n/this._dur),e,r)||this._startAt&&(this._zTime=t),this._onUpdate&&!e&&(_&&tU(this,t,e,r),ep(this,"onUpdate")),this._repeat&&s!==o&&this.vars.onRepeat&&!e&&this.parent&&ep(this,"onRepeat"),(g===this._tDur||!g)&&this._tTime===g&&(_&&!this._onUpdate&&tU(this,t,!0,!0),(t||!d)&&(g===this._tDur&&this._ts>0||!g&&this._ts<0)&&tI(this,1),!e&&!(_&&!c)&&(g||c||u)&&(// if prevTime and tTime are zero, we shouldn't fire the onReverseComplete. This could happen if you gsap.to(... {paused:true}).play();
ep(this,g===p?"onComplete":"onReverseComplete",!0),this._prom&&!(g<p&&this.timeScale()>0)&&this._prom()))}}else t0(this,t,e,r);return this},r.targets=function(){return this._targets},r.invalidate=function(e){return(e&&this.vars.runBackwards||(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(e),t.prototype.invalidate.call(this,e))},r.resetTo=function(t,e,r,n){S||eC.wake(),this._ts||this.play();var i=Math.min(this._dur,(this._dp._time-this._start)*this._ts);return(// possible future addition to allow an object with multiple values to update, like tween.resetTo({x: 100, y: 200}); At this point, it doesn't seem worth the added kb given the fact that most users will likely opt for the convenient gsap.quickTo() way of interacting with this method.
// if (_isObject(property)) { // performance optimization
// 	for (p in property) {
// 		if (_updatePropTweens(this, p, property[p], value ? value[p] : null, start, ratio, time)) {
// 			return this.resetTo(property, value, start, startIsRelative); // if a PropTween wasn't found for the property, it'll get forced with a re-initialization so we need to jump out and start over again.
// 		}
// 	}
// } else {
(this._initted||eK(this,i),eJ(this,t,e,r,n,this._ease(i/this._dur),i))?this.resetTo(t,e,r,n):(//}
tX(this,0),this.parent||tB(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))// if a PropTween wasn't found for the property, it'll get forced with a re-initialization so we need to jump out and start over again.
)},r.kill=function(t,e){if(void 0===e&&(e="all"),!t&&(!e||"all"===e))return this._lazy=this._pt=0,this.parent?ed(this):this;if(this.timeline){var r=this.timeline.totalDuration();return this.timeline.killTweensOf(t,e,eV&&!0!==eV.vars.overwrite)._first||ed(this),this.parent&&r!==this.timeline.totalDuration()&&t2(this,this._dur*this.timeline._tDur/r,0,1),this}var n,i,s,a,o,u,h,l=this._targets,f=t?er(t):l,c=this._ptLookup,p=this._pt;if((!e||"all"===e)&&tz(l,f))return"all"===e&&(this._pt=0),ed(this);for(n=this._op=this._op||[],"all"!==e&&(I(e)&&(o={},tb(e,function(t){return o[t]=1}),e=o),e=e0(l,e)),h=l.length;h--;)if(~f.indexOf(l[h]))for(o in i=c[h],"all"===e?(n[h]=e,a=i,s={}):(s=n[h]=n[h]||{},a=e),a)(u=i&&i[o])&&("kill"in u.d&&!0!==u.d.kill(o)||tF(this,u,"_pt"),delete i[o]),"all"!==s&&(s[o]=1);return this._initted&&!this._pt&&p&&ed(this),this},e.to=function(t,r){return new e(t,r,arguments[2])},e.from=function(t,e){return t4(1,arguments)},e.delayedCall=function(t,r,n,i){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:t,onComplete:r,onReverseComplete:r,onCompleteParams:n,onReverseCompleteParams:n,callbackScope:i});// we must use onReverseComplete too for things like timeline.add(() => {...}) which should be triggered in BOTH directions (forward and reverse)
},e.fromTo=function(t,e,r){return t4(2,arguments)},e.set=function(t,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(t,r)},e.killTweensOf=function(t,e,r){return b.killTweensOf(t,e,r)},e}(e$);tA(e8.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),// _forEachName("to,from,fromTo,set,call,add,addLabel,addPause", name => {
// 	Tween.prototype[name] = function() {
// 		let tl = new Timeline();
// 		return _addToTimeline(tl, this)[name].apply(tl, toArray(arguments));
// 	}
// });
//for backward compatibility. Leverage the timeline calls.
tb("staggerTo,staggerFrom,staggerFromTo",function(t){e8[t]=function(){var e=new ej,r=et.call(arguments,0);return r.splice("staggerFromTo"===t?5:4,0,0),e[t].apply(e,r)}});/*
 * --------------------------------------------------------------------------------------
 * PROPTWEEN
 * --------------------------------------------------------------------------------------
 */var e4=function(t,e,r){return t[e]=r},e6=function(t,e,r){return t[e](r)},e9=function(t,e,r,n){return t[e](n.fp,r)},e7=function(t,e,r){return t.setAttribute(e,r)},rt=function(t,e){return $(t[e])?e6:U(t[e])&&t.setAttribute?e7:e4},re=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},rr=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},rn=function(t,e){var r=e._pt,n="";if(!t&&e.b)n=e.b;else if(1===t&&e.e)n=e.e;else{for(;r;)n=r.p+(r.m?r.m(r.s+r.c*t):Math.round((r.s+r.c*t)*1e4)/1e4)+n,r=r._next;n+=e.c;//we use the "c" of the PropTween to store the final chunk of non-numeric text.
}e.set(e.t,e.p,n,e)},ri=function(t,e){for(var r=e._pt;r;)r.r(t,r.d),r=r._next},rs=function(t,e,r,n){for(var i,s=this._pt;s;)i=s._next,s.p===n&&s.modifier(t,e,r),s=i},ra=function(t){for(var e,r,n=this._pt;n;)r=n._next,(n.p!==t||n.op)&&n.op!==t?n.dep||(e=1):tF(this,n,"_pt"),n=r;return!e},ro=function(t,e,r,n){n.mSet(t,e,n.m.call(n.tween,r,n.mt),n)},ru=function(t){for(var e,r,n,i,s=t._pt;s;){for(e=s._next,r=n;r&&r.pr>s.pr;)r=r._next;(s._prev=r?r._prev:i)?s._prev._next=s:n=s,(s._next=r)?r._prev=s:i=s,s=e}t._pt=n},rh=/*#__PURE__*/function(){function t(t,e,r,n,i,s,a,o,u){this.t=e,this.s=n,this.c=i,this.p=r,this.r=s||re,this.d=a||this,this.set=o||e4,this.pr=u||0,this._next=t,t&&(t._prev=this)}return t.prototype.modifier=function(t,e,r){this.mSet=this.mSet||this.set,this.set=ro,this.m=t,this.mt=r,this.tween=e},t}();//PropTween key: t = target, p = prop, r = renderer, d = data, s = start, c = change, op = overwriteProperty (ONLY populated when it's different than p), pr = priority, _next/_prev for the linked list siblings, set = setter, m = modifier, mSet = modifierSetter (the original setter, before a modifier was added)
tb(ty+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(t){return tc[t]=1}),tr.TweenMax=tr.TweenLite=e8,tr.TimelineLite=tr.TimelineMax=ej,b=new ej({sortChildren:!1,defaults:D,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),A.stringFilter=function(t){var e,r=t.join(" ");if(ex.lastIndex=0,ex.test(r))return e=eb.test(r),t[1]=eT(t[1],e),t[0]=eT(t[0],e,ew(t[1])),!0};var rl=[],rf={},rc=[],rp=0,rd=0,r_=function(t){return(rf[t]||rc).map(function(t){return t()})},rg=function(){var t=Date.now(),e=[];t-rp>2&&(r_("matchMediaInit"),rl.forEach(function(t){var r,n,i,s,a=t.queries,o=t.conditions;for(n in a)(r=C.matchMedia(a[n]).matches)&&(i=1),r!==o[n]&&(o[n]=r,s=1);s&&(t.revert(),i&&e.push(t))}),r_("matchMediaRevert"),e.forEach(function(t){return t.onMatch(t)}),rp=t,r_("matchMedia"))},rm=/*#__PURE__*/function(){function t(t,e){this.selector=e&&en(e),this.data=[],this._r=[],this.isReverted=!1,this.id=rd++,t&&this.add(t)}var e=t.prototype;return e.add=function(t,e,r){$(t)&&(r=e,e=t,t=$);var n=this,i=function(){var t,i=x,s=n.selector;return i&&i!==n&&i.data.push(n),r&&(n.selector=en(r)),x=n,t=e.apply(n,arguments),$(t)&&n._r.push(t),x=i,n.selector=s,n.isReverted=!1,t};return n.last=i,t===$?i(n):t?n[t]=i:i},e.ignore=function(t){var e=x;x=null,t(this),x=e},e.getTweens=function(){var e=[];return this.data.forEach(function(r){return r instanceof t?e.push.apply(e,r.getTweens()):r instanceof e8&&!(r.parent&&"nested"===r.parent.data)&&e.push(r)}),e},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(t,e){var r=this;if(t){var n=this.getTweens();this.data.forEach(function(t){// Flip plugin tweens are very different in that they should actually be pushed to their end. The plugin replaces the timeline's .revert() method to do exactly that. But we also need to remove any of those nested tweens inside the flip timeline so that they don't get individually reverted.
"isFlip"===t.data&&(t.revert(),t.getChildren(!0,!0,!1).forEach(function(t){return n.splice(n.indexOf(t),1)}))}),n.map(function(t){return{g:t.globalTime(0),t:t}}).sort(function(t,e){return e.g-t.g||-1/0}).forEach(function(e){return e.t.revert(t)}),this.data.forEach(function(e){return!(e instanceof e8)&&e.revert&&e.revert(t)}),this._r.forEach(function(e){return e(t,r)}),this.isReverted=!0}else this.data.forEach(function(t){return t.kill&&t.kill()});if(this.clear(),e)for(var i=rl.length;i--;)rl[i].id===this.id&&rl.splice(i,1)},e.revert=function(t){this.kill(t||{})},t}(),rv=/*#__PURE__*/function(){function t(t){this.contexts=[],this.scope=t}var e=t.prototype;return e.add=function(t,e,r){q(t)||(t={matches:t});var n,i,s,a=new rm(0,r||this.scope),o=a.conditions={};for(i in x&&!a.selector&&(a.selector=x.selector),this.contexts.push(a),e=a.add("onMatch",e),a.queries=t,t)"all"===i?s=1:(n=C.matchMedia(t[i]))&&(0>rl.indexOf(a)&&rl.push(a),(o[i]=n.matches)&&(s=1),n.addListener?n.addListener(rg):n.addEventListener("change",rg));return s&&e(a),this}// refresh() {
,e.revert=function(t){this.kill(t||{})},e.kill=function(t){this.contexts.forEach(function(e){return e.kill(t,!0)})},t}(),ry={registerPlugin:function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];e.forEach(function(t){return eg(t)})},timeline:function(t){return new ej(t)},getTweensOf:function(t,e){return b.getTweensOf(t,e)},getProperty:function(t,e,r,n){I(t)&&(t=er(t)[0]);var i=tT(t||{}).get,s=r?tS:tR;return"native"===r&&(r=""),t?e?s((t_[e]&&t_[e].get||i)(t,e,r,n)):function(e,r,n){return s((t_[e]&&t_[e].get||i)(t,e,r,n))}:t},quickSetter:function(t,e,r){if((t=er(t)).length>1){var n=t.map(function(t){return rb.quickSetter(t,e,r)}),i=n.length;return function(t){for(var e=i;e--;)n[e](t)}}t=t[0]||{};var s=t_[e],a=tT(t),o=a.harness&&(a.harness.aliases||{})[e]||e,u=s?function(e){var n=new s;R._pt=0,n.init(t,r?e+r:e,R,0,[t]),n.render(1,n),R._pt&&ri(1,R)}:a.set(t,o);return s?u:function(e){return u(t,o,r?e+r:e,a,1)}},quickTo:function(t,e,r){var n,i=rb.to(t,tD(((n={})[e]="+=0.1",n.paused=!0,n),r||{})),s=function(t,r,n){return i.resetTo(e,t,r,n)};return s.tween=i,s},isTweening:function(t){return b.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=eO(t.ease,D.ease)),tL(D,t||{})},config:function(t){return tL(A,t||{})},registerEffect:function(t){var e=t.name,r=t.effect,n=t.plugins,i=t.defaults,s=t.extendTimeline;(n||"").split(",").forEach(function(t){return t&&!t_[t]&&!tr[t]&&ta(e+" effect requires "+t+" plugin.")}),tg[e]=function(t,e,n){return r(er(t),tA(e||{},i),n)},s&&(ej.prototype[e]=function(t,r,n){return this.add(tg[e](t,q(r)?r:(n=r)&&{},this),n)})},registerEase:function(t,e){eM[t]=eO(e)},parseEase:function(t,e){return arguments.length?eO(t,e):eM},getById:function(t){return b.getById(t)},exportRoot:function(t,e){void 0===t&&(t={});var r,n,i=new ej(t);for(i.smoothChildTiming=W(t.smoothChildTiming),b.remove(i),i._dp=0,i._time=i._tTime=b._time,r=b._first;r;)n=r._next,(e||!(!r._dur&&r instanceof e8&&r.vars.onComplete===r._targets[0]))&&tH(i,r,r._start-r._delay),r=n;return tH(b,i,0),i},context:function(t,e){return t?new rm(t,e):x},matchMedia:function(t){return new rv(t)},matchMediaRefresh:function(){return rl.forEach(function(t){var e,r,n=t.conditions;for(r in n)n[r]&&(n[r]=!1,e=1);e&&t.revert()})||rg()},addEventListener:function(t,e){var r=rf[t]||(rf[t]=[]);~r.indexOf(e)||r.push(e)},removeEventListener:function(t,e){var r=rf[t],n=r&&r.indexOf(e);n>=0&&r.splice(n,1)},utils:{wrap:function t(e,r,n){// NOTE: wrap() CANNOT be an arrow function! A very odd compiling bug causes problems (unrelated to GSAP).
var i=r-e;return Y(e)?eh(e,t(0,e.length),r):t6(n,function(t){return(i+(t-e)%i)%i+e})},wrapYoyo:function t(e,r,n){var i=r-e,s=2*i;return Y(e)?eh(e,t(0,e.length-1),r):t6(n,function(t){return t=(s+(t-e)%s)%s||0,e+(t>i?s-t:t)})},distribute:es,random:eu,snap:eo,normalize:function(t,e,r){return ef(t,e,0,1,r)},getUnit:t7,clamp:function(t,e,r){return t6(r,function(r){return t9(t,e,r)})},splitColor:ey,toArray:er,selector:en,mapRange:ef,pipe:function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){return e.reduce(function(t,e){return e(t)},t)}},unitize:function(t,e){return function(r){return t(parseFloat(r))+(e||t7(r))}},interpolate:function t(e,r,n,i){var s=isNaN(e+r)?0:function(t){return(1-t)*e+t*r};if(!s){var a,o,u,h,l,f=I(e),c={};if(!0===n&&(i=1)&&(n=null),f)e={p:e},r={p:r};else if(Y(e)&&!Y(r)){for(o=1,u=[],l=(h=e.length)-2;o<h;o++)u.push(t(e[o-1],e[o]));//build the interpolators up front as a performance optimization so that when the function is called many times, it can just reuse them.
h--,s=function(t){var e=Math.min(l,~~(t*=h));return u[e](t-e)},n=r}else i||(e=tD(Y(e)?[]:{},e));if(!u){for(a in r)eH.call(c,e,a,"get",r[a]);s=function(t){return ri(t,c)||(f?e.p:e)}}}return t6(n,s)},shuffle:ei},install:ti,effects:tg,ticker:eC,updateRoot:ej.updateRoot,plugins:t_,globalTimeline:b,core:{PropTween:rh,globals:to,Tween:e8,Timeline:ej,Animation:e$,getCache:tT,_removeLinkedListItem:tF,reverting:function(){return T},context:function(t){return t&&x&&(x.data.push(t),t._ctx=x),x},suppressOverwrites:function(t){return w=t}}};tb("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return ry[t]=e8[t]}),eC.add(ej.updateRoot),R=ry.to({},{duration:0});var rw=function(t,e){for(var r=t._pt;r&&r.p!==e&&r.op!==e&&r.fp!==e;)r=r._next;return r},rT=function(t,e){var r,n,i,s=t._targets;for(r in e)for(n=s.length;n--;)(i=t._ptLookup[n][r])&&(i=i.d)&&(i._pt&&(i=rw(i,r)),i&&i.modifier&&i.modifier(e[r],t,s[n],r))},rx=function(t,e){return{name:t,rawVars:1,//don't pre-process function-based values or "random()" strings.
init:function(t,r,n){n._onInit=function(t){var n,i;if(I(r)&&(n={},tb(r,function(t){return n[t]=1}),r=n),e){for(i in n={},r)n[i]=e(r[i]);r=n}rT(t,r)}}}},rb=ry.registerPlugin({name:"attr",init:function(t,e,r,n,i){var s,a,o;for(s in this.tween=r,e)o=t.getAttribute(s)||"",(a=this.add(t,"setAttribute",(o||0)+"",e[s],n,i,0,0,s)).op=s,a.b=o,this._props.push(s)},render:function(t,e){for(var r=e._pt;r;)T?r.set(r.t,r.p,r.b,r):r.r(t,r.d),r=r._next}},{name:"endArray",init:function(t,e){for(var r=e.length;r--;)this.add(t,r,t[r]||0,e[r],0,0,0,0,0,1)}},rx("roundProps",ea),rx("modifiers"),rx("snap",eo))||ry;//register core plugins
e8.version=ej.version=rb.version="3.12.2",k=1,G()&&eP(),eM.Power0,eM.Power1,eM.Power2,eM.Power3,eM.Power4,eM.Linear,eM.Quad,eM.Cubic,eM.Quart,eM.Quint,eM.Strong,eM.Elastic,eM.Back,eM.SteppedEase,eM.Bounce,eM.Sine,eM.Expo,eM.Circ}),s("byNbX",function(e,r){t(e.exports,"MotionPathPlugin",function(){return P});/*!
 * MotionPathPlugin 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*//* eslint-disable */var n,s,a,o,u,h,l=i("d1gX5"),f=i("hhNGZ"),c="x,translateX,left,marginLeft,xPercent".split(","),p="y,translateY,top,marginTop,yPercent".split(","),d=Math.PI/180,_=function(t,e,r,n){for(//mode: 0 = x but don't fill y yet, 1 = y, 2 = x and fill y with 0.
var i=e.length,s=2===n?0:n,a=0;a<i;a++)t[s]=parseFloat(e[a][r]),2===n&&(t[s+1]=0),s+=2;return t},g=function(t,e,r){return parseFloat(t._gsap.get(t,e,r||"px"))||0},m=function(t){var e,r=t[0],n=t[1];for(e=2;e<t.length;e+=2)r=t[e]+=r,n=t[e+1]+=n},// _quadToCubic = points => {
// 	let cubic = [],
// 		l = points.length - 1,
// 		i = 1,
// 		a, b, c;
// 	for (; i < l; i+=2) {
// 		a = points[i-1];
// 		b = points[i];
// 		c = points[i+1];
// 		cubic.push(a, {x: (2 * b.x + a.x) / 3, y: (2 * b.y + a.y) / 3}, {x: (2 * b.x + c.x) / 3, y: (2 * b.y + c.y) / 3});
// 	}
// 	cubic.push(points[l]);
// 	return cubic;
// },
v=function(t,e,r,n,i,s,a,o,u){return"cubic"===a.type?e=[e]:(!1!==a.fromCurrent&&e.unshift(g(r,n,o),i?g(r,i,u):0),a.relative&&m(e),e=[(i?l.pointsToSegment:l.flatPointsToSegment)(e,a.curviness)]),e=s(b(e,r,a)),C(t,r,n,e,"x",o),i&&C(t,r,i,e,"y",u),(0,l.cacheRawPathMeasurements)(e,a.resolution||(0===a.curviness?20:12));//when curviness is 0, it creates control points right on top of the anchors which makes it more sensitive to resolution, thus we change the default accordingly.
},y=function(t){return t},w=/[-+\.]*\d+\.?(?:e-|e\+)?\d*/g,T=function(t,e,r){// origin is an array of normalized values (0-1) in relation to the width/height, so [0.5, 0.5] would be the center. It can also be "auto" in which case it will be the top left unless it's a <path>, when it will start at the beginning of the path itself.
var n,i=(0,f.getGlobalMatrix)(t),s=0,a=0;return"svg"===(t.tagName+"").toLowerCase()?(n=t.viewBox.baseVal).width||(n={width:+t.getAttribute("width"),height:+t.getAttribute("height")}):n=e&&t.getBBox&&t.getBBox(),e&&"auto"!==e&&(s=e.push?e[0]*(n?n.width:t.offsetWidth||0):e.x,a=e.push?e[1]*(n?n.height:t.offsetHeight||0):e.y),r.apply(s||a?i.apply({x:s,y:a}):{x:i.e,y:i.f})},x=function(t,e,r,n){var i,s=(0,f.getGlobalMatrix)(t.parentNode,!0,!0),a=s.clone().multiply((0,f.getGlobalMatrix)(e)),o=T(t,r,s),u=T(e,n,s),h=u.x,l=u.y;return a.e=a.f=0,"auto"===n&&e.getTotalLength&&"path"===e.tagName.toLowerCase()&&(i=e.getAttribute("d").match(w)||[],h+=(i=a.apply({x:+i[0],y:+i[1]})).x,l+=i.y),i&&(h-=(i=a.apply(e.getBBox())).x,l-=i.y),a.e=h-o.x,a.f=l-o.y,a},b=function(t,e,r){var i,s,a,u=r.align,h=r.matrix,f=r.offsetX,c=r.offsetY,p=r.alignOrigin,d=t[0][0],_=t[0][1],m=g(e,"x"),v=g(e,"y");return t&&t.length?(u&&("self"===u||(i=o(u)[0]||e)===e?(0,l.transformRawPath)(t,1,0,0,1,m-d,v-_):(p&&!1!==p[2]?n.set(e,{transformOrigin:100*p[0]+"% "+100*p[1]+"%"}):p=[-(g(e,"xPercent")/100),-(g(e,"yPercent")/100)],a=(s=x(e,i,p,"auto")).apply({x:d,y:_}),(0,l.transformRawPath)(t,s.a,s.b,s.c,s.d,m+s.e-(a.x-s.e),v+s.f-(a.y-s.f)))),h?(0,l.transformRawPath)(t,h.a,h.b,h.c,h.d,h.e,h.f):(f||c)&&(0,l.transformRawPath)(t,1,0,0,1,f||0,c||0),t):(0,l.getRawPath)("M0,0L0,0")},C=function(t,e,r,n,i,o){var u=e._gsap,h=u.harness,l=h&&h.aliases&&h.aliases[r],f=l&&0>l.indexOf(",")?l:r,c=t._pt=new s(t._pt,e,f,0,0,y,0,u.set(e,f,t));c.u=a(u.get(e,f,o))||0,c.path=n,c.pp=i,t._props.push(f)},P={version:"3.12.2",name:"motionPath",register:function(t,e,r){a=(n=t).utils.getUnit,o=n.utils.toArray,u=n.core.getStyleSaver,h=n.core.reverting||function(){},s=r},init:function(t,e,r){if(!n)return console.warn("Please gsap.registerPlugin(MotionPathPlugin)"),!1;"object"==typeof e&&!e.style&&e.path||(e={path:e});var i,s,o,h,f=[],d=e,g=d.path,m=d.autoRotate,y=d.unitX,w=d.unitY,T=d.x,x=d.y,P=g[0],M=(i=e.start,s="end"in e?e.end:1,function(t){return i||1!==s?(0,l.sliceRawPath)(t,i,s):t});if(this.rawPaths=f,this.target=t,this.tween=r,this.styles=u&&u(t,"transform"),(this.rotate=m||0===m)&&(//get the rotational data FIRST so that the setTransform() method is called in the correct order in the render() loop - rotation gets set last.
this.rOffset=parseFloat(m)||0,this.radians=!!e.useRadians,this.rProp=e.rotation||"rotation",this.rSet=t._gsap.set(t,this.rProp,this),this.ru=a(t._gsap.get(t,this.rProp))||0),!Array.isArray(g)||"closed"in g||"number"==typeof P)o=M(b((0,l.getRawPath)(e.path),t,e)),(0,l.cacheRawPathMeasurements)(o,e.resolution),f.push(o),C(this,t,e.x||"x",o,"x",e.unitX||"px"),C(this,t,e.y||"y",o,"y",e.unitY||"px");else{for(h in P)!T&&~c.indexOf(h)?T=h:!x&&~p.indexOf(h)&&(x=h);for(h in T&&x?f.push(v(this,_(_([],g,T,0),g,x,1),t,T,x,M,e,y||a(g[0][T]),w||a(g[0][x]))):T=x=0,P)h!==T&&h!==x&&f.push(v(this,_([],g,h,2),t,h,0,M,e,a(g[0][h])))}},render:function(t,e){var r=e.rawPaths,n=r.length,i=e._pt;if(e.tween._time||!h()){for(t>1?t=1:t<0&&(t=0);n--;)(0,l.getPositionOnPath)(r[n],t,!n&&e.rotate,r[n]);for(;i;)i.set(i.t,i.p,i.path[i.pp]+i.u,i.d,t),i=i._next;e.rotate&&e.rSet(e.target,e.rProp,r[0].angle*(e.radians?d:1)+e.rOffset+e.ru,e,t)}else e.styles.revert()},getLength:function(t){return(0,l.cacheRawPathMeasurements)((0,l.getRawPath)(t)).totalLength},sliceRawPath:l.sliceRawPath,getRawPath:l.getRawPath,pointsToSegment:l.pointsToSegment,stringToRawPath:l.stringToRawPath,rawPathToString:l.rawPathToString,transformRawPath:l.transformRawPath,getGlobalMatrix:f.getGlobalMatrix,getPositionOnPath:l.getPositionOnPath,cacheRawPathMeasurements:l.cacheRawPathMeasurements,convertToPath:function(t,e){return o(t).map(function(t){return(0,l.convertToPath)(t,!1!==e)})},convertCoordinates:function(t,e,r){var n=(0,f.getGlobalMatrix)(e,!0,!0).multiply((0,f.getGlobalMatrix)(t));return r?n.apply(r):n},getAlignMatrix:x,getRelativePosition:function(t,e,r,n){var i=x(t,e,r,n);return{x:i.e,y:i.f}},arrayToRawPath:function(t,e){var r=_(_([],t,(e=e||{}).x||"x",0),t,e.y||"y",1);return e.relative&&m(r),["cubic"===e.type?r:(0,l.pointsToSegment)(r,e.curviness)]}};(n||"undefined"!=typeof window&&(n=window.gsap)&&n.registerPlugin&&n)&&n.registerPlugin(P)}),s("d1gX5",function(e,r){t(e.exports,"getRawPath",function(){return M}),t(e.exports,"stringToRawPath",function(){return F}),t(e.exports,"convertToPath",function(){return S}),t(e.exports,"rawPathToString",function(){return j}),t(e.exports,"sliceRawPath",function(){return D}),t(e.exports,"cacheRawPathMeasurements",function(){return L}),t(e.exports,"getPositionOnPath",function(){return z}),t(e.exports,"transformRawPath",function(){return B}),t(e.exports,"flatPointsToSegment",function(){return I}),t(e.exports,"pointsToSegment",function(){return $});/*!
 * paths 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*//* eslint-disable */var n=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,i=/(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,s=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,a=/(^[#\.][a-z]|[a-y][a-z])/i,o=Math.PI/180,u=180/Math.PI,h=Math.sin,l=Math.cos,f=Math.abs,c=Math.sqrt,p=Math.atan2,d=function(t){return"string"==typeof t},_=function(t){return"number"==typeof t},g={},m={},v=function(t){return Math.round((t+1e8)%1*1e5)/1e5||(t<0?0:1)},y=function(t){return Math.round(1e5*t)/1e5||0},w=function(t){return Math.round(1e10*t)/1e10||0},T=function(t,e,r,n){var i=t[e],s=1===n?6:O(i,r,n);if(s&&s+r+2<i.length)return t.splice(e,0,i.slice(0,r+s+2)),i.splice(0,r+s),1},x=function(t,e,r){// slightly slower way than doing this (when there's no lookup): segment.lookup[progress < 1 ? ~~(length / segment.minLength) : segment.lookup.length - 1] || 0;
var n=t.length,i=~~(r*n);if(t[i]>e){for(;--i&&t[i]>e;);i<0&&(i=0)}else for(;t[++i]<e&&i<n;);return i<n?i:n-1},b=function(t,e){var r=t.length;for(e||t.reverse();r--;)t[r].reversed||function(t){var e,r=0;for(t.reverse();r<t.length;r+=2)e=t[r],t[r]=t[r+1],t[r+1]=e;t.reversed=!t.reversed}(t[r])},C=function(t,e){return e.totalLength=t.totalLength,t.samples?(//segment
e.samples=t.samples.slice(0),e.lookup=t.lookup.slice(0),e.minLength=t.minLength,e.resolution=t.resolution):t.totalPoints&&(e.totalPoints=t.totalPoints),e},P=function(t,e){var r=t.length,n=t[r-1]||[],i=n.length;r&&e[0]===n[i-2]&&e[1]===n[i-1]&&(e=n.concat(e.slice(2)),r--),t[r]=e};function M(t){var e,r=(t=d(t)&&a.test(t)&&document.querySelector(t)||t).getAttribute?t:0;return r&&(t=t.getAttribute("d"))?(r._gsPath||(r._gsPath={}),(e=r._gsPath[t])&&!e._dirty?e:r._gsPath[t]=F(t)):t?d(t)?F(t):_(t[0])?[t]:t:console.warn("Expecting a <path> element or an SVG path data string")}//copies a RawPath WITHOUT the length meta data (for speed)
var k=function(t,e){var r,n=document.createElementNS("http://www.w3.org/2000/svg","path"),i=[].slice.call(t.attributes),s=i.length;for(e=","+e+",";--s>-1;)r=i[s].nodeName.toLowerCase(),0>e.indexOf(","+r+",")&&n.setAttributeNS(null,r,i[s].nodeValue);return n},E={rect:"rx,ry,x,y,width,height",circle:"r,cx,cy",ellipse:"rx,ry,cx,cy",line:"x1,x2,y1,y2"},R=function(t,e){for(var r=e?e.split(","):[],n={},i=r.length;--i>-1;)n[r[i]]=+t.getAttribute(r[i])||0;return n};//converts an SVG shape like <circle>, <rect>, <polygon>, <polyline>, <ellipse>, etc. to a <path>, swapping it in and copying the attributes to match.
function S(t,e){var r,n,s,a,o,u,h,l,f,c,p,d,_,g,m,v,y,w,T,x,b,C,P=t.tagName.toLowerCase();return"path"!==P&&t.getBBox?(u=k(t,"x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"),C=R(t,E[P]),"rect"===P?(a=C.rx,o=C.ry||a,n=C.x,s=C.y,c=C.width-2*a,p=C.height-2*o,a||o?(//if there are rounded corners, render cubic beziers
d=n+.44771525016900005*a,m=(g=(_=n+a)+c)+.552284749831*a,v=g+a,y=s+.44771525016900005*o,x=(T=(w=s+o)+p)+.552284749831*o,b=T+o,r="M"+v+","+w+" V"+T+" C"+[v,x,m,b,g,b,g-(g-_)/3,b,_+(g-_)/3,b,_,b,d,b,n,x,n,T,n,T-(T-w)/3,n,w+(T-w)/3,n,w,n,y,d,s,_,s,_+(g-_)/3,s,g-(g-_)/3,s,g,s,m,s,v,y,v,w].join(",")+"z"):r="M"+(n+c)+","+s+" v"+p+" h"+-c+" v"+-p+" h"+c+"z"):"circle"===P||"ellipse"===P?("circle"===P?l=.552284749831*(a=o=C.r):(a=C.rx,l=.552284749831*(o=C.ry)),n=C.cx,s=C.cy,h=.552284749831*a,r="M"+(n+a)+","+s+" C"+[n+a,s+l,n+h,s+o,n,s+o,n-h,s+o,n-a,s+l,n-a,s,n-a,s-l,n-h,s-o,n,s-o,n+h,s-o,n+a,s-l,n+a,s].join(",")+"z"):"line"===P?r="M"+C.x1+","+C.y1+" L"+C.x2+","+C.y2:("polyline"===P||"polygon"===P)&&(r="M"+(n=(f=(t.getAttribute("points")+"").match(i)||[]).shift())+","+(s=f.shift())+" L"+f.join(","),"polygon"===P&&(r+=","+n+","+s+"z")),u.setAttribute("d",j(u._gsRawPath=F(r))),e&&t.parentNode&&(t.parentNode.insertBefore(u,t),t.parentNode.removeChild(t)),u):t}//returns the rotation (in degrees) at a particular progress on a rawPath (the slope of the tangent)
function A(t,e,r){var n,i=t[e],s=t[e+2],a=t[e+4];return i+=(s-i)*r,s+=(a-s)*r,i+=(s-i)*r,n=s+(a+(t[e+6]-a)*r-s)*r-i,i=t[e+1],s=t[e+3],a=t[e+5],i+=(s-i)*r,s+=(a-s)*r,i+=(s-i)*r,y(p(s+(a+(t[e+7]-a)*r-s)*r-i,n)*u)}function D(t,e,r){var n=Math.max(0,~~(f((r=void 0===r?1:w(r)||0)-(e=w(e)||0))-1e-8)),i=function(t){for(var e=[],r=0;r<t.length;r++)e[r]=C(t[r],t[r].slice(0));return C(t,e)}(t);if(e>r&&(e=1-e,r=1-r,b(i),i.totalLength=0),e<0||r<0){var s=Math.abs(~~Math.min(e,r))+1;e+=s,r+=s}i.totalLength||L(i);var a,o,u,h,l,c,p,d,_=r>1,v=N(i,e,g,!0),y=N(i,r,m),x=y.segment,M=v.segment,k=y.segIndex,E=v.segIndex,R=y.i,S=v.i,D=E===k,z=R===S&&D;if(_||n){for(a=k<E||D&&R<S||z&&y.t<v.t,T(i,E,S,v.t)&&(E++,!a&&(k++,z?(y.t=(y.t-v.t)/(1-v.t),R=0):D&&(R-=S))),1e-5>Math.abs(1-(r-e))?k=E-1:!y.t&&k?k--:T(i,k,R,y.t)&&a&&E++,1===v.t&&(E=(E+1)%i.length),l=[],p=1+(c=i.length)*n,d=E,p+=(c-E+k)%c,h=0;h<p;h++)P(l,i[d++%c]);i=l}else if(u=1===y.t?6:O(x,R,y.t),e!==r)for(o=O(M,S,z?v.t/y.t:v.t),D&&(u+=o),x.splice(R+u+2),(o||S)&&M.splice(0,S+o),h=i.length;h--;)(h<E||h>k)&&i.splice(h,1);else x.angle=A(x,R+u,0),R+=u,v=x[R],y=x[R+1],x.length=x.totalLength=0,x.totalPoints=i.totalPoints=8,x.push(v,y,v,y,v,y,v,y);return i.totalLength=0,i}//measures a Segment according to its resolution (so if segment.resolution is 6, for example, it'll take 6 samples equally across each Bezier) and create/populate a "samples" Array that has the length up to each of those sample points (always increasing from the start) as well as a "lookup" array that's broken up according to the smallest distance between 2 samples. This gives us a very fast way of looking up a progress position rather than looping through all the points/Beziers. You can optionally have it only measure a subset, starting at startIndex and going for a specific number of beziers (remember, there are 3 x/y pairs each, for a total of 6 elements for each Bezier). It will also populate a "totalLength" property, but that's not generally super accurate because by default it'll only take 6 samples per Bezier. But for performance reasons, it's perfectly adequate for measuring progress values along the path. If you need a more accurate totalLength, either increase the resolution or use the more advanced bezierToPoints() method which keeps adding points until they don't deviate by more than a certain precision value.
function L(t,e){var r,n,i;for(i=r=n=0;i<t.length;i++)t[i].resolution=~~e||12,n+=t[i].length,r+=function(t,e,r){e=e||0,t.samples||(t.samples=[],t.lookup=[]);var n,i,s,a,o,u,h,l,p,d,_,g,m,v,y,w,T,x=~~t.resolution||12,b=1/x,C=r?e+6*r+1:t.length,P=t[e],M=t[e+1],k=e?e/6*x:0,E=t.samples,R=t.lookup,S=(e?t.minLength:1e8)||1e8,A=E[k+r*x-1],D=e?E[k-1]:0;for(E.length=R.length=0,i=e+2;i<C;i+=6){if(s=t[i+4]-P,a=t[i+2]-P,o=t[i]-P,l=t[i+5]-M,p=t[i+3]-M,d=t[i+1]-M,u=h=_=g=0,.01>f(s)&&.01>f(l)&&f(o)+f(d)<.01)t.length>8&&(t.splice(i,6),i-=6,C-=6);else for(n=1;n<=x;n++)m=1-(v=b*n),u=h-(h=(v*v*s+3*m*(v*a+m*o))*v),(w=c((_=g-(g=(v*v*l+3*m*(v*p+m*d))*v))*_+u*u))<S&&(S=w),D+=w,E[k++]=D;P+=s,M+=l}if(A)for(A-=D;k<E.length;k++)E[k]+=A;if(E.length&&S){if(t.totalLength=T=E[E.length-1]||0,t.minLength=S,T/S<9999)for(n=0,// if the lookup would require too many values (memory problem), we skip this and instead we use a loop to lookup values directly in the samples Array
w=y=0;n<T;n+=S)R[w++]=E[y]<n?++y:y}else t.totalLength=E[0]=0;return e?D-E[e/2-1]:D}(t[i]);return t.totalPoints=n,t.totalLength=r,t}//divide segment[i] at position t (value between 0 and 1, progress along that particular cubic bezier segment that starts at segment[i]). Returns how many elements were spliced into the segment array (either 0 or 6)
function O(t,e,r){if(r<=0||r>=1)return 0;var n=t[e],i=t[e+1],s=t[e+2],a=t[e+3],o=t[e+4],u=t[e+5],h=t[e+6],l=t[e+7],f=n+(s-n)*r,c=s+(o-s)*r,p=i+(a-i)*r,d=a+(u-a)*r,_=f+(c-f)*r,g=p+(d-p)*r,m=o+(h-o)*r,v=u+(l-u)*r;return c+=(m-c)*r,d+=(v-d)*r,t.splice(e+2,4,y(f),y(p),y(_),y(g),y(_+(c-_)*r),y(g+(d-g)*r),y(c),y(d),y(m),y(v)),t.samples&&t.samples.splice(e/6*t.resolution|0,0,0,0,0,0,0,0),6}// returns an object {path, segment, segIndex, i, t}
function N(t,e,r,n){r=r||{},t.totalLength||L(t),(e<0||e>1)&&(e=v(e));var i,s,a,o,u,h,l,f=0,c=t[0];if(e){if(1===e)l=1,f=t.length-1,h=(c=t[f]).length-8;else{if(t.length>1){for(//speed optimization: most of the time, there's only one segment so skip the recursion.
a=t.totalLength*e,u=h=0;(u+=t[h++].totalLength)<a;)f=h;e=(a-(o=u-(c=t[f]).totalLength))/(u-o)||0}i=c.samples,s=c.resolution,a=c.totalLength*e,o=(h=c.lookup.length?c.lookup[~~(a/c.minLength)]||0:x(i,a,e))?i[h-1]:0,(u=i[h])<a&&(o=u,u=i[++h]),l=1/s*((a-o)/(u-o)+h%s),h=6*~~(h/s),n&&1===l&&(h+6<c.length?(h+=6,l=0):f+1<t.length&&(h=l=0,c=t[++f]))}}else l=h=f=0,c=t[0];return r.t=l,r.i=h,r.path=t,r.segment=c,r.segIndex=f,r}function z(t,e,r,n){var i,s,a,o,u,h,l,f,c,p=t[0],d=n||{};if((e<0||e>1)&&(e=v(e)),p.lookup||L(t),t.length>1){for(//speed optimization: most of the time, there's only one segment so skip the recursion.
a=t.totalLength*e,u=h=0;(u+=t[h++].totalLength)<a;)p=t[h];e=(a-(o=u-p.totalLength))/(u-o)||0}return i=p.samples,s=p.resolution,a=p.totalLength*e,o=(h=p.lookup.length?p.lookup[e<1?~~(a/p.minLength):p.lookup.length-1]||0:x(i,a,e))?i[h-1]:0,(u=i[h])<a&&(o=u,u=i[++h]),c=1-(l=1/s*((a-o)/(u-o)+h%s)||0),f=p[h=6*~~(h/s)],d.x=y((l*l*(p[h+6]-f)+3*c*(l*(p[h+4]-f)+c*(p[h+2]-f)))*l+f),d.y=y((l*l*(p[h+7]-(f=p[h+1]))+3*c*(l*(p[h+5]-f)+c*(p[h+3]-f)))*l+f),r&&(d.angle=p.totalLength?A(p,h,l>=1?1-1e-9:l||1e-9):p.angle||0),d}//applies a matrix transform to RawPath (or a segment in a RawPath) and returns whatever was passed in (it transforms the values in the array(s), not a copy).
function B(t,e,r,n,i,s,a){for(var o,u,h,l,f,c=t.length;--c>-1;)for(h=0,u=(o=t[c]).length;h<u;h+=2)l=o[h],f=o[h+1],o[h]=l*e+f*n+s,o[h+1]=l*r+f*i+a;return t._dirty=1,t}// translates SVG arc data into a segment (cubic beziers). Angle is in degrees.
function F(t){var e,r,i,a,u,p,d,_,g,m,v,y,w,T,x,b=(t+"").replace(s,function(t){var e=+t;return e<1e-4&&e>-.0001?0:e}).match(n)||[],C=[],P=0,M=0,k=2/3,E=b.length,R=0,S="ERROR: malformed path: "+t,A=function(t,e,r,n){m=(r-t)/3,v=(n-e)/3,d.push(t+m,e+v,r-m,n-v,r,n)};if(!t||!isNaN(b[0])||isNaN(b[1]))return console.log(S),C;for(e=0;e<E;e++)if(w=u,isNaN(b[e])?p=(u=b[e].toUpperCase())!==b[e]:e--,i=+b[e+1],a=+b[e+2],p&&(i+=P,a+=M),e||(_=i,g=a),"M"===u)d&&(d.length<8?C.length-=1:R+=d.length),P=_=i,M=g=a,d=[i,a],C.push(d),e+=2,u="L";else if("C"===u)d||(d=[0,0]),p||(P=M=0),//note: "*1" is just a fast/short way to cast the value as a Number. WAAAY faster in Chrome, slightly slower in Firefox.
d.push(i,a,P+1*b[e+3],M+1*b[e+4],P+=1*b[e+5],M+=1*b[e+6]),e+=6;else if("S"===u)m=P,v=M,("C"===w||"S"===w)&&(m+=P-d[d.length-4],v+=M-d[d.length-3]),p||(P=M=0),d.push(m,v,i,a,P+=1*b[e+3],M+=1*b[e+4]),e+=4;else if("Q"===u)m=P+(i-P)*k,v=M+(a-M)*k,p||(P=M=0),P+=1*b[e+3],M+=1*b[e+4],d.push(m,v,P+(i-P)*k,M+(a-M)*k,P,M),e+=4;else if("T"===u)m=P-d[d.length-4],v=M-d[d.length-3],d.push(P+m,M+v,i+(P+1.5*m-i)*k,a+(M+1.5*v-a)*k,P=i,M=a),e+=2;else if("H"===u)A(P,M,P=i,M),e+=1;else if("V"===u)//adjust values because the first (and only one) isn't x in this case, it's y.
A(P,M,P,M=i+(p?M-P:0)),e+=1;else if("L"===u||"Z"===u)"Z"===u&&(i=_,a=g,d.closed=!0),("L"===u||f(P-i)>.5||f(M-a)>.5)&&(A(P,M,i,a),"L"===u&&(e+=2)),P=i,M=a;else if("A"===u){if(T=b[e+4],x=b[e+5],m=b[e+6],v=b[e+7],r=7,T.length>1&&(T.length<3?(v=m,m=x,r--):(v=x,m=T.substr(2),r-=2),x=T.charAt(1),T=T.charAt(0)),y=function(t,e,r,n,i,s,a,u,p){if(t!==u||e!==p){r=f(r),n=f(n);var d=i%360*o,_=l(d),g=h(d),m=Math.PI,v=2*m,y=(t-u)/2,w=(e-p)/2,T=_*y+g*w,x=-g*y+_*w,b=T*T,C=x*x,P=b/(r*r)+C/(n*n);P>1&&(r=c(P)*r,n=c(P)*n);var M=r*r,k=n*n,E=(M*k-M*C-k*b)/(M*C+k*b);E<0&&(E=0);var R=(s===a?-1:1)*c(E),S=R*(r*x/n),A=-(R*(n*T/r)),D=(t+u)/2+(_*S-g*A),L=(e+p)/2+(g*S+_*A),O=(T-S)/r,N=(x-A)/n,z=(-T-S)/r,B=(-x-A)/n,F=O*O+N*N,I=(N<0?-1:1)*Math.acos(O/c(F)),$=(O*B-N*z<0?-1:1)*Math.acos((O*z+N*B)/c(F*(z*z+B*B)));isNaN($)&&($=m),!a&&$>0?$-=v:a&&$<0&&($+=v),I%=v;var j,U=Math.ceil(f($%=v)/(v/4)),q=[],W=$/U,G=4/3*h(W/2)/(1+l(W/2)),V=_*r,X=g*r,Y=-(g*n),H=_*n;for(j=0;j<U;j++)T=l(i=I+j*W),x=h(i),O=l(i+=W),N=h(i),q.push(T-G*x,x+G*T,O+G*N,N-G*O,O,N);//now transform according to the actual size of the ellipse/arc (the beziers were noramlized, between 0 and 1 on a circle).
for(j=0;j<q.length;j+=2)T=q[j],x=q[j+1],q[j]=T*V+x*Y+D,q[j+1]=T*X+x*H+L;return q[j-2]=u,q[j-1]=p,q}}//Spits back a RawPath with absolute coordinates. Each segment starts with a "moveTo" command (x coordinate, then y) and then 2 control points (x, y, x, y), then anchor. The goal is to minimize memory and maximize speed.
(P,M,+b[e+1],+b[e+2],+b[e+3],+T,+x,(p?P:0)+1*m,(p?M:0)+1*v),e+=r,y)for(r=0;r<y.length;r++)d.push(y[r]);P=d[d.length-2],M=d[d.length-1]}else console.log(S);return(e=d.length)<6?(//in case there's odd SVG like a M0,0 command at the very end.
C.pop(),e=0):d[0]===d[e-2]&&d[1]===d[e-1]&&(d.closed=!0),C.totalPoints=R+e,C}//populates the points array in alternating x/y values (like [x, y, x, y...] instead of individual point objects [{x, y}, {x, y}...] to conserve memory and stay in line with how we're handling segment arrays
function I(t,e){void 0===e&&(e=1);for(var r=t[0],n=0,i=[r,0],s=2;s<t.length;s+=2)i.push(r,n,t[s],n=(t[s]-r)*e/2,r=t[s],-n);return i}//points is an array of x/y points, like [x, y, x, y, x, y]
function $(t,e){//points = simplifyPoints(points, tolerance);
1e-4>f(t[0]-t[2])&&1e-4>f(t[1]-t[3])&&(t=t.slice(2));var r,n,i,s,a,o,u,h,l,p,d,_,g,m,v,w=t.length-2,T=+t[0],x=+t[1],b=+t[2],C=+t[3],P=[T,x,T,x],M=b-T,k=C-x,E=.001>Math.abs(t[w]-T)&&.001>Math.abs(t[w+1]-x);for(E&&(// if the start and end points are basically on top of each other, close the segment by adding the 2nd point to the end, and the 2nd-to-last point to the beginning (we'll remove them at the end, but this allows the curvature to look perfect)
t.push(b,C),b=T,C=x,T=t[w-2],x=t[w-1],t.unshift(T,x),w+=4),e=e||0===e?+e:1,i=2;i<w;i+=2)r=T,n=x,T=b,x=C,b=+t[i+2],C=+t[i+3],(T!==b||x!==C)&&(s=M,a=k,M=b-T,k=C-x,o=c(s*s+a*a),u=c(M*M+k*k),h=c(Math.pow(M/u+s/o,2)+Math.pow(k/u+a/o,2)),l=(o+u)*e*.25/h,p=T-(T-r)*(o?l/o:0),d=T+(b-T)*(u?l/u:0),_=T-(p+((d-p)*(3*o/(o+u)+.5)/4||0)),g=x-(x-n)*(o?l/o:0),m=x+(C-x)*(u?l/u:0),v=x-(g+((m-g)*(3*o/(o+u)+.5)/4||0)),(T!==r||x!==n)&&P.push(y(p+_),y(g+v),y(T),y(x),y(d+_),y(m+v)));return T!==b||x!==C||P.length<4?P.push(y(b),y(C),y(b),y(C)):P.length-=2,2===P.length?P.push(T,x,T,x,T,x):E&&(P.splice(0,6),P.length=P.length-6),P}//returns the squared distance between an x/y coordinate and a segment between x1/y1 and x2/y2
function j(t){_(t[0])&&(t=[t]);var e,r,n,i,s="",a=t.length;for(r=0;r<a;r++){for(s+="M"+y((i=t[r])[0])+","+y(i[1])+" C",e=i.length,n=2;n<e;n++)s+=y(i[n++])+","+y(i[n++])+" "+y(i[n++])+","+y(i[n++])+" "+y(i[n++])+","+y(i[n])+" ";i.closed&&(s+="z")}return s}/*
// takes a segment with coordinates [x, y, x, y, ...] and converts the control points into angles and lengths [x, y, angle, length, angle, length, x, y, angle, length, ...] so that it animates more cleanly and avoids odd breaks/kinks. For example, if you animate from 1 o'clock to 6 o'clock, it'd just go directly/linearly rather than around. So the length would be very short in the middle of the tween.
export function cpCoordsToAngles(segment, copy) {
	var result = copy ? segment.slice(0) : segment,
		x, y, i;
	for (i = 0; i < segment.length; i+=6) {
		x = segment[i+2] - segment[i];
		y = segment[i+3] - segment[i+1];
		result[i+2] = Math.atan2(y, x);
		result[i+3] = Math.sqrt(x * x + y * y);
		x = segment[i+6] - segment[i+4];
		y = segment[i+7] - segment[i+5];
		result[i+4] = Math.atan2(y, x);
		result[i+5] = Math.sqrt(x * x + y * y);
	}
	return result;
}

// takes a segment that was converted with cpCoordsToAngles() to have angles and lengths instead of coordinates for the control points, and converts it BACK into coordinates.
export function cpAnglesToCoords(segment, copy) {
	var result = copy ? segment.slice(0) : segment,
		length = segment.length,
		rnd = 1000,
		angle, l, i, j;
	for (i = 0; i < length; i+=6) {
		angle = segment[i+2];
		l = segment[i+3]; //length
		result[i+2] = (((segment[i] + Math.cos(angle) * l) * rnd) | 0) / rnd;
		result[i+3] = (((segment[i+1] + Math.sin(angle) * l) * rnd) | 0) / rnd;
		angle = segment[i+4];
		l = segment[i+5]; //length
		result[i+4] = (((segment[i+6] - Math.cos(angle) * l) * rnd) | 0) / rnd;
		result[i+5] = (((segment[i+7] - Math.sin(angle) * l) * rnd) | 0) / rnd;
	}
	return result;
}

//adds an "isSmooth" array to each segment and populates it with a boolean value indicating whether or not it's smooth (the control points have basically the same slope). For any smooth control points, it converts the coordinates into angle (x, in radians) and length (y) and puts them into the same index value in a smoothData array.
export function populateSmoothData(rawPath) {
	let j = rawPath.length,
		smooth, segment, x, y, x2, y2, i, l, a, a2, isSmooth, smoothData;
	while (--j > -1) {
		segment = rawPath[j];
		isSmooth = segment.isSmooth = segment.isSmooth || [0, 0, 0, 0];
		smoothData = segment.smoothData = segment.smoothData || [0, 0, 0, 0];
		isSmooth.length = 4;
		l = segment.length - 2;
		for (i = 6; i < l; i += 6) {
			x = segment[i] - segment[i - 2];
			y = segment[i + 1] - segment[i - 1];
			x2 = segment[i + 2] - segment[i];
			y2 = segment[i + 3] - segment[i + 1];
			a = _atan2(y, x);
			a2 = _atan2(y2, x2);
			smooth = (Math.abs(a - a2) < 0.09);
			if (smooth) {
				smoothData[i - 2] = a;
				smoothData[i + 2] = a2;
				smoothData[i - 1] = _sqrt(x * x + y * y);
				smoothData[i + 3] = _sqrt(x2 * x2 + y2 * y2);
			}
			isSmooth.push(smooth, smooth, 0, 0, smooth, smooth);
		}
		//if the first and last points are identical, check to see if there's a smooth transition. We must handle this a bit differently due to their positions in the array.
		if (segment[l] === segment[0] && segment[l+1] === segment[1]) {
			x = segment[0] - segment[l-2];
			y = segment[1] - segment[l-1];
			x2 = segment[2] - segment[0];
			y2 = segment[3] - segment[1];
			a = _atan2(y, x);
			a2 = _atan2(y2, x2);
			if (Math.abs(a - a2) < 0.09) {
				smoothData[l-2] = a;
				smoothData[2] = a2;
				smoothData[l-1] = _sqrt(x * x + y * y);
				smoothData[3] = _sqrt(x2 * x2 + y2 * y2);
				isSmooth[l-2] = isSmooth[l-1] = true; //don't change indexes 2 and 3 because we'll trigger everything from the END, and this will optimize file size a bit.
			}
		}
	}
	return rawPath;
}
export function pointToScreen(svgElement, point) {
	if (arguments.length < 2) { //by default, take the first set of coordinates in the path as the point
		let rawPath = getRawPath(svgElement);
		point = svgElement.ownerSVGElement.createSVGPoint();
		point.x = rawPath[0][0];
		point.y = rawPath[0][1];
	}
	return point.matrixTransform(svgElement.getScreenCTM());
}

*/}),s("hhNGZ",function(e,r){t(e.exports,"getGlobalMatrix",function(){return P});/*!
 * matrix 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*//* eslint-disable */var n,i,s,a,o,u,h,l,f,c="transform",p=c+"Origin",d=function(t){var e=t.ownerDocument||t;for(!(c in t.style)&&("msTransform"in t.style)&&(p=//to improve compatibility with old Microsoft browsers
(c="msTransform")+"Origin");e.parentNode&&(e=e.parentNode););if(i=window,h=new C,e){n=e,s=e.documentElement,a=e.body,(l=n.createElementNS("http://www.w3.org/2000/svg","g")).style.transform="none";var r=e.createElement("div"),o=e.createElement("div");a.appendChild(r),r.appendChild(o),r.style.position="static",r.style[c]="translate3d(0,0,1px)",f=o.offsetParent!==r,a.removeChild(r)}return e},_=function(t){for(// walks up the element's ancestors and finds any that had their scale set to 0 via GSAP, and changes them to 0.0001 to ensure that measurements work. Firefox has a bug that causes it to incorrectly report getBoundingClientRect() when scale is 0.
var e,r;t&&t!==a;)(r=t._gsap)&&r.uncache&&r.get(t,"x"),r&&!r.scaleX&&!r.scaleY&&r.renderTransform&&(r.scaleX=r.scaleY=1e-4,r.renderTransform(1,r),e?e.push(r):e=[r]),t=t.parentNode;return e},// _forceDisplay = e => {
// 	let a = [],
// 		parent;
// 	while (e && e !== _body) {
// 		parent = e.parentNode;
// 		(_win.getComputedStyle(e).display === "none" || !parent) && a.push(e, e.style.display, parent) && (e.style.display = "block");
// 		parent || _body.appendChild(e);
// 		e = parent;
// 	}
// 	return a;
// },
// _revertDisplay = a => {
// 	for (let i = 0; i < a.length; i+=3) {
// 		a[i+1] ? (a[i].style.display = a[i+1]) : a[i].style.removeProperty("display");
// 		a[i+2] || a[i].parentNode.removeChild(a[i]);
// 	}
// },
g=[],m=[],v=function(t){return t.ownerSVGElement||("svg"===(t.tagName+"").toLowerCase()?t:null)},y=function t(e,r){if(e.parentNode&&(n||d(e))){var i=v(e),s=i?i.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",a=i?r?"rect":"g":"div",h=2!==r?0:100,l=3===r?100:0,f="position:absolute;display:block;pointer-events:none;margin:0;padding:0;",c=n.createElementNS?n.createElementNS(s.replace(/^https/,"http"),a):n.createElement(a);return r&&(i?(u||(u=t(e)),c.setAttribute("width",.01),c.setAttribute("height",.01),c.setAttribute("transform","translate("+h+","+l+")"),u.appendChild(c)):(o||((o=t(e)).style.cssText=f),c.style.cssText=f+"width:0.1px;height:0.1px;top:"+l+"px;left:"+h+"px",o.appendChild(c))),c}throw"Need document and parent."},w=function(t){for(// replaces SVGTransformList.consolidate() because a bug in Firefox causes it to break pointer events. See https://greensock.com/forums/topic/23248-touch-is-not-working-on-draggable-in-firefox-windows-v324/?tab=comments#comment-109800
var e=new C,r=0;r<t.numberOfItems;r++)e.multiply(t.getItem(r).matrix);return e},T=function(t){var e,r=t.getCTM();return r||(// Firefox returns null for getCTM() on root <svg> elements, so this is a workaround using a <g> that we temporarily append.
e=t.style[c],t.style[c]="none",t.appendChild(l),r=l.getCTM(),t.removeChild(l),e?t.style[c]=e:t.style.removeProperty(c.replace(/([A-Z])/g,"-$1").toLowerCase())),r||h.clone();// Firefox will still return null if the <svg> has a width/height of 0 in the browser.
},x=function(t,e){var r,n,s,a,l,d,_=v(t),x=t===_,b=_?g:m,P=t.parentNode;if(t===i)return t;if(b.length||b.push(y(t,1),y(t,2),y(t,3)),r=_?u:o,_)x?(a=-(s=T(t)).e/s.a,l=-s.f/s.d,n=h):t.getBBox?(s=t.getBBox(),a=(n=(n=t.transform?t.transform.baseVal:{}).numberOfItems?n.numberOfItems>1?w(n):n.getItem(0).matrix:h).a*s.x+n.c*s.y,l=n.b*s.x+n.d*s.y):(// may be a <mask> which has no getBBox() so just use defaults instead of throwing errors.
n=new C,a=l=0),e&&"g"===t.tagName.toLowerCase()&&(a=l=0),(x?_:P).appendChild(r),r.setAttribute("transform","matrix("+n.a+","+n.b+","+n.c+","+n.d+","+(n.e+a)+","+(n.f+l)+")");else{if(a=l=0,f)for(// some browsers (like Safari) have a bug that causes them to misreport offset values. When an ancestor element has a transform applied, it's supposed to treat it as if it's position: relative (new context). Safari botches this, so we need to find the closest ancestor (between the element and its offsetParent) that has a transform applied and if one is found, grab its offsetTop/Left and subtract them to compensate.
n=t.offsetParent,s=t;s&&(s=s.parentNode)&&s!==n&&s.parentNode;)(i.getComputedStyle(s)[c]+"").length>4&&(a=s.offsetLeft,l=s.offsetTop,s=0);if("absolute"!==(d=i.getComputedStyle(t)).position&&"fixed"!==d.position)for(n=t.offsetParent;P&&P!==n;)// if there's an ancestor element between the element and its offsetParent that's scrolled, we must factor that in.
a+=P.scrollLeft||0,l+=P.scrollTop||0,P=P.parentNode;(s=r.style).top=t.offsetTop-l+"px",s.left=t.offsetLeft-a+"px",s[c]=d[c],s[p]=d[p],// b.borderLeftStyle = m.borderLeftStyle;
// b.borderTopStyle = m.borderTopStyle;
// b.borderLeftWidth = m.borderLeftWidth;
// b.borderTopWidth = m.borderTopWidth;
s.position="fixed"===d.position?"fixed":"absolute",t.parentNode.appendChild(r)}return r},b=function(t,e,r,n,i,s,a){return t.a=e,t.b=r,t.c=n,t.d=i,t.e=s,t.f=a,t},C=/*#__PURE__*/function(){function t(t,e,r,n,i,s){void 0===t&&(t=1),void 0===e&&(e=0),void 0===r&&(r=0),void 0===n&&(n=1),void 0===i&&(i=0),void 0===s&&(s=0),b(this,t,e,r,n,i,s)}var e=t.prototype;return e.inverse=function(){var t=this.a,e=this.b,r=this.c,n=this.d,i=this.e,s=this.f,a=t*n-e*r||1e-10;return b(this,n/a,-e/a,-r/a,t/a,(r*s-n*i)/a,-(t*s-e*i)/a)},e.multiply=function(t){var e=this.a,r=this.b,n=this.c,i=this.d,s=this.e,a=this.f,o=t.a,u=t.c,h=t.b,l=t.d,f=t.e,c=t.f;return b(this,o*e+h*n,o*r+h*i,u*e+l*n,u*r+l*i,s+f*e+c*n,a+f*r+c*i)},e.clone=function(){return new t(this.a,this.b,this.c,this.d,this.e,this.f)},e.equals=function(t){var e=this.a,r=this.b,n=this.c,i=this.d,s=this.e,a=this.f;return e===t.a&&r===t.b&&n===t.c&&i===t.d&&s===t.e&&a===t.f},e.apply=function(t,e){void 0===e&&(e={});var r=t.x,n=t.y,i=this.a,s=this.b,a=this.c,o=this.d,u=this.e,h=this.f;return e.x=r*i+n*a+u||0,e.y=r*s+n*o+h||0,e},t}();function P(t,e,r,o){// adjustGOffset is typically used only when grabbing an element's PARENT's global matrix, and it ignores the x/y offset of any SVG <g> elements because they behave in a special way.
if(!t||!t.parentNode||(n||d(t)).documentElement===t)return new C;var u=_(t),h=v(t)?g:m,l=x(t,r),f=h[0].getBoundingClientRect(),c=h[1].getBoundingClientRect(),p=h[2].getBoundingClientRect(),y=l.parentNode,w=!o&&function t(e){return"fixed"===i.getComputedStyle(e).position||((e=e.parentNode)&&1===e.nodeType?t(e):void 0)}(t),T=new C((c.left-f.left)/100,(c.top-f.top)/100,(p.left-f.left)/100,(p.top-f.top)/100,f.left+(w?0:i.pageXOffset||n.scrollLeft||s.scrollLeft||a.scrollLeft||0),f.top+(w?0:i.pageYOffset||n.scrollTop||s.scrollTop||a.scrollTop||0));if(y.removeChild(l),u)for(f=u.length;f--;)(c=u[f]).scaleX=c.scaleY=0,c.renderTransform(1,c);return e?T.inverse():T}// export function getMatrix(element) {
// 	_doc || _setDoc(element);
// 	let m = (_win.getComputedStyle(element)[_transformProp] + "").substr(7).match(/[-.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g),
// 		is2D = m && m.length === 6;
// 	return !m || m.length < 6 ? new Matrix2D() : new Matrix2D(+m[0], +m[1], +m[is2D ? 2 : 4], +m[is2D ? 3 : 5], +m[is2D ? 4 : 12], +m[is2D ? 5 : 13]);
// }
}),s("bC9KT",function(e,r){/**
 * Shallow merges the properties of an object with the target object. Only
 * includes properties that exist on the target object. Non-writable properties
 * on the target object will not be over-written.
 *
 * @param {Object} target
 * @param {Object} object
 */function n(t,e){return Object.getOwnPropertyNames(Object(t)).reduce((r,n)=>{let i=Object.getOwnPropertyDescriptor(Object(t),n),s=Object.getOwnPropertyDescriptor(Object(e),n);return Object.defineProperty(r,n,s||i)},{})}/**
 * Checks if given value is a string
 *
 * @param {any} value
 * @return {boolean} `true` if `value` is a string, else `false`
 */function i(t){return"string"==typeof t}function s(t){return Array.isArray(t)}/**
 * Parses user supplied settings objects.
 */function a(t={}){let e;let r=n(t);// `split` may be used as an alias for the `types` option
return void 0!==r.types?e=r.types:void 0!==r.split&&(e=r.split),void 0!==e&&(r.types=(i(e)||s(e)?String(e):"").split(",").map(t=>String(t).trim()).filter(t=>/((line)|(word)|(char))/i.test(t))),(r.absolute||r.position)&&(r.absolute=r.absolute||/absolute/.test(t.position)),r}/**
 * Takes a list of `types` and returns an object
 *
 * @param {string | string[]} value a comma separated list of split types
 * @return {{lines: boolean, words: boolean, chars: boolean}}
 */function o(t){let e=i(t)||s(t)?String(t):"";return{none:!e,lines:/line/i.test(e),words:/word/i.test(e),chars:/char/i.test(e)}}/**
 * Returns true if `value` is a non-null object.
 * @param {any} value
 * @return {boolean}
 */function u(t){return null!==t&&"object"==typeof t}/**
 * Returns true if `input` is one of the following:
 * - `Element`
 * - `Text`
 * - `DocumentFragment`
 */function h(t){return u(t)&&/^(1|3|11)$/.test(t.nodeType)}/**
 * Coerces `value` to an `Array`.
 *
 * @param {any} value
 * @return {any[]}
 * @example
 * // If `value` is any `Array`, returns original `Array`
 * let arr = [1, 2]
 * toArray(arr)
 * // => arr
 *
 * // If `value` is an `ArrayLike`, its equivalent to `Array.from(value)`
 * let nodeList = document.querySelectorAll('div')
 * toArray(nodeList)
 * // => HTMLElement[] s
 *
 * // If value is falsy, returns empty array
 * toArray(null)
 * // => []
 *
 * // For any other type of value, its equivalent to `Array.of(value)`
 * let element = document.createElement('div')
 * toArray(element)
 * // => [element]
 *
 */function l(t){var e;return s(t)?t:null==t?[]:u(t)&&"number"==typeof(e=t.length)&&e>-1&&e%1==0?Array.prototype.slice.call(t):[t]}/**
 * Processes target elements for the splitType function.
 *
 * @param {any} target Can be one of the following:
 * 1. `string` - A css selector
 * 2. `HTMLElement` - A single element
 * 3. `NodeList` - A nodeList
 * 4. `Element[]` - An array of elements
 * 5. `Array<NodeList|Element[]>` - An nested array of elements
 * @returns {Element[]} A flat array HTML elements
 * @return A flat array of elements or empty array if no elements are found
 */function f(t){let e=t;// If `target` is a selector string...
return i(t)&&(e=/^(#[a-z]\w+)$/.test(t.trim())?document.getElementById(t.trim().slice(1)):document.querySelectorAll(t)),l(e).reduce((t,e)=>[...t,...l(e).filter(h)],[])}t(e.exports,"default",function(){return q}),/**
 * SplitType
 * https://github.com/lukePeavey/SplitType
 * @version 0.3.3
 * @author Luke Peavey <lwpeavey@gmail.com>
 */// Polyfill the following DOM methods that are not supported in IE 11.
(()=>{function t(...e){let r=e.length;for(let t=0;t<r;t++){let r=e[t];1===r.nodeType||11===r.nodeType?this.appendChild(r):this.appendChild(document.createTextNode(String(r)))}}function e(...t){for(;this.lastChild;)this.removeChild(this.lastChild);t.length&&this.append(...t)}function r(...t){let e=this.parentNode,n=t.length;if(e)for(n||e.removeChild(this);n--;){let r=t[n];"object"!=typeof r?r=this.ownerDocument.createTextNode(r):r.parentNode&&r.parentNode.removeChild(r),n?e.insertBefore(this.previousSibling,r):e.replaceChild(r,this)}}"undefined"==typeof Element||(Element.prototype.append||(Element.prototype.append=t,DocumentFragment.prototype.append=t),Element.prototype.replaceChildren||(Element.prototype.replaceChildren=e,DocumentFragment.prototype.replaceChildren=e),Element.prototype.replaceWith||(Element.prototype.replaceWith=r,DocumentFragment.prototype.replaceWith=r))})();let{entries:c,keys:p,values:d}=Object,_="_splittype",g={},m=0;/**
 * Stores data associated with DOM elements or other objects. This is a
 * simplified version of jQuery's data method.
 *
 * @signature Data(owner)
 * @description Get the data store object for the given owner.
 * @param {Object} owner the object that data will be associated with.
 * @return {Object} the data object for given `owner`. If no data exists
 *     for the given object, creates a new data store and returns it.
 *
 * @signature Data(owner, key)
 * @description Get the value
 * @param {Object} owner
 * @param {string} key
 * @return {any} the value of the provided key. If key does not exist, returns
 *     undefined.
 *
 * @signature Data(owner, key, value)
 * @description Sets the given key/value pair in data store
 * @param {Object} owner
 * @param {string} key
 * @param {any} value
 */function v(t,e,r){if(!u(t))return console.warn("[data.set] owner is not an object"),null;let n=t[_]||(t[_]=++m),i=g[n]||(g[n]={});return void 0===r?e&&Object.getPrototypeOf(e)===Object.prototype&&(g[n]={...i,...e}):void 0!==e&&(i[e]=r),r}function y(t,e){let r=u(t)?t[_]:null,n=r&&g[r]||{};return void 0===e?n:n[e]}/**
 * Remove all data associated with the given element
 */function w(t){let e=t&&t[_];e&&(delete t[e],delete g[e])}/**
 * Based on lodash#split <https://lodash.com/license>
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters &
 * Editors
 */let T="\ud800-\udfff",x="\\u0300-\\u036f\\ufe20-\\ufe23",b="\\u20d0-\\u20f0",C="\\ufe0e\\ufe0f",P=`[${T}]`,M=`[${x}${b}]`,k="\ud83c[\udffb-\udfff]",E=`(?:${M}|${k})`,R=`[^${T}]`,S="(?:\ud83c[\udde6-\uddff]){2}",A="[\ud800-\udbff][\udc00-\udfff]",D="\\u200d",L=`${E}?`,O=`[${C}]?`,N="(?:"+D+"(?:"+[R,S,A].join("|")+")"+O+L+")*",z=`(?:${[`${R}${M}?`,M,S,A,P].join("|")}
)`,B=RegExp(`${k}(?=${k})|${z}${O+L+N}`,"g"),F=RegExp(`[${[D,T,x,b,C].join("")}]`);/**
 * Create an HTML element with the the given attributes
 *
 * attributes can include standard HTML attribute, as well as the following
 * "special" properties:
 *   - children: HTMLElement | ArrayLike<HTMLElement>
 *   - textContent: string
 *   - innerHTML: string
 *
 * @param {string} name
 * @param  {Object} [attributes]
 * @returns {HTMLElement}
 */function I(t,e){let r=document.createElement(t);return e&&Object.keys(e).forEach(t=>{let n=e[t],s=i(n)?n.trim():n;null!==s&&""!==s&&("children"===t?r.append(...l(s)):r.setAttribute(t,s))}),r}var $={splitClass:"",lineClass:"line",wordClass:"word",charClass:"char",types:["lines","words","chars"],absolute:!1,tagName:"div"};let j=()=>document.createDocumentFragment(),U=n($,{});class q{/**
   * The internal data store
   */static get data(){return g}/**
   * The default settings for all splitType instances
   * @static
   */static get defaults(){return U}/**
   * Sets the default settings for all SplitType instances.
   *
   * Setting `SplitType.defaults` to an object will merge that object with the
   * existing defaults.
   *
   * @param {Object} settings an object containing the settings to override
   * @deprecated
   * @static
   * @example
   * SplitType.defaults = { "position": "absolute" }
   */static set defaults(t){U=n(U,a(t))}/**
   * Sets the default settings for all SplitType instances.
   * The provided object will be merged with the existing defaults objects.
   *
   * @param {Object} settings an object containing the settings to override
   * @returns {Object} the new default settings
   * @public
   * @static
   * @example
   * SplitType.setDefaults({ "position": "absolute" })
   */static setDefaults(t){return U=n(U,a(t)),$}/**
   * Revert target elements to their original html content
   * Has no effect on that
   *
   * @param {any} elements The target elements to revert. One of:
   *  - {string} A css selector
   *  - {HTMLElement} A single element
   * -  {NodeList} A NodeList or collection
   *  - {HTMLElement[]} An array of Elements
   * -  {Array<HTMLElement|NodeList|HTMLElement[]>} A nested array of elements
   * @static
   */static revert(t){f(t).forEach(t=>{let{isSplit:e,html:r,cssWidth:n,cssHeight:i}=y(t);e&&(t.innerHTML=r,t.style.width=n||"",t.style.height=i||"",w(t))})}/**
   * Creates a new SplitType instance
   * This static method provides a way to create a `SplitType` instance without
   * using the `new` keyword.
   *
   * @param {any} target The target elements to split. One of:
   *  - {string} A css selector
   *  - {HTMLElement} A single element
   * -  {NodeList} A NodeList or collection
   *  - {HTMLElement[]} An array of Elements
   * -  {Array<HTMLElement|NodeList|HTMLElement[]>} A nested array of elements
   * @param {Object} [options] Settings for the SplitType instance
   * @return {SplitType} the SplitType instance
   * @static
   */static create(t,e){return new q(t,e)}/**
   * Creates a new `SplitType` instance
   *
   * @param {any} elements The target elements to split. One of:
   *  - {string} A css selector
   *  - {HTMLElement} A single element
   * -  {NodeList} A NodeList or collection
   *  - {HTMLElement[]} An array of Elements
   * -  {Array<HTMLElement|NodeList|HTMLElement[]>} A nested array of elements
   * @param {Object} [options] Settings for the SplitType instance
   */constructor(t,e){this.isSplit=!1,this.settings=n(U,a(e)),this.elements=f(t),this.split()}/**
   * Splits the text in all target elements. This method is called
   * automatically when a new SplitType instance is created. It can also be
   * called manually to re-split text with new options.
   * @param {Object} options
   * @public
   */split(t){// Revert target elements (if they are already split)
// Note: revert was already called once in the constructor. However, we
// need to call it again here so text is reverted when the user manually
// calls the `split` method to re-split text.
this.revert(),this.elements.forEach(t=>{v(t,"html",t.innerHTML)}),this.lines=[],this.words=[],this.chars=[];let e=[window.pageXOffset,window.pageYOffset];// If new options were passed into the `split()` method, update settings
void 0!==t&&(this.settings=n(this.settings,a(t)));let r=o(this.settings.types);// If the `types` option is set to an empty array, text will not be split.
r.none||(// Split text in each target element
this.elements.forEach(t=>{// Add the split text nodes from this element to the arrays of all split
// text nodes for this instance.
v(t,"isRoot",!0);let{words:e,chars:r}=/**
 * Splits the text content of a target element into words and/or characters.
 * The function is recursive, it will also split the text content of any child
 * elements into words/characters, while preserving the nested elements.
 *
 * @param {Node} node an HTML Element or Text Node
 * @param {Object} setting splitType settings
 */function t(e,r){let s=e.nodeType,a={words:[],chars:[]};// Arrays of split words and characters
if(!/(1|3|11)/.test(s))return a;// A) IF `node` is TextNode that contains characters other than white space...
//    Split the text content of the node into words and/or characters
//    return an object containing the split word and character elements
if(3===s&&/\S/.test(e.nodeValue))return(/**
 * Splits the text content of a single TextNode into words and/or characters.
 *
 * This functions gets called for every text node inside the target element. It
 * replaces the text node with a document fragment containing the split text.
 * Returns an array of the split word and character elements from this node.
 *
 * @param {TextNode} textNode
 * @param {Object} settings
 * @return {{words: Element[], chars: Element[]}}
 */function(t,e){e=n($,e);let r=o(e.types),s=e.tagName,a=t.nodeValue,u=document.createDocumentFragment(),h=[],l=[];// the tag name for split text nodes
return/^\s/.test(a)&&u.append(" "),// Create an array of wrapped word elements.
h=/**
 * Splits a string into an array of words.
 *
 * @param {string} string
 * @param {string | RegExp} [separator = ' ']
 * @return {string[]} Array of words
 */(function(t,e=" "){let r=t?String(t):"";return r.trim().replace(/\s+/g," ").split(e)})(a).reduce((t,n,a,o)=>{// Let `wordElement` be the wrapped element for the current word
let h,f;// If not splitting text into words, we return an empty array
return r.chars&&(f=/**
 * Splits `string` into an array of characters. If `separator` is omitted,
 * it behaves likes split.split('').
 *
 * Unlike native string.split(''), it can split strings that contain unicode
 * characters like emojis and symbols.
 *
 * @param {string} [string=''] The string to split.
 * @param {RegExp|string} [separator=''] The separator pattern to split by.
 * @returns {Array} Returns the string segments.
 * @example
 * toChars('foo');
 * // => ['f', 'o', 'o']
 *
 * toChars('foo bar');
 * // => ["f", "o", "o", " ", "b", "a", "r"]
 *
 * toChars('f😀o');
 * // => ['f', '😀', 'o']
 *
 * toChars('f-😀-o', /-/);
 * // => ['f', '😀', 'o']
 *
 */(function(t,e=""){var r,n,s;return(t=null==(r=t)?"":String(r))&&i(t)&&!e&&(n=t,F.test(n))?(s=t,F.test(s)?s.match(B)||[]:s.split("")):t.split(e)})(n).map(t=>{let r=I(s,{class:`${e.splitClass} ${e.charClass}`,style:"display: inline-block;",children:t});return v(r,"isChar",!0),l=[...l,r],r})),r.words||r.lines?(v(// -> If Splitting Text Into Words...
//    Create an element to wrap the current word. If we are also
//    splitting text into characters, the word element will contain the
//    wrapped character nodes for this word. If not, it will contain the
//    plain text content (WORD)
h=I(s,{class:`${e.wordClass} ${e.splitClass}`,style:`display: inline-block; ${r.words&&e.absolute?"position: relative;":""}`,children:r.chars?f:n}),{isWord:!0,isWordStart:!0,isWordEnd:!0}),u.appendChild(h))://    Append the characters elements directly to splitText.
f.forEach(t=>{u.appendChild(t)}),a<o.length-1&&u.append(" "),r.words?t.concat(h):t},[]),/\s$/.test(a)&&u.append(" "),t.replaceWith(u),{words:h,chars:l}}(e,r));// B) ELSE `node` is an 'Element'
//    Iterate through its child nodes, calling the `split` function
//    recursively for each child node.
let u=l(e.childNodes);if(u.length&&(v(e,"isSplit",!0),!y(e).isRoot)){e.style.display="inline-block",e.style.position="relative";// splitting text into lines, we need to check if the element should
// have a space before and after, and store that value for later.
// Note: this was necessary to maintain the correct spacing when nested
// elements do not align with word boundaries. For example, a nested
// element only wraps part of a word.
let t=e.nextSibling,r=e.previousSibling,n=e.textContent||"",i=t?t.textContent:" ",s=r?r.textContent:" ";v(e,{isWordEnd:/\s$/.test(n)||/^\s/.test(i),isWordStart:/^\s/.test(n)||/\s$/.test(s)})}// Iterate through child nodes, calling `split` recursively
// Returns an object containing all split words and chars
return u.reduce((e,n)=>{let{words:i,chars:s}=t(n,r);return{words:[...e.words,...i],chars:[...e.chars,...s]}},a)}(t,this.settings);this.words=[...this.words,...e],this.chars=[...this.chars,...r]}),this.elements.forEach(t=>{if(r.lines||this.settings.absolute){let r=function(t,e,r){let n,i,s;let a=o(e.types),u=e.tagName,h=t.getElementsByTagName("*"),f=[],c=[],p=null,d=[],_=t.parentElement,g=t.nextElementSibling,m=j(),T=window.getComputedStyle(t),x=T.textAlign,b=parseFloat(T.fontSize),C=.2*b;return e.absolute&&(// Let contentBox be an object containing the width and offset position of
// the element's content box (the area inside padding box). This is needed
// (for absolute positioning) to set the width and position of line
// elements, which have not been created yet.
s={left:t.offsetLeft,top:t.offsetTop,width:t.offsetWidth},// element. Also check if the element has inline height or width styles
// already set. If it does, cache those values for later.
i=t.offsetWidth,n=t.offsetHeight,v(t,{cssWidth:t.style.width,cssHeight:t.style.height})),l(h).forEach(n=>{// node is a word element or custom html element
let i=n.parentElement===t,{width:s,height:o,top:u,left:h}=/**
 * Gets the height and position of an element relative to offset parent.
 * Should be equivalent to offsetTop and offsetHeight, but with sub-pixel
 * precision.
 *
 * TODO needs work
 */function(t,e,r,n){if(!r.absolute)return{top:e?t.offsetTop:null};let i=t.offsetParent,[s,a]=n,o=0,u=0;if(i&&i!==document.body){let t=i.getBoundingClientRect();o=t.x+s,u=t.y+a}let{width:h,height:l,x:f,y:c}=t.getBoundingClientRect(),p=c+a-u,d=f+s-o;return{width:h,height:l,top:p,left:d}}(n,i,e,r);// TODO needs work
!/^br$/i.test(n.nodeName)&&(a.lines&&i&&((null===p||u-p>=C)&&(p=u,f.push(c=[])),c.push(n)),e.absolute&&v(n,{top:u,left:h,width:s,height:o}))}),_&&_.removeChild(t),a.lines&&(// Iterate over lines of text (see 11 b)
// Let `line` be the array of words in the current line.
// Return an array of the wrapped line elements (lineElements)
d=f.map(t=>{// Create an element to wrap the current line.
let r=I(u,{class:`${e.splitClass} ${e.lineClass}`,style:`display: block; text-align: ${x}; width: 100%;`});v(r,"isLine",!0);let n={height:0,top:1e4};// Append the `lineElement` to `container`
return m.appendChild(r),// Note: wordOrElement can either be a word node or nested element
t.forEach((t,e,i)=>{let{isWordEnd:s,top:a,height:o}=y(t),u=i[e+1];// we use the height and offsetTop of the words which we already
// recorded. Because custom nested elements could have their own
// styles, the words on a line may not all be the same height or
// y position. So we take the greatest height / y - offset of the
// words on this line.
n.height=Math.max(n.height,o),n.top=Math.min(n.top,a),r.appendChild(t),s&&y(u).isWordStart&&r.append(" ")}),e.absolute&&v(r,{height:n.height,top:n.top}),r}),a.words||/**
 * Recursively "un-splits" text into words.
 * This is used when splitting text into lines but not words.
 * We initially split the text into words so we can maintain the correct line
 * breaks. Once text has been split into lines, we "un-split" the words...
 * @param {Element}
 * @return {void}
 */function t(e){y(e).isWord?(w(e),e.replaceWith(...e.childNodes)):l(e.children).forEach(e=>t(e))}(m),// 10. Insert the new container
t.replaceChildren(m)),e.absolute&&(// Set the width/height of the parent element so it does not collapse
// when its children are set to absolute position.
t.style.width=`${t.style.width||i}px`,t.style.height=`${n}px`,l(h).forEach(t=>{let{isLine:e,top:r,left:n,width:i,height:a}=y(t),o=y(t.parentElement),u=!e&&o.isLine;// -> If `node` a line element, we use the top offset of its first child
// -> If `node` the child of line element, then its top offset is zero
t.style.top=`${u?r-o.top:r}px`,// -> IF `node` is a line element, this is equal to the position left of
//    the content box of the parent element
// -> IF `node` is the child of a line element, the value has to adjusted
//    so its relative to the line element
t.style.left=e?`${s.left}px`:`${n-(u?s.left:0)}px`,t.style.height=`${a}px`,//  If its a line element, width is equal to the width of the contentBox.
t.style.width=e?`${s.width}px`:`${i}px`,t.style.position="absolute"})),_&&(g?_.insertBefore(t,g):_.appendChild(t)),d}(t,this.settings,e);this.lines=[...this.lines,...r]}}),this.isSplit=!0,window.scrollTo(e[0],e[1]),c(g).forEach(([t,{isRoot:e,isSplit:r}])=>{e&&r||(g[t]=null,delete g[t])}))}/**
   * Reverts target element(s) back to their original html content
   * Deletes all stored data associated with the target elements
   * Resets the properties on the splitType instance
   *
   * @public
   */revert(){this.isSplit&&(// Reset instance properties if necessary
this.lines=null,this.words=null,this.chars=null,this.isSplit=!1),q.revert(this.elements)}}}),i("9ycdn");//# sourceMappingURL=index.c418da6a.js.map

//# sourceMappingURL=index.c418da6a.js.map
