
var c = document.querySelector(".cursor");
var cb = document.querySelector(".cursor-blur");

document.addEventListener("mousemove", function(dets) {
        c.style.left = dets.x+"px";
        c.style.top = dets.y +"px";
        cb.style.left = dets.x-150+"px";
        cb.style.top = dets.y -150+"px";

})


var h4all = document.querySelectorAll(".nav h4");
h4all.forEach(function(elem) {
    elem.addEventListener("mouseenter", function(){
        c.style.scale = 3;
        c.style.border = "1px solid #fff";
        c.style.backgroundColor = "transparent";
    })
})

h4all.forEach(function(elem) {
    elem.addEventListener("mouseleave", function(){
        c.style.scale = 1;
        c.style.border = "0px solid #95ce11";
        c.style.backgroundColor = "#95ce11";
    })
})


gsap.to(".nav", {
    backgroundColor: "#000",
    height: "100px",
    duration: 0.5,

    scrollTrigger: {
        trigger: ".nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: true
    }
})

gsap.to(".main",{
    backgroundColor: "#000",
    scrollTrigger: {
         trigger: ".main",
        scroller: "body",
        start:"top -50%",
        end: "top -100%",
        scrub: 2
    }
})

gsap.from(".about-us img, .about-us-in", {
    y:50,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger:{
        trigger: ".about-us",
        scroller: "body",
        start: "top 60%",
        end: "top 50%",
        scrub: 3
    }
})
gsap.from(".cards-container ", {
    scale: 0.9,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger:{
        trigger: ".cards-container",
        scroller: "body",
        start: "top 70%",
        end: "top 60%",
        scrub: 2
    }
})

gsap.from(".colon1", {
    y:-70,
    x: -70,

    scrollTrigger: {
        trigger: ".colon1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 4
    }
})

gsap.from(".colon2", {
    y: 70,
    x: 70,

    scrollTrigger: {
        trigger: ".colon1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 4
    }
})

gsap.from(".page4 h1", {
    y:50,
    scrollTrigger: {
        trigger: ".page4 h1",
        scroller: "body",
        start: "top 85%",
        end: "top 70%",
        scrub: 3
    }

})