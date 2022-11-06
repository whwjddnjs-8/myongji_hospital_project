$(function () {
    /* Sub Menu Dropdown */
    $('nav.menu-area').mouseover(function () {
       $('.sub-menu-area').stop().slideDown()
    }).mouseout(function () {
        $('.sub-menu-area').stop().slideUp()
    })


	var mySwiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 30,
            loopFillGroupWithBlank: true,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
        })

        function openTab(tabName) {
            var i, x;
            x = document.getElementsByClassName("news");
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }

            document.getElementById(tabName).style.display = "block";
        }
})