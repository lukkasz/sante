// This script improves teb panels


// Take hash from SELECT elemnt and open tab that tab on mobile devices
$(function(){
   $('#navTabs--mobile').on('change', function(e){
        var link = '#navTabs a[href="' + $(this).val() + '"]';
        $(link).tab('show');
   });

    //$(window).on('load', function(){
    //     var loc = window.location;
    //     var link;
    //     if (loc.hash) {
    //         nk = '#navTabs a[href="' + loc.hash + '"]';
    //         ta$(link).tab('show');
    //     }
    // });
   //};
});


// this function takes hash from external link and open tab in service.html with that hash
$(function(){
    var loc = window.location;
    var link;

    if (loc.hash) {
        link = '#navTabs a[href="' + loc.hash + '"]';
        $(link).tab('show');
    }
});