
// Preloader
window.addEventListener('load', function() {
  document.querySelector('body').classList.add("loaded");
});

const progressBar = document.querySelector('#progress-bar');
let preloaderPercent = 0; // Inicializa a porcentagem em 0

function incrementProgress() {
  if (preloaderPercent < 100) {
    preloaderPercent++; // Incrementa a porcentagem
    progressBar.style.width = `${preloaderPercent}%`; // Ajusta a largura da barra
    progressBar.textContent = `${preloaderPercent}%`;
    requestAnimationFrame(incrementProgress); // Anima o próximo frame
  }
}
incrementProgress();

// Reload
// window.onbeforeunload = function () {
//   window.scrollTo(0, 0);
// }


// Video autoplay
document.getElementById('vid').play();

// Language buttons
const btLang1 = document.querySelectorAll('.lang a:first-child');
const btLang2 = document.querySelectorAll('.lang a:nth-child(2)');

if (window.location.href.indexOf("/en") > -1) {
  btLang2[0].classList.add('current');
  btLang2[0].classList.remove('magic-hover');
  btLang1[0].classList.add('magic-hover');
  btLang1[0].classList.remove('current');

  btLang2[1].classList.add('current');
  btLang2[1].classList.remove('magic-hover');
  btLang1[1].classList.add('magic-hover');
  btLang1[1].classList.remove('current');
} else {
  btLang1[0].classList.add('current');
  btLang1[0].classList.remove('magic-hover');
  btLang2[0].classList.add('magic-hover');
  btLang2[0].classList.remove('current');

  btLang1[1].classList.add('current');
  btLang1[1].classList.remove('magic-hover');
  btLang2[1].classList.add('magic-hover');
  btLang2[1].classList.remove('current');
}


// MENU
const btMenu = document.querySelector('.header .bt_menu');
const menu = document.querySelector('.menu');
const btLogin = document.querySelector('.cover .login');
const loginOpt = document.querySelector('.cover .log');

btMenu.addEventListener('click', function() {
  btMenu.classList.toggle("active");
  menu.classList.toggle("active");
});

function closeMenu() {
  btMenu.classList.remove("active");
  menu.classList.remove("active");
}

btLogin.addEventListener('click', function() {
  loginOpt.classList.add("active");
});

window.addEventListener('click', function(e){
  if (!btMenu.contains(e.target) && (!menu.contains(e.target))) {
    btMenu.classList.remove("active");
    menu.classList.remove("active");
  }

  if (!loginOpt.contains(e.target) && !btLogin.contains(e.target)) {
    loginOpt.classList.remove("active");
  }
});



// Momentum
// const body = document.body;
// const main = document.getElementById('main');

// let sx = 0, // For scroll positions
//     sy = 0;
// let dx = sx, // For container positions
//     dy = sy;

// body.style.height = main.clientHeight + 'px';

// main.style.position = 'fixed';
// main.style.top = 0;
// main.style.left = 0;

// // Bind a scroll function
// window.addEventListener('scroll', easeScroll);

// function easeScroll() {
//   sx = window.pageXOffset;
//   sy = window.pageYOffset;
// }

// window.requestAnimationFrame(render);

// function render(){
//   //We calculate our container position by linear interpolation method
//   dx = li(dx,sx,0.04);
//   dy = li(dy,sy,0.04);

//   dx = Math.floor(dx * 100) / 100;
//   dy = Math.floor(dy * 100) / 100;
  
//   main.style.transform = `translate3d(-${dx}px, -${dy}px, 0px)`;
 
//   window.requestAnimationFrame(render);
// }

// function li(a, b, n) {
//   return (1 - n) * a + n * b;
// }


// Audience cards
function expandAudienceCard(evt) {
  var i, audience_card;

  audience_card = document.getElementsByClassName("audience_card");
  for (i = 0; i < audience_card.length; i++) {
    audience_card[i].className = audience_card[i].className.replace(" active", "");
  }
  evt.currentTarget.className += " active";
}

// Integration cards
function expandIntegCard(evt) {
  var i, integ_card;

  integ_card = document.getElementsByClassName("integ_card");
  for (i = 0; i < integ_card.length; i++) {
    integ_card[i].className = integ_card[i].className.replace(" active", "");
  }
  evt.currentTarget.className += " active";
}

