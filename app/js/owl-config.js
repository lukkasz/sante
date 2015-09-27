$(function(){

    var $owl = $('.owl-carousel');

    $owl.owlCarousel({
        items: 4,
        itemsDesktopSmall: [1025, 3],
        itemsTablet: [750, 2],
        itemsMobile: [479, 1],
        pagination: false,
        autoPlay: 4000
    });

    $('.glyphicon-menu-left').click(function(){
        $owl.trigger('owl.prev');
    });

    $('.glyphicon-menu-right').click(function(){
        $owl.trigger('owl.next');
    });
});