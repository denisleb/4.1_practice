$("#quiz_dark_id").hide();
$("#quiz_container_id").hide();
$("#quiz_button_cross_id").click(quizInVisible);
$("#quiz_dark_id").click(quizInVisible);
$("#menu_button_four_id").click(quizVisible);

function quizInVisible(){
    $("#quiz_container_id").fadeOut(300);
    $("#quiz_dark_id").fadeOut(300);
}

function quizVisible(){
    $("#quiz_dark_id").fadeIn(300);
    $("#quiz_container_id").fadeIn(300);
}

$('#quiz_submit_button').on("click", quizСheck);

function quizСheck() {
    var valid = true;
    if ($('#quiz_input_url').val() == ''){
        var quiz_input_url_one = $('#quiz_input_url');
        quiz_input_url_one.on("focus", clearError);
        quiz_input_url_one.addClass('quiz_red_border');
        valid = false;
    }
    if ($('#quiz_input_title').val() == ''){
        var quiz_input_title_one = $('#quiz_input_title');
        quiz_input_title_one.on("focus", clearError);
        quiz_input_title_one.addClass('quiz_red_border');
        valid = false;
    }
    if ($('#quiz_textarea_description').val() == ''){
        var quiz_textarea_description_one = $('#quiz_textarea_description');
        quiz_textarea_description_one.on("focus", clearError);
        quiz_textarea_description_one.addClass('quiz_red_border');
        valid = false;
    }
    if (valid == true) {
        quizTransfer(); 
        quizInVisible();
    }
}

function clearError(event) {
    this.classList.remove('quiz_red_border');
}

function quizTransfer() {
    var variableUrl = $("#quiz_input_url").val();
    var variableTitle = $("#quiz_input_title").val();
    var variableDescription = $("#quiz_textarea_description").val();
    var varImage = $('<img class="film_image">').attr({src: variableUrl});
    var varTitleP = $('<p class="film_title">' + variableTitle + '</p>');
    var varTextP = $('<p class="film_text">' + variableDescription + '</p>');
    var newFilmBox = $('<div class="film_box"></div>');
    newFilmBox.append(varImage);
    newFilmBox.append(varTitleP);
    newFilmBox.append(varTextP);
    $('#film_container_two_id').append(newFilmBox);
}