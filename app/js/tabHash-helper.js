// This script improves teb panels


// Take hash from SELECT elemnt and open tab that tab on mobile devices
$(function(){
    var navTabsMobile = $('#navTabs--mobile');
    var loc = window.location;
    var link;

    // Open tab from <select> option value 
    navTabsMobile.on('change', function(e){
        var optionValue = '#navTabs a[href="' + $(this).val() + '"]';
        $(optionValue).tab('show');
    });

    
    // Open tab from window.location.hash 
    if ( loc.hash ) {
        
        link = '#navTabs a[href="' + loc.hash + '"]';

        navTabsMobile.val( loc.hash );

        $(link).tab('show');

        // Clear the hash to prevent jumping to the ID with hash
        loc.hash = ''
    }

});



