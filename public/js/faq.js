$(".accordion__trigger").on("click", function (e) {
  e.preventDefault();
  var $this = $(this),
    accordionItem = $this.closest(".accordion__item"),
    accordionList = $this.closest(".accordion__list"),
    accordionItems = accordionList.find(".accordion__item"),
    accordeonContent = accordionItem.find(".accordion__content"),
    accordeonOtherContent = accordionList.find(".accordion__content"),
    duration = 250;
  if (!accordionItem.hasClass("active")) {
    accordionItem.addClass("active").siblings().removeClass("active");
    accordeonOtherContent.slideUp(duration);
    accordeonContent.slideDown(duration);
  } else {
    accordeonOtherContent.slideUp(duration);
    accordionItem.removeClass("active");
  }
});
