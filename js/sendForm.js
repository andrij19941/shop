function sendForm (event) {

    // Заборонити відправку форми
    event.preventDefault();

    // Отримуємо дані з форми
    const formData = new FormData(event.target);
    
    // Робимо запит через ajax
    $.ajax({
        type: 'POST',
        url: "http://lessons.inderio.com/testSend.php",
        success: function(result){
            console.log(result);
        }
    });
}
