let tl = gsap.timeline()


function navAndHeading() {
    tl.from("#nav-img", {
        y: -60,
        opacity: 0,
        duration: 0.6,
        delay: 0.3
    })

    tl.from("h4", {
        x: 200,
        opacity: 0,
        duration: 0.8,
        stagger: 0.4
    })

    let heading = document.querySelector("h1")
    let h1 = heading.textContent
    let splitedH1 = h1.split("")
    let splitLen = Math.floor(splitedH1.length / 2);
    console.log(splitLen)

    let clutter = ""
    splitedH1.forEach(function(item, idx) {
        if (idx < splitLen) {
            clutter += `<span class="a">${item}</span>`
        } else {
            clutter += `<span class="b">${item}</span>`
        }
    })
    heading.innerHTML = clutter

    tl.from("h1 span.a", {
        y: 45,
        duration: 0.3,
        delay: 0.2,
        opacity: 0,
        stagger: 0.1,
        ease: "back.out(0.3)"
    }, "-=1")

    tl.from("h1 span.b", {
        y: -45,
        duration: 0.3,
        delay: 0.2,
        opacity: 0,
        stagger: -0.1
    }, "-=1")
}

navAndHeading()

function bestFoodHeading() {
    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".popular-h1 h5",
            scroller: "body",
            start: "top 70%",
            end: "top 10%",
            scrub: true
        }
    })

    tl2.from(".popular-h1 h5", {
        opacity: 0,
        duration: 0.6,
        scrub: true
    }, "popular")

    tl2.from(".icon", {
        y: -30,
        opacity: 0,
        duration: 0.6,
        scrub: true
    }, "popular")

    tl2.from(".hr1", {
        y: -30,
        opacity: 0,
        duration: 0.2,
        scrub: true,
        delay: 0.3
    }, "popular")

    tl2.from(".hr2", {
        y: 60,
        opacity: 0,
        duration: 0.2,
        scrub: true,
        delay: 0.3
    }, "popular")

    tl2.from(".hrt1", {
        x: -60,
        opacity: 0,
        duration: 0.2,
        scrub: true,
        delay: 0.3
    }, "popular")

    tl2.from(".hrt2", {
        x: 60,
        opacity: 0,
        duration: 0.2,
        scrub: true,
        delay: 0.3
    }, "popular")
}

bestFoodHeading()

function itemsScroll() {
    let tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".popular-h1 h5",
            scroller: "body",
            start: "top 70%",
            end: "top 10%",
            scrub: true
        }
    })

    tl3.from(".items", {
        x: 80,
        opacity: 0,
        duration: 2,
        delay: 0.5,
        stagger: 1
    })


    let item1 = document.querySelector("#item1")
    let item2 = document.querySelector("#item2")
    let item3 = document.querySelector("#item3")
    let item4 = document.querySelector("#item4")
    let item5 = document.querySelector("#item5")
    let item6 = document.querySelector("#item6")

    item1.addEventListener("mouseenter", function() {
        gsap.to("#item1", {
            scale: 1.5,
            scrub: true
        })
    })
    item1.addEventListener("mouseleave", function() {
        gsap.to("#item1", {
            scale: 1,
            scrub: true
        })
    })

    item2.addEventListener("mouseenter", function() {
        gsap.to("#item2", {
            scale: 1.5,
            scrub: true
        })
    })
    item2.addEventListener("mouseleave", function() {
        gsap.to("#item2", {
            scale: 1,
            scrub: true
        })
    })

    item3.addEventListener("mouseenter", function() {
        gsap.to("#item3", {
            scale: 1.5,
            scrub: true
        })
    })
    item3.addEventListener("mouseleave", function() {
        gsap.to("#item3", {
            scale: 1,
            scrub: true
        })
    })

    item4.addEventListener("mouseenter", function() {
        gsap.to("#item4", {
            scale: 1.5,
            scrub: true
        })
    })
    item4.addEventListener("mouseleave", function() {
        gsap.to("#item4", {
            scale: 1,
            scrub: true
        })
    })

    item5.addEventListener("mouseenter", function() {
        gsap.to("#item5", {
            scale: 1.5,
            scrub: true
        })
    })
    item5.addEventListener("mouseleave", function() {
        gsap.to("#item5", {
            scale: 1,
            scrub: true
        })
    })

    item6.addEventListener("mouseenter", function() {
        gsap.to("#item6", {
            scale: 1.5,
            scrub: true
        })
    })
    item6.addEventListener("mouseleave", function() {
        gsap.to("#item6", {
            scale: 1,
            scrub: true
        })
    })
}

