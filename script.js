var cursor = document.querySelector("#cursor");
var cursorblur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", (dets) => {
  cursor.style.left = dets.x + "px";
  cursor.style.top = dets.y + "px";
  cursorblur.style.left = dets.x - 250 + "px";
  cursorblur.style.top = dets.y - 250 + "px";
});

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach((elem) => {
  elem.addEventListener("mouseenter", () => {
    cursor.style.scale = 3;
    cursor.style.border = "0.5px solid #fff";
    cursor.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", () => {
    cursor.style.scale = 1;
    cursor.style.border = "0px solid #95c11e";
    cursor.style.backgroundColor = "#95c11e";
  });
});

gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",

    start: "top -25vh",
    end: "top -70%",
    scrub: 2,
  },
});

gsap.from("#about-us img,#about-us-in", {
  y: 90,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});

// gsap.from(".card", {
//     scale:0.8,
//     opacity: 0,
//     duration: 1,
//     stagger:0.1,
//     scrollTrigger: {
//       trigger: ".card",
//       scroller: "body",
//     //   markers: true,
//       start: "top 70%",
//       end: "top 65%",
//       scrub: 2,
//     },
//   });
 
  gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
  })

  gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:5
    }
  })

  gsap.from("#page4 h1", {
    scale:0.8,
    opacity: 0,
    duration: 1,
    stagger:0.1,
    scrollTrigger: {
      trigger: "#page4 h1",
      scroller: "body",
    //   markers: true,
      start: "top 70%",
      end: "top 65%",
      scrub: 2,
    },
  });