
var colorStep = 1000;

function isMobile()
{
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )
    	return true;
    return false;
}

function mobileView()
{
    var oldlink = document.getElementsByTagName("link").item(0);
    oldlink.href = "css/mobile.css";
    
    $('i').each(function() {
        var txt = $(this).attr('title')
        $('<span> '+txt+'</span>').insertAfter($(this))
    })
    $('a.btn').last().css('border-bottom', 'none')
}

function randomColor() {
    return hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
}

function beginRainbowIcons() {
    setInterval(function() {
        $('.btn').animate( { color: randomColor() }, colorStep )
    } , colorStep);

}

$(document).ready (function()
{
    if (isMobile()) {
        mobileView();
    } else {
        $('.btn').mouseover(function() {
            var txt = $(this).attr('title')
            $('#label').text(txt)
            $('#label').css('visibility', 'visible')
        })
        $('.btn').mouseout(function() {
            $('#label').css('visibility', 'hidden')
        })
        beginRainbowIcons();
    }
});