$(document).ready(function(){
    'use strict';

new WOW(
                {
                      boxClass:     'wow',      // default
                      animateClass: 'animated', // default
                      offset:       0,          // default
                      mobile:       true,       // default
                      live:         true        // default
                }
        ).init();
   
   
     

	// var isotope = $('.images, masonry').isotope({
	// 			itemSelector: '.image, masonry-item',
	// 			percentPosition: true,
	// 			masonry: {
	// 				columnWidth: '.col-lg-4',
					
	// 			}
	// 		});
	// var isotope2 = $('.masonry').isotope({
	// 			itemSelector: '.masonry-item',
	// 			percentPosition: true,
	// 			masonry: {
	// 				columnWidth: '.col-lg-6',
					
	// 			}
	// 		});	
	// $('.switchers a').on('click', function(e) {
	// 			$('.switchers li').removeClass('active');
	// 			$(this).parent().addClass('active');
	// 			e.preventDefault();
	// 			var filter = $(this).attr('data-filter');
	// 			filter = filter == '*' ? filter : '.' + filter;
	// 			isotope.isotope({ filter : filter});
	// 		});
	// Fancybox
	// $('.image-box').fancybox();
	// $("a.inline").fancybox({
 //    'hideOnContentClick': true
 //  });



	// $('.image-box').fancybox({

 //    padding: 0,
 //    helpers:{
 //      overlay:{
 //        locked: false 
 //      }

 //    }

 //  });
//   var popup_link = '<a id="popup_link" href="www.example.com/example"></a>';
// console.log(popup_link);
// $('.fancybox-inner').append(popup_link);

// $("a#inline").fancybox({
//     'hideOnContentClick': true
//   });

// initial galery fancybox
//$("a.grouped_elements").fancybox();




// $('.popup').fancybox({
//   helpers:{
//     overlay:{
//       locked:false
//     }
//   },
// });
	//  lazy-load 
	// $('.lazy-load').addClass('not-load');
	 // var test = $('.lazy-load.not-load').slice(0, 9).removeClass('not-load');
	 // isotope.isotope();
	
	 // $('#btn-load').on('click',function(e){
	 // 	e.preventDefault();
	 // 	$('.lazy-load.not-load').slice(0, 6).removeClass('not-load');
	 // 	isotope.isotope()
	 // })
	 
	
	 // $('#btn-load-blog').on('click',function(e){
	 // 	e.preventDefault();
	 // 	$('.lazy-load-blog.not-load').slice(0, 4).removeClass('not-load');
	 // 	isotope2.isotope()
	 // })

	
	 
})


//переключатель цвета темы
$("#btn-dark").on('click',function(e){
    e.preventDefault();
    $('.section-title').addClass('variable-red-dark');
    $('.section-title-link').addClass('variable-red-dark');
    $('.article-title').addClass('variable-title-dark');
    $('.skill-item--name').addClass('variable-title-dark');
    $('.exp-item-title').addClass('variable-title-dark');
    $('.exp-item-data').addClass('variable-title-gray');
    $('.skill-item').addClass('variable-title-gray');
    
    $('.accent').addClass('variable-title-gray accent-border');
    $('.nav-link').addClass('variable-red-dark');
    $('img').addClass('variable-noncolor');
    // $('#img-avatar').attr('src','img/ava-600-bw.jpg');
    
   });
$("#btn-light").on('click',function(e){
    e.preventDefault();
    $('.section-title').removeClass('variable-red-dark');
    $('.section-title-link').removeClass('variable-red-dark');
    $('.article-title').removeClass('variable-title-dark');
    $('.skill-item--name').removeClass('variable-title-dark');
    $('.exp-item-title').removeClass('variable-title-dark');
    $('.exp-item-data').removeClass('variable-title-gray');
    $('.skill-item').removeClass('variable-title-gray');
    $('.accent').removeClass('variable-title-gray  accent-border');
    $('.nav-link').removeClass('variable-red-dark');
    $('img').removeClass('variable-noncolor');
    // $('#img-avatar').attr('src','img/ava-600.jpg');
   });     


//bootstrap portfolio modal
    $('#portfolio-modal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget); // Button that triggered the modal
        var workName = button.data('name'); // Extract info from data-* attributes
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        $(this).find('.modal-body').hide();
        $('.modal-body[data-name = ' + workName + ']').show();
    });

//init Mix It Up (portfolio)
    if($('div').is('.portfolio')) {
        mixitup('.portfolio', {
            animation: {
                duration: 400,
                effectsIn: 'fade translateY(-100%)',
                effectsOut: 'fade translateY(-100%)'
            },
            selectors: {
                control: '[data-mixitup-control]'
            }
        });
    }



