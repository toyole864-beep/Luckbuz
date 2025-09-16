

window.onload = function() {
  setTimeout(function() {
    document.getElementById('preloader').style.display = 'none';
  }, 1000); // 3000 milliseconds = 3 seconds
};


var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 1, // Display 4 items per view
    spaceBetween: 24, // Add some space between slides
    autoplay: {
      delay: 3000, // Autoplay delay in milliseconds
    },
    lazy: true, // Enable lazy loading
    loop: true, // Enable loop
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
    576: {
      slidesPerView: 1, 
    },
    768: {
      slidesPerView: 2, 
    },
    992: {
      slidesPerView: 3, 
    },
    1200: {
      slidesPerView: 4, 
    }
  }

  });
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1, // Display 4 items per view
    spaceBetween: 24, // Add some space between slides
    autoplay: {
      delay: 3000, // Autoplay delay in milliseconds
    },
    lazy: true, // Enable lazy loading
    loop: true, // Enable loop
    breakpoints: {
    576: {
      slidesPerView: 1, 
    },
    768: {
      slidesPerView: 2, 
    },
    992: {
      slidesPerView: 2, 
    },
    1200: {
      slidesPerView: 3, 
    }
  }

  });



$('document').ready(function() {
    $('.navbar-toggler').click(function() {
        $('.manubar').toggleClass('manubarbg');
    });

    $('.navbar-nav .nav-link').each(function() {
      $(this).click(function() {
          $('.closeNav').removeClass('show');
      });
    });

    
  window.addEventListener('scroll', function() {
    var element = document.querySelector('.manubar');

    if (window.scrollY >= 200) {
        element.classList.add('active');
    } else {
        element.classList.remove('active');
    }
  });

})






