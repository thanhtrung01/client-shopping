export const addProductToCart = (product) => {
	return {
		type: 'ADD_PRODUCT_TO_CART',
		payload: product,
	};
};

export const deleteProduct = (id) => {
	return {
		type: 'DELETE_PRODUCT',
		payload: id,
	};
};

export const updateProductToCart = (id) => {
	return {
		type: 'UPDATE_PRODUCT_TO_CART',
		payload: id,
	};
};

export const reduceProductToCart = (id) => {
	return {
		type: 'REDUCE_PRODUCT_TO_CART',
		payload: id,
	};
};

export const deleteProductToCart = (id) => {
	return {
		type: 'DELETE_PRODUCT_TO_CART',
		payload: id,
	};
};

export const deleteAllProductToCart = () => {
	return {
		type: 'DELETE_ALL_PRODUCT_TO_CART',
		// payload: id,
	};
};
