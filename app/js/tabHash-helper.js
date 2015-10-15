// This script improves teb panels


// Take hash from SELECT elemnt and open tab that tab on mobile devices
$(function(){
   $('#navTabs--mobile').on('change', function(e){
        var link = '#navTabs a[href="' + $(this).val() + '"]';
        $(link).tab('show');
   });

    $(window).on('load', function(e){
        //e.preventDefault();
        var loc = window.location;
        var link;
        if (loc.hash) {
            link = '#navTabs a[href="' + loc.hash + '"]';
            $(link).tab('show');
        }
    });

});


// this function takes hash from external link and open tab in service.html with that hash
// $(function(){
//     //e.preventDefault();
//     var loc = window.location;
//     var link;

//     if (loc.hash) {
//         link = '#navTabs a[href="' + loc.hash + '"]';
//         $(link).tab('show');
        
//     }


// });