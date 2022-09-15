// click
// $('.show').click(function(){
//   $('.text-1').show();
//   $('.show').css({'border':'2px solid tomato',
//                   'color': 'tomato', 
//                   'background-color': 'white'}); 
//                     $('.hide').css({'border':'2px solid tomato',
//                   'color': 'tomato', 
//                   'background-color': 'white'}); 
//   $('.hide').css({'border':'none',
//                   'color': 'white', 
//                   'background-color': 'tomato'}); 
// })
// $('.hide').click(function(){
//   $('.text-1').hide();
//   $('.show').css({'border':'none',
//                   'color': 'white', 
//                   'background-color': 'tomato'}); 
//   $('.hide').css({'border':'2px solid tomato',
//                   'color': 'tomato', 
//                   'background-color': 'white'}); 
// })

// mouseenter&mouseleave
$('.btn').mouseenter(function(){
  $('.text-2').fadeIn(500);
  $('.btn').css({'border':'2px solid tomato',
                  'color': 'tomato', 
                  'background-color': 'white',}); 
  $('.btn').text('오오오');
})
$('.btn').mouseleave(function(){
  $('.text-2').fadeOut(500);
  $('.btn').css({'border':'none',
                  'color': 'white', 
                  'background-color': 'tomato'}); 
  $('.btn').text('hover');
})

// 메뉴바
$('.menu').mouseenter(function(){
  $('.list').slideDown(250);
})
$('.menu').mouseleave(function(){
  $('.list').slideUp(250);
})