	var swiperUpcoming_1 = new Swiper('.swiper-upcoming_1', {
    slidesPerView: 2,
    spaceBetween: 36,
    loop: true,
    breakpoints: {
      // when window width is >= 320px
      768: {
        slidesPerView: 4,
        spaceBetween: 20
      },
    
    },
      navigation: {
        nextEl: '.swiper-upcoming_1__arrows',

      },
    });
    var swiperUpcoming_1 = new Swiper('.intro-slider', {
      slidesPerView: 1,
      loop: true,
      spaceBetween: 36,
        navigation: {
          nextEl: '.slider-arrows__right',
          prevEl: '.slider-arrows__left',
  
        },
      });
      
      var gallerySwiper = new Swiper('.gallery-swiper', {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 20 ,
        slidesPerView: 'auto',
        breakpoints: {
          // when window width is >= 320px
          768: {
            slidesPerView: 2,
            spaceBetween: 36
          },
          1180: {
            slidesPerView: 4,
            spaceBetween: 36
          },
        
        },
          navigation: {
            nextEl: '.gallery-button-prev',
            prevEl: '.gallery-button-next',
    
          },
        });
        const placeholder =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
        const targets = document.querySelectorAll("[data-src]");
        targets.forEach((target) => {
          target.src = placeholder;
        });
        const options = {
          root: null,
          rootMargin: "0px",
          threshold: 0.05
        };
        const loadImage = function (entries, observer) {
          entries.forEach((entry) => {
            if (
              entry.isIntersecting &&
              entry.target.parentNode.classList.contains("loading")
            ) {
              entry.target.src = entry.target.getAttribute("data-src");
              entry.target.onload = () => {
                entry.target.parentNode.classList.remove("loading");
                entry.target.removeAttribute("data-src");
              };
            }
          });
        };
        
        const observer = new IntersectionObserver(loadImage, options);
        targets.forEach((target) => {
          observer.observe(target);
        });