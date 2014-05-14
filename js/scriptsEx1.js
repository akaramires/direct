(function ($) {

    $(document).ready(function () {

        $.fn.stickyDo();

        $(document).on('click', '.js-delete-paragraph', function (e) {
            e.preventDefault();

            var paragraphs = $("section p").length;
            var $random = Math.floor(Math.random() * (paragraphs + 1))
            $("section p:visible:eq(" + $random + ")").hide();
        });

    });

}(jQuery));