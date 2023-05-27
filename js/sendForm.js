function sendForm (event) {

    // Заборонити відправку форми
    event.preventDefault();

<<<<<<< HEAD
    // Зберігаємо форму в змінну
    const form = event.target;

    // Зберігаємо форму в змінну
    const formEl = $(form);

    // Отримуємо дані з форми
    const formData = new FormData(form);
=======
    // Отримуємо дані з форми
    const formData = new FormData(event.target);
>>>>>>> c711c777f8f3db6688bd190c9292551dcd0d2485
    
    // Робимо запит через ajax
    $.ajax({
        type: 'POST',
<<<<<<< HEAD
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



=======
        url: "http://lessons.inderio.com/testSend.php",
        success: function(result){
            console.log(result);
        }
    });
}
>>>>>>> c711c777f8f3db6688bd190c9292551dcd0d2485
