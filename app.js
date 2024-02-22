// activeClass = document.querySelector(".active");
// console.log(activeClass)
// activeClass = document.querySelectorAll('#active');


// activeClass.forEach(function(button){
//     button.addEventListener('click', function(e){
//         const targetElement = e.currentTarget.parentElement
//         targetElement.classList.toggle('active');
//         button.addEventListener('click', function(item){
//             if(item !== targetElement){
//                 item.classList.remove('active')
//             }
    
//         })
//     });
// });

const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav ul li a').forEach(link => {
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active');
    }
})

const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  preloader.classList.add("hiden-preloader");


});


// navbar


const navSlide = function() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navigationLinks = document.querySelectorAll(".nav-links li") 
    
    //Burger Toggle
    burger.addEventListener('click', function(){
        nav.classList.toggle('show-navlink')
        
       
    });
    // Animation
    
    navigationLinks.forEach((link, index) => {
        // console.log(index);
        link.style.animation = `navLinksFade 0.5s forwards ${index / 7 + 0.3}s`
        // console.log(index / 7 + 0.3);
    });
     

  

    
     
}


navSlide();


// QUESTION STYLE TOOGLE

// const upArrowShow = document.querySelectorAll(".up-icon");
// const downArrowHide = document.querySelectorAll(".down-icon");
// const displayAnswar = document.querySelectorAll(".answar");

// console.log(displayAnswar);

// open the Question

// downArrowHide.addEventListener("click", function(){
//     displayAnswar.style.display = "block"
//     downArrowHide.style.display = "none"
//     upArrowShow.style.display = "block"
//     console.log("down button clicked");
// });

// close the answer

// upArrowShow.addEventListener("click", function(){
//     displayAnswar.style.display = "none"
//     downArrowHide.style.display = "block"
//     upArrowShow.style.display = "none" 
// })


// correction

// Get all elements with the class ".down-icon"
const downArrowHides = document.querySelectorAll(".down-icon");

// Loop through each element to add event listener
downArrowHides.forEach(function(downArrowHide) {
    downArrowHide.addEventListener("click", function(){
        const faqContainer = this.closest(".faq-cont");
        const displayAnswar = faqContainer.querySelector(".answar");
        displayAnswar.style.display = "block";
        downArrowHide.style.display = "none";
        // downArrowHide.nextElementSibling.style.display = "inline-block";
        const upArrowShow = faqContainer.querySelector(".up-icon");
        
        console.log("down button clicked");
    });
});


const upArrowShows = document.querySelectorAll(".up-icon");


upArrowShows.forEach(function(upArrowShow) {
    upArrowShow.addEventListener("click", function(){
        const faqContainer = this.document.querySelectorAll(".faq-cont");
        const displayAnswar = faqContainer.querySelector(".answar");
        displayAnswar.style.display = "none";
        if(displayAnswar.style.display == "none"){
            upArrowShow.style.display = "block";
        }

        // upArrowShow.previousElementSibling.style.display = "block";
    });
});



