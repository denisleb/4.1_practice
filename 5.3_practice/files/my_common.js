$(document).ready(function(){$(".button_hamburger").click(function(){
        $("#button_hamburger_id").removeClass("active");
        $("#menu_dark_id").addClass("active");
        $("#button_cross_id").addClass("active");
        $("#menu_container_id").addClass("active");
    });
});

$(document).ready(function(){$(".button_cross").click(function(){
        $("#button_cross_id").removeClass("active");
        $("#menu_dark_id").removeClass("active");
        $("#menu_container_id").removeClass("active");
        $("#button_hamburger_id").addClass("active");
    });
});

$(document).ready(function(){$(".menu_dark").click(function(){
        $("#menu_dark_id").removeClass("active");
        $("#menu_container_id").removeClass("active");
        $("#button_cross_id").removeClass("active");
        $("#button_hamburger_id").addClass("active");
    });
});

$('#film_button_container_id').on('click', buttonInvisibleFilmVisible);

function setFilmVisible() {$('#film_container_two_id').addClass('film_visible');}

function buttonInvisibleFilmVisible() {
    $('#film_button_container_id').addClass('film_invisible');
    $('#film_container_two_id').removeClass('film_invisible');
    setTimeout(setFilmVisible, 0);
}