$(function (){
  'use strict';
  var maxheight = 0;
  $('.box').each(function(){
    if ($(this).height() > maxheight) {
      maxheight = $(this).height();
    }
  });
  $('.box').height(maxheight);
  //popup
  $('.showpopup').click(function () { 
    $('.' + $(this).data('popup')).fadeIn();
    
  });
  $('.popup ').click(function () {
    $(this).hide();;
  })
  $('.popup .inner').click(function (e) { 
    e.stopPropagation();
    
  });
  $('.popup .inner button').click(function (e) {
    e.preventDefault();
    $('.popup').hide();
  })

});

var typed = new Typed('#element', {
    strings: ['La perfection.','Diversité','Professionnalisme'],
    typeSpeed: 150,
    backSpeed : 100,
    looped : true 
  });
  window.
onload = function() {
  Particles.
  init
  ({
    
  // normal options
    selector: 
  '.background',maxParticles: 
  450,
    
  // options for breakpoints
    responsive: [
      {
       breakpoint: 768,
        options: {
          maxParticles: 200,
          color: '#48F2E3',
          connectParticles: false
        }
      }
    ]
  });
  
};