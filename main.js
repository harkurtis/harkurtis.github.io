$(document).ready(function() {
    $(document).foundation();
    $(document).foundation({
        "magellan-expedition": {
            active_class: 'active', // specify the class used for active sections
            threshold: 0, // how many pixels until the magellan bar sticks, 0 = auto
            destination_threshold: 500, // pixels from the top of destination for it to be considered active
            throttle_delay: 50, // calculation throttling to increase framerate
            fixed_top: 0, // top distance in pixels assigend to the fixed element on scroll
            offset_by_height: true // whether to offset the destination by the expedition height. Usually you want this to be true, unless your expedition is on the side.
        }
    });
    $(document).foundation('magellan', 'reflow');

    $('#carousel').slick({
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000
    });

    $('#to-top').click(function() {
        $('html, body').animate({
            scrollTop: $('#page-header').offset().top - 80
        }, 1000);
    });
});
