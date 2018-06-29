window.hero = false;
window.sith = false;

$(document).ready(function () {
    $(".pick-character").on("click", function (e) {
    if (window.hero === true) {
        return
    }
    window.hero = true;
    $(".hero-span").append($(this));
    });
});

var pickedCharacters;   

$(document).ready(function (){

$(".picked-character").on("click", function (e){
for (pickedCharacters = 0; pickedCharacters < 2; pickedCharacters++) {
       $(".hero-span").append($(this)); 
    }
});
});




