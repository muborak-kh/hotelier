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
        $("#load-shaxmatka").addClass("screenshot-active");
        $("#dashboard-block").fadeOut(100);
        $("#booking-block").fadeOut(100);
        $("#list-block").fadeOut(100);
        $("#rule-block").fadeOut(100);
        $("#analyze-block").fadeOut(100);
        $("#load-dashboard").removeClass("screenshot-active");
        $("#load-booking").removeClass("screenshot-active");
        $("#load-rule").removeClass("screenshot-active");
        $("#load-list").removeClass("screenshot-active");
        $("#load-analyze").removeClass("screenshot-active");
    });
    $("#load-dashboard").click(function(){
        $("#dashboard-block").fadeIn(100);
        $("#dashboard-block-left").addClass("bounceInLeft");
        $("#dashboard-block-right").addClass("bounceInRight");
        $("#load-dashboard").addClass("screenshot-active");
        $("#shaxmatka-block").fadeOut(100);
        $("#booking-block").fadeOut(100);
        $("#list-block").fadeOut(100);
        $("#rule-block").fadeOut(100);
        $("#analyze-block").fadeOut(100);
        $("#load-shaxmatka").removeClass("screenshot-active");
        $("#load-booking").removeClass("screenshot-active");
        $("#load-rule").removeClass("screenshot-active");
        $("#load-list").removeClass("screenshot-active");
        $("#load-analyze").removeClass("screenshot-active");
    });
    $("#load-booking").click(function(){
        $("#booking-block").fadeIn(100);
        $("#booking-block-left").addClass("bounceInLeft");
        $("#booking-block-right").addClass("bounceInRight");
        $("#load-booking").addClass("screenshot-active");
        $("#dashboard-block").fadeOut(100);
        $("#shaxmatka-block").fadeOut(100);
        $("#list-block").fadeOut(100);
        $("#rule-block").fadeOut(100);
        $("#analyze-block").fadeOut(100);
        $("#load-dashboard").removeClass("screenshot-active");
        $("#load-shaxmatka").removeClass("screenshot-active");
        $("#load-rule").removeClass("screenshot-active");
        $("#load-list").removeClass("screenshot-active");
        $("#load-analyze").removeClass("screenshot-active");
    });
    $("#load-list").click(function(){
        $("#list-block").fadeIn(100);
        $("#list-block-left").addClass("bounceInLeft");
        $("#list-block-right").addClass("bounceInRight");
        $("#load-list").addClass("screenshot-active");
        $("#dashboard-block").fadeOut(100);
        $("#shaxmatka-block").fadeOut(100);
        $("#booking-block").fadeOut(100);
        $("#rule-block").fadeOut(100);
        $("#analyze-block").fadeOut(100);
        $("#load-dashboard").removeClass("screenshot-active");
        $("#load-shaxmatka").removeClass("screenshot-active");
        $("#load-rule").removeClass("screenshot-active");
        $("#load-booking").removeClass("screenshot-active");
        $("#load-analyze").removeClass("screenshot-active");
    });
    $("#load-rule").click(function(){
        $("#rule-block").fadeIn(100);
        $("#rule-block-left").addClass("bounceInLeft");
        $("#rule-block-right").addClass("bounceInRight");
        $("#load-rule").addClass("screenshot-active");
        $("#dashboard-block").fadeOut(100);
        $("#shaxmatka-block").fadeOut(100);
        $("#booking-block").fadeOut(100);
        $("#list-block").fadeOut(100);
        $("#analyze-block").fadeOut(100);
        $("#load-dashboard").removeClass("screenshot-active");
        $("#load-shaxmatka").removeClass("screenshot-active");
        $("#load-list").removeClass("screenshot-active");
        $("#load-booking").removeClass("screenshot-active");
        $("#load-analyze").removeClass("screenshot-active");
    });
    $("#load-analyze").click(function(){
        $("#analyze-block").fadeIn(100);
        $("#analyze-block-left").addClass("bounceInLeft");
        $("#analyze-block-right").addClass("bounceInRight");
        $("#load-analyze").addClass("screenshot-active");
        $("#dashboard-block").fadeOut(100);
        $("#shaxmatka-block").fadeOut(100);
        $("#booking-block").fadeOut(100);
        $("#list-block").fadeOut(100);
        $("#rule-block").fadeOut(100);
        $("#load-dashboard").removeClass("screenshot-active");
        $("#load-shaxmatka").removeClass("screenshot-active");
        $("#load-list").removeClass("screenshot-active");
        $("#load-booking").removeClass("screenshot-active");
        $("#load-rule").removeClass("screenshot-active");
    });
    $(document).ready(function(){
        $('#get-access input[type="text"]').blur(function(){
            if(!$(this).val()){
                $(this).addClass("error");
            } else{
                function runDownload () {
                    $("#submit-form").click(function(){
                    $(".trial-form").addClass("bounceOutLeft");
                    $(".trial-form").fadeOut(340);
                    $("#header-form-h4").fadeOut(340);
                    $(".form-received").fadeIn(100);
                    $(".form-received").addClass("bounceInRight");
                });
                }
            }
        });
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
        $("#get-access").fadeOut(100);
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
    $("#get-app").click(function(){
        $("#get-access").fadeIn(100);
        $(".black-bg").fadeIn(200);
    });
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
   