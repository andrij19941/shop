function getCatalog () {
	fetch('https://jsonplaceholder.typicode.com/posts/')
		.then(response => response.json())
		.then(catalog => {

			// Штучно обрізаємо відповідь
			const catalogView = catalog.slice(0, 12);

			// Змінна яка відповідає за список добавлених товарів, які ми будемо виводити
			let listProducts = '';

			// Виводимо добавлені товари
			$.each(catalogView, function(index, product) {
				// console.log("product", product);


				// Наповнюємо змінну товарами
				listProducts += `<div class="card-product radius-4-px">
						<img class="img" alt="" src="img/1.jpg">
						<a href="product.html?id=${product.id}" class="title">${product.title}</a>
						<p class="info-text">Склад,ангари,офіс,магазин,нічний клуб,фастфуд,ресторан</p>
						<p class="price"><span class="big font-bold">${product.id}00</span> грн</span></p>
						<div class="btn btn-primary w-100 js-add-product" data-id="${product.id}" data-title="${product.title}" data-price="${product.id}00" data-img="1.jpg">Замовити</div>
					</div>`;
			});


			// Виводимо сформований список товарів в html
			$('.js-catalog-list').html(listProducts);

		})
		.catch(error => console.error(error));
}

getCatalog();