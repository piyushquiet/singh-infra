var wow = new WOW({
  offset:100,        // distance to the element when triggering the animation (default is 0)
  mobile:false       // trigger animations on mobile devices (default is true)
});
wow.init();


  // Repeat demo content
  var $body = $('body');
  var $box = $('.box');
  for (var i = 0; i < 20; i++) {
    $box.clone().appendTo($body);
  }

  // Helper function for add element box list in WOW
  WOW.prototype.addBox = function(element) {
    this.boxes.push(element);
  };

  // Init WOW.js and get instance
  var wow = new WOW();
  wow.init();

  // Attach scrollSpy to .wow elements for detect view exit events,
  // then reset elements and add again for animation
  $('.wow').on('scrollSpy:exit', function() {
    $(this).css({
      'visibility': 'hidden',
      'animation-name': 'none'
    }).removeClass('animated');
    wow.addBox(this);
  }).scrollSpy();


$(window).scroll(function(){
    if ($(window).scrollTop() >= 50) {
        $('.navbar').addClass('fixed-header');
		$('.logo').addClass('logo-small'); 
		$('.navbar-light').addClass('bg-light');
    }
    else {
        $('.navbar').removeClass('fixed-header');
		$('.logo').removeClass('logo-small'); 
		$('.navbar-light').removeClass('bg-light'); 
    }
});
/*Iframe*/
$(".VideoPopup").on('hidden.bs.modal', function (e) {
	$(".VideoPopup iframe").attr("src",   $(".VideoPopup iframe").attr("src"));
});
$(document).ready(function() {
	$('#videoModal').on('hidden.bs.modal', function() {
	  var $this = $(this).find('iframe'),
		tempSrc = $this.attr('src');
	  $this.attr('src', "");
	  $this.attr('src', tempSrc);
	});
  
	$('#html5Video').on('hidden.bs.modal', function() {
	  var html5Video = document.getElementById("htmlVideo");
	  if (html5Video != null) {
		html5Video.pause();
		html5Video.currentTime = 0;
	  }
	});
  });


