import React from 'react';
import PropTypes from 'prop-types';
import './cart.scss';
import CartContent from './CartContent';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAllProductToCart } from '../../actions/cart';
function Cart(props) {
	const dispatch = useDispatch();

	const productToBuy = useSelector((state) => state.cart);
	console.log('productToBuy in Cart', productToBuy);

	const handleDeleteAllProductToBuy = () => {
		dispatch(deleteAllProductToCart());
	};

	return (
		<div className="cart-container">
			<div className="cart-header">
				<div className="cart-product">
					<p>Sản phẩm</p>
				</div>
				<div className="cart-info">
					<p className="cart-info-item">Đơn Giá</p>
					<p className="cart-info-item">Số Lượng</p>
					<p className="cart-info-item">Số Tiền</p>
					<p className="cart-info-item">Thao Tác</p>
				</div>
			</div>
			<div className="cart-content">
				<CartContent productToBuy={productToBuy} />
			</div>

			<div className="cart-footer">
				<div
					className="delete-total-product"
					onClick={handleDeleteAllProductToBuy}
				>
					Xóa tất cả
				</div>
				<div className="cart-total-price">
					<p>
						Tổng thanh toán (
						{productToBuy.reduce((amount, item) => {
							return amount + item.quantityToBuy;
						}, 0)}{' '}
						Sản phẩm):{' '}
						<span>
							₫
							{productToBuy
								.reduce((amount, item) => {
									return (
										amount + item.quantityToBuy * item.price
									);
								}, 0)
								.toString()
								.replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
						</span>
					</p>
					<button>Mua hàng</button>
				</div>
			</div>
		</div>
	);
}

Cart.propTypes = {};

export default Cart;
