/*
 * Sticky header + active nav highlighting.
 *
 * Vanilla port of the jQuery in src/assets/js/main.js from the pre-2026
 * React build. Same thresholds, so the CSS in css/style.css keeps working:
 *   body.fixed-header       -> header gets background + shadow
 *   [data-scroll-nav].active -> nav item gets the red underline
 *
 * A nav item's data-scroll-nav is matched against a section's
 * data-scroll-data. The numbering is 0, 1, 2, 3, 5 -- 3 was Portfolio and is
 * now the FAQ; 4 was Blog and is still unused. Keep the two attributes in sync.
 */
(function () {
    'use strict';

    var sections = document.querySelectorAll('[data-scroll-data]');
    var navItems = document.querySelectorAll('[data-scroll-nav]');

    function headerFixing(scrollTop) {
        document.body.classList.toggle('fixed-header', scrollTop >= 100);
    }

    function headerNavActive(scrollTop) {
        var active = null;

        for (var i = 0; i < sections.length; i++) {
            var top = sections[i].getBoundingClientRect().top + scrollTop - 10;
            if (scrollTop >= top && scrollTop < top + sections[i].offsetHeight) {
                active = sections[i].getAttribute('data-scroll-data');
                break;
            }
        }

        navItems.forEach(function (item) {
            item.classList.toggle('active', item.getAttribute('data-scroll-nav') === active);
        });
    }

    function onScroll() {
        var scrollTop = window.scrollY;
        headerFixing(scrollTop);
        headerNavActive(scrollTop);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
})();
