$(document).ready(function () {
   
    
    $(".play").click(function () {
        
         'use strict';
         $(".trailer").css({
             
             visibility:'visible',
             opacity:1
         });
                                           
    });

    $(".close").click(function () {
       
        'use strict';
         $(".trailer").css({
             
             visibility:'hidden',
             opacity:0
         });
    });
    
    
});