$(function(){
    var $galleryContent = $('.gallery__content');
    var $gallery__nav__item = $('.gallery__nav__item');

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

    $gallery__nav__item.on('click', function(e){
        e.preventDefault();
        var $this = $(this);
        var filter = $this.attr('data-filter');
        var $child = $this.children()

        if (!$child.hasClass('active')) {
            $child.addClass('active')
            $this.siblings().children().removeClass('active');
        } 

        $galleryContent.isotope({ filter: filter });

    });
});