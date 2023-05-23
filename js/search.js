$('.js-search-input').keyup(function(e) {
    e.preventDefault();

    const inputVal = $(this).val();

    // Звертаємось до бази каталогу
    fetch('https://dummyjson.com/products/search?q=' + inputVal)
        .then(response => response.json())
        .then(( { products } ) => {

            // Витягуємо елемент результат пошуку
            const searchList = $('.js-search-list');
            
            // Очищаємо попередні результати пошуку
            searchList.empty();

            if (products.length > 0) {
                $.each(products, function(arrayKey, { id, title, description, price, brand, category, thumbnail, rating, image }) {
                    // Виводимо сформований список товарів в HTML
                    searchList.append((getProductCard( id, title, description, price, thumbnail)));
                });
            } else {
                // Якщо результати пошуку відсутні, виводимо повідомлення
                $('.js-search-list').html('<p class="no-result">Результатів не знайдено</p>');
            }
        })
        .catch(error => console.error(error));
});
