$('.move').hover(function()
{
    $('.head-marker').css('width', '140px')
});
$('.move').mouseout(function()
{
    $('.head-marker').css('width', '80px')
});

$(document).ready(function()
{
  $('.loading').fadeOut(500 ,function()
  {
    $('body').css("overflow" ,"auto");
  });
});

$('.option1').hover(function()
{
    $('.layout').slideDown(1000,function()
    {
        $('.descreption').fadeIn(1000)
    })
});
new WOW().init();
let w =$('#demo').offset().top
$(window).scroll( function()
{
   let s=$(window).scrollTop();
   if(s>w)
   {
     $('.navbar').css('backgroundColor', 'rgb(237, 254, 244)')
   }
   else
   {
    $('.navbar').css('backgroundColor', '#fff')
   }
})
var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       // downscroll code
       $('.navbar').css('opacity', '0')

   } else {
      // upscroll code
      $('.navbar').css('opacity', '1')
   }
   lastScrollTop = st;
});
