// Ключ, який відповідає ключу в localstorage
const cartKey = 'cartList';

// Корзина з добавленими товарами
const cart = getCart();


// Показати або приховати корзину
$('.js-show-cart').click(() => $('.js-cart-list').toggleClass("hide") );


// Зберігаємо корзину у localstorege 
function saveCart() {
	localStorage.setItem(cartKey, JSON.stringify(cart));
}

// Виводимо збережені товари корзини
function getCart() {
	let cartList = localStorage.getItem(cartKey);
	cartList = JSON.parse(cartList);
	return (Array.isArray(cartList)) ? cartList : [];
}

// Вивід товарів у корзину 
function viewProducts()
{
	// Змінна яка відповідає за список добавлених товарів, які ми будемо виводити
	let listProducts = '';
	
	// Перевіряємо чи є в нас масив з корзиною
	if(!Array.isArray(cart))
		return false;

	// Кількість товарів 
	let cartCount = cart.length;
	
	// Якщо немає товарів
	if(cartCount == 0) {

		// Ховаємо кількість товару
		$('.js-cart-summ').hide();

		// Виводити html корзина пуста
		listProducts = `<li class="no-result">
				<img src="img/empty-cart.png" alt="" class="no-result__img">
				<h3 class="no-result__title">Корзина пуста</h3>
			</li>`;

	// Якщо товари є 
	} else {

		// Показує кількість товару
		$('.js-cart-summ').show();

		// Показує кількість товарів у корзині
		$('.js-cart-summ').html(cartCount);
		
		// Виводимо добавлені товари
		$.each(cart, function(index, {id, title, price, count, img}) {

			// Наповнюємо змінну товарами
			listProducts += `<li class="cart-product">
								<div class="cart-product__img-wrap">
									<img src="${img}" alt="" class="cart-product__img">
								</div>
								<h3 class="cart-product__title">${title}</h3>
								<p class="cart-product__price">${price}</p>
								<div class="button-count">
							        <button class="button-count__btn button-count__btn-count js-btn-count" data-for="#input-count-${id}" data-type="minus">-</button>
							        <input type="text" value="${count}" class="button-count__input" id="input-count-${id}"/>
							        <button class="button-count__btn button-count__btn-count js-btn-count" data-for="#input-count-${id}" data-type="plus">+</button>
    							</div>
								<div class="btn btn-remove js-remove-product" data-index="${index}">x</div>
							</li>`;

		});
		
		// Добавляємо кнопку оформлення замовлення
		listProducts += `<a href="checkout.html" class="btn-247 btn-order">Оформити замовлення</a>`;
	}


	// Виводимо сформований список товарів в html
	$('.js-cart-list').html(listProducts);

	// Зберігаємо корзину
	saveCart();
}

viewProducts();


/**
 * Добавлення товару в корзину
 */
$(document).on('click', '.js-add-product', function(event)
{
	// Дістаємо кнопку на яку нажали
	const btn = $(this);

	// Формуємо данні про товар
	const newProduct = btn.data();
	
	// Перевіряємо чи такий товар був доданий
	if (cart.isAloowAddProduct(newProduct, 'title')) {

		// Добавляємо товар у масив
		cart.push(newProduct);
		
		// Виводимо всі товари у корзині
		viewProducts();
	}

});




/**
 * Видалення товару
 */
$(document).on('click', '.js-remove-product', function()
{	
	// Дістаємо ключ масиву
	const index = $(this).data('product-key');

	// Видаляємо товар з масиву доданих товарів
	cart.splice(index, 1);

	// Виводимо всі товари у корзині
	viewProducts();
});



// https://tc39.github.io/ecma262/#sec-array.prototype.includes
if (!Array.prototype.isAloowAddProduct) {
	Object.defineProperty(Array.prototype, 'isAloowAddProduct', {

		// Наша функція, яка буде шукати товар в масиві і повертати або true або false
		// Якщо товар є або його немає
		value: function(objProduct, searchKey = 'title') {

			// Перевіряємо чи objProduct є обєктом
			if(typeof objProduct === 'object') {

				// Відбираємо значення з обєкта
				const addTitle = objProduct[searchKey];	

				// Перевіряємо чи існує значення чи ні
				if(typeof addTitle === 'undefined') {
					
					// Повертаємо false, що товар добавляти не потрібно
					return false;

				} else {
					
					// Зберігаємо масив з яким будемо працювати
					const arrList = this;

					// Зберігає значення ітерації
					let arrTitle = '';

					// Переключалка чи добавляти товар чи ні
					let swithAddProduct = true;

					// перебтраємо весь масив щоб знайти дублікат
					arrList.forEach( function(element) {
						
						// Витягуємо по ключу searchKey його значення
						arrTitle = element[searchKey];

						// Порівнюмо значенння масиву зі значенням арумента обєкта
						if (arrTitle == addTitle) {
							swithAddProduct = false;
						}

					});

					// Товар добавляти не потрібно
					return swithAddProduct;
				}


			} else {
				// Аргумент не являється продуктом
				throw "Перший аргумент не являється обєктом продукту";
			}


			// Товар добавляти не потрібно
			return false;
		}

	});
}



// Вішаємо подію кліку на кнопку плюс.
$(document).on('click', '.js-btn-count', function()
{
	// Дістаємо тип кнопки
	const typeBtn = $(this).data('type');

	// Відбираємо id інпуту з яким будемо працювати (з data-for в кнопці)
	const inputID = $(this).data('for');

	// Відбираємо input
	const input = $(inputID);
	
	// Відбираємо цифру з input
	let value = input.val();
	

	if(typeBtn == 'plus'){

		// Добавляємо цифру 1 до input
		input.val(++value);
	} else {

		if (value > 1) {
			// Мінусуємо цифру з input
			input.val(--value);
		}
	}
});

// Фунція відповідає за карточку товарі
const getProductCard = (id, title, description, price, thumbnail) => {
	return `<div class="card-product radius-4-px">
				<a href="product.html?id=${id}" class="img-hold">
					<img class="img" alt="" src="${thumbnail}">
				</a>
				<a href="product.html?id=${id}" class="title">${title}</a>
				<p class="info-text">${description}</p>
				<p class="price"><span class="big font-bold">${price}</span> дол</span></p>
				<div class="btn btn-primary w-100 js-add-product"
					data-id="${id}"
					data-title="${title}"
					data-price="${price}"
					data-img="${thumbnail}"
					data-count="1">Замовити</div>
			</div>`
}

