// window.hero = false;
// window.sith = false;

var heroName;

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

    let renderStats = function () {
        $(".darth-hp").html('Health: ' + darth.health);
        $(".vader-hp").html('Health: ' + vader.health);
        $(".general-hp").html('Health: ' + general.health);
        $(".yoda-hp").html('Health: ' + yoda.health);
        $(".luke-hp").html('Health: ' + luke.health);
        $(".obi-hp").html('Health: ' + obi.health);
    }

    $(".attack").on("click", function(){
        heroName = $("span#hero.hero-span span.pick-hero input").val();
        sithName = $("span#sith.sith-span span.pick-sith input").val();
        eval(sithName).health = eval(sithName).health - eval(heroName).damage;
        eval(heroName).health = eval(heroName).health - eval(sithName).damage;
        if (eval(sithName).health >= -50 && eval(heroName).health >= 0){
            renderStats();
            eval(sithName).health
            eval(heroName).health
        if (eval(sithName).health <= 1) {
            $(".sith-span").empty();
            window.with = false;
        }
        if (eval(heroName).health <= 1){
            $(".hero-span").empty();
            window.hero = false;
        }
        } 
    });
});

    
    // $(".attack").on("click", function (character) {
    //     if (general.health > 1) {
    //         general.health = general.health - yoda.damage
    //         $(".general-hp").html('Health: ' + general.health);
    //         if (general.health <= 0) {
    //             $(".sith-span").empty();
    //             $(".sith-span").append($(".darth"))
    //         }

    //     }
    //     if (general.health <= 0 && darth.health > 1) {
    //         darth.health = darth.health - yoda.damage
    //         $(".darth-hp").html('Health: ' + darth.health)
    //         if (darth.health <= 0 ) {
    //             $(".sith-span").empty();
    //             $(".sith-span").append($(".vader"))
    //         }
    //     }
    //     if (darth.health <= 0 && general.health <= 0 && vader.health > 1) {
    //         vader.health = vader.health - yoda.damage
    //         $(".vader-hp").html('Health: ' + vader.health)
    //         if (vader.health <= 0 ) {
    //             $(".sith-span").empty();
    //             window.sith = false;
    //         }
    //     }

    // });
// });







