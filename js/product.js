/**
 * Виводити інформацію про товар
 */
function viewProduct ()
{
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");

	// Ми звертаємось до бази каталогу
	fetch('https://dummyjson.com/products/' + id)
		.then(response => response.json())
		.then(product => {

			// Витчгуємо картинки з продукту
			const images = product.images;

			const productGallery = $('.js-product-gallery');

			// Перебираємо массив
			images.forEach((image, key) => {
				if(key==0){
					productGallery.append(`<div class="carousel-item active">
						<img src="${image}" class="d-block w-100 js-product-img" alt="" />
					</div>`);
				} else {
					productGallery.append(`<div class="carousel-item">
						<img src="${image}" class="d-block w-100 js-product-img" alt="" />
					</div>`);
				}
				
			});
           
			console.log(product);

			// Виводимо інформацію про товар 
			$('.js-product-title').html(product.title);
			$('.js-product-description').html(product.description);
			$('.js-product-price').html(product.price);
			$('.js-product-rating').html(product.rating);

			// Виводимо кнопку замовлення
			$('.js-product-order-btn').html(`<div class="btn btn-primary w-100 js-add-product"
				data-id="${product.id}"
				data-title="${product.title}"
				data-price="${product.price}"
				data-img="${product.thumbnail}"
				data-count="1">Замовити</div>`);

			
		})
		.catch(error => console.error(error));
}


if(param.page == 'product') {
	viewProduct();
}


