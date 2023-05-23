// Маємо вивести замовлені товари з масиву cart в новий список, який відповідає іншій сторінці
function viewOrderProducts()
{
	// Змінна яка відповідає за список добавлених товарів, які ми будемо виводити
	let listProducts = '';

	// Кількість товарів 
	let cartCount = cart.length;
	
	// Якщо немає товарів
	if(cartCount != 0) {
		
		// Виводимо добавлені товари
		$.each(cart, function(index, product) {
			
			// Наповнюємо змінну товарами
			listProducts += `<div class="card-order-product">
				        		<img src="${product.img}" alt="" class="card-order-product__img">
				        		<h4 class="card-order-product__title">${product.title}</h4>
				        		<p class="card-order-product__price">
				        			<span class="card-order-product__price-label">Ціна:</span>
				        			<span class="card-order-product__price-value">${product.price}</span>
				        		</p>
				        	</div>`;

		});

		// // Добавляємо кнопку оформлення замовлення
		// listProducts += `<a href="checkout.html" class="btn-247 btn-order">Оформити замовлення</a>`;
	}


	// Виводимо сформований список товарів в html
	$('.js-list-order-products').html(listProducts);
	// Вішаємо подію кліку на кнопку плюс.

}

viewOrderProducts();
