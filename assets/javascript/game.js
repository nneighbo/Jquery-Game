// window.hero = false;
// window.sith = false;

var heroName;

var yoda = {
    health: 300,
    damage: 20,
};

var obi = {
    health: 215,
    damage: 25,
};

var luke = {
    health: 200,
    damage: 20,
};

var darth = {
    health: 170,
    damage: 30,
};

var general = {
    health: 320,
    damage: 10,
};

var vader = {
    health: 430,
    damage: 15,
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

        var heroDamage = function () {
            $(".hero-text").html(heroName + " Did " + eval(heroName).damage + " Damage To " + sithName)
            $(".sith-text").html(sithName + " Did " + eval(sithName).damage + " Damage To " + heroName)
        };
        if (eval(sithName).health >= -75 && eval(heroName).health >= -50){
            renderStats();
            eval(sithName).health
            heroDamage();
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







