(function () {
    var piloteSlider

    $(document).ready(function(){
        piloteSlider = $('.pilote__slider').slick({
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear'
        });
    });

    $('.pilote__nav .slider__dot').click(function() {
        piloteSlider && piloteSlider.slick('slickGoTo', $(this).index())
    })

    var gameSlider

    $(document).ready(function(){
        gameSlider = $('.game__slider').slick({
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear'
        });
    });

    $('.game__nav .slider__dot').click(function() {
        gameSlider && gameSlider.slick('slickGoTo', $(this).index())
    })

})()