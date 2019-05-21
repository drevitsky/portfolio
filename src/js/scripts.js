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

	 
})

$('body').scrollspy({ target: '#navbarNav' });

// add .active if add .active on nav-link
$(window).on('activate.bs.scrollspy',function(e,obj){
  e.preventDefault();
  
  var idTarget = obj.relatedTarget;

  //console.log(idTarget);
  
  $('a[href ="'+ idTarget+'"]').parent().addClass('active').siblings().removeClass('active');

})


//change colors theme
$("#btn-dark").on('click',function(e){
    e.preventDefault();
    $('.section-title').addClass('variable-red-dark');
    $('.section-title-link').addClass('variable-red-dark');
    $('.article-title').addClass('variable-title-dark');
    $('.skill-item--name').addClass('variable-title-dark');
    $('.exp-item-title').addClass('variable-title-dark');
    $('.exp-item-data').addClass('variable-title-gray');
    $('.skill-item').addClass('variable-title-gray');

    $('.article-text').addClass('variable-title-dark');
    $('.portfolio-name').addClass('variable-title-dark');
    $('.colored-link').addClass('variable-title-dark');
    $('.contact-text').addClass('variable-title-dark');
    $('.social-link').addClass('variable-title-dark');
    
    
    $('.accent').addClass('variable-title-gray accent-border');
    $('.nav-link').addClass('variable-red-dark');
    $('img').addClass('variable-noncolor');
    // $('#img-avatar').attr('src','img/ava-dw-600.jpg');
    
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

    $('.article-text').removeClass('variable-title-dark');
    $('.portfolio-name').removeClass('variable-title-dark');
    $('.colored-link').removeClass('variable-title-dark');
    $('.contact-text').removeClass('variable-title-dark');
    $('.social-link').removeClass('variable-title-dark');
    // $('#img-avatar').attr('src','img/ava-600.jpg');
   });
// add btns more styles 
$("#add-btn").on('click',function(e){
    e.preventDefault();
    $('.btn-box').toggleClass('btn-box-hidden');
    
    
   
    
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


$('#btn-starwars').on('click', function(e) {
    e.preventDefault();
    //console.log('click');

             $('#titles').toggleClass('titles');
             $('#titlecontent').toggleClass('titlecontent');
             $('#img-avatar').toggleAttrVal('src','img/ava-dw-600-2.jpg', 'img/ava-600-3.jpg');
            
             // 
             
         });
$.fn.toggleAttrVal = function(attr, val1, val2) {
    var test = $(this).attr(attr);
    if ( test === val1) {
      $(this).attr(attr, val2);
      return this;
    }
    if ( test === val2) {
      $(this).attr(attr, val1);
      return this;
    }
    // default to val1 if neither
    $(this).attr(attr, val1);
    return this;
  };




$('a[href^="#"]').on('click', function () {
            $('.navbar-collapse').collapse('hide');
            // $a = $($(this).attr('href'));  
            // return false;
        });


$('.menu-tog').on('click',function(e){
    e.preventDefault();
  $('body').toggleClass('menu--opened');

  });
$('a[href*="#"]')
      .not('[href="#"]')
      .not('[href="#0"]')
      .on('click',function(e){
        e.preventDefault();
      $('body').removeClass('menu--opened');
    });