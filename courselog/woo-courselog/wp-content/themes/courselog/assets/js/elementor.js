(function ($, elementor) {
   "use strict";
   
   var Courselog = {
      init: function () {
         var widgets = {
            'courselog-course.default': Courselog.Course_filter_mixcontent,
            'courselog-main-slider.default': Courselog.Main_Slider,
            'course-category.default': Courselog.Courselog_Category_Slider,
            'courselog-instructor.default': Courselog.Courselog_instructor,
            'courselog-product.default': Courselog.Product_filter_mixcontent,
            'product-category.default': Courselog.Courselog_Product_Category_Slider,
            'courselog-course-tab.default': Courselog.Course_Tab_Content,
         };
         $.each(widgets, function (widget, callback) {
            elementor.hooks.addAction('frontend/element_ready/' + widget, callback);
         });
      },
      /*===========================
        Course filter tab
      ============================= */
      Course_filter_mixcontent: function ($scope) {
         var $container = $scope.find('.ts-mix-tab-course');
         if(!$container.length){return;}

         $scope.find('.tab-course-category li').on('click',function() {
				$scope.find('.tab-course-category li').removeClass('active');
				$scope.find(this).addClass('active');
			});
         
         const options = {
            layout: 'sameSize', 
         };
         $container.filterizr(options);
      },

      /*===========================
        Product filter tab
      ============================= */
      Product_filter_mixcontent: function ($scope) {
         var $container = $scope.find('.ts-mix-tab-course');
         if(!$container.length){return;}
         
         $scope.find('.tab-course-category li').on('click',function() {
            $scope.find('.tab-course-category li').removeClass('active');
            $scope.find(this).addClass('active');
         });
         
         const options = {
            layout: 'sameSize', 
         };
         $container.filterizr(options);
      },
      // Main Slider
      Main_Slider: function ($scope) {
         var $container = $scope.find('.main-slider-style1');
         var conrol_data = $container.attr('data-controls');
         var autoslide = true;
         var navShow = true;
         var dot_nav_show = true;
         var ts_slider_speed = 5000;
         if (conrol_data) {
            var controls = JSON.parse($container.attr('data-controls'));
            navShow = Boolean(controls.show_nav ? true : false);
            autoslide = Boolean(controls.auto_nav_slide ? true : false);
            dot_nav_show = Boolean(controls.dot_nav_show ? true : false);
            ts_slider_speed = parseInt(controls.ts_slider_speed);
         }

         if ($container.length > 0) {
            $container.owlCarousel({
               items: 1,
               loop: true,
               autoplay: autoslide,
               nav: navShow,
               dots: dot_nav_show,
               autoplayTimeout: ts_slider_speed,
               autoplayHoverPause: true,
               mouseDrag: false,
               smartSpeed: 1100,
               navText: ['<i class="tsicon tsicon-left-arrow2">', '<i class="tsicon tsicon-right-arrow2">'],
               responsive: {
                  0: {
                     items: 1,
                     nav: false,
                  },
                  600: {
                     items: 1,
                     nav: false,
                  },
                  1000: {
                     nav: navShow,
                     mouseDrag: true
                  }
               }
            });
         }
         var $container2 = $scope.find('.main-slider-style3');
         var conrol_data = $container2.attr('data-controls');

         var autoslide = true;
         var navShow = true;
         var dot_nav_show = true;
         var ts_slider_speed = 5000;

         if (conrol_data) {
            var controls = JSON.parse($container2.attr('data-controls'));
            navShow = Boolean(controls.show_nav ? true : false);
            autoslide = Boolean(controls.auto_nav_slide ? true : false);
            dot_nav_show = Boolean(controls.dot_nav_show ? true : false);
            ts_slider_speed = parseInt(controls.ts_slider_speed);

         }

         if ($container2.length > 0) {
            $container2.owlCarousel({
               items: 1,
               loop: true,
               autoplay: autoslide,
               nav: navShow,
               animateIn: 'fadeIn',
               animateOut: 'fadeOut',
               dots: dot_nav_show,
               autoplayTimeout: ts_slider_speed,
               autoplayHoverPause: true,
               mouseDrag: false,
               smartSpeed: 1100,
               navText: ['<i class="tsicon tsicon-left-arrow2">', '<i class="tsicon tsicon-right-arrow2">'],
               responsive: {
                  0: {
                     items: 1,
                     nav: false,
                  },
                  600: {
                     items: 1,
                     nav: false,
                  },
                  1000: {
                     nav: navShow,
                     mouseDrag: true
                  }
               }

            });
         }
      },

      // instructor  Slider
      Courselog_instructor: function ($scope) {

         var $container = $scope.find('.instructor-slider');

         var controls_data = $container.attr('data-controls');

         var navShow = false;
         var autoslide = true;
         var dot_nav_show = true;
         var ts_slider_speed = 800;
         var ts_slider_count = 3;

         if (controls_data) {
            var controls = JSON.parse($container.attr('data-controls'));
            var navShow = Boolean(controls.show_nav ? true : false);
            var autoslide = Boolean(controls.auto_nav_slide ? true : false);
            var dot_nav_show = Boolean(controls.dot_nav_show ? true : false);
            var ts_slider_speed = parseInt(controls.ts_slider_speed);
            var ts_slider_count = parseInt(controls.ts_slider_count);
         }



         if ($container.length > 0) {
            $container.owlCarousel({
               items: ts_slider_count,
               loop: false,
               autoplay: autoslide,
               nav: navShow,
               dots: dot_nav_show,
               autoplayTimeout: ts_slider_speed,
               autoplayHoverPause: true,
               mouseDrag: false,
               margin: 30,
               smartSpeed: 1100,
               navText: ['<i class="tsicon tsicon-left-arrow2">', '<i class="tsicon tsicon-right-arrow2">'],
               responsive: {
                  0: {
                     items: 1,
                     nav: false,
                  },
                  600: {
                     items: 2,
                     nav: false,
                  },
                  1000: {
                     nav: false,
                     items: ts_slider_count,
                     mouseDrag: true
                  }
               }

            });
         }
      },

     // Category Slider
     Courselog_Category_Slider: function ($scope) {
         var $container = $scope.find('.category-slider');
         var controls_data = $container.attr('data-controls');
         var course_slider_nav_show = true;
         var course_slider_count = 5;
         if (controls_data) {
            var controls = JSON.parse($container.attr('data-controls'));
            var course_slider_nav_show = Boolean(controls.show_nav ? true : false);
            var course_slider_count = parseInt(controls.course_slider_count);
         }

         if ($container.length > 0) {
            $container.owlCarousel({
               items: 1,
               loop: true,
               autoplay: true,
               nav: false,
               dots: false,
               margin: 20,
               navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
               responsive: {
                  0: {
                     items: 1,
                  },
                  768: {
                     items: 3,
                  },
                  1024: {
                     items: course_slider_count,
                     nav: true,
                  },
               }
            });
         }
      },

      // Product Category Slider
      Courselog_Product_Category_Slider: function ($scope) {

      var $container = $scope.find('.product-category-slider');
      var controls_data = $container.attr('data-controls');
      var course_slider_nav_show = true;
      var course_slider_count = 3;
      if (controls_data) {
         var controls = JSON.parse($container.attr('data-controls'));
         var course_slider_nav_show = Boolean(controls.course_slider_nav_show ? true : false);
         var course_slider_count = parseInt(controls.course_slider_count);
      }

      if ($container.length > 0) {
         $container.owlCarousel({
            items: course_slider_count,
            loop: true,
            autoplay: false,
            nav: false,
            dots: false,
            margin: 20,
            navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
            responsive: {
               0: {
                  items: 1,
               },
               768: {
                  items: 2,
               },
               1100: {
                  items: course_slider_count,
                  nav: course_slider_nav_show,
               },
            }

         });
      }
   },

   // Course Tab
   Course_Tab_Content: function ($scope) {
      var $container = $scope.find('.courses-tabs');
      $container.on( 'click', '.course-tab-a', function( event ) {
         event.preventDefault();

         let parentSelector = $( this ).parents( '.courses-tabs' );
         parentSelector.find( '.tab-pane' ).removeClass( ' show active' );
         parentSelector.find( ".tab-pane[data-id='" + $( this ).attr( 'data-id' ) + "']" ).addClass( ' active ' );
         parentSelector.find( '.course-tab-a' ).removeClass( 'active' );
         $( this ).parent().find( '.course-tab-a' ).addClass( 'active' );
      } );
   },

   };

   jQuery( function( $ ) {
      if ( ! String.prototype.getDecimals ) {
          String.prototype.getDecimals = function() {
              var num = this,
                  match = ('' + num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
              if ( ! match ) {
                  return 0;
              }
              return Math.max( 0, ( match[1] ? match[1].length : 0 ) - ( match[2] ? +match[2] : 0 ) );
          }
      }
      // Quantity "plus" and "minus" buttons
      $( document.body ).on( 'click', '.plus, .minus', function() {
          var $qty        = $( this ).closest( '.quantity' ).find( '.qty'),
              currentVal  = parseFloat( $qty.val() ),
              max         = parseFloat( $qty.attr( 'max' ) ),
              min         = parseFloat( $qty.attr( 'min' ) ),
              step        = $qty.attr( 'step' );

          // Format values
          if ( ! currentVal || currentVal === '' || currentVal === 'NaN' ) currentVal = 0;
          if ( max === '' || max === 'NaN' ) max = '';
          if ( min === '' || min === 'NaN' ) min = 0;
          if ( step === 'any' || step === '' || step === undefined || parseFloat( step ) === 'NaN' ) step = 1;

          // Change the value
          if ( $( this ).is( '.plus' ) ) {
              if ( max && ( currentVal >= max ) ) {
                  $qty.val( max );
              } else {
                  $qty.val( ( currentVal + parseFloat( step )).toFixed( step.getDecimals() ) );
              }
          } else {
              if ( min && ( currentVal <= min ) ) {
                  $qty.val( min );
              } else if ( currentVal > 0 ) {
                  $qty.val( ( currentVal - parseFloat( step )).toFixed( step.getDecimals() ) );
              }
          }

          // Trigger change event
          $qty.trigger( 'change' );
      });
  });

   $(window).on('elementor/frontend/init', Courselog.init);
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
}(jQuery, window.elementorFrontend));

