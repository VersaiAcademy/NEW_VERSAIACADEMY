jQuery(document).ready(function($) {
    "use strict";



    /**-------------------------------------------------
     *Fixed Header
     *----------------------------------------------------**/
    if ($('.header').length > 0) {
        var previousScroll = 0,
            headerOrgOffset = $('.header').offset().top;

        if ($(window).width() > 1200) {
            $(window).scroll(function() {
                var currentScroll = $(this).scrollTop();
                if (currentScroll > headerOrgOffset) {
                    if (currentScroll > previousScroll) {
                        $('.navbar-sticky').removeClass('sticky fade_down_effect');
                    } else {
                        $('.navbar-sticky').addClass('sticky fade_down_effect');
                    }
                } else {
                    $('.navbar-sticky').removeClass('sticky fade_down_effect');
                }
                previousScroll = currentScroll;
            });

        }
    }


    /* ----------------------------------------------------------- */
    /*  Mobile Menu
    /* ----------------------------------------------------------- */
    $('.dropdown > a').on('click', function(e) {
        e.preventDefault();
        if ($(window).width() > 991) {
            location.href = this.href;
        }
        var dropdown = $(this).parent('.dropdown');
        dropdown.find('>.dropdown-menu').slideToggle('show');
        $(this).toggleClass('opened');
        return false;
    });



    /* ----------------------------------------------------------- */
    /*  Back to top
    /* ----------------------------------------------------------- */

    $(window).on('scroll', function() {
        if ($(window).scrollTop() > $(window).height()) {
            $(".BackTo").fadeIn('slow');
        } else {
            $(".BackTo").fadeOut('slow');
        }

    });
    $("body, html").on("click", ".BackTo", function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });


   

    if ($('.single-course, .tutor-course').length > 0) {
        $(".single-course .course-shap, .tutor-course .course-shap").each(function() {
            var img = $(this);
            var attributes = img.prop("attributes");
            var imgURL = img.attr("src");
            $.get(imgURL, function(data) {
                var svg = $(data).find('svg');
                svg = svg.removeAttr('xmlns:a');
                $.each(attributes, function() {
                    svg.attr(this.name, this.value);
                });
                img.replaceWith(svg);
            });
        });

    }

    /*====================================
        Accademic Program SVG Shape 
    ====================================== */

    if ($('.ts-academic .single-course').length > 0) {
        $(".ts-academic .single-course .course-shap").each(function() {
            var img = $(this);
            var attributes = img.prop("attributes");
            var imgURL = img.attr("src");
            $.get(imgURL, function(data) {
                var svg = $(data).find('svg');
                svg = svg.removeAttr('xmlns:a');
                $.each(attributes, function() {
                    svg.attr(this.name, this.value);
                });
                img.replaceWith(svg);
            });
        });

    }


    /*==========================================================
        learn press user setting frontend 
    ======================================================================*/
    if ($('.social_repeater').length) {
        $('.social_repeater').repeater();
    }

    /*==========================================================
                    Instructor Follow 
    ======================================================================*/
    if ($('.ts-follow-instructor').length) {
        $('.ts-follow-instructor').on('click', function() {

            var user_id = $(this).data('user-id');
            var follow_ele = $(this);
            var login = Boolean(courselog_obj.logged_in);

            if (login) {

                $.ajax({
                    url: courselog_obj.ajax_url,
                    type: 'POST',
                    data: { "action": "instructor_follow", 'instructor_id': user_id },
                    success: function(response) {

                        $(follow_ele).text('Following');
                    },

                });
            } else {
                var login_text = "<div class='courselog_user_not_loggedin'>" + courselog_obj.message_login + "</div>";
                $(follow_ele).parent().append(login_text);
            }


        });
    }


    

    /*==========================================================
                  Trending course archive 
    ======================================================================*/

    if ($('.trending_course').length > 0) {
        var items = parseInt($('.trending_course').data('count'));
        var autoslide = Boolean($('.trending_course').data('autoplay'));
        var navShow = Boolean($('.trending_course').data('nav'));
        var dot_nav_show = Boolean($('.trending_course').data('dot'));

        $('.trending_course').owlCarousel({
            items: items || 1,
            loop: false,
            autoplay: autoslide,
            nav: navShow,
            dots: dot_nav_show,
            autoplayHoverPause: true,
            mouseDrag: true,
            smartSpeed: 1100,
            margin: 30,
            navText: ['<i class="tsicon tsicon-left_arrow">', '<i class="tsicon tsicon-right_arrow">'],
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                },
                600: {
                    items: 1,
                    nav: false,
                },
                768: {
                    items: 2,
                    nav: false,
                },
                1000: {
                    nav: navShow,
                    items: items || 1,
                }
            }
        });

    }

    /*==========================================================
                   Course category filter
        ======================================================================*/

    if ($(".archive-cat-title").length > 0) {
        $(".archive-cat-title").click(function() {
            $(".course-category-filter").slideToggle("slow", function() {});
        });
    }

    if ($(".archive-skill-title").length > 0) {
        $(".archive-skill-title").click(function() {
            $(".course-skill-filter").slideToggle("slow", function() {});
        });
    }

    /*=======================
        Gallery popup
    ========================= */

    if ($('.ts-gallery-popup').length > 0) {
        $('.ts-gallery-popup').magnificPopup({
            type: 'image',
            mainClass: 'mfp-with-zoom',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it

                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function

                opener: function(openerElement) {
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    }
    // video popup 

    if ($('.ts-video-popup').length > 0) {
        $('.ts-video-popup').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-with-zoom',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it
                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function
            }
        });
    }

    /*==========================================================
                  Preloader
 ======================================================================*/
    $(window).on('load', function() {

        setTimeout(() => {
            $('#preloader').addClass('loaded');
        }, 1000);

    });
    // preloader close
    $('.preloader-cancel-btn').on('click', function(e) {
        e.preventDefault();
        if (!($('#preloader').hasClass('loaded'))) {
            $('#preloader').addClass('loaded');
        }
    });


    /*==========================================================
                     Loadmore
    ======================================================================*/


    $('body').on('click', '.loadmore', function() {
        var _self = $(this);
        var paged = parseInt(_self.attr('data-paged'));
        var posts_per_page = _self.attr('data-posts_per_page');
        var order = _self.attr('data-order');
        var cat_id = _self.attr('data-cat_id');

        var data = {
            'action': 'load_posts_by_ajax',
            'paged': paged,
            'posts_per_page': posts_per_page,
            'order': order,
            'cat_id': cat_id,
            'security_nonce': courselog_obj.security
        };

        $.post(courselog_obj.ajax_url, data, function(response) {
            if ($.trim(response) != '') {
                $('.course-single-wrap').append(response);
                paged++;
                console.log(paged);
                _self.attr('data-paged', paged);
            } else {
                $('.loadmore').hide();
            }
        });
    });


    if(courselog_obj.blog_sticky_sidebar == 'yes' && $('#sidebar').length>0){
               
        var top = $('#sidebar').offset().top - parseFloat($('#sidebar').css('marginTop').replace(/auto/, 0));
        var footTop = null;
        if($('.newsletter-area').length>0){
                footTop = $('.newsletter-area').offset().top - parseFloat($('.newsletter-area').css('marginTop').replace(/auto/, 0));
        } else if($('.ts-footer').length>0){
            footTop = $('.ts-footer').offset().top - parseFloat($('.ts-footer').css('marginTop').replace(/auto/, 0));
        }
        else{
            footTop = $('.copy-right').offset().top - parseFloat($('.copy-right').css('marginTop').replace(/auto/, 0));  
        }
           
    
        var maxY = footTop - $('#sidebar').outerHeight();
    
        $(window).scroll(function(evt) {
            var y = $(this).scrollTop();

            if($(window).width() > 991)
            {
            if (y > top) {

                if (y < maxY) {
                        $('#sidebar').addClass('fixed').removeAttr('style');
                } else {
                        
    
                        $('#sidebar').removeClass('fixed').css({
                        
                            top: (maxY - top) + 'px',
                            position: 'relative',
                        });
                }
                } else {
    
                $('#sidebar').removeClass('fixed');
                }
            }
            
        });
    }

    // archive load more

    if ($('.show-more-list').length) {
        let first_item = $('.first_item'),
            href = first_item.find('> a').attr('href');

        if (!first_item.hasClass('active')) {
            if (href === window.location.href) {
                first_item.addClass('active');
            } else {
                first_item.removeClass('active');
            }
        }


        let $this = $('.show-more-list');
        $this.each(function () {
            let data_height = 0,
                total_items_height = 0,
                items_height = 0;


            $(this).find('> li').each(function (i) {
                items_height = $(this).outerHeight();
                if (items_height) {
                    data_height += items_height;
                    if (i <= 3) {
                        return total_items_height += items_height;
                    }
                }
            })


            $(this).attr('data-height', data_height);
            $(this).attr('items-height', total_items_height);

            let data_attr_height = $(this).attr('data-height'),
                data_attr_items_height = $(this).attr('items-height');

            if (data_attr_height > data_attr_items_height) {
                $(this).css({"height": data_attr_items_height});

                $(this).parents('.show-more-list-wrap').find('.show-more').on('click', function () {
                    $(this).parents('.show-more-list-wrap').find('.gradient_shade_area').hide();
                    $(this).hide();
                    $(this).parents('.show-more-list-wrap').find('.show-more-list').css('height', 'auto');
                })
            }
        })
    }


    /*================================
      // countdown 
    ===================================*/
    var main_block = $(".count_down_block")
    if ( main_block.length > 0 ) {
        count_down($, main_block); 
    }

});

// coundown function
function count_down($, $scope) {
    var $container = $scope.find('.etn-event-countdown-wrap');
    var date_texts   = $container.data('date-texts');

    var day_text = date_texts.day;
    var hour_text = date_texts.hr;
    var min_text = date_texts.min;
    var second_text = date_texts.sec;
    var days_text = date_texts.days;
    var hours_text =  date_texts.hrs;
    var mins_text = date_texts.mins;
    var seconds_text = date_texts.secs;

    if ($container.length > 0) {
        var targetDate = $container.data('start-date');
        var targetNode = $scope.find(".etn-countdown-parent");
        $(targetNode).countdown({
            date: targetDate,
            day: day_text,
            days: days_text,
            hour: hour_text,
            hours: hours_text,
            minute: min_text,
            minutes: mins_text,
            second: second_text,
            seconds: seconds_text,
            hideOnComplete: true
        }, function (container) {
            $scope.html("Expired");
        });
    }
}

    
