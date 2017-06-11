if ($(window).width() >= 768 && window.location.href.indexOf("index") > -1) {
  const introTl = new TimelineMax();

  introTl
    .fromTo('.nav', 1.3, {height: 0}, {delay: .2, height: '100%', ease:Cubic.easeInOut, yoyo:true})
    .fromTo('.nav__logo', .8, {y: -30, opacity: 0}, {y: 0, opacity: 1, ease:Cubic.easeInOut, yoyo:true}, '-= 1.3')
    .fromTo('.nav-list__item--1', .4, {y: -60, opacity: 0}, {y: 0, opacity: 1, ease: Power1.easeOut}, '-= .3')
    .fromTo('.nav-list__item--2', .4, {y: -60, opacity: 0}, {y: 0, opacity: 1, ease: Power1.easeOut}, '-= .3')
    .fromTo('.nav-list__item--3', .4, {y: -60, opacity: 0}, {y: 0, opacity: 1, ease: Power1.easeOut}, '-= .3')
    .fromTo('.nav-list__item--4', .4, {y: -60, opacity: 0}, {y: 0, opacity: 1, ease: Power1.easeOut}, '-= .3')
    .fromTo('.nav-list__item--5', .4, {y: -60, opacity: 0}, {y: 0, opacity: 1, ease: Power1.easeOut}, '-= .3')
    .fromTo('.nav-list__item--6', .4, {y: -60, opacity: 0}, {y: 0, opacity: 1, ease: Power1.easeOut}, '-= .3')
    .fromTo('.nav-order', .4, {opacity: 0}, {delay: .1, opacity: 1, ease: Power1.easeOut})
    .fromTo('.hero__aside, .hero__img', .4, {opacity: 0}, {opacity: 1, ease: Power1.easeOut}, '-= .3')
}

let showMenu = false;

$('.menu-icon').click(function() {
  showMenu = !showMenu;
  $('.nav-list').toggle();

  if (showMenu) {
    $('.nav-order__btn').css({ opacity: 1 });
  } else {
    $('.nav-order__btn').css({ opacity: 0 });
    $('.nav-list__item--health').hide();
  }
});

$('.nav-list__item--health-dropdown').click(function() {
  $('.nav-list__item--health').toggle();
});

$('.nav-list__item--apparel-dropdown').click(function() {
  $('.nav-list__item--apparel').toggle();
});

const tl = new TimelineMax();

if ($(window).width() > 1200) {
  tl
  .to('.box', .2, {})
  .fromTo('.fact__header--0', .4, {opacity: 0, y: 40 }, {opacity: 1, y: 0 }, '-= .1')
  .fromTo('.fact__description--0', .6, {opacity: 0, y: 10 }, {opacity: 1, y: 0 }, '-= .2')
} else if ($(window).width() >= 768) {
  tl
  .to('.box', .2, {})
  .fromTo('.fact__header--0', .4, {opacity: 0 }, {opacity: 1 }, '-= .1')
  .fromTo('.fact__description--0', .6, {opacity: 0, y: 10 }, {opacity: 1, y: 0 }, '-= .2')
}

$(function() {
  $.scrollify({
		section:".panel",
    scrollbars: false,
    before: function(i, panels) {
      const ref = panels[i].attr("data-section-name");
      const tl = new TimelineMax();

      if ($(window).width() < 768) {
        tl
        .to('.box', .2, {})
        .fromTo(`.fact__header--${i}`, .4, {opacity: 0, y: 30 }, {opacity: 1, y: 0 })
        .fromTo(`.fact__description--${i}`, .6, {opacity: 0, y: 10 }, {opacity: 1, y: 0 });
      } else if ($(window).width() > 768 && $(window).width() < 900) {
        tl
        .to('.box', .2, {})
        .fromTo(`.fact__header--0`, .4, {opacity: 0 }, {opacity: 1 }, '-= .1')
        .fromTo(`.fact__description--${i}`, .6, {opacity: 0, y: 10 }, {opacity: 1, y: 0 }, '-= .2');
      } else if ($(window).width() < 1200) {
        tl
        .to('.box', .2, {})
        .fromTo(`.fact__header--${i}`, .4, {opacity: 0 }, {opacity: 1 }, '-= .1')
        .fromTo(`.fact__description--${i}`, .6, {opacity: 0, y: 10 }, {opacity: 1, y: 0 }, '-= .2')
      } else {
        tl
        .to('.box', .2, {})
        .fromTo(`.fact__header--${i}`, .4, {opacity: 0 }, {opacity: 1 }, '-= .1')
        .fromTo(`.fact__description--${i}`, .6, {opacity: 0, y: 10 }, {opacity: 1, y: 0 }, '-= .2');
      }

      $('.health-list__item').removeClass('health-list__item--active');
      $(`.health-list__item--${i}`).addClass('health-list__item--active');
    }
  });
});