$(function() {
  $(".video").click(function () {
    var theModal = $(this).data("target"),
    videoSRC = $(this).attr("data-video"),
    videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
    $(theModal + ' iframe').attr('src', videoSRCauto);
    $(theModal + ' button.close').click(function () {
      $(theModal + ' iframe').attr('src', videoSRC);
    });
  });
});
/*Iframe*/

 //Get the button
 var mybutton = document.getElementById("scrollBtn");
 window.onscroll = function() {scrollFunction()};
 function scrollFunction() {
   if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
	 mybutton.style.display = "block";
   } else {
	 mybutton.style.display = "none";
   }
 }
 function topFunction() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
 }

  //Multilevel Dropdown menu
  document.addEventListener("DOMContentLoaded", function(){
    // make it as accordion for smaller screens
    if (window.innerWidth < 992) {
    
      // close all inner dropdowns when parent is closed
      document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown){
        everydropdown.addEventListener('hidden.bs.dropdown', function () {
          // after dropdown is hidden, then find all submenus
            this.querySelectorAll('.submenu').forEach(function(everysubmenu){
              // hide every submenu as well
              everysubmenu.style.display = 'none';
            });
        })
      });
    
      document.querySelectorAll('.dropdown-menu a').forEach(function(element){
        element.addEventListener('click', function (e) {
            let nextEl = this.nextElementSibling;
            if(nextEl && nextEl.classList.contains('submenu')) {	
              // prevent opening link if link needs to open dropdown
              e.preventDefault();
              if(nextEl.style.display == 'block'){
                nextEl.style.display = 'none';
              } else {
                nextEl.style.display = 'block';
              }
    
            }
        });
      })
    }
    // end if innerWidth
    }); 
    // DOMContentLoaded  end

    //Humburger animation
    $('.toggle-wrap').click(function() {
      $( this ).toggleClass( "active" );
    });
      $(document).ready(function(){
        $(".toggle-wrap").click(function(){
            $(".toggle-bar").toggleClass("show");
        });
    });
    //Humburger animation

    //Humburger animation
    $('.burger-menu').click(function() {
      $( this ).toggleClass( "active" );
    });
      $(document).ready(function(){
        $(".burger-menu").click(function(){
            $(".navbar-nav").toggleClass("show");
        });
    });
    //Humburger animation

  $('.our-projects').owlCarousel({
    autoplay: 5000,
    loop: true,
    margin:20,
    nav: true,
    dots: false,
    autoHeight : true,
    navText: ['<span class="arrow-left"><img src="./images/arrow-left.svg" alt=""></span>','<span class="arrow-right"><img src="./images/arrow-right.svg" alt=""></span>'],
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:2
        }
    }
  });

  $('.key-projects').owlCarousel({
    loop: false,
    margin:20,
    nav: true,
    dots: false,
    autoplay:false,
    autoHeight : true,
    navText: ['<span class="arrow-left"><img src="./images/arrow-left.svg" alt=""></span>','<span class="arrow-right"><img src="./images/arrow-right.svg" alt=""></span>'],
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:2
        }
    }
  });

  
  $('#key-projects2').owlCarousel({
    loop: true,
    margin:20,
    nav: true,
    dots: false,
    autoplay:false,
    autoHeight : true,
    navText: ['<span class="arrow-left"><img src="./images/arrow-left.svg" alt=""></span>','<span class="arrow-right"><img src="./images/arrow-right.svg" alt=""></span>'],
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:2
        }
    }
  });

  $('.de_doted01_owl').owlCarousel({
    margin:0,
    nav: false,
    dots: true,
    autoplay:false,
    items:1,
    loop: true,
  });

  $('.de_doted02_owl').owlCarousel({
    margin:0,
    nav: false,
    dots: true,
    autoplay:false,
    items:1,
    loop: false,
  });

  $('.mono_type_owl').owlCarousel({
    autoplay: false,
    loop: true,
    margin:0,
    nav: true,
    dots: false,
    autoHeight : true,
    navText: ['<span class="arrow-left"><img src="./images/arrow-left.svg" alt=""></span>','<span class="arrow-right"><img src="./images/arrow-right.svg" alt=""></span>'],
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3
        }
    }
  });

  $('#wcm_icon_owl').owlCarousel({
    autoplay: true,
    loop: true,
    margin:0,
    nav: true,
    dots: false,
    autoHeight : false,
    navText: ['<span class="arrow-left"><img src="./images/arrow-left.svg" alt=""></span>','<span class="arrow-right"><img src="./images/arrow-right.svg" alt=""></span>'],
    responsive:{
        0:{
            items:1,
        },
        600:{
          items:2,
        },
        750:{
            items:3,
        },
        1000:{
            items:4
        }
    }
  });

  $('.top_bnr_owl').owlCarousel({
    autoplay: 5000,
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    items:1,
    autoHeight : true,
    //navText: ['<span class="arrow-left"><img src="./images/arrow-left.svg" alt=""></span>','<span class="arrow-right"><img src="./images/arrow-right.svg" alt=""></span>'],
    
  });

  
  $('#wcMob_bnr1').owlCarousel({
    autoplay: false,
    loop: true,
    margin:0,
    nav: true,
    dots: false,
    autoHeight : false,
    navText: ['<span class="arrow-left"><img src="./images/arrow-left.svg" alt=""></span>','<span class="arrow-right"><img src="./images/arrow-right.svg" alt=""></span>'],
    items:1,
  });

  $('#wcMob_bnr2').owlCarousel({
    autoplay: false,
    loop: true,
    margin:0,
    nav: true,
    dots: false,
    autoHeight : false,
    navText: ['<span class="arrow-left"><img src="./images/arrow-left.svg" alt=""></span>','<span class="arrow-right"><img src="./images/arrow-right.svg" alt=""></span>'],
    items:1,
  });

  $('#wcMob_bnr3').owlCarousel({
    autoplay: false,
    loop: true,
    margin:0,
    nav: true,
    dots: false,
    autoHeight : true,
    navText: ['<span class="arrow-left"><img src="./images/arrow-left.svg" alt=""></span>','<span class="arrow-right"><img src="./images/arrow-right.svg" alt=""></span>'],
    items:1,
  });

  $('#wcMob_bnr4').owlCarousel({
    autoplay: false,
    loop: true,
    margin:0,
    nav: true,
    dots: false,
    autoHeight : false,
    navText: ['<span class="arrow-left"><img src="./images/arrow-left.svg" alt=""></span>','<span class="arrow-right"><img src="./images/arrow-right.svg" alt=""></span>'],
    items:1,
  });

  $('.mono_client_slide').owlCarousel({
    autoplay: 4000,
    loop: true,    
    dots: false,
    nav: true,
    responsive:{
        0:{
            items:1,
            margin:10,
        },
        600:{
            items:3,
            margin:15,
        },
        900:{
            items:4,
            margin:25,
        },
        1400:{
            items:4,
            margin:50,
        }
    }
  });

  $('.mono_sutbx_owl').owlCarousel({
    autoplay: 4000,
    loop: true,    
    dots: false,
    nav: true,
    items:1,
  });

  $('.icons_bl_owl').owlCarousel({
    autoplay: 4000,
    loop: true,    
    dots: false,
    nav: true,
    items:1,
  });

  $('.blogs').owlCarousel({
    autoplay: false,
    loop: true,
    margin:20,
    nav: true,
    dots: false,
    autoHeight : true,
    stagePadding: 0,
    navText: ['<span class="arrow-left"><img src="./images/arrow-left.svg" alt=""></span>','<span class="arrow-right"><img src="./images/arrow-right.svg" alt=""></span>'],
    responsive:{
        0:{
            items:1,
            //stagePadding: 10,
        },
        600:{
            items:1,
            //stagePadding: 100,
        },
        1000:{
            items:2,
            //stagePadding: 150,
        },
        1500:{
            items:2,
            //stagePadding: 250,
        }
    }
  });

  $('#wcm_mu_bnr').owlCarousel({
    loop: true,
    margin:20,
    nav: true,
    dots: false,
    autoplay: true,
    autoHeight : true,
    navText: ['<span class="arrow-left"><img src="./images/arrow-left.svg" alt=""></span>','<span class="arrow-right"><img src="./images/arrow-right.svg" alt=""></span>'],
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:2
        }
    }
  });


  $(document).ready(() => {
    $('.nav-tabs').scrollingTabs({
      bootstrapVersion: 4,
      scrollToTabEdge: true,
      cssClassLeftArrow: 'fa fa-angle-left',
      cssClassRightArrow: 'fa fa-angle-right',
    }).on('ready.scrtabs', () => {
      $('.nav-link').click(() => {
        setTimeout(() => {
          $('.nav-tabs').scrollingTabs('scrollToActiveTab');
        }, 10);
      });
    });
  });


  $(document).ready(function(){
    
    $("a.dropdown-toggle").click(function(){
        $(this).parent().find("ul.dropdown-menu").toggleClass("navopened");
        $(this).toggleClass("iconupdate");
    });

    // <a class="lb-close"></a>
    $('<a class="lb-close lb_close_js"></a>').appendTo('#lightbox .lb-outerContainer');
    $( ".lb_close_js" ).on( "click", function() {
      $(".lb-closeContainer a.lb-close").click();
    });

  });


  



  function screensize() {

    mono_ts_block_li = $("ul.mono_ts_block>li").innerWidth();
    $("ul.mono_ts_block>li").css("height", mono_ts_block_li);

    mono_ts_block_li_3clm = $("ul.set3clm li").innerWidth();
    $("ul.set3clm li").css("height", mono_ts_block_li_3clm);

    mono_ts_block_li_2clm = $("ul.set2clm li").innerWidth();
    $("ul.set2clm li").css("height", mono_ts_block_li_2clm);

    mono_ts_block_li_4clm = $("ul.set4clm li").innerWidth();
    $("ul.set4clm li").css("height", mono_ts_block_li_4clm);

    lpm_number_set = $("ul.lpm_number_set_js li").innerWidth();
    $("ul.lpm_number_set_js li").css("height", lpm_number_set);
    
    stp_number_set = $("ul.stp_number_set_js li").innerWidth();
    $("ul.stp_number_set_js li").css("height", stp_number_set);
    

    window_width = $(window).innerWidth();
    if(window_width > 1030) {
      text_resize_js = $(".text_resize_js").innerHeight();
      $(".image_resize_js").css("height", (text_resize_js));
    }else{
      $(".image_resize_js").css("height", "auto");
    }

  }
    //power_transmission page nav MOB action
    
      $(".ptp_menu").click(function(){
        if(window_width < 767) {    
          if($(this).hasClass("ptp_iocn")){
            //console.log("opened");
            $(".ptp_menu").removeClass("ptp_iocn");
            $(".ptp_submenu").removeClass("ptp_opened");
          }else{
            //console.log("not_opened");
            $(".ptp_menu").removeClass("ptp_iocn");
            $(".ptp_submenu").removeClass("ptp_opened");
            $(this).parent().find(".ptp_submenu").toggleClass("ptp_opened");
            $(this).toggleClass("ptp_iocn");
          }
        }
      });
      $(".ptp_submenu a").click(function(){
        if(window_width < 767) { 
          $(".ptp_menu").removeClass("ptp_iocn");
          $(".ptp_submenu").removeClass("ptp_opened");
        }       
      });
    
    
  
  
  $( document ).ready(function() {
    screensize();	
  });
  $( window ).resize(function() {
    screensize();
  });


  function imagetool01(e) {
    var x = e.clientX+15;
    var y = e.clientY+15;
    document.getElementById("iso01").style.left = x + "px";
    document.getElementById("iso01").style.top = y + "px";
    document.getElementById("iso01").style.opacity = 1;
  }
  function imagetool02(e) {
    var x = e.clientX+15;
    var y = e.clientY+15;
    document.getElementById("iso02").style.left = x + "px";
    document.getElementById("iso02").style.top = y + "px";
    document.getElementById("iso02").style.opacity = 1;
  }
  function imagetool03(e) {
    var x = e.clientX+15;
    var y = e.clientY+15;
    document.getElementById("iso03").style.left = x + "px";
    document.getElementById("iso03").style.top = y + "px";
    document.getElementById("iso03").style.opacity = 1;
  }
  function imagetool04(e) {
    var x = e.clientX+15;
    var y = e.clientY+15;
    document.getElementById("iso04").style.left = x + "px";
    document.getElementById("iso04").style.top = y + "px";
    document.getElementById("iso04").style.opacity = 1;
  }
  function imagetooloff() {
    $(".iso_cert").removeAttr("style");
  }



  $('#aboutAwards').owlCarousel({
    loop: false,
    margin:20,
    nav: true,
    dots: false,
    autoplay: true,
    autoHeight : true,
    navText: ['<span class="arrow-left"><img src="./images/arrow-left.svg" alt=""></span>','<span class="arrow-right"><img src="./images/arrow-right.svg" alt=""></span>'],
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:4
        }
    }
  });

  

  $('#aboutClient').owlCarousel({
    loop: false,
    margin:0,
    nav: true,
    dots: false,
    autoplay: false,
    autoHeight : true,
    navText: ['<span class="arrow-left"><img src="./images/arrow-left.svg" alt=""></span>','<span class="arrow-right"><img src="./images/arrow-right.svg" alt=""></span>'],
    items:1,
  });

  $('#aboutDirectorsMob').owlCarousel({
    loop: true,
    margin:0,
    nav: true,
    dots: false,
    autoplay: false,
    autoHeight : true,
    navText: ['<span class="arrow-left"><img src="./images/arrow-left.svg" alt=""></span>','<span class="arrow-right"><img src="./images/arrow-right.svg" alt=""></span>'],
    items:1,
  });  

  $('#aboutDirectors2Mob').owlCarousel({
    loop: true,
    margin:0,
    nav: true,
    dots: false,
    autoplay: false,
    autoHeight : true,
    navText: ['<span class="arrow-left"><img src="./images/arrow-left.svg" alt=""></span>','<span class="arrow-right"><img src="./images/arrow-right.svg" alt=""></span>'],
    items:1,
  }); 




  (function () {
    // VARIABLES
    const timeline = document.querySelector(".timeline ol"),
      elH = document.querySelectorAll(".timeline li > div"),
      arrows = document.querySelectorAll(".timeline .arrows .arrow"),
      arrowPrev = document.querySelector(".timeline .arrows .arrow__prev"),
      arrowNext = document.querySelector(".timeline .arrows .arrow__next"),
      firstItem = document.querySelector(".timeline li:first-child"),
      lastItem = document.querySelector(".timeline li:last-child"),
      xScrolling = 280,
      disabledClass = "disabled";
  
    // START
    window.addEventListener("load", init);
  
    function init() {
      setEqualHeights(elH);
      animateTl(xScrolling, arrows, timeline);
      setSwipeFn(timeline, arrowPrev, arrowNext);
      setKeyboardFn(arrowPrev, arrowNext);
    }
  
    // SET EQUAL HEIGHTS
    function setEqualHeights(el) {
      let counter = 0;
      for (let i = 0; i < el.length; i++) {
        const singleHeight = el[i].offsetHeight;
  
        if (counter < singleHeight) {
          counter = singleHeight;
        }
      }
  
      for (let i = 0; i < el.length; i++) {
        el[i].style.height = `${counter}px`;
      }
    }
  
    // CHECK IF AN ELEMENT IS IN VIEWPORT
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    // SET STATE OF PREV/NEXT ARROWS
    function setBtnState(el, flag = true) {
      if (flag) {
        el.classList.add(disabledClass);
      } else {
        if (el.classList.contains(disabledClass)) {
          el.classList.remove(disabledClass);
        }
        el.disabled = false;
      }
    }
  
    // ANIMATE TIMELINE
    function animateTl(scrolling, el, tl) {
      let counter = 0;
      for (let i = 0; i < el.length; i++) {
        el[i].addEventListener("click", function () {
          if (!arrowPrev.disabled) {
            arrowPrev.disabled = true;
          }
          if (!arrowNext.disabled) {
            arrowNext.disabled = true;
          }
          const sign = this.classList.contains("arrow__prev") ? "" : "-";
          if (counter === 0) {
            tl.style.transform = `translateX(-${scrolling}px)`;
          } else {
            const tlStyle = getComputedStyle(tl);
            // add more browser prefixes if needed here
            const tlTransform =
              tlStyle.getPropertyValue("-webkit-transform") ||
              tlStyle.getPropertyValue("transform");
            const values =
              parseInt(tlTransform.split(",")[4]) +
              parseInt(`${sign}${scrolling}`);
            tl.style.transform = `translateX(${values}px)`;
          }
  
          setTimeout(() => {
            isElementInViewport(firstItem)
              ? setBtnState(arrowPrev)
              : setBtnState(arrowPrev, false);
            isElementInViewport(lastItem)
              ? setBtnState(arrowNext)
              : setBtnState(arrowNext, false);
          }, 1100);
  
          counter++;
        });
      }
    }
  
    // ADD SWIPE SUPPORT FOR TOUCH DEVICES
    function setSwipeFn(tl, prev, next) {
      const hammer = new Hammer(tl);
      hammer.on("swipeleft", () => next.click());
      hammer.on("swiperight", () => prev.click());
    }
  
    // ADD BASIC KEYBOARD FUNCTIONALITY
    function setKeyboardFn(prev, next) {
      document.addEventListener("keydown", (e) => {
        if (e.which === 37 || e.which === 39) {
          const timelineOfTop = timeline.offsetTop;
          const y = window.pageYOffset;
          if (timelineOfTop !== y) {
            window.scrollTo(0, timelineOfTop);
          }
          if (e.which === 37) {
            prev.click();
          } else if (e.which === 39) {
            next.click();
          }
        }
      });
    }
  })();
  