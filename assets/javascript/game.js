window.hero = false;
window.sith = false;

var yoda = {
    health: 100,
    damage: 50,
};

var obi = {
    health: 150,
    damage: 25,
};

var luke = {
    health: 175,
    damage: 20,
};

var darth = {
    health: 130,
    damage: 15,
};

var general = {
    health: 120,
    damage: 15,
};

var vader = {
    health: 200,
    damage: 10,
}


$(document).ready(function () {
    $(".pick-hero").on("click", function (e) {
    if (window.hero === true) {
        return
    }
    window.hero = true;
    $(".hero-span").append($(this));
    });

    $(".pick-sith").on("click", function (e) {
        if (window.with === true) {
            return
        }
        window.with = true;
        $(".sith-span").append($(this));
        });
});






