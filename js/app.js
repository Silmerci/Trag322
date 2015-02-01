$(document).ready(function() {
   var baloon = $('.trag3p');
     function runIt() {
       baloon.animate({opacity:'1'}, 200);
       baloon.animate({opacity:'0.01'}, 5000, runIt);
    }
    runIt();
});