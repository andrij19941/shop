function sendForm (event) {

    // Заборонити відправку форми
    event.preventDefault();

    // Зберігаємо форму в змінну
    const form = event.target;

    // Зберігаємо форму в змінну
    const formEl = $(form);

    // Отримуємо дані з форми
    const formData = new FormData(form);
    
    // Робимо запит через ajax
    $.ajax({
        type: 'POST',
        url: "send.php",
        processData: false,
        contentType: false,
        data: formData,
        success: function(result){

            if (result == "success") {

                formEl.slideUp('fast', function() {
                    $('.js-success-send-form').slideDown('fast');
                })

            } else {
                alert('Виникла помилка при відправленні');
            }

        }
    });
}



