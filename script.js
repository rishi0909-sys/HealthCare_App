let timeline = gsap.timeline()
let tl = gsap.timeline()
gsap.from(".image-one",{
    y:200,
    opacity:0,
    duration:1,
    delay:1.2
})
gsap.from(".image-two",{
    y:-200,
    opacity:0,
    duration:1,
    delay:1.2
})
timeline.from("#heading",{
    y:300,
    opacity:0,
    duration:1,
    delay:2
})
timeline.from("#button",{
    y:300,
    opacity:0,
    duration:1,
    // delay:2
})
gsap.from("#pill",{
    y:300,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#pill",
        start:"top 60%",
        scroller:"body",
        // markers:true
    }
 })
gsap.from(".grids-1",{
    x:-300,
    opacity:0,
    duration:1,
    delay:1.2,
    scrollTrigger:{
        trigger:"#pill",
        start:"top 60%",
        scroller:"body",
        // markers:true
    }
})
gsap.from(".grids-2",{
    x:300,
    opacity:0,
    duration:1,
    delay:1.2,
    scrollTrigger:{
        trigger:"#pill",
        start:"top 60%",
        scroller:"body",
        // markers:true
    }
})
tl.to("#carousel",{
    transform:'translateX(-300%)',
    duration:22,
    yoyo:true,
    repeat:-1,
    ease:"none",
    modifiers: {
        xPercent: (x) => {
          // This ensures that after the scroll completes, we don't see a jump by continuously looping
          return x % 100;
        }
    }
})
let grid1 = document.querySelector(".grids-1")
let grid2 = document.querySelector(".grids-2")

gsap.from(grid1,{
    x:-1000,
    opacity:0,
    duration:0.7
})





let caraousel = document.querySelector("#carousel")
caraousel.addEventListener("mouseenter",()=>{tl.pause()})
caraousel.addEventListener("mouseleave",()=>{tl.play()})
// tl.pause()
let button = document.querySelector("button")
button.addEventListener("click",()=>{
    window.location = "./login.html"
})

