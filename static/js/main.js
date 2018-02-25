(function() {

    // fancybox
    $('.fancybox').fancybox({
            helpers : {
                overlay : {
                    locked: false
                }
            },
            padding: 0,
            fitToView:false,
            scrolling: 'hidden'
        }
    );
    // fancybox end


    // sliders
    // run product slider
    var efire_slider = $('.efire-slider').lightSlider({
        item: 1,
        pager: false,
        controls: false
    });
    $('.efire-slider-wrapper__left').click(function(e) {
        e.preventDefault();
        efire_slider.goToPrevSlide();
    });
    $('.efire-slider-wrapper__right').click(function(e) {
        e.preventDefault();
        efire_slider.goToNextSlide();
    });

    // run slider
    var interes_slider = $('.interes-slider').lightSlider({
        item: 1,
        pager: false,
        controls: false
    });
    $('.interes-slider-wrapper__left').click(function(e) {
        e.preventDefault();
        interes_slider.goToPrevSlide();
    });
    $('.interes-slider-wrapper__right').click(function(e) {
        e.preventDefault();
        interes_slider.goToNextSlide();
    });
    // sliders end


    // tabs
    // tab left
    $('.js-efire-top').click(function(e) {
        e.preventDefault();
        // Меняем противоположному текст
        $('.js-interes-top').text('Смотреть еще');
        // условие
        if( $(this).text() == 'Смотреть еще' ) {
            // меняем текст
            $(this).text('Свернуть');
            // применяем класс для стрелки
            $(this).addClass('active');
            // скрываем блок товаров
            $('.products-first').hide();
            // показываем слайдер
            $('.efire-slider-wrapper').css({
                'height': 'auto',
                'opacity': 1,
                'overflow': 'visible'
            });
            // скрываем противоположный слайдер
            $('.interes-slider-wrapper').css({
                'height': '0',
                'opacity': 0,
                'overflow': 'hidden'
            });
            // добавляем класс стиля заголовку
            $(this).parent().addClass('products-top--left');
            // удаляем класс стиля противоположному заголовку
            $('.products-top').removeClass('products-top--right').css('backgroundColor', '#f6f6f6');
        } else {
            // меняем текст
            $(this).text('Смотреть еще');
            // удаляем класс для стрелки
            $(this).removeClass('active');
            // показываем блок товаров
            $('.products-first').show();
            // скрываем слайдеры
            $('.efire-slider-wrapper').css({
                'height': '0',
                'opacity': 0,
                'overflow': 'hidden'
            });
            $('.interes-slider-wrapper').css({
                'height': '0',
                'opacity': 0,
                'overflow': 'hidden'
            });
            // удаляем класс стиля заголовку
            $(this).parent().removeClass('products-top--left');
            // удаляем класс стиля противоположному заголовку
            $('.products-top').removeClass('products-top--right').css('backgroundColor', '#fff');
        }
    });

    // tab right
    $('.js-interes-top').click(function(e) {
        e.preventDefault();
        // Меняем противоположному текст
        $('.js-efire-top').text('Смотреть еще');
        // условие
        if( $(this).text() == 'Смотреть еще' ) {
            // меняем текст
            $(this).text('Свернуть');
            // применяем класс для стрелки
            $(this).addClass('active');
            // скрываем блок товаров
            $('.products-first').hide();
            // показываем слайдер
            $('.interes-slider-wrapper').css({
                'height': 'auto',
                'opacity': 1,
                'overflow': 'visible'
            });
            // скрываем противоположный слайдер
            $('.efire-slider-wrapper').css({
                'height': '0',
                'opacity': 0,
                'overflow': 'hidden'
            });
            // добавляем класс стиля заголовку
            $(this).parent().addClass('products-top--right');
            // удаляем класс стиля противоположному заголовку
            $('.products-top').removeClass('products-top--left').css('backgroundColor', '#f6f6f6');
        } else {
            // меняем текст
            $(this).text('Смотреть еще');
            // удаляем класс для стрелки
            $(this).removeClass('active');
            // показываем блок товаров
            $('.products-first').show();
            // скрываем слайдеры
            $('.efire-slider-wrapper').css({
                'height': '0',
                'opacity': 0,
                'overflow': 'hidden'
            });
            $('.interes-slider-wrapper').css({
                'height': '0',
                'opacity': 0,
                'overflow': 'hidden'
            });

            // удаляем класс стиля заголовку
            $(this).parent().removeClass('products-top--right');
            // удаляем класс стиля противоположному заголовку
            $('.products-top').removeClass('products-top--left').css('backgroundColor', '#fff');
        }
    });
    // tabs end


    // search paste
    $('.header-search__primer span').click(function(e) {
        e.preventDefault();
        var text = $(this).text();
        $('.header-search__gold input').val(text);
    });
    // search paste end


    // menu toggle
    $('.top-menu__toggle').click(function(e) {
        e.preventDefault();
        $(this).parent().children('.top-menu__list').stop().slideToggle();
    });


    // top-slider run
    $('.top-slider').lightSlider({
        item: 1,
        pager: true,
        controls: false
    });


    // shop24 slider
    var shop24_slider = $('.top-shop24__slider').lightSlider({
        item: 7,
        pager: false,
        controls: false,
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:6
                }
            },
            {
                breakpoint:480,
                settings: {
                    item:2,
                    slideMove:1
                }
            },
            {
                breakpoint:360,
                settings: {
                    item:1,
                    slideMove:1
                }
            }
        ]
    });

    $('.top-shop24__slider-prev').click(function(e) {
        e.preventDefault();
        shop24_slider.goToPrevSlide();
    });
    $('.top-shop24__slider-next').click(function(e) {
        e.preventDefault();
        shop24_slider.goToNextSlide();
    });

}());