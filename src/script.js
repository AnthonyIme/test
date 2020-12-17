
function ibg() {

    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
  }

    document.querySelector('.header__buttonst').onmouseover = function() {
        let button = document.querySelector('.header__buttonst')
        button.classList.remove('active');
        setTimeout(function() {
            button.classList.add('temp')
        },500);
        if (document.querySelector('.header__buttonst').onmouseout = function() {
            button.classList.add('active');
            button.classList.remove('temp');
        }) {
      }
    }
   // $('.sliderst').slick({
     //   dots: true,
       // infinite: true,
       // speed: 300,
    // speed    slidesToShow: 1,
      // slidesToScroll: 1,
      //  arrows: false,
   //     cssEase: 'linear'
     // });

     var swiper = new Swiper('.slider', {
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });