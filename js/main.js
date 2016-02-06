random = oldRandom = -1
function init() {
  if (isMobile()) {
    console.log('changing css to mobile..');
    changeCSStoMobile();
    $('.fa').remove()
    $('.item').last().css('border-bottom', 'none');
  } else {
    window.setInterval(randomLabel, 1000);
    $(".links").css("opacity", 0)
    $(".links").animate({
      opacity: '1',
    }, {duration: 800, queue: false}, 'easeInOutCirc');
    $("#left").animate({
      left: '+=9.2vw',
    }, {duration: 800, queue: false}, 'easeInOutCirc');
    $("#right").animate({
      left: '-=9.2vw',
    }, {duration: 800, queue: false}, 'easeInOutCirc');
    $(".item a").hover(
      function(){ // mouse in
        $(this).find(".appear").animate({
          opacity: '1',
        }, 250);
      },
      function(){ // mouse out
        $(this).find(".appear").animate({
          opacity: '0'
        }, 250);
      }, 'easeInOutCirc');
  }
}

function isMobile()
{
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )
    return true;
  return false;
}

function changeCSStoMobile()
{
 var oldlink = document.getElementsByTagName("link").item(0);
 oldlink.href = "css/index.mobile.css";
}

function randomLabel()
{
  howManyItems = 4
  // never animates twice the same item
  // never animates an item with the mouse over it
  while (oldRandom == random || $('.appear').eq(random).is(':hover')) {
    random = Math.floor(Math.random()*howManyItems)
  }

  $('.appear').get(random).animate([{
    opacity: '1',
  }, {
    opacity: '0',
  }], { duration: 1000 });
  oldRandom = random
}