$('.health-list__item--0').click(function() {
  $.scrollify.move("#zero");
});

$('.health-list__item--1, .fact__mobile-btn--0').click(function() {
  $.scrollify.move("#one");
});

$('.health-list__item--2, .fact__mobile-btn--1').click(function() {
  $.scrollify.move("#two");
});

$('.health-list__item--3, .fact__mobile-btn--2').click(function() {
  $.scrollify.move("#three");
});

$('.health-list__item--4, .fact__mobile-btn--3').click(function() {
  $.scrollify.move("#four");
});

$('.health-list__item--5, .fact__mobile-btn--4').click(function() {
  $.scrollify.move("#five");
});

const menuTl = new TimelineMax();

menuTl
.fromTo('.menu-header', .7, {opacity: 0, y: 10}, {y: 0, opacity: 1})
.fromTo('.menu-header__pricing', .7, {opacity: 0, y: 10}, {opacity: 1, y: 0}, '-= .6')
.fromTo('.step__title--1', .4, {opacity: 0, y: 10}, {y: 0, opacity: 1}, '-= .3')
.staggerFrom('.step__list__item', .5, {x: -80, opacity: 0}, .1, '-= .4')
.fromTo('.step__title--2', .4, {opacity: 0, x: -20}, {x: 0, opacity: 1}, '-= .4')
.fromTo('.protein__title--chicken', .4, {opacity: 0}, {opacity: 1}, '-= .4')
.staggerFrom('.protein__list__item--chicken', .5, {opacity: 0}, .1, '-= .4')
.fromTo('.protein__title--tofu', .4, {opacity: 0}, {opacity: 1}, '-= .4')
.staggerFrom('.protein__list__item--tofu', .4, {opacity: 0}, .1, '-= .4')

/* contact form */

  const thanks = $('<p class="form__response">Thanks! we\'ll get back to you as soon as possible.</p>');
  const error = $('<p class="form__response">Apologies, something went wrong while processing your message. Make sure all fields are filled out. Please try sending again!</p>')

  $('#submit-form').on('click', function(e) {
    $('#submit-form').text('sending...');
    e.preventDefault();

    let name = $('#contact-name').val();
    let email = $('#email').val();
    let message = $('#message').val();

    if (!name) {
      $('#submit-form').text('contact');
      $('#contact-form').append(error);
      return;
    }

    if (!email) {
      $('#submit-form').text('contact');
      $('#contact-form').append(error);
      return;
    }

    if (!message) {
      $('#submit-form').text('contact');
      $('#contact-form').append(error);
      return;
    }

    $.ajax({
        url:'https://formspree.io/michael.r.sauvage@gmail.com',
        method:'POST',
        data:{
          name: name,
          email: email,
          message: message,
          _subject:'Website Inquiry',
        },
        dataType:"json",
        success:function() {
          if($(error).length > 0) {
            $(error).remove();
          }

          $('#submit-form').text('contact');
          $('#contact-form').append(thanks);
          name = $('#contact-name').val('');
          email = $('#email').val('');
          message = $('#message').val('');
        },
        error: function() {
          $('#submit-form').text('contact');
          $('#contact-form').append(error);
        }
    });
  });
