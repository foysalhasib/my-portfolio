/* Template Name: Natio - Bootstrap 5 Personal Landing Template
   Author: Zoyothemes
   Email: zoyothemes@gmail.com
   Version: 1.0.0
   Website: https://zoyothemes.com
   Created: March 2024
   File Description: Main Css file of the template
*/

// window.addEventListener('load',   fn , false )

//Menu
function windowScroll() {
   const navbar = document.getElementById("navbar");
   if (
     document.body.scrollTop >= 50 ||
     document.documentElement.scrollTop >= 50
   ) {
     navbar.classList.add("nav-sticky");
   } else {
     navbar.classList.remove("nav-sticky");
   }
}
window.addEventListener("scroll", (ev) => {
   ev.preventDefault();
   windowScroll();
});

// Navbar Active Class
var spy = new Gumshoe('#navbar-navlist a', {
  // Active classes
  // navClass: 'active', // applied to the nav list item
  // contentClass: 'active', // applied to the content
  offset: 80
});

// ======================= Counter Area  ========================
// ------------------- without 21+ js code ----------------------

let singleCounter =  document.querySelectorAll(".single")

let arr = Array.from(singleCounter)

console.log(arr)


arr.map((item)=>{
  let userNumber = item.innerHTML
  item.innerHTML = ""

  let count = 0


function main(){
  count++
  item.innerHTML = count
  
  if(userNumber == count){
      clearInterval(stop)
  }
}

let stop = setInterval(()=>{
  main()
},200)


})



// ------------------------------------
function animateCounter(element) {
  const target = +element.getAttribute('data-count'); // Get the target number from data-count
  let current = 0; // Starting point for the counter

  const interval = setInterval(() => {
    if (current < target) {
      current += 1; // Increment the counter by 1
      element.innerText = `${current}+`; // Update text with number and '+' at the end
    } else {
      clearInterval(interval); // Stop when we reach the target
    }
  }, 50); // Update every 50ms for smooth transition
}

// Get all counter elements and apply the animation
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => animateCounter(counter));




// var type_list = document.querySelector('#typed_list');

// if (type_list) {
//   var aboutsocial = new Typed('#typed', {
//     stringsElement: '#typed_list',
//     typeSpeed: 170,
//     backSpeed: 30,
//     cursorChar: '|',
//     loop: true
//   });
// };


// Testimonial Slider
var testimonialSlider = document.querySelector('.testimonials');

// Check 
if (testimonialSlider) {
  // Initialize slider settings
  var testimonialSliderInint = {
    loop: false,
    speed: 2000,
    slidesPerView: 1,
    spaceBetween: 25,
    navigation: {
      nextEl: ".slider-next",
      prevEl: ".slider-prev",
    },
    breakpoints: {
      1200: {
        spaceBetween: 60,
      },
    },
  };

  // Initialize the slider
  var testimonialSliderInstance = new Swiper(".testimonials", testimonialSliderInint);
}

// Back To Top
var mybutton = document.getElementById("back-to-top");
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if(mybutton!=null){
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// ========================== blog button start ==============================
// ----------------- blogBtnOne ----------------
const buttonOne = document.getElementById("blogBtnOne");
function pulseOne() {
  buttonOne.style.animation = "pulse 1s infinite";
}
pulseOne();


// ----------------- blogBtnTwo ----------------
const buttonTwo = document.getElementById("blogBtnTwo");
function bounce() {
  buttonTwo.style.transform = "translateY(-13px)";
    setTimeout(() => {
      buttonTwo.style.transform = "translateY(0)";
    }, 200);
}
setInterval(bounce, 800);

// ----------------- blogBtnThree ----------------
const buttonThree = document.getElementById("blogBtnThree");
function pulseThree() {
  buttonThree.style.animation = "pulse 1s infinite";
}
pulseThree();
// ========================== blog button end ==============================


// ========================== Testimonial start ==============================

const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 50,
    centerSlider: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // Responsive
    breakpoints: {
      0:{
        slidesPerView: 1
      },
      768:{
        slidesPerView: 2
      },
      1024:{
        slidesPerView: 3
      }
    },
    autoplay:{
        delay: 3000,
        disableOnInteraction: false
      }
  
  });

  


  
// ========================== Testimonial  end ==============================