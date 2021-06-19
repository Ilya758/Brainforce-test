'use strict';

$('#drop__btn').click(() => {
    $('.dropdown_vis_hidden').css('display', 'block');
    $('#dropdown').toggleClass('dropdown_vis_active');
    $(window).tapstart((event) => {
        for (let i = 0; i < $('.nav__link').length; i++) {
            if (event.target == $('.nav__link')[i]) return
        }
        if (event.target != $('#drop__btn')[0] && event.target != $('.nav__list')[0] && event.target != $('#dropdown')[0] && event.target != $('.nav__link')) {
            $('#dropdown').removeClass('dropdown_vis_active');
            setTimeout(() => {
                $('.dropdown_vis_hidden').css('display', 'none');
                $('#dropdown').removeAttr('style');
            }, 260);
        }
    })
})
