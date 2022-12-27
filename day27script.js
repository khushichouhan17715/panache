var it=gsap.timeline();

it
.to(".lines",{
    height: "0%",
    ease: Expo.easeINOut,
    duration:1.6
})
.to("#FIRST_main",{
    y: "-100%",
    ease: Expo.easeINOut,
    duration:1
})
.from("#nav h3,#nav a",{
    y: "150",
    ease: Expo.easeINOut,
    opacity:0,
    stagger:.4,
    duration:1
})
.from(".image",{
    x: "-100%",
    ease: Expo.easeINOut,
    duration:2,
},'-=2')
.from("#icon",{
    y: "-30%",
    ease: Expo.easeINOut,
    opacity:0,
    stagger:.2,
    duration:.5
},'-=1')
.from("#nav2 a",{
    y: "150",
    ease: Expo.easeINOut,
    opacity:0,
    stagger:.4,
    duration:1
})
.from("#contant h1,p,button",{
    y: "30%",
    ease: Expo.easeINOut,
    opacity:0,
    stagger:.4, 
    duration:.5
},'-=3')
