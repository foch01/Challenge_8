$(".answer").click(validate);
$(".answerFalse").click(faux);
$("#slider-prev").click(previous);
$("#slider-next").click(next);

function validate (){
    $(this).addClass("green");
}

function faux () {
    $(this).addClass("faux");
}

var slider = $('.bxslider').bxSlider({
    pagerCustom: '#bx-pager'
});

function previous (){
    slider.goToPrevSlide();
}

function next (){
    slider.goToNextSlide();
}


