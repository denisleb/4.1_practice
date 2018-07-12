//прослушивание кнопки появления блока фильмов и передача события функции:
var button = document.getElementById('film_button_id');
button.addEventListener('click', buttonInvisibleFilmVisible);

//прослушивание ссылки на форму и передача события функции:
var link = document.getElementById('form_link_id');
link.addEventListener("click", formVisible);

//функция скрытия кнопки и появления блока фильмов:
function buttonInvisibleFilmVisible() {
    //скрытие кнопки:
    var temporaryAdd = document.getElementById('film_button_container_id');
    temporaryAdd.classList.add('invisible');
    //появление блока фильмов в прозрачном виде:
    var temporaryRemove = document.getElementById('film_container_two_id');
    temporaryRemove.classList.remove('invisible');
    //разделение удаления класса и добавления класса во времени:
    setTimeout(setVisible, 0);
   //функция делает блок с фильмами непрозрачным:
    function setVisible() {
    film_container_two_id.classList.add('visible');
    }
}


//функция появления блока с формой:
function formVisible(event) {
    event.preventDefault();
    //появление полупрозрачного слоя:
    var temporaryRemove = document.getElementById('form_overlay_id');
    temporaryRemove.classList.remove('invisible');
    //появление формы:
    var temporaryRemove = document.getElementById('form_container_id');
    temporaryRemove.classList.remove('invisible');
    
    form_container_id.style.opacity = '1'; //должно производить плавное появление блока
    form_container_id.style.transition = '300ms'; //должно производить плавное появление блока
}


//функция скрытия блока с формой
function formInVisible() {
    var temporaryRemove = document.getElementById('form_overlay_id');
    temporaryRemove.classList.add('invisible');
    
    var temporaryRemove = document.getElementById('form_container_id');
    temporaryRemove.classList.add('invisible');
}


//проверка полей формы на заполнение и подсвечивание незаполненных полей формы
function checkForm() {
    var valid = true;
    
    if (document.form_myself.your_name.value == '') {
        var your_name_one = document.getElementById('your_name');
        your_name_one.addEventListener("focus", clearError);
        your_name_one.classList.add('red_border');
        //alert ('Пожалуйста заполните поле 'Ваше имя'.');
        valid = false;
    }

    if (document.form_myself.your_email.value == '') {
        var your_email_one = document.getElementById('your_email');
        your_email_one.addEventListener("focus", clearError);
        your_email_one.classList.add('red_border');
        //alert ('Пожалуйста заполните поле 'Ваш email'.');
        valid = false;
    }

    if (document.form_myself.your_textarea.value == '') {
        var your_textarea_one = document.getElementById('your_textarea');
        your_textarea_one.addEventListener("focus", clearError);
        your_textarea_one.classList.add('red_border');
        //alert ('Пожалуйста заполните поле 'Ваше сообщение'.');
        valid = false;
    }
    return valid;
}


//удаление красного бордера после активации поля:
function clearError(event)  {
    this.classList.remove('red_border');
}