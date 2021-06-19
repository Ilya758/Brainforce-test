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


function closeModal() {
    $('.btn').removeClass('button_v_press');
    $('.form').toggleClass('form_v_disabled');
    $('.form').removeClass('form_s_enabled');
    $('body').toggleClass('no-scroll');
    setTimeout(() => {
        $('.form').removeClass('form_v_active');
        $('.form').removeClass('form_v_disabled');
    }, 280)
}

function toggleCloseBtn() {
    $('#close__btn').toggleClass('close__btn_vis_hovered');
}

$('#close__btn').click(closeModal)

$('#close__btn').mouseover(() => {
    toggleCloseBtn();
})

$('#close__btn').mouseout(() => {
    toggleCloseBtn();
})

$('.btn').click(() => {
    setTimeout(() => {
        $('body').toggleClass('no-scroll');
        $('.form').toggleClass('form_s_enabled')
    }, 600)
    $('.form').toggleClass('form_v_active');
})

let str = '+37599 999-99-99';
let name = $('#form__name');
let phone = $('#form__phone');
phone.mask('+37599 999-99-99');


