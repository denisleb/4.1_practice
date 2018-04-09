function button_class_list() {
    var temporaryAdd = document.getElementById("film_button_container_id");
    temporaryAdd.classList.add("invisible");

    var temporaryRemove = document.getElementById("film_container_id");
    temporaryRemove.classList.remove("invisible");
}

function formVisible() {
    var temporaryRemove = document.getElementById("form_overlay_id");
    temporaryRemove.classList.remove("invisible");
    
    var temporaryRemove = document.getElementById("form_container_id");
    temporaryRemove.classList.remove("invisible");
}

function formUnVisible() {
    var temporaryRemove = document.getElementById("form_overlay_id");
    temporaryRemove.classList.add("invisible");
    
    var temporaryRemove = document.getElementById("form_container_id");
    temporaryRemove.classList.add("invisible");
}


function checkForm() {
    var valid = true;
    if (document.form_myself.your_name.value == "") {
        var temporaryAdd = document.getElementById("your_name");
        temporaryAdd.classList.add("red_border");
        //alert ("Пожалуйста заполните поле 'Ваше имя'.");
        valid = false;
    }

    if (document.form_myself.your_email.value == "") {
        var temporaryAdd = document.getElementById("your_email");
        temporaryAdd.classList.add("red_border");
        //alert ("Пожалуйста заполните поле 'Ваш email'.");
        valid = false;
    }

    if (document.form_myself.your_textarea.value == "") {
        var temporaryAdd = document.getElementById("your_textarea");
        temporaryAdd.classList.add("red_border");
        //alert ("Пожалуйста заполните поле 'Ваше сообщение'.");
        valid = false;
    }
    return valid;
}