// Plan cards
function expandPlanCard(evt) {
  var i, plan_card;

  plan_card = document.getElementsByClassName("plan_card");
  for (i = 0; i < plan_card.length; i++) {
    plan_card[i].className = plan_card[i].className.replace(" active", "");
  }
  evt.currentTarget.className += " active";
}


// Iframe checkout
const iframeContainer = document.querySelector(".iframe_checkout");
const iframeCheckout = document.querySelector(".iframe_checkout iframe");
const btMinimize = document.querySelector(".iframe_checkout .bt_minimize");

function iframeTabControls(evt) {
  var i, btTab;

  btTab = document.getElementsByClassName("bt_tab");
  for (i = 0; i < btTab.length; i++) {
    btTab[i].classList.remove("active");
  }
  evt.currentTarget.classList.add("active");
}

function iframeDesk() {
  iframeContainer.classList.add("desk");
  iframeContainer.classList.remove("mobile");
  iframeContainer.classList.remove("full");
  // document.getElementsByClassName("bt_mobile").classList.remove("active");
  // document.getElementsByClassName("bt_desk").classList.add("active");
  btMinimize.classList.remove("active");
  iframeCheckout.src = iframeCheckout.src;
}
function iframeMob() {
  iframeContainer.classList.add("mobile");
  iframeContainer.classList.remove("desk");
  iframeContainer.classList.remove("full");
  iframeCheckout.src = iframeCheckout.src;
}
function iframeFull() {
  iframeContainer.classList.add("full");
  iframeContainer.classList.remove("mobile");
  iframeContainer.classList.remove("desk");
  btMinimize.classList.add("active");
  iframeCheckout.src = iframeCheckout.src;
}



