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
};



$(document).ready(function () {

    
    $(".luke-hp").append(luke.health);
    $(".luke-damage").append(luke.damage);

    $(".obi-hp").append(obi.health);
    $(".obi-damage").append(obi.damage);

    $(".yoda-hp").append(yoda.health);
    $(".yoda-damage").append(yoda.damage);

    $(".darth-hp").append(darth.health);
    $(".darth-damage").append(darth.damage);

    $(".vader-hp").append(vader.health);
    $(".vader-damage").append(vader.damage);

    $(".general-hp").append(general.health);
    $(".general-damage").append(general.damage);
    $(".attack").css('visibility', 'hidden');

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
        $(".attack").css('visibility', 'visible');
        $(".sith-span").append($(this));
    });
});






