/**
 * @file
 * Global utilities.
 *
 */
(function($, Drupal) {
  'use strict';
  Drupal.behaviors.bootstrap_barrio_subtheme = {
    attach: function(context, settings) {
      let position = $(window).scrollTop();
      const $body = $('body');
      $(window)
        .once('elcellerdelduc')
        .scroll(function () {
        if ($(this).scrollTop() > 50) {
          $body.addClass("scrolled");
        }
        else {
          $body.removeClass("scrolled");
        }
        let scroll = $(window).scrollTop();
        if (scroll > position) {
          $body.addClass("scrolldown");
          $body.removeClass("scrollup");
        } else {
          $body.addClass("scrollup");
          $body.removeClass("scrolldown");
        }
        position = scroll;
      });

      /** Init website sliders */
      $(`.slider--content`, context)
        .once('elcellerdelduc')
        .slick({
        autoplay: true,
        dots: !0,
        infinite: !0,
        speed: 2000,
        fade: !0,
        cssEase: "linear"
      })

      /**  */
      const categoriesMenuItem = $(`.change-menu`, context);
      categoriesMenuItem.on('click', function (e) {
        e.preventDefault();
        const $this = $(this)
        const selectedClassName = 'ourmenu--item_gold';
        const selectedCatId = $this.data('categoryId')
        const viewFoodsFilters = $(`.view-foods .view-filters`, context)
        const menuFilter = viewFoodsFilters.find(`select[name="field_category_target_id"]`, context)
        const submitFilter = viewFoodsFilters.find(`button[type="submit"]`, context)

        if ($this.parent().hasClass(selectedClassName)) {
          $this.parent().removeClass(selectedClassName)
          menuFilter.val('')
          submitFilter.trigger('click')
          return
        }

        categoriesMenuItem.parent().removeClass(selectedClassName)
        $this.parent().addClass(selectedClassName)
        menuFilter.val(selectedCatId)
        submitFilter.trigger('click')
      })

      $(`[data-toggle="tooltip"]`).tooltip()
    }
  };
})(jQuery, Drupal);
