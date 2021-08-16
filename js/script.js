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
new WOW().init();
$('.option1').hover(function()
{
    $('.layout').slideDown(1000,function()
    {
        $('.descreption').fadeIn(1000)
    })
});

