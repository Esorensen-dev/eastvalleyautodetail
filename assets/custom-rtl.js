$(document).ready(function () {
  initHeaderSticky()
});
$(window).resize(function() {
  initHeaderSticky()
});
$(window).scroll(function() {
  initHeaderSticky()
});
function initHeaderSticky() {
  if (jQuery(document).height() > jQuery(window).height()) {
    if (jQuery(this).scrollTop() > 400) {
      jQuery('.site-header').addClass("fixed");
    } else {
      jQuery('.site-header').removeClass("fixed");
    }
  }
}
$(document).ready(function () {
  jQuery(".product-write-review").on('click',function(e) {
    $(".product-review").toggleClass("open-model");
    $('body').addClass('no-scroll open');
    $('.overlay').addClass('active');
  });
  jQuery(".overlay,.review-close-icon").on('click',function(e) {
    $(".product-review").removeClass("open-model");
    $('body').removeClass('no-scroll open');
    $('.overlay').removeClass('active');
  });
  jQuery('.cart__items-wrapper,.cart__footer-wrapper').wrapAll('<section class="cart-page-section padding-bottom"><div class="container"><div class="row"></div></div></section>');
  jQuery('.cart-page-section .section-title.main').prependTo('.cart-page-section > .container');
  countDownIni('.flip-countdown,.js-flip-countdown');
  /*********  size Popup  ********/ 
      $(".size-btn").click(function() { 
        $(".size-popup").toggleClass("active"); 
        $("body").toggleClass("no-scroll");
    });
    $(".close-search").click(function() { 
        $(".size-popup").removeClass("active"); 
        $("body").removeClass("no-scroll");
    });
    $(".close-btn").click(function() { 
        $(".size-popup").removeClass("active"); 
        $("body").removeClass("no-scroll");
    });
    /********* On scroll heder Sticky *********/
      var prevScrollpos = window.pageYOffset;
      window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
          document.getElementById("header-sticky").style.top = "0";
        } else {
          document.getElementById("header-sticky").style.top = "-200px";
        }
        prevScrollpos = currentScrollPos;
      }
    /********* Mobile Menu ********/
    $('.mobile-menu-button').on('click', function (e) {
        e.preventDefault();
        setTimeout(function () {
            $('body').addClass('no-scroll active-menu');
            $(".mobile-menu-wrapper").toggleClass("active-menu");
            $('.overlay').addClass('menu-overlay');
        }, 50);
    });
    $('body').on('click', '.overlay.menu-overlay, .menu-close-icon svg', function (e) {
        e.preventDefault();
        $('body').removeClass('no-scroll active-menu');
        $(".mobile-menu-wrapper").removeClass("active-menu");
        $('.overlay').removeClass('menu-overlay');
    });
  /********* Cart Popup ********/
    $('.main-cart').on('click', function (e) {
      $('body').addClass('no-scroll cartOpen');
    });
    $('body').on('click', '.overlay.cart-overlay, .closecart', function (e) {
        $('body').removeClass('no-scroll cartOpen');
    });
  /***** Mobile Filter Popup *****/
    $('.mobile-facets__open').on('click', function (e) {
    $('body').addClass('mobile-open no-scroll');
    $('.overlay').addClass('active');
  });
  $('.overlay,.close-filter,.apply-btn').on('click', function (e) {
    $('body').removeClass('mobile-open no-scroll');
    $('.overlay').removeClass('active');
  });
    /******* Cookie Js *******/
    $('.cookie-close').click(function () {
        $('.cookie').slideUp();
    });
    /******* Subscribe popup Js *******/
    $('.close-sub-btn').click(function () {
        $('.subscribe-popup').slideUp();
        $(".subscribe-overlay").removeClass("open");
    });
    /*********  Multi-level accordion nav  ********/
    $('.acnav-label').click(function () {
        var label = $(this);
        var parent = label.parent('.has-children');
        var list = label.siblings('.acnav-list');
        if (parent.hasClass('is-open')) {
            list.slideUp('fast');
            parent.removeClass('is-open');
        }
        else {
            list.slideDown('fast');
            parent.addClass('is-open');
        }
    });
    /****  TAB Js ****/
    $('ul.pro-tabs li').click(function () {
        var $this = $(this);
        var $theTab = $(this).attr('data-tab');
        console.log($theTab);
        if ($this.hasClass('active')) {
            // do nothing
        } else {
            $this.closest('.tabs-wrapper').find('ul.pro-tabs li, .protabs-container .tab-content').removeClass('active');
            $('.protabs-container .tab-content[id="' + $theTab + '"], ul.tabs li[data-tab="' + $theTab + '"]').addClass('active');
        }
        $('.product-tab-slider').slick('refresh');
    });
      $('ul.best-tabs li').click(function () {
        var $this = $(this);
        var $theTab = $(this).attr('data-tab');
        console.log($theTab);
        if ($this.hasClass('active')) {
            // do nothing
        } else {
            $this.closest('.tabs-wrapper').find('ul.best-tabs li, .besttabs-container .tab-content').removeClass('active');
            $('.besttabs-container .tab-content[id="' + $theTab + '"], ul.tabs li[data-tab="' + $theTab + '"]').addClass('active');
        }        
         $('.tab-slider-main').slick('refresh');
    });
   
    if ($('.product-tab-slider').length > 0) {
        $('.product-tab-slider').slick({
            rows: 2,
            arrows: true,
            dots: false,
            speed: 800,
           rtl:true,
            slidesToShow: 4,
            slidesToScroll: 1,
            loop: false,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 540,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }
    // HOME BANNER SLIDER JS //
    $('.home-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1200,
        fade: true,
       rtl:true,
        dots:true,
        cssEase: 'linear',
        prevArrow: $('.left-arrow'),
        nextArrow: $('.right-arrow'),
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    prevArrow: $('.left-arrow'),
                    nextArrow: $('.right-arrow'),
                }
            }
        ]
    });
    //   bike-slider-main
    $('.pro-slider-main').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 1200,
        centerMode: false,
       rtl:true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
 
   //    tab-slider-main
    $('.tab-slider-main').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 1200,
       rtl:true,
        centerMode: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
    //   logo-slider-main
    $('.logo-slider-main').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
       rtl:true,
        speed: 1200,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
             {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    //   testi-main-slider
    $('.testi-main-slider').slick({
        infinite: true,
        slidesToShow: 3,
       rtl:true,
        slidesToScroll: 1,
        speed: 1200,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
    //   card-tab-main-slider
    $('.card-tab-main-slider').slick({
        infinite: true,
        rows: 2,
        slidesToShow: 2,
        slidesToScroll: 1,
       rtl:true,
        speed: 1200,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    rows: 1,
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
    //   blog-main-slider
    $('.blog-main-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
       rtl:true,
        speed: 1200,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    rows: 1,
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
    // product-cat-slider-main
    $('.product-cat-slider-main').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 1200,
       rtl:true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    rows: 1,
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
    // product slider 
    $('.product-main-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        rtl:true,
        arrows: false,
        dots: false,
        infinite: true,
        speed: 1500,
        loop: true,
        asNavFor: '.product-thumb-slider',
        autoplay: false,
    });
    $('.product-thumb-slider').slick({
        dots: false,
        arrows:false,
        rtl:true,
        asNavFor: '.product-main-slider',
        speed: 1000,
        slidesToScroll: 1,
        verticalScrolling: true,
        vertical:true,
        touchMove: true,
        focusOnSelect: true,
        loop: true,
        infinite: true,
        focusOnSelect: true,
        slidesToShow: 4,
        responsive: [{
            breakpoint: 576,
            settings: {
                vertical:false,
                slidesToShow: 3
            }
        }
        ]
    });
  // currency
  function currencyFormSubmit(event) {
    event.target.form.submit();
  }

  document.querySelectorAll('.shopify-currency-form select').forEach(function(element) {
    element.addEventListener('change', currencyFormSubmit);
  });

     // coupan code
  $('body').on('keyup','.discount_coupan', function() {
   var apply_href = $('.apply').attr("href").split('discount=')[0];
   var val = $(this).val();
    $('.apply').attr("href",apply_href+'discount='+val);
  });

  // notify me
  $('body').on('click','.notify-btn', function(e) {
      e.preventDefault();
      $('body').addClass('no-scroll notify-active');
      $('.out-of-stock-form,.overlay').addClass('active');
    });
   $('body').on('click','.overlay,.notify-popup-close', function(e) {
      e.preventDefault();
     $('body').removeClass('no-scroll notify-active');
      $('.out-of-stock-form,.overlay').removeClass('active');
    });

   // custom reviews on product page
  $(window).on('load', function() {
    $(".left-side").find(".jdgm-prev-badge").append("<a class='product-write-review d-flex align-items-center'><svg xmlns='http://www.w3.org/2000/svg' fill='#fff' id='Outline' viewBox='0 0 24 24' width='16' height='16'><path d='M22.853,1.148a3.626,3.626,0,0,0-5.124,0L1.465,17.412A4.968,4.968,0,0,0,0,20.947V23a1,1,0,0,0,1,1H3.053a4.966,4.966,0,0,0,3.535-1.464L22.853,6.271A3.626,3.626,0,0,0,22.853,1.148ZM5.174,21.122A3.022,3.022,0,0,1,3.053,22H2V20.947a2.98,2.98,0,0,1,.879-2.121L15.222,6.483l2.3,2.3ZM21.438,4.857,18.932,7.364l-2.3-2.295,2.507-2.507a1.623,1.623,0,1,1,2.295,2.3Z'></path></svg> Write a Review</a>");
  }); 
  
// quickview
  $('body').on('click', '.quickview-close', function(e) {
    e.preventDefault();
    $('.quickview-popup').hide();
    $('body').removeClass('no-scroll quick-active');
  });
  
  $('body').on('click', '.quickview-btn, .show-qv', function(e) {
    e.preventDefault();
    $('body').addClass('no-scroll quick-active');
    var href= '/products/'+$(this).find('a').data('handle')+'?view=qv';
    $.get(href, function(product) {
      $('.quickview_popup_data').html(product);
      $('.qv_slider').slick({
          autoplay: false,
          slidesToShow: 1,
          speed: 1000,
         rtl:true,
          slidesToScroll: 1,
          arrows: true,
          prevArrow: '<button class="slide-arrow slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="4" height="6" viewBox="0 0 4 6" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.65976 0.662719C0.446746 0.879677 0.446746 1.23143 0.65976 1.44839L2.18316 3L0.65976 4.55161C0.446747 4.76856 0.446747 5.12032 0.65976 5.33728C0.872773 5.55424 1.21814 5.55424 1.43115 5.33728L3.34024 3.39284C3.55325 3.17588 3.55325 2.82412 3.34024 2.60716L1.43115 0.662719C1.21814 0.445761 0.872773 0.445761 0.65976 0.662719Z" fill="white"></path></svg></button>',
          nextArrow: '<button class="slide-arrow slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="4" height="6" viewBox="0 0 4 6" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.65976 0.662719C0.446746 0.879677 0.446746 1.23143 0.65976 1.44839L2.18316 3L0.65976 4.55161C0.446747 4.76856 0.446747 5.12032 0.65976 5.33728C0.872773 5.55424 1.21814 5.55424 1.43115 5.33728L3.34024 3.39284C3.55325 3.17588 3.55325 2.82412 3.34024 2.60716L1.43115 0.662719C1.21814 0.445761 0.872773 0.445761 0.65976 0.662719Z" fill="white"></path></svg></button>',
          dots: false,
          buttons: false,
          infinite: false,
          loop: false
      });

    });
    $('.quickview-popup').show();
  });

 $('body').on('change', '.nice-select.qv_select__select', function() {
    var selectedValues = [];

    // Collect selected option values
    $('.nice-select.qv_select__select').each(function() {
      var selectedValue = $(this).val();
      if (selectedValue) {
        selectedValues.push(selectedValue);
      }
    });
    var joinedValues = selectedValues.join(' / ');


    $('.variant-qv').each(function() {
     var variant_title = $(this).data('title'); 
     var variant_img = $('.variant-qv[data-title="'+variant_title+'"]').data('img');
     var variant_price = $('.variant-qv[data-title="'+variant_title+'"]').data('price');
     var qv_btn =  $('.variant-qv[data-title="'+variant_title+'"]').data('avail');
     var variant_id = $('.variant-qv[data-title="'+variant_title+'"]').data('id');
      variant_title = String(variant_title);
      joinedValues = String(joinedValues);
      
      if(variant_title === joinedValues){
      var slideIndex = $('.qv_slider .qv-pro-slider-img img[data-img="'+variant_img+'"]').parent().index();
      $('.qv_slider').slick('slickGoTo', slideIndex)
        
        $('.qv-price').find('.price-item--regular').text(variant_price);

        if(qv_btn === true ){
          $('#quick-view-temp .product-form__submit').find('span').text('Add to Cart');
          $('#quick-view-temp .product-form__submit').removeAttr('disabled');
          $('#quick-view-temp .quantity-select').show();
        }else{
          $('#quick-view-temp .product-form__submit').find('span').text('Sold out');
          $('#quick-view-temp .product-form__submit').attr('disabled', 'disabled');
          $('#quick-view-temp .quantity-select').hide();
        }

        $('input[name="id"]').val(variant_id);
        
      }
  });
  
  });
// end quickview
});
if ($(".my-acc-column").length > 0) {
    jQuery(function ($) {
        var topMenuHeight = $("#daccount-nav").outerHeight();
        $("#account-nav").menuScroll(topMenuHeight);
        $(".account-list li:first-child").addClass("active");
    });
    // COPY THE FOLLOWING FUNCTION INTO ANY SCRIPTS
    jQuery.fn.extend({
        menuScroll: function (offset) {
            // Declare all global variables
            var topMenu = this;
            var topOffset = offset ? offset : 0;
            var menuItems = $(topMenu).find("a");
            var lastId;
            // Save all menu items into scrollItems array
            var scrollItems = $(menuItems).map(function () {
                var item = $($(this).attr("href"));
                if (item.length) {
                    return item;
                }
            });
            // When the menu item is clicked, get the #id from the href value, then scroll to the #id element
            $(topMenu).on("click", "a", function (e) {
                var href = $(this).attr("href");
                var offsetTop = href === "#" ? 0 : $(href).offset().top - topOffset;
                function checkWidth() {
                    var windowSize = $(window).width();
                    if (windowSize <= 767) {
                        $('html, body').stop().animate({
                            scrollTop: offsetTop - 200
                        }, 300);
                    }
                    else {
                        $('html, body').stop().animate({
                            scrollTop: offsetTop - 100
                        }, 300);
                    }
                }
                // Execute on load
                checkWidth();
                // Bind event listener
                $(window).resize(checkWidth);
                e.preventDefault();
            });
            // When page is scrolled
            $(window).scroll(function () {
                function checkWidth() {
                    var windowSize = $(window).width();
                    if (windowSize <= 767) {
                        var nm = $("html").scrollTop();
                        var nw = $("body").scrollTop();
                        var fromTop = (nm > nw ? nm : nw) + topOffset;
                        // When the page pass one #id section, return all passed sections to scrollItems and save them into new array current
                        var current = $(scrollItems).map(function () {
                            if ($(this).offset().top - 250 <= fromTop)
                                return this;
                        });
                        // Get the most recent passed section from current array
                        current = current[current.length - 1];
                        var id = current && current.length ? current[0].id : "";
                        if (lastId !== id) {
                            lastId = id;
                            // Set/remove active class
                            $(menuItems)
                                .parent().removeClass("active")
                                .end().filter("[href='#" + id + "']").parent().addClass("active");
                        }
                    }
                    else {
                        var nm = $("html").scrollTop();
                        var nw = $("body").scrollTop();
                        var fromTop = (nm > nw ? nm : nw) + topOffset;
                        // When the page pass one #id section, return all passed sections to scrollItems and save them into new array current
                        var current = $(scrollItems).map(function () {
                            if ($(this).offset().top <= fromTop)
                                return this;
                        });
                        // Get the most recent passed section from current array
                        current = current[current.length - 1];
                        var id = current && current.length ? current[0].id : "";
                        if (lastId !== id) {
                            lastId = id;
                            // Set/remove active class
                            $(menuItems)
                                .parent().removeClass("active")
                                .end().filter("[href='#" + id + "']").parent().addClass("active");
                        }
                    }
                }
                // Execute on load
                checkWidth();
                // Bind event listener
                $(window).resize(checkWidth);
            });
        }
    });
}
function responsiveMenu(){
  if(jQuery(window).width() < 768) {
    $('.product-filter-column').prependTo('.product-heading-row .container .row');
  }
  else { 
    $('.product-filter-column').prependTo('.product-list-row');
  }
}
jQuery(document).ready(function() {
  responsiveMenu();
});
jQuery(window).resize(function() {
  responsiveMenu();
});
function countDownIni(countdown) {
  $(countdown).each(function () {
    var countdown = $(this);
    var promoperiod;
    if (countdown.attr('data-promoperiod')) {
      promoperiod = new Date().getTime() + parseInt(countdown.attr('data-promoperiod'), 10);
    } else if (countdown.attr('data-countdown')) {
      promoperiod = countdown.attr('data-countdown');
    }
    if (Date.parse(promoperiod) - Date.parse(new Date()) > 0) {
      $(this).addClass('countdown-block');
      countdown.countdown(promoperiod, function (event) {
        // countdown.html(event.strftime('%-w weeks %-d days %Hh %Mm %Ss'));
        countdown.html(event.strftime('<span><span>%D</span><span class="dots"> : </span></span>' + '<span><span>%H</span><span class="dots"> : </span></span>' + '<span><span>%M</span><span class="dots"> : </span></span>' + '<span><span class="second">%S</span></span>'));
      });
    }

  });
}