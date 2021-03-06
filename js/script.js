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


name.keyup((evt) => {
    check(evt, 12, name, $('#name_error'));
});
phone.keyup((evt) => {
    check(evt, 16, phone, $('#tel_error'));
});

$('#button_complete').click((event) => {
    event.preventDefault()
    if (name.val().length < 12 || phone.val().length != 16) {
        $('#button_complete').removeClass('button_v_press')
        event.preventDefault();
        check(event, 12, name, $('#name_error'));
        check(event, 16, phone, $('#tel_error'));
    }
    else {
        $('#popup__complete').addClass(['form_v_active', 'form_s_enabled']);
        $('#submit_btn').click(() => {
            $('body').css({
                'animation': 'sweep 4s linear'
            })
            setTimeout(() => {
                $('#form').submit();
            }, 1800);
        })
    }
})

function check(evt, chars, elem, id) {
    evt.preventDefault();
    let target = $(evt.target);
    let length = target.val().length;
    if (length == 0) {
        evt.preventDefault();
        elem.addClass('input_v_invalid');
        id.addClass('text_v_invalid');
        id.removeClass('text_v_invalid_green');
        id.html("???????????????????????? ????????");

    } else if (length < chars) {
        evt.preventDefault();
        elem.removeClass('input_v_invalid');
        id.removeClass('text_v_invalid');
        id.addClass('text_v_invalid_green');
        if (length == (chars - 1)) id.html("?????????????? 1 ????????");
        else if (length == (chars - 4) || length == (chars - 3) || length == (chars - 2)) id.html(`???????????????? ${(chars - length)} ??????????`);
        else id.html(`???????????????? ${(chars - length)} ????????????`);

    } else {
        evt.preventDefault()
        id.removeClass('text_v_invalid_green');
    }
}

function hoverButton(elem) {
    elem.mouseover(() => {
        elem.addClass('button_v_hovered');
    })

    elem.mouseout(() => {
        elem.removeClass('button_v_hovered');
    })

    elem.mousedown(() => {
        elem.toggleClass('button_v_press');
        elem.removeClass('button_v_hovered');
    })
}

hoverButton($('#button_complete'))
hoverButton($('.btn'))

$(window).tapstart((evt) => {
    $('.btn').removeClass('button_v_press', 'button_v_hovered');
    if (evt.target == $('.form__inner')[0] || evt.target == $('#form-popup')[0]) closeModal();
})

$('details').mouseenter((event) => {
    if (event.currentTarget.open) {
        $(event.currentTarget.children[0].children[1]).removeClass('acc__icon_hovered');
        $(event.currentTarget.children[0].children[1]).addClass('acc__icon_close_hovered')
    }
    else $(event.currentTarget.children[0].children[1]).addClass('acc__icon_hovered')
})

$('details').mouseleave((event) => {
    if (event.currentTarget.open) {
        $(event.currentTarget.children[0].children[1]).removeClass('acc__icon_hovered'); $(event.currentTarget.children[0].children[1]).removeClass('acc__icon_close_hovered')
    }
    else {
        $(event.currentTarget.children[0].children[1]).removeClass('acc__icon_close_hovered')
        $(event.currentTarget.children[0].children[1]).removeClass('acc__icon_hovered')
    }
})

$('details').click((event) => {
    if (event.currentTarget.open) {
        $(event.currentTarget.children[0].children[1]).addClass(['acc__icon_close_normal', 'acc__icon_close_hovered']);
    }
    else {
        $(event.currentTarget.children[0].children[1]).removeClass(['acc__icon_close_normal', 'acc__icon_close_hovered']);
    }
})

for (let e of ['.accordion-first details', '.accordion-second details', '.accordion-third details']) {
    for (let i = 0; i < $(e).length; i++) {
        $($(e)[i]).click((event) => {
            $(event.currentTarget.children[0].children[1]).toggleClass('acc__icon_close_normal');
            let elems = $($(e));
            let elem = $($(elems)[i]);
            toggleAcc(elem, elems);
        })
    }
}

function toggleAcc(elem, elems) {
    $($($(elem)[0]).children[1]).toggleClass('acc__icon_close_normal');
    if (!elem[0].open) for (let i = 0; i < $($(elems)).length; i++) {
        $($(elems)[i]).removeAttr('open');
    }
    return;
}