itemsScroll()


function offer() {
    gsap.from("#offer-img", {
        x: 20,
        repeat: -1,
        yoyo: true,
        duration: 1,
        ease: "power1.out"
    })

    let tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: "#offerDetails h3",
            scroller: "body",
            start: "top 70%",
            end: "top 10%",
            scrub: true
        }
    })

    tl4.from(".offer-food #offer-img", {
        y: -30,
        opacity: 0,
        duration: 0.8,
        scrub: true
    }, "offer")

    tl4.from("#offerDetails h3", {
        y: -40,
        opacity: 0,
        duration: 0.8,
        scrub: true
    }, "offer")

    tl4.from("#offerDetails p", {
        x: -30,
        opacity: 0,
        duration: 0.8,
        scrub: true
    }, "offer")

    tl4.from("#offerDetails button", {
        x: 60,
        opacity: 0,
        duration: 0.8,
        scrub: true
    }, "offer")
}

offer()


function strings() {
    let path1 = "M 10 50 Q 500 50 990 50"
    let final1 = "M 10 50 Q 500 50 990 50"

    let string1 = document.querySelector("#string1")

    string1.addEventListener("mousemove", function(dets) {
        path = `M 10 50 Q ${dets.x} ${dets.y} 990 50`

        gsap.to("svg path", {
            attr: { d: path },
            duration: 0.3,
            ease: "power.out"
        })
    })

    string1.addEventListener("mouseleave", function(dets) {
        gsap.to("svg path", {
            attr: { d: final1 },
            duration: 0.3,
            ease: "elastic.out(1,0.4)"
        })
    })
}
strings()


function foodMenu() {
    let tl5 = gsap.timeline({
        scrollTrigger: {
            trigger: "#food h1",
            scroller: "body",
            start: "top 50%",
            end: "top -60%",
            scrub: true
        }
    })

    tl5.from("#food h1", {
        y: -20,
        opacity: 0,
        duration: 0.6,
        delay: 0.3,
        scrub: true
    })

    tl5.from("#fd1 #f1", {
        x: -40,
        opacity: 0,
        duration: 0.6,
        delay: 0.3,
        scrub: true
    }, "food1")

    tl5.from("#fd1 #f2", {
        x: 80,
        opacity: 0,
        duration: 0.6,
        delay: 0.3,
        scrub: true
    }, "food1")

    tl5.from("#fd2 #f3", {
        x: -40,
        opacity: 0,
        duration: 0.6,
        delay: 0.3,
        scrub: true
    }, "food2")

    tl5.from("#fd2 #f4", {
        x: 80,
        opacity: 0,
        duration: 0.6,
        delay: 0.3,
        scrub: true
    }, "food2")

    tl5.from("#fd3 #f5", {
        x: -40,
        opacity: 0,
        duration: 0.6,
        delay: 0.3,
        scrub: true
    }, "food3")

    tl5.from("#fd3 #f6", {
        x: 80,
        opacity: 0,
        duration: 0.6,
        delay: 0.3,
        scrub: true
    }, "food3")
}
foodMenu()




function extro() {

    let tl6 = gsap.timeline({
        scrollTrigger: {
            trigger: "#contact-us",
            scroller: "body",
            start: "bottom 90%",
            end: "bottom -30",
            scrub: true
        }
    })

    let heading = document.querySelector("#extro h1")
    let h1 = heading.textContent
    let splitedH1 = h1.split("")
    let splitLen = Math.floor(splitedH1.length / 2);
    console.log(splitLen)

    let clutter = ""
    splitedH1.forEach(function(item, idx) {
        if (idx < splitLen) {
            clutter += `<span class="c">${item}</span>`
        } else {
            clutter += `<span class="d">${item}</span>`
        }
    })
    heading.innerHTML = clutter

    tl6.from("h1 span.c", {
        x: 45,
        duration: 0.8,
        delay: 0.2,
        opacity: 0,
        stagger: -0.2,
        ease: "back.out(0.3)"
    }, "final")

    tl6.from("h1 span.d", {
        x: -45,
        duration: 0.8,
        delay: 0.2,
        opacity: 0,
        stagger: 0.2
    }, "final")
}

extro()