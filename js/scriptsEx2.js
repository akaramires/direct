(function ($) {

    $(document).ready(function () {

        var class_name = "selected",
            $_tds = $("tbody td"),
            $_selected = $_tds.filter("." + class_name),
            $indexes = [];

        $_selected.each(function (index, value) {

            if ($(this).hasClass(class_name)) {

                var $rowIndex = $(this).parent().index();
                var $selfIndex = $(this).index();

                $indexes.push($rowIndex * 7 + $selfIndex);

            }
        });

        var min = Math.min.apply(Math, $indexes),
            max = Math.max.apply(Math, $indexes);

        var start = $($_tds).eq(min),
            end = $($_tds).eq(max);

        $_tds.slice($_tds.index(start), $_tds.index(end) + 1).addClass(class_name);

    });

}(jQuery));