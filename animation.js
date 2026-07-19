/* =========================================================
   NYMPHAEA WATERLILIES
   Premium Animations
========================================================= */

gsap.registerPlugin(ScrollTrigger);

/* =====================================
Hero Animation
===================================== */

const heroTimeline = gsap.timeline();

heroTimeline

.from(".logo",{

opacity:0,

y:-60,

duration:1,

ease:"power3.out"

})

.from(".overlay h1",{

opacity:0,

y:80,

duration:1,

ease:"power4.out"

},"-=.6")

.from(".overlay p",{

opacity:0,

y:40,

duration:1,

ease:"power2.out"

},"-=.6")

.from(".buttons a",{

opacity:0,

y:30,

stagger:.2,

duration:.8

},"-=.4");

/* =====================================
About
===================================== */

gsap.from("#about .about-image",{

scrollTrigger:{

trigger:"#about",

start:"top 75%"

},

opacity:0,

x:-120,

duration:1.2

});

gsap.from("#about .about-content",{

scrollTrigger:{

trigger:"#about",

start:"top 75%"

},

opacity:0,

x:120,

duration:1.2

});

/* =====================================
Collection Cards
===================================== */

gsap.from(".collection-card",{

scrollTrigger:{

trigger:"#collection",

start:"top 80%"

},

opacity:0,

y:80,

duration:1,

stagger:.15

});

/* =====================================
Why Choose Us
===================================== */

gsap.from(".choose-card",{

scrollTrigger:{

trigger:"#choose",

start:"top 80%"

},

opacity:0,

y:70,

duration:1,

stagger:.2

});

/* =====================================
Gallery
===================================== */

gsap.from(".gallery-item",{

scrollTrigger:{

trigger:"#gallery",

start:"top 80%"

},

opacity:0,

scale:.8,

stagger:.12,

duration:.8

});

/* =====================================
Testimonials
===================================== */

gsap.from(".testimonial-card",{

scrollTrigger:{

trigger:"#testimonial",

start:"top 80%"

},

opacity:0,

y:80,

duration:1,

stagger:.2

});

/* =====================================
FAQ
===================================== */

gsap.from(".faq-item",{

scrollTrigger:{

trigger:"#faq",

start:"top 80%"

},

opacity:0,

x:-60,

duration:.8,

stagger:.15

});

/* =====================================
Contact
===================================== */

gsap.from(".contact-form",{

scrollTrigger:{

trigger:"#contact",

start:"top 75%"

},

opacity:0,

x:-100,

duration:1

});

gsap.from(".contact-info",{

scrollTrigger:{

trigger:"#contact",

start:"top 75%"

},

opacity:0,

x:100,

duration:1

});

/* =====================================
Footer
===================================== */

gsap.from("footer",{

scrollTrigger:{

trigger:"footer",

start:"top bottom"

},

opacity:0,

y:80,

duration:1

});

/* =====================================
Parallax Hero
===================================== */

gsap.to("#home",{

backgroundPosition:"50% 80%",

ease:"none",

scrollTrigger:{

trigger:"#home",

scrub:true

}

});

/* =====================================
Floating Animation
===================================== */

gsap.utils.toArray(".float").forEach(item=>{

gsap.to(item,{

y:-20,

duration:3,

repeat:-1,

yoyo:true,

ease:"sine.inOut"

});

});

/* =====================================
Collection Hover
===================================== */

document.querySelectorAll(".collection-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

gsap.to(card,{

scale:1.03,

duration:.3

});

});

card.addEventListener("mouseleave",()=>{

gsap.to(card,{

scale:1,

duration:.3

});

});

});