// GSAP
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

  // header
  gsap.to(".header .logo", {
    duration: .5,
    scrollTrigger: {
      trigger: ".cover",
      start: "center top",
      end: ScrollTrigger.maxScroll(window),
      // toggleClass: "visible",
      toggleClass: {targets: ".header .logo", className: "visible"},
      markers: false,
      // toggleActions: "restart none none reverse",//onEnter onLeave onEnterBack onLeaveBack // play pause resume reverse restart complete none
    }
  });
  gsap.to(".header .signup", {
    scrollTrigger: {
      trigger: ".cover",
      start: "bottom top",
      end: ScrollTrigger.maxScroll(window),
      toggleClass: {targets: ".header .signup", className: "visible"},
      markers: false,
    }
  });

  // Access
  // gsap.to(".access", {
  //   // duration: .5,
  //   scrollTrigger: {
  //     trigger: ".cover",
  //     start: "bottom 20%",
  //     end: ScrollTrigger.maxScroll(window),
  //     toggleClass: {targets: ".access", className: "sticky_top"},
  //     markers: true
  //   }
  // });

  // Checkout slides
  gsap.to(".checkout_slides ul:first-child", {
    x: -1000,
    duration: 2,
    scrollTrigger: {
      trigger: ".checkout_slides",
      start: "top bottom",
      end: "bottom 10%",
      scrub: 1,//true,
      // toggleClass: {targets: ".checkout_slides ul:first-child", className: "onstage"},
      markers: false
    }
  });
  gsap.to(".checkout_slides ul:last-child", {
    x: 700,
    duration: 3,
    scrollTrigger: {
      trigger: ".checkout_slides",
      start: "center bottom",
      end: "bottom top",
      scrub: 1,//true,
      markers: false
    }
  });

  // Ellipse orbit preloader
  gsap.to(".ball1_intro", {
    duration: 1, 
    repeat: -1,
    // repeatDelay: 3,
    yoyo: false,
    ease:Linear.easeNone,
    motionPath:{
      path: ".orbit_intro",
      align: ".orbit_intro",
      autoRotate: true,
      alignOrigin: [0.5, 0.5]
    }
  });
  gsap.to(".ball2_intro", {
    duration: 1.5, 
    repeat: -1,
    ease:Linear.easeNone,
    motionPath:{
      path: ".orbit_intro",
      align: ".orbit_intro",
      autoRotate: true,
      alignOrigin: [0.5, 0.5]
    }
  });
  // Ellipse orbit
  gsap.to(".ball1", {
    duration: 14, 
    repeat: -1,
    // repeatDelay: 3,
    yoyo: false,
    ease:Linear.easeNone,
    motionPath:{
      path: ".orbit",
      align: ".orbit",
      autoRotate: true,
      alignOrigin: [0.5, 0.5]
    }
  });
  gsap.to(".ball2", {
    duration: 9, 
    repeat: -1,
    ease:Linear.easeNone,
    motionPath:{
      path: ".orbit",
      align: ".orbit",
      autoRotate: true,
      alignOrigin: [0.5, 0.5]
    }
  });

  // About text
  gsap.to(".about .p1", {
    scrollTrigger: {
      trigger: ".about .p1",
      start: "center center",
      end: ScrollTrigger.maxScroll(window),
      toggleClass: {targets: ".about .p1", className: "active"}
    }
  });
  gsap.to(".about .p2", {
    scrollTrigger: {
      trigger: ".about .p2",
      start: "center center",
      end: ScrollTrigger.maxScroll(window),
      toggleClass: {targets: ".about .p2", className: "active"}
    }
  });
  gsap.to(".about .p3", {
    scrollTrigger: {
      trigger: ".about .p3",
      start: "center center",
      end: ScrollTrigger.maxScroll(window),
      toggleClass: {targets: ".about .p3", className: "active"}
    }
  });
  gsap.to(".about .p4", {
    scrollTrigger: {
      trigger: ".about .p4",
      start: "center center",
      end: ScrollTrigger.maxScroll(window),
      toggleClass: {targets: ".about .p4", className: "active"}
    }
  });

  gsap.to(".about .cometa", {
    top: '70%',
    right: '50%',
    scrollTrigger: {
      trigger: ".about",
      start: "top 40%",
      end: "center 90%",
      scrub: 6,//true,
      markers: false
    }
  });

  // Recover
  gsap.to(".fly", {
    duration: 10,
    motionPath:{
      path: ".flypath",
      align: ".flypath",
      autoRotate: true,
      alignOrigin: [0.5, 0.5]
    },
    scrollTrigger: {
      trigger: ".recover",
      start: "top 50%",
      end: ScrollTrigger.maxScroll(window),
      toggleActions: "restart none none complete"//onEnter onLeave onEnterBack onLeaveBack // play pause resume reverse restart complete none
    }
  });

  // AB test
  gsap.to(".ab_test", {
    scrollTrigger: {
      trigger: ".ab_test",
      start: "top 20%",
      end: "bottom 10%",
      pin: ".ab_test",
      pinSpacing: true,
      toggleClass: {targets: ".ab_test", className: "active"},
      markers: false
    }
  });
  gsap.to(".ab_test article", {
    x: 0,
    scrollTrigger: {
      trigger: ".ab_test",
      start: "top 20%",
      end: "bottom 10%",
      scrub: 0.5,
      markers: false
    }
  });
  gsap.to(".features article:last-of-type", {
    y: 0,
    scrollTrigger: {
      trigger: ".features",
      start: "top bottom",
      end: "top 70%",
      scrub: 0.5,
      markers: false
    }
  });


});



// marquee
const scrollingText = gsap.utils.toArray('.marquee h2 span');
const tl = horizontalLoop(scrollingText, {
  repeat: -1,
});

let speedTween;

ScrollTrigger.create({
trigger: ".marquee",
start: "top bottom",
end: "bottom top",
onUpdate: (self) => {
  speedTween && speedTween.kill();
  speedTween = gsap.timeline()
  .to(tl, {
    timeScale: 5 * self.direction,
    duration: 0.25
  })
  .to(tl, {
    timeScale: 3 * self.direction,
    duration: 1.5
  }, "+=0.5")
},
markers: false,
})



