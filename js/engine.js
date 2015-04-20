// JavaScript Document
$(document).ready(function () {
    /*slider*/

    $('.bxslider').bxSlider({
        mode: 'fade',
        pager: true,
        controls: false,
        responsive: true,
        pause: 3000,
        // auto: true,
        //autoControls: true,

    });

    /*carousel*/

    $('.bxcarousel').bxSlider({
        //mode: 'fade',
        pager: false,
        controls: true,
        responsive: true,
        //pause: 3000,
        minSlides: 6,
        maxSlides: 6,
        moveSlides: 1,
        slideWidth: 195,
        //auto: true,
        //autoControls: true, 

    });


    /*carousel*/

    /*gallary*/
    $('.bxproject').bxSlider({
        pagerCustom: '#bx-pager'

    });
    /*color picture*/
    /*
     $(window).load(function() {
     $('.imglist img').each(function() {
     $(this).wrap('<div style="display:inline-block;width:' + this.width + 'px;height:' + this.height + 'px;">').clone().addClass('gotcolors').css({'position': 'absolute', 'opacity' : 0 }).insertBefore(this);
     this.src = grayscale(this.src);
     }).animate({opacity: 1}, 500);
     });
     
     // http://net.tutsplus.com/tutorials/javascript-ajax/how-to-transition-an-image-from-bw-to-color-with-canvas/
     function grayscale(src) {
     var supportsCanvas = !!document.createElement('canvas').getContext;
     if (supportsCanvas) {
     var canvas = document.createElement('canvas'), 
     context = canvas.getContext('2d'), 
     imageData, px, length, i = 0, gray, 
     img = new Image();
     
     img.src = src;
     canvas.width = img.width;
     canvas.height = img.height;
     context.drawImage(img, 0, 0);
     
     imageData = context.getImageData(0, 0, canvas.width, canvas.height);
     px = imageData.data;
     length = px.length;
     
     for (; i < length; i += 4) {
     gray = px[i] * .3 + px[i + 1] * .59 + px[i + 2] * .11;
     px[i] = px[i + 1] = px[i + 2] = gray;
     }
     
     context.putImageData(imageData, 0, 0);
     return canvas.toDataURL();
     } else {
     return src;
     }
     }
     /*for project*/

    /*$(".imglist .project-item").hover(
     function() {
     $(this).find('.gotcolors').stop().animate({opacity: 1}, 200);
     }, 
     function() {
     $(this).find('.gotcolors').stop().animate({opacity: 0}, 500);
     }
     );
     
     
     
     $(".imglist .image").hover(
     function() {
     $(this).find('.gotcolors').stop().animate({opacity: 1}, 200);
     }, 
     function() {
     $(this).find('.gotcolors').stop().animate({opacity: 0}, 500);
     }
     );
     
     
     $(".imglist li").hover(
     function() {
     $(this).find('.gotcolors').stop().animate({opacity: 1}, 200);
     }, 
     function() {
     $(this).find('.gotcolors').stop().animate({opacity: 0}, 500);
     }
     );
     */
    /*gallary*/
    $('.bxgallary').bxSlider({
        //mode: 'fade',
        pager: false,
        controls: true,
        responsive: true,
        //pause: 3000,
        minSlides: 5,
        maxSlides: 5,
        moveSlides: 1,
        slideWidth: 240,
        //auto: true,
        //autoControls: true, 
    });


    /*pop up*/
    $(function () {
        //script for popups
        $('.show_popup').click(function () {
            $('div.' + $(this).attr("class")).fadeIn(500);
            $("body").append("<div id='overlay'></div>");
            $('#overlay').show().css({'filter': 'alpha(opacity=80)'});
            return false;
        });
        $('a.close').click(function () {
            $(this).parent().fadeOut(100);
            $('#overlay').remove('#overlay');
            return false;
        });


    });




    /*project menu*/

    /**/

    $(".project-item-link").hover(
            function () {
                $(this).next(".description-project").show("slow");
            },
            function () {
                $(this).next(".description-project").hide("slow");
            }
    );





    /*project menu*/
    /*$(".link-item").click(function () {
     $(this).next(".project-holder").toggle("slow");
     $(this).siblings(".link-item").next(".project-holder").hide("slow");
     });
     
     */
    /*portfolio scroll*/
    $(".link-item").click(function () {
        
        $(this).siblings(".link-item").next(".project-holder").hide();
        $(this).next(".project-holder").toggle("slow");
       //$(this).stop();
        $('html, body').animate({
            scrollTop: parseInt($(this).offset().top)
        }, 0);

    });


    /*menu link portfolio*/
    /*
     function $_GET(name) {
     name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
     var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
     results = regex.exec(location.search);
     return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
     }
     */

    //close-open menu 
//


    $("#open-close").click(
            function () {
                $(this).toggleClass("active");

                $("ul#menu-top-nav").toggle();
                return false;
            },
            function () {
                $(this).toggleClass("active");

                $("ul#menu-top-nav").toggle();
                return false;
            }
    );
    
        $(".sub-menu").parents("li").addClass("with-sub-menu");
        
         $(".main-nav>.nav>li.with-sub-menu").hover(
            function () {
                $("#sub-menu-bg").toggleClass("active");
                $(".main-nav>.nav>li.with-sub-menu").toggleClass("active");
                return false;
            },
            function () {
               $("#sub-menu-bg").toggleClass("active");
              $(".main-nav>.nav>li.with-sub-menu").toggleClass("active");
                return false;
            }
    );
        
     /* 
        $(".main-nav>.nav>li.with-sub-menu").hover(
            function () {
                $("#sub-menu-bg").animate({height: "41px"}, 300);
                $(".main-nav>.nav>li.with-sub-menu").children(".sub-menu").show(200);
                return false;
            },
            function () {
               $("#sub-menu-bg").animate({height: "0px"}, 300);
              $(".main-nav>.nav>li.with-sub-menu").children(".sub-menu").hide();
                return false;
            }
    );*/




    // $("#level-2").hide();
    // $(".sub-menu > li ").hover(
     //        function () {
     //            $(this).toggleClass("active");
     //            return false;
      //       },
      //       function () {
      //           $(this).toggleClass("active");
       //          return false;
      //       }
    // );




    if (location.hash && location.hash != '#') {
       $(location.hash).next(".project-holder").toggle("slow");
        $('html, body').animate({
            scrollTop: parseInt($(location.hash).offset().top)
        },
        1000);
    }

});



