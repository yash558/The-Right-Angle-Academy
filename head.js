
// scroll to top button

const homesection = document.querySelector(".header-top")
const footerElem = document.querySelector(".section-footer")
const scrollElement = document.createElement("div");
scrollElement.classList.add("scrollTop-style");


scrollElement.innerHTML = `<i class="fa-solid fa-arrow-up" id="scroll-top"></i>`;

footerElem.after(scrollElement);

const scrollTop = () => {
  homesection.scrollIntoView({ behavior: "smooth" })
}

scrollElement.addEventListener("click", scrollTop);

// responsive navbar

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


// show and close navlinks


const navLinks = document.querySelector("#Navlinks");

function showMenu() {
  navLinks.style.display = "block";
  navLinks.style.transition = "0.3s ease-in-out";
}
function hideMenu() {
  navLinks.style.display = "none";
}
//   all ------------------
function initParadoxWay() {
  "use strict";

  if ($(".testimonials-carousel").length > 0) {
    var j2 = new Swiper(".testimonials-carousel .swiper-container", {
      preloadImages: false,
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      grabCursor: true,
      mousewheel: false,
      centeredSlides: true,
      pagination: {
        el: '.tc-pagination',
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: '.listing-carousel-button-next',
        prevEl: '.listing-carousel-button-prev',
      },
      breakpoints: {
        1024: {
          slidesPerView: 3,
        },

      }
    });
  }

  // bubbles -----------------


  setInterval(function () {
    var size = randomValue(sArray);
    $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
    $('.individual-bubble').animate({
      'bottom': '50%',
      'opacity': '-=0.7'
    }, 4000, function () {
      $(this).remove()
    });
  }, 350);

}




//   Init All ------------------
$(document).ready(function () {
  initParadoxWay();
});

var swiper = new Swiper(".slider-content", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  centerSlide: 'true',
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    }
  }
});

document.getElementById('button').addEventListener("click", function () {
  document.querySelector('.bg-modal').style.display = "block";
});
document.getElementById('button-1').addEventListener("click", function () {
  document.querySelector('.bg-modal').style.display = "block";
});
document.getElementById('button-2').addEventListener("click", function () {
  document.querySelector('.bg-modal').style.display = "block";
});
document.getElementById('button-3').addEventListener("click", function () {
  document.querySelector('.bg-modal').style.display = "block";
});
document.getElementById('button-4').addEventListener("click", function () {
  document.querySelector('.bg-modal').style.display = "block";
});
document.getElementById('button-5').addEventListener("click", function () {
  document.querySelector('.bg-modal').style.display = "block";
});
document.getElementById('button-6').addEventListener("click", function () {
  document.querySelector('.bg-modal').style.display = "block";
});

document.querySelector('.closet').addEventListener("click", function () {
  document.querySelector('.bg-modal').style.display = "none";
});


document.onkeydown = function (e) {
  if (event.keyCode == 123) {
    return false;
  }

  if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
    return false;
  }

  if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
    return false;
  }

}