function horizontalLoop(items, config) {
  items = gsap.utils.toArray(items);
  config = config || {};
  let tl = gsap.timeline({repeat: config.repeat, paused: config.paused, defaults: {ease: "none"}, onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100)}),
    length = items.length,
    startX = items[0].offsetLeft,
    times = [],
    widths = [],
    xPercents = [],
    curIndex = 0,
    pixelsPerSecond = (config.speed || 1) * 100,
    snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
    totalWidth, curX, distanceToStart, distanceToLoop, item, i;
  gsap.set(items, { // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
    xPercent: (i, el) => {
      let w = widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
      xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / w * 100 + gsap.getProperty(el, "xPercent"));
      return xPercents[i];
    }
  });
  gsap.set(items, {x: 0});
  totalWidth = items[length-1].offsetLeft + xPercents[length-1] / 100 * widths[length-1] - startX + items[length-1].offsetWidth * gsap.getProperty(items[length-1], "scaleX") + (parseFloat(config.paddingRight) || 0);
  for (i = 0; i < length; i++) {
    item = items[i];
    curX = xPercents[i] / 100 * widths[i];
    distanceToStart = item.offsetLeft + curX - startX;
    distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
    tl.to(item, {xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond}, 0)
      .fromTo(item, {xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100)}, {xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false}, distanceToLoop / pixelsPerSecond)
      .add("label" + i, distanceToStart / pixelsPerSecond);
    times[i] = distanceToStart / pixelsPerSecond;
  }
  function toIndex(index, vars) {
    vars = vars || {};
    (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length); // always go in the shortest direction
    let newIndex = gsap.utils.wrap(0, length, index),
      time = times[newIndex];
    if (time > tl.time() !== index > curIndex) { // if we're wrapping the timeline's playhead, make the proper adjustments
      vars.modifiers = {time: gsap.utils.wrap(0, tl.duration())};
      time += tl.duration() * (index > curIndex ? 1 : -1);
    }
    curIndex = newIndex;
    vars.overwrite = true;
    return tl.tweenTo(time, vars);
  }
  tl.next = vars => toIndex(curIndex+1, vars);
  tl.previous = vars => toIndex(curIndex-1, vars);
  tl.current = () => curIndex;
  tl.toIndex = (index, vars) => toIndex(index, vars);
  tl.times = times;
  tl.progress(1, true).progress(0, true); // pre-render for performance
  if (config.reversed) {
    tl.vars.onReverseComplete();
    tl.reverse();
  }
  return tl;
}


// Cursor
options = {
  "outerStyle": "disable",
  "hoverEffect": "pointer-blur",
  "hoverItemMove": false,
  "defaultCursor": false,
  "outerWidth": 30,
  "outerHeight": 30
}
magicMouse(options);


// V
(function () {

  const link = document.querySelectorAll('.hover-this');

  const animateit = function (e) {
    const span = this.querySelector('span');
    const { offsetX: x, offsetY: y } = e,
    { offsetWidth: width, offsetHeight: height } = this,

    move = 50,
    xMove = x / width * (move * 2) - move,
    yMove = y / height * (move * 2) - move;

    span.style.transform = `translate(${xMove}px, ${yMove}px)`;

    if (e.type === 'mouseleave') span.style.transform = '';
  };

  link.forEach(b => b.addEventListener('mousemove', animateit));
  link.forEach(b => b.addEventListener('mouseleave', animateit));

})();






// Checkout itens
const checkoutItems = document.querySelector('.checkout_itens')
let checkoutItem = document.querySelectorAll('.checkout_itens ul li');
const popupItem = document.querySelector('.checkout_itens .popup');
const popupItemTitle = document.querySelector('.checkout_itens .popup small');
const popupItemSub = document.querySelector('.checkout_itens .popup p');
const popupItemImg = document.querySelector('.checkout_itens .popup span');

checkoutItems.addEventListener('mouseenter', checkoutItemsPopupShow);
checkoutItems.addEventListener('mouseleave', checkoutItemsPopupLeave);
function checkoutItemsPopupShow() {
  popupItem.style.display = "block";
}
function checkoutItemsPopupLeave() {
  popupItem.style.display = "none";
}

for (var i = 0; i < checkoutItem.length; i++)
{
  checkoutItem[i].addEventListener('mouseenter', checkoutItemHover);
}
function checkoutItemHover(e) {
  popupItemTitle.innerHTML = e.target.getAttribute("data-hover-title");
  popupItemSub.innerHTML = e.target.getAttribute("data-hover-sub");
  popupItemImg.setAttribute("data-img", e.target.getAttribute("data-hover-img"));
}

