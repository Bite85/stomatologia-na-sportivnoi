$(document).ready(function(){

/**************MOBILE MENU********************/ 
  $('.header-section__navbar-open').click(function() {
       $('.header-section__navbar')
       .addClass('header-section__navbar_open');

       $('body').css('overflow-y', 'hidden');
  });
  $('.header-section__navbar-close').click(function() {
       $('.header-section__navbar')
       .removeClass('header-section__navbar_open');

       $('body').css('overflow-y', 'scroll');
  });
  $(window).resize(function() {
    if($(window).width() > 991) {
       $('.header-section__navbar')
       .removeClass('header-section__navbar_open');
       $('body').css('overflow-y', 'scroll');
    }
  });
/**************MOBILE MENU********************/ 

/**************OWL CAROUSEL*********************/ 
  // $(".testimonials-carousel").owlCarousel({
  //   	dots: true,
  //   	margin: 30,
  //   	autoplay: false,
  //   	responsiveClass: true,
  //   	responsive: {
  //       0:{
  //             items:1,
  //             loop: true,
  //             slideBy: 1,
  //             dotsBy: 1
  //       },
  //   		1200:{
  //             items:2,
  //             loop: true,
  //             slideBy: 2,
  //             dotsBy: 2
  //         }
  //   	}
  	
  // });



  var owl = $(".doctors-carousel").owlCarousel({
      dots: false,
      margin: 30,
      navContainer: '.customNav',
      nav: true,
      navText: ["<img src='img/prev-icon.png'>","<img src='img/next-icon.png'>"],
      autoplay: false,
      mouseDrag: true,
      touchDrag: true,
      responsiveClass: true,
      responsive: {
        0:{
              items:1,
              loop: true,
              slideBy: 1,
              dotsBy: 1
        },
        1200:{
              items:1,
              loop: true,
              slideBy: 1,
              dotsBy: 1
        }
        
    }
    
  });


    $('.owl-dot').on( 'click', function() {
      owl.trigger('to.owl.carousel', [$(this).index(), 300]);
      $('.owl-dot').removeClass( 'active' );
      $(this).addClass( 'active' );
    });



   //  owl.on("dragged.owl.carousel", function (event) {
   //      var index = event.item.index;
   //      console.log(index);
         
   // });

/**************OWL CAROUSEL*********************/ 

/*************FLICKITY CAROUSEL**************/ 
$('.testimonials-carousel').flickity({
     cellAlign: 'left',
     contain: true,
     draggable: true,
     freeScroll: false,
     groupCells: 1,
     prevNextButtons: false,
     pageDots: true,
     wrapAround: true,
     autoplay: true
});
$('.certificates-carousel').flickity({
  cellAlign: 'center',
  contain: true,
  draggable: true,
  groupCells: 2,
  freeScroll: false,
  prevNextButtons: false,
  pageDots: true,
  wrapAround: true,
  autoPlay: false
});
/*************FLICKITY CAROUSEL**************/ 

});


/***********MAP**************/
ymaps.ready(function () {


    if($('#YMapsID').length > 0) {
      
          var myMap = new ymaps.Map('YMapsID', {
                center: [55.720469,37.567644],
                zoom: 16,
                controls: ['zoomControl','geolocationControl']
            }, {
                searchControlProvider: 'yandex#search'
            });

            // Создаём макет содержимого.
         var myPlacemark = new ymaps.Placemark([55.720469,37.567644], {
                balloonContent: 'г. Москва, Хамовнический вал, д. 28, стр. 1',
            }, 
            {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: './img/placemark2.png',
                // Размеры метки.
                // iconImageSize: [35, 38]
                iconImageSize: [60, 80]
             
            });


       
        myMap.behaviors.disable('scrollZoom');
        // myMap.behaviors.disable('multiTouch'); 
        ($(window).width() < 991) ?  myMap.behaviors.disable('drag') : myMap.behaviors.Drag;
       
        myMap.geoObjects.add(myPlacemark);
        // myPlacemark.balloon.open();
    }
      
        
});

/***********MAP**************/ 