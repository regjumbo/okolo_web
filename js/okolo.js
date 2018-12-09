$(document).ready(function ($) {
    $.fn.menumaker = function (options) {
        var flexmenu = $(this),
            settings = $.extend({
                format: 'dropdown',
                sticky: false
            }, options);
        return this.each(function () {
            $(this).find('.button').on('click', function () {
                $(this).toggleClass('menu-opened');
                var mainmenu = $(this).next('ul');
                if (mainmenu.hasClass('open')) {
                    mainmenu.slideToggle().removeClass('open');
                } else {
                    mainmenu.slideToggle().addClass('open');
                    if (settings.format === 'dropdown') {
                        mainmenu.find('ul').show();
                    }
                }
            });
            flexmenu.find('li ul').parent().addClass('has-sub');
            subToggle = function () {
                flexmenu.find('.has-sub').prepend('<span class="submenu-button"></span>');
                flexmenu.find('.submenu-button').on('click', function () {
                    $(this).toggleClass('submenu-opened');
                    if ($(this).siblings('ul').hasClass('open')) {
                        $(this).siblings('ul').removeClass('open').slideToggle();
                    } else {
                        $(this).siblings('ul').addClass('open').slideToggle();
                    }
                });
            };
            if (settings.format === 'multitoggle')
                subToggle();
            else
                flexmenu.addClass('dropdown');
            if (settings.sticky === true)
                flexmenu.css('position', 'fixed');
            resizeFix = function () {
                var mediasize = 801;
                if ($(window).width() > mediasize) {
                    flexmenu.find('ul').show();
                }
                if ($(window).width() <= mediasize) {
                    flexmenu.find('ul').hide().removeClass('open');
                }
            };
            resizeFix();
            return $(window).on('resize', resizeFix);
        });
    };

    $('#flexmenu').menumaker({
        format: 'multitoggle'
    });

}(jQuery));
// BodyMovin Animation
var animation = bodymovin.loadAnimation({
    container: document.getElementById('anim'),
    rederer: 'svg',
    loop: true,
    autoplay: true,
    path: 'data.json'
});
$(document).ready(function(){
    // Scroll to top function
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    // scroll to top on click adjusting speed
    $('.scrollToTop').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });
    // smooth scroll within page 
    var scrollLink = $('.scroll');
    scrollLink.click(function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });
    // Modal
    $("#modal-trigger").click(function (e) {
        e.preventDefault();
        dataModal = $(this).attr("data-modal");
        $("#" + dataModal).css({
            "display": "block"
        });
        $("body").css({ "overflow-y": "hidden" }); //Prevent double scrollbar.
    });

    $(".close-modal, .modal-sandbox").click(function () {
        $(".modal").css({
            "display": "none"
        });
        $("body").css({ "overflow-y": "auto" }); //Prevent double scrollbar.
    });
});