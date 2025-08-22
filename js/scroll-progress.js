(function ($) {
    "use strict";

    $(function () {
        var $wrap = $(".progress-wrap");
        if (!$wrap.length) return;

        var progressPath = document.querySelector(".progress-wrap path");
        var pathLength = progressPath.getTotalLength();

        // Set up the dash
        progressPath.style.transition = progressPath.style.WebkitTransition =
            "none";
        progressPath.style.strokeDasharray = pathLength + " " + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition =
            "stroke-dashoffset 10ms linear";

        // Update progress on scroll
        function updateProgress() {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress =
                height > 0
                    ? pathLength - (scroll * pathLength) / height
                    : pathLength;
            progressPath.style.strokeDashoffset = progress;
        }

        updateProgress();
        $(window).on("scroll", updateProgress);

        // Show/hide button after N px
        var offset = 50;
        var duration = 550;

        $(window).on("scroll", function () {
            if ($(this).scrollTop() > offset) {
                $wrap.addClass("active-progress");
            } else {
                $wrap.removeClass("active-progress");
            }
        });

        // Click to top
        $wrap.on("click", function (e) {
            e.preventDefault();
            $("html, body").animate({ scrollTop: 0 }, duration);
            return false;
        });
    });
})(jQuery);
