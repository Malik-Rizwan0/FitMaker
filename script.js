let show = document.getElementById("show");
let hide = document.getElementById("hide");
let mobileNav = document.getElementById("mobileNav");
show.addEventListener("click", ()=>{
  mobileNav.style.display = "block"
  hide.style.display = "block"
  show.style.display = "none"
})
hide.addEventListener("click", ()=>{
  mobileNav.style.display = "none"
  show.style.display = "block"
  hide.style.display = "none"
})





//Stats (For counting the values)
function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start).toLocaleString() + '<span>+</span>';
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

function startCountAnimation() {
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach((statNumber) => {
        const target = parseInt(statNumber.getAttribute('data-target'));
        animateValue(statNumber, 0, target, 2000);
    });
}

// Intersection Observer setup
const statsSection = document.getElementById('stats-section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCountAnimation();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

observer.observe(statsSection);


// // Navbar
// document.addEventListener('DOMContentLoaded', function() {
//     const navbarToggler = document.querySelector('.navbar-toggler');
//     const mobileNav = document.querySelector('.mobile-nav');
//     const closeNav = document.querySelector('.close-nav');

//     navbarToggler.addEventListener('click', function() {
//         mobileNav.classList.add('show');
//     });

//     closeNav.addEventListener('click', function() {
//         mobileNav.classList.remove('show');
//     });

//     // Close nav when clicking outside
//     document.addEventListener('click', function(event) {
//         if (!mobileNav.contains(event.target) && !navbarToggler.contains(event.target)) {
//             mobileNav.classList.remove('show');
//         }
//     });
// });


// //Model
//  // Show the popup modal when the website opens
//  document.addEventListener('DOMContentLoaded', function () {
//     var myModal = new bootstrap.Modal(document.getElementById('popupModal'));
//     myModal.show();
// });









// Fitness Tool swipper
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
  
    // Pagination bullets
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // Responsive breakpoints
    breakpoints: {
      0: {
        slidesPerView: 2
      },
      400: {
        slidesPerView: 3
      },  
      768: {
        slidesPerView: 5
      },
      1024: {
        slidesPerView: 5
      }
    }
  });




//   testimonials
  const swiper1 = new Swiper('.slider-wrapper1', {
    loop: true,
    grabCursor: true,
    spaceBetween: 0,

    // Pagination bullets
    pagination: {
        el: '.swiper-pagination1',
        clickable: true,
        dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
      prevEl: '.swiper-button-next1',
      nextEl: '.swiper-button-prev1',
    },

    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        }
    }
});




//   testimonials
const swiper2 = new Swiper('.slider-wrapper2', {
  loop: true,
  grabCursor: true,
  spaceBetween: 20, // Add spacing between slides

  // Pagination
  pagination: {
    el: '.swiper-pagination2',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    prevEl: '.swiper-button-prev2',
    nextEl: '.swiper-button-next2',
  },

  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1, // Show 1 slide on very small screens
    },
    480: {
      slidesPerView: 2, // Show 2 slides on small screens
    },
    768: {
      slidesPerView: 3, // Show 3 slides on tablets
    },
    1024: {
      slidesPerView: 4, // Show 4 slides on desktops
    }
  }
});









// FAQ


function toggleDescription(number) {
  // Select elements for the specific number
  const point = document.getElementById(`.point`);
  const heading = document.getElementById(`heading${number}`);
  const desc = document.getElementById(`desc${number}`);
  const openSymbol = heading.querySelector(".open");
  const closeSymbol = heading.querySelector(".close");


  // Check if the selected description is visible
  const isVisible = desc.style.display === 'block';

  // Hide all descriptions and reset all symbols and highlights
  for (let i = 1; i <= 4; i++) {
      document.getElementById(`heading${i}`).classList.remove('highlight');
      document.getElementById(`desc${i}`).style.display = 'none';
      document.querySelector(`#heading${i} .open`).style.display = 'inline';
      document.querySelector(`#heading${i} .close`).style.display = 'none';
  }

  // Toggle visibility of the selected description
  if (!isVisible) {
      desc.style.display = 'block';
      desc.style.border = '2px solid #D90A14';
      heading.style.border = '2px solid #D90A14 !important';
      
      openSymbol.style.display = 'none';
      closeSymbol.style.display = 'inline';
      heading.classList.add('highlight');
    } else {
    heading.style.border = 'none';
      desc.style.display = 'none';
      openSymbol.style.display = 'inline';
      closeSymbol.style.display = 'none';
      heading.classList.remove('highlight');
  }
}