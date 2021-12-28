(function () {
    var piloteSlider

    $(document).ready(function(){
        piloteSlider = $('.pilote__slider').slick({
            arrows: false,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear'
        });
    });

    const piloteDots = $('.pilote__nav .slider__dot')

    piloteDots.click(function() {
        piloteDots.removeClass('active')
        piloteSlider && piloteSlider.slick('slickGoTo', $(this).index())
        $(this).addClass('active')
    })

    var gameSlider

    $(document).ready(function(){
        gameSlider = $('.game__slider').slick({
            arrows: false,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear'
        });
    });

    const gameDots = $('.game__nav .slider__dot')

    gameDots.click(function() {
        gameDots.removeClass('active')
        gameSlider && gameSlider.slick('slickGoTo', $(this).index())
        $(this).addClass('active')
    })

})()