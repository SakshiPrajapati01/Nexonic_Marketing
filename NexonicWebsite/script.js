//====================================
//            STICKY NAVBAR
//====================================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("active");

    } else {

        header.classList.remove("active");

    }

});



//====================================
//          MOBILE NAVIGATION
//====================================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

// Create Mobile Overlay

const overlay = document.createElement("div");
overlay.classList.add("mobile-overlay");
document.body.appendChild(overlay);


menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");
    menuBtn.classList.toggle("active");
    overlay.classList.toggle("active");

});


// Close Menu when Overlay Clicked

overlay.addEventListener("click", () => {

    navLinks.classList.remove("active");
    menuBtn.classList.remove("active");
    overlay.classList.remove("active");

});


// Close Menu After Clicking Links

document.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
        menuBtn.classList.remove("active");
        overlay.classList.remove("active");

    });

});




//====================================
//          SMOOTH SCROLLING
//====================================

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const targetID = this.getAttribute("href");

        if (targetID === "#") return;

        const targetElement =
        document.querySelector(targetID);

        if (!targetElement) return;

        e.preventDefault();

        targetElement.scrollIntoView({

            behavior: "smooth"

        });

    });

});




//====================================
//         REVEAL ON SCROLL
//====================================

const revealElements =
document.querySelectorAll(".reveal");


const revealObserver =
new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

        }

    });

}, {

    threshold: 0.15

});


revealElements.forEach((element) => {

    revealObserver.observe(element);

});




//====================================
//          COUNTER ANIMATION
//====================================

const counters =
document.querySelectorAll(".counter");


const speed = 40;


function startCounter(counter) {

    const target =
    +counter.getAttribute("data-target");


    const updateCounter = () => {

        const current =
        +counter.innerText;

        const increment =
        Math.ceil(target / speed);


        if (current < target) {

            counter.innerText =
            current + increment;

            setTimeout(updateCounter, 40);

        }

        else {

            counter.innerText =
            target + "+";

        }

    };

    updateCounter();

}



const counterObserver =
new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            startCounter(entry.target);

            counterObserver.unobserve(
                entry.target
            );

        }

    });

}, {

    threshold: 0.5

});


counters.forEach((counter) => {

    counterObserver.observe(counter);

});





//====================================
//            FAQ ACCORDION
//====================================

const accordionItems =
document.querySelectorAll(".accordion-item");


accordionItems.forEach((item) => {

    const button =
    item.querySelector(".accordion-btn");

    const content =
    item.querySelector(".accordion-content");


    button.addEventListener("click", () => {


        // Close Other Accordions

        accordionItems.forEach((accordion) => {

            if (accordion !== item) {

                accordion.classList.remove("active");

                accordion
                .querySelector(".accordion-content")
                .style.maxHeight = null;

            }

        });


        // Toggle Current

        item.classList.toggle("active");


        if (item.classList.contains("active")) {

            content.style.maxHeight =
            content.scrollHeight + "px";

        }

        else {

            content.style.maxHeight = null;

        }

    });

});




//====================================
//         BACK TO TOP BUTTON
//====================================

const topBtn =
document.getElementById("topBtn");


window.addEventListener("scroll", () => {


    if (window.scrollY > 400) {

        topBtn.classList.add("show");

    }

    else {

        topBtn.classList.remove("show");

    }


});


topBtn.addEventListener("click", () => {


    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });


});




//====================================
//          BUTTON RIPPLE EFFECT
//====================================

const buttons =
document.querySelectorAll(".btn");


buttons.forEach((button) => {

    button.addEventListener("click",
    function (e) {


        const ripple =
        document.createElement("span");


        const rect =
        this.getBoundingClientRect();


        const size =
        Math.max(rect.width, rect.height);


        ripple.style.width =
        ripple.style.height =
        size + "px";


        ripple.style.left =
        e.clientX - rect.left - size / 2 + "px";


        ripple.style.top =
        e.clientY - rect.top - size / 2 + "px";


        ripple.style.position = "absolute";
        ripple.style.borderRadius = "50%";
        ripple.style.background =
        "rgba(255,255,255,.4)";

        ripple.style.transform =
        "scale(0)";

        ripple.style.animation =
        "ripple .6s linear";


        ripple.style.pointerEvents = "none";


        this.appendChild(ripple);


        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});




//====================================
//       RIPPLE ANIMATION STYLE
//====================================

const rippleStyle =
document.createElement("style");


rippleStyle.innerHTML = `

@keyframes ripple{

from{

transform:scale(0);
opacity:1;

}

to{

transform:scale(4);
opacity:0;

}

}

`;


document.head.appendChild(rippleStyle);




//====================================
//        DISABLE BODY SCROLL
//       WHEN MOBILE MENU OPENS
//====================================

menuBtn.addEventListener("click", () => {

    if (navLinks.classList.contains("active")) {

        document.body.style.overflow = "hidden";

    }

    else {

        document.body.style.overflow = "auto";

    }

});


overlay.addEventListener("click", () => {

    document.body.style.overflow = "auto";

});


document.querySelectorAll(".nav-links a")
.forEach((link) => {

    link.addEventListener("click", () => {

        document.body.style.overflow = "auto";

    });

});




//====================================
//          PRELOADING EFFECT
//====================================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});




//====================================
//         PERFORMANCE SUPPORT
//====================================

// Passive Scroll Listener
const openBtn=
document.getElementById("openForm");


const closeBtn=
document.getElementById("closeForm");


const popup=
document.getElementById("popupForm");


if(openBtn){

openBtn.onclick=function(){

popup.style.display="block";

}

}


if(closeBtn){

closeBtn.onclick=function(){

popup.style.display="none";

}

}
//====================================
//      CONSULTATION FORM SUBMIT
//====================================

const consultationForm =
document.getElementById("consultationForm");

const successMessage =
document.getElementById("successMessage");


if(consultationForm){

consultationForm.addEventListener(
"submit",

function(e){

e.preventDefault();

popup.style.display = "none";
successMessage.style.display = "block";

consultationForm.reset();


// Automatically hide the confirmation after 3 sec
setTimeout(function(){

successMessage.style.display = "none";

},3000);

});

}

const openButtons =
document.querySelectorAll(".openForm");


openButtons.forEach((button)=>{

button.addEventListener("click",

function(e){

e.preventDefault();

popup.style.display = "block";

});

});
