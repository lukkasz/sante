$(function(){
    var $galleryContent = $('.gallery__content');

    $galleryContent.imagesLoaded(function(){
        $galleryContent.removeClass('is-loading');
        $galleryContent.isotope({
            layoutMode: 'fitRows',
            itemSelector: '.gallery__item',
            percentPosition: true,
            fitRows: {
                gutter: 10
            },
            filter: '.salon'
        });
    });

    $('.gallery__nav__item').on('click', function(){
        e.preventDefault();
        var filter = $(this).attr('data-filter');
        $galleryContent.isotope({ filter: filter });
        $('a.active').removeClass('active');
    });
});