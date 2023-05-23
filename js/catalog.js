/**
 * Виводить файли каталогу
 */
function getCatalog ()
{
	// Ми звертаємось до бази каталогу
	fetch('https://dummyjson.com/products?limit=10&select=id,title,description,price,brand,category,thumbnail,rating,image')
		.then(response => response.json())
		.then(catalog => {

			// Блок каталогу 
			const catalogList = $('.js-catalog-list');

			// Виводимо добавлені товари
			$.each(catalog.products, function(arrayKey, { id, title, description, price, brand, category, thumbnail, rating, image }) {

				// Виводимо сформований список товарів в html
				catalogList.append(getProductCard( id, title, description, price, thumbnail));
			});
		})
		.catch(error => console.error(error));
}


if(param.page == 'catalog') {
	getCatalog();
}
