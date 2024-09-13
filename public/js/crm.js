// // Import vendor jQuery plugin example
// import '../vendor/select2.min.js';

document.addEventListener('DOMContentLoaded', () => {

  $('.show-pass').on('click', () => {
    $(this).toggleClass('active');
    $('.password').attr('type', (_, attr) => attr == 'password' ? 'text' : 'password')
  })

  $('.user-modal__footer .close').on('click', () => {
    const dropdownEl = $('.user-dropdown')[0];
    var dropdown = bootstrap.Dropdown.getInstance(dropdownEl) || new bootstrap.Dropdown(dropdownEl);
    dropdown.hide();
  })

  $('.custom-select__filter').select2({
    allowClear: true,
    minimumResultsForSearch: -1,
    dropdownAutoWidth: true
  });


  $('.custom-select__input').select2({
    placeholder: "",
    allowClear: true,
    // minimumResultsForSearch: -1,
    dropdownAutoWidth: true,
    width: '100%',
    dropdownCssClass: 'custom-select__dropdown'
  });

  $('.search-block__input').on('input', () => {
    const val = $('.search-block__input').val()
    if (val.length > 0) {
      $('.search-block__clear').addClass('active');
    } else {
      $('.search-block__clear').removeClass('active');
    }
  })

  $('.search-block__clear').on('click', () => {
    $('.search-block__input').val('');
    $('.search-block__clear').removeClass('active');
  })

  $('.new-author__block input').on('input', function () {
    const val = $(this).val();
    const parent = $(this).parent();
    if (val.length > 0) {
      parent.find('.clear-btn').addClass('active');
    } else {
      parent.find('.clear-btn').removeClass('active');
    }
  })

  $('.new-author__block .clear-btn').on('click', function() {
    $(this).parent().find('input').val('');
    $(this).removeClass('active');
  })

  function checkInputForValue() {
    const parentBlock = $('.new-author__block')
    parentBlock.each(function () {
      const val = $(this).find('input').val();
      if (val && val.length > 0) {
        $(this).find('.clear-btn').addClass('active');
      } else {
        $(this).find('.clear-btn').removeClass('active');
      }
    })
  }

  checkInputForValue();

  function styckyFooter() {
    const windowHeight = $(window).height();
    const heightNavbar = $('.navbar').outerHeight();
    const heightMain = $('main').outerHeight();

    if (heightNavbar + heightMain < windowHeight) {
      $('.main-footer').addClass('sticky');
    } else {
      $('.main-footer').removeClass('sticky');
    }
  }

  styckyFooter();

  $(window).on('resize', () => {
    styckyFooter();
  })

})
