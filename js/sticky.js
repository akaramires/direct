(function ($) {

    $.fn.sticky = function () {

        var $header = $("header");
        var $footer = $("footer");
        var $footerSticky = $('footer.sticky');
        var $content = $("section.wrap");

        if (!$footerSticky.length) {
            $footer.after($footer.clone().addClass('sticky'));
        }

        var _fromTop = $(window).scrollTop();
        var _fromBottom = $(document).height() - (_fromTop + $(window).height());

        if (_fromTop > 0) {
            $header.addClass('sticky');
            $content.addClass('scrolled');
        } else {
            $header.removeClass('sticky');
            $content.removeClass('scrolled');
        }

        if (_fromBottom > 0) {
            $footerSticky.show();
        } else {
            $footerSticky.hide();
        }
    };

    $.fn.stickyDo = function () {
        window.onscroll = function (event) {
            $.fn.sticky();
        };

        window.onresize = function (event) {
            $.fn.sticky();
        };
    };

}(jQuery));