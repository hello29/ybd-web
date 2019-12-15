window.onload = function() {
    var mySwiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        slidesPerView: 3,
        spaceBetween: 120
    })

    window.onscroll = function() {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

        // view 2/3级导航处理
        if ($('#view-nav-fixed')) {
            var fixedNavHeaght = $('#view-nav-fixed').height()
            $('#view-nav-fixed-wrap').css('height', fixedNavHeaght + 'px')
            if (scrollTop >= 80) {
                $('#view-nav-fixed').addClass('nav-fixed')
            } else {
                $('#view-nav-fixed').removeClass('nav-fixed')
            }
        }

        // 首页头部样式处理

        if (scrollTop == 0 && $('#index-header')) {
            $('#index-header').removeClass('header-bg-black')
        } else {
            $('#index-header').addClass('header-bg-black')
        }


    }
}