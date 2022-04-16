/* page loader */
window.addEventListener("load", function(){
    document.querySelector(".page-loader").classList.add("fade-out");
    this.setTimeout(function(){
        document.querySelector(".page-loader").style.display = "none";
    },600)
})

/* testimonials slider images */

function testiSlider() {
    const carouselTesti = document.querySelector("#carousel-testi");
    if(carouselTesti) {
        carouselTesti.addEventListener("slid.bs.carousel", function(){
            const activeItem = this.querySelector(".testimonials .active");
            document.querySelector(".img-box img").src = activeItem.getAttribute("data-testi-img");
        })
    }
};

testiSlider();

/* course preview video */
function coursePreviewVideo() {
    const coursePreviewModal = document.querySelector("#videoeModal");
    if (coursePreviewModal) {
        coursePreviewModal.addEventListener("shown.bs.modal", function(){
            this.querySelector(".course-preview-video").play();
            this.querySelector(".course-preview-video").currentTime = 0;
        });
        coursePreviewModal.addEventListener("hide.bs.modal", function(){
            this.querySelector(".course-preview-video").pause();
        })
    }
}
coursePreviewVideo();

/* style switcher */
function styleSwitcherToggle () {
    let switcherIcon = document.querySelector(".switcher-icon");
    let switcher = document.querySelector(".switcher");

    switcherIcon.addEventListener("click", function() {
        switcher.classList.toggle("open");

    })
}
styleSwitcherToggle();

/* theme colors */
function themeColor() {
    let colors = document.querySelector(".colors");
    colors.addEventListener("click", ({target}) => {
        if(target.classList.contains("theme-color-item")){
            if(document.querySelector(".theme-color-item.active")){
                document.querySelector(".theme-color-item.active").classList.remove("active");
            }
            target.classList.add("active");
            localStorage.setItem("color", target.getAttribute("data-color"));
            localStorage.setItem("hoverColor", target.getAttribute("data-hovercolor"));
            document.body.style.setProperty('--main-color', target.getAttribute("data-color") );
            document.body.style.setProperty('--hover-color', target.getAttribute("data-hovercolor") );
        }

        
    })
}
themeColor();
if(localStorage.getItem("color")) {
    document.body.style.setProperty('--main-color', localStorage.getItem("color") );
    document.body.style.setProperty('--hover-color', localStorage.getItem("hoverColor") );
}

/* dark and light mode */
function darkLightMode() {
    let darkSwitcher = document.querySelector(".switcher .check-dark");
    darkSwitcher.addEventListener("click", function(){
        if(darkSwitcher.checked) {
            localStorage.setItem("dark", "true");
            document.body.classList.add("dark-ground");
            document.querySelector(".switcher").classList.add("dark-ground");
            if(document.querySelector(".wrapper")){
                document.querySelector(".wrapper").style.backgroundColor = "rgba(0,0,0,.4)";
            console.log("true")};
            let input = document.querySelectorAll(".form-control");
            for (let i = 0; i < input.length; i++) {
                input[i].style.backgroundColor = "transparent";
            }
        } else {
            localStorage.setItem("dark", "false");
            document.body.classList.remove("dark-ground");
            document.querySelector(".switcher").classList.remove("dark-ground");
            
            if(document.querySelector(".wrapper")){
                document.querySelector(".wrapper").style.backgroundColor = "rgba(255,255,255,.4)";}
                
            
            let input = document.querySelectorAll(".form-control");
            for (let i = 0; i < input.length; i++) {
                input[i].style.backgroundColor = "transparent";
            }
        
        }
    })
    
}
darkLightMode();
let wrappGlass = document.querySelector(".wrapper");
console.log(wrappGlass)
if(document.body.contains(wrappGlass)){
    console.log("yes"); }
    else {console.log("no")}


if(localStorage.getItem("dark") === "true") {
    
            document.querySelector(".check-dark").setAttribute("checked","checked");
            localStorage.setItem("dark", "true");
            document.body.classList.add("dark-ground");
            if(document.querySelector(".wrapper")){
            document.querySelector(".wrapper").style.backgroundColor = "rgba(0,0,0,.4)";}
            document.querySelector(".switcher").classList.add("dark-ground");
            
            let input = document.querySelectorAll(".form-control");
            for (let i = 0; i < input.length; i++) {
                input[i].style.backgroundColor = "transparent";
            }
}





/* glass effect */
let wrapper = document.querySelector(".wrapper");
function glassEffect() {
    let glassEffect = document.querySelector(".glasseffect .check-glass");
    glassEffect.addEventListener("click", function() {
        if(glassEffect.checked) {
            localStorage.setItem("glass", "true");
            document.body.classList.add("glass-effect");
            wrapper.classList.add("glass-effect");
            document.querySelector("header").classList.add("glass-effect");
            document.querySelector(".switcher").classList.add("glass-effect");
            let input = document.querySelectorAll(".form-control");
            for (let i = 0; i < input.length; i++) {
                input[i].style.backgroundColor = "transparent";
            }
        } else {
            localStorage.setItem("glass", "false");
            document.body.classList.remove("glass-effect");
            wrapper.classList.remove("glass-effect");
            document.querySelector("header").classList.remove("glass-effect");
            document.querySelector(".switcher").classList.remove("glass-effect");
            let input = document.querySelectorAll(".form-control");
            for (let i = 0; i < input.length; i++) {
                input[i].style.backgroundColor = "transparent";
            }
        }
    })
    

}
glassEffect();

if(localStorage.getItem("glass") === "true") {
    document.querySelector(".check-glass").setAttribute("checked","checked");
    localStorage.setItem("glass", "true");
        document.body.classList.add("glass-effect");
        wrapper.classList.add("glass-effect");
        document.querySelector("header").classList.add("glass-effect");
        document.querySelector(".switcher").classList.add("glass-effect");
        let input = document.querySelectorAll(".form-control");
            for (let i = 0; i < input.length; i++) {
                input[i].style.backgroundColor = "transparent";
            }
}

/* rotate arrow icon */


function arrowRotate() {
    let accordionButton = document.querySelector(".accordion-button");

    for (let i = 0; i < accordionButton.length; i++) {
        console.log(accordionButton[i]);
    }
}
arrowRotate();