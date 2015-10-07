$(function(){
    var $galleryContent = $('.gallery__content');

    $galleryContent.imagesLoaded(function(){
        $galleryContent.removeClass('is-loading');
        $galleryContent.isotope({
            itemSelector: '.gallery__item',
            layoutMode: 'fitRows',
            filter: '.salon'
        });
    });

    $('.gallery__nav__item').on('click', function(e){
        e.preventDefault();
        
        var filter = $(this).attr('data-filter');
        $galleryContent.isotope({ filter: filter });
        $('a.active').removeClass('active');
    });
});