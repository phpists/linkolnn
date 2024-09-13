// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {

  $('.toggle-pass').on('click', function() {
    $(this).toggleClass('active');
    $(this).parent().find('.password').attr('type', (_, attr) => attr == 'password' ? 'text' : 'password')
  })

  $('.mobile-menu').on('click', function() {
    $(this).toggleClass('active');
    $('.main-header .menu-block').toggleClass('active').slideToggle();
  })

  $('.price-block__item .show-more').on('click', function() {
    $(this).toggleClass('active');
    $(this).parent().find('.info').slideToggle();
  })

  $('.custom-select').select2({
    placeholder: "",
    allowClear: true,
    // minimumResultsForSearch: -1,
    dropdownAutoWidth: true,
    width: '100%',
    dropdownCssClass: 'custom-select__dropdown'
  });

  $('.accordion__trigger').on('click', function(e) {
		e.preventDefault();
		
		var $this = $(this),
		accordionItem = $this.closest('.accordion__item'),
		accordionList = $this.closest('.accordion__list'),
		accordionItems = accordionList.find('.accordion__item'),
		accordeonContent = accordionItem.find('.accordion__content'),
		accordeonOtherContent = accordionList.find('.accordion__content'),
		
		duration = 250;
		
		if (!accordionItem.hasClass('active')) {
			accordionItem.addClass('active').siblings().removeClass('active');
			accordeonOtherContent.slideUp(duration);
			accordeonContent.slideDown(duration);
		} else {
			accordeonOtherContent.slideUp(duration);
			
			accordionItem.removeClass('active');
		}
	});

  $('.switcher-order').on('change', function() {
    const isChecked = $(this).is(":checked");
    if (isChecked) {
      $('.input-hidden').slideDown();
      $('.warn').slideUp();
    } else {
      $('.input-hidden').slideUp();
      $('.warn').slideDown();
    }
  })

  $('.profile-mobile').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $('.profile__sidebar').slideToggle();
  })

  const prefix = $('.prefix')
  if (prefix) {
    prefix.each(function() {
      const widthPrefix = $(this).outerWidth();
      $(this).parent().find('input').css('padding-left', widthPrefix + 18 + 'px');
    })
  }

  const windowWidth = $(window).innerWidth();

  if (windowWidth < 650) {
    $('.info-block .icon').on('click', function() {
      const parent = $(this).parent();
      parent.toggleClass('active')
    })
  } else {
    $('.info-block').removeClass('active');
  }

})
