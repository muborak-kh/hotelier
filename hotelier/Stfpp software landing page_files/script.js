(function($) {
  'use strict';  
    /*======================================/
        Preloader JS
    ======================================*/  
        var prealoaderOption = $(window);
        prealoaderOption.on("load", function () {
            var preloader = jQuery('.spinner');
            var preloaderArea = jQuery('.preloder');
            preloader.fadeOut();
            preloaderArea.delay(350).fadeOut('slow');
        });
    /*======================================/
        Preloader JS
    ======================================*/
    $("#load-shaxmatka").click(function(){
    $("#shaxmatka-block").fadeIn(100);
    $("#shaxmatka-block-left").addClass("bounceInLeft");
    $("#shaxmatka-block-right").addClass("bounceInRight");
    $("#dashboard-block").fadeOut(1000);
    });
    /*======================================/
        sticky header JS
    ======================================*/
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 5) {
            $("#header-area").removeClass("sticky");
            $("#black-logo").removeClass("enable-show");
            $("#white-logo").removeClass("disalbe-show");
            $("#get-app").addClass("white-bt");
        } else {
            $("#header-area").addClass("sticky");
            $("#black-logo").addClass("enable-show");
            $("#white-logo").addClass("disalbe-show");
            $("#get-app").removeClass("white-bt")
        }
    });
    /*======================================
        sticky header JS
    ======================================*/
    $(".video-play").click(function(){
        $("#watch-video").fadeIn(200);
        $(".black-bg").fadeIn(200);
    });
    $(".black-bg").click(function(){
        $("#watch-video").fadeOut(200);
        $(".black-bg").fadeOut(200);
    });
    /*======================================
        scroll top JS
    ======================================*/
    $("a.page-scroll").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            //console.log($(hash).offset().top - topOffset);
            $('html, body').animate({
                scrollTop: $(hash).offset().top - $("header").outerHeight() + "px"
            }, 1200, function () {
                //window.location.hash = hash;
            });
        } // End if
    });
    /*======================================
        scroll top JS
    ======================================*/
    /*====================================
        Scroll up js
    ======================================*/
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 100) {
            $('#scroll-up').fadeIn();
        } else {
            $('#scroll-up').fadeOut();
        }
    });
    $('#scroll-up').on('click', function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1200);
        return false;
    });
    /*=====================================
        Scroll up js
    =======================================*/
    /*======================================
        owl slider js
    ======================================*/
    $('.client-slide').owlCarousel({
        loop:true,
        margin: 30,
        nav:false,
        autoplayTimeout: 4000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
    /*======================================
        owl slider js
    ======================================*/
    /*=====================================
            counterup JS
    ======================================*/
    $('.counter').counterUp({
        delay: 100,
        time: 5000
    });
    /*=====================================
            counterup JS
    ======================================*/
    /*======================================
        magnific-Popup js
    ======================================*/
    $('.video-play').magnificPopup({
        type: 'iframe',
        removalDelay: 300,
        mainClass: 'mfp-fade'
    });
    /*======================================
        magnific-Popup js
    ======================================*/
    /*======================================/
                  isotope js
    ======================================*/
    $('#screenshot').imagesLoaded( function() {
        // init Isotope
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
              columnWidth: '.grid-item'
            }
        })
        // bind filter button click
        $('.screenshot-button').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({filter: filterValue});
        });
        $('.screenshot-button').each(function (i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', 'button', function () {
                $buttonGroup.find('.is-checked').removeClass('is-checked');
                $(this).addClass('is-checked');
            });
        });
    });   
    /*======================================/
            isotope js
    ======================================*/
})(window.jQuery);   
   