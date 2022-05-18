import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import './detail-product.scss';

import product1 from '../../assets/images/product1.jpg';
import product2 from '../../assets/images/product2.jpg';
import product3 from '../../assets/images/product3.jpg';
import product4 from '../../assets/images/product4.jpg';
import product5 from '../../assets/images/product5.jpg';
import product6 from '../../assets/images/product6.jpg';
import product7 from '../../assets/images/product7.jpg';

import facebook from '../../assets/images/facebook.svg';
import messenger from '../../assets/images/messenger.svg';
import pinterest from '../../assets/images/pinterest.svg';
import twitter from '../../assets/images/twitter.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
	addProductToCart,
	reduceProductToCart,
	updateProductToCart,
} from '../../actions/cart';

import product2Main from '../../assets/images/product2-main.jpg';
import Icon from './Icon';

function DetailProduct(props) {
	const { slug } = useParams();
	const dispatch = useDispatch();
	const [quantityDetailProduct, setQuantityDetailProduct] = useState(1);

	const products = useSelector((state) => state.product);
	const productToBuy = useSelector((state) => state.cart);

	const indexItemProduct = products.findIndex(
		(item, index) => item.slug === slug
	);

	console.log('indexItemProduct', indexItemProduct);

	const itemProduct = products.find((item, index) => item.slug === slug);

	const newItemProduct = { ...itemProduct, index: indexItemProduct };

	console.log('newItemProduct', newItemProduct);

	const { imageProduct, price, title, index } = newItemProduct;

	const handleRiseQuantity = () => {
		setQuantityDetailProduct(quantityDetailProduct + 1);
	};

	const handleReduceQuantity = () => {
		setQuantityDetailProduct(
			quantityDetailProduct - 1 === 0 ? 1 : quantityDetailProduct - 1
		);
	};

	const handleOrderProduct = () => {
		const productInCart = productToBuy.find((item, index) => {
			return item.code === newItemProduct.code;
		});

		console.log('productInCart', productInCart);
		if (productInCart) {
			dispatch(updateProductToCart(productInCart.index));
		} else {
			dispatch(
				addProductToCart({
					...newItemProduct,
					quantityToBuy: quantityDetailProduct,
				})
			);
		}
	};

	return (
		<div className="detail-product">
			<div className="detail-product-wrap">
				<div className="detail-product-left">
					<div className="left-image-main">
						<img src={imageProduct} alt="" width="450" />
					</div>
					<div className="left-image-list">
						<div className="left-image-item active">
							<img src={product1} alt="" width="80" />
						</div>
						<div className="left-image-item">
							<img src={product2} alt="" width="80" />
						</div>
						<div className="left-image-item">
							<img src={product3} alt="" width="80" />
						</div>
						<div className="left-image-item">
							<img src={product4} alt="" width="80" />
						</div>
						<div className="left-image-item">
							<img src={product5} alt="" width="80" />
						</div>
					</div>
					<div className="left-share">
						<div className="share-media">
							<p>Chia sẽ:</p>
							<div className="media-list">
								<img
									src={messenger}
									alt=""
									className="media-item"
								/>
								<img
									src={facebook}
									alt=""
									className="media-item"
								/>
								<img
									src={pinterest}
									alt=""
									className="media-item"
								/>
								<img
									src={twitter}
									alt=""
									className="media-item"
								/>
							</div>
						</div>
						<div className="left-like">
							<svg width="24" height="20" className="_1Jj7iG">
								<path
									d="M19.469 1.262c-5.284-1.53-7.47 4.142-7.47 4.142S9.815-.269 4.532 1.262C-1.937 3.138.44 13.832 12 19.333c11.559-5.501 13.938-16.195 7.469-18.07z"
									stroke="#FF424F"
									strokeWidth="1.5"
									fill="none"
									fillRule="evenodd"
									strokeLinejoin="round"
								></path>
							</svg>
							<p className="like-number">Đã thích (2,3k)</p>
						</div>
					</div>
				</div>
				<div className="detail-product-right">
					<div className="right-header">
						<h3 className="header-title">
							<span className="header-tag-like">Yêu Thích</span>
							<span className="title-content">{title}</span>
						</h3>
						<div className="right-review">
							<div className="review-star">
								<span className="star-percent">5.0</span>
								<div className="star-list">
									<i className="fa-solid fa-star"></i>
									<i className="fa-solid fa-star"></i>
									<i className="fa-solid fa-star"></i>
									<i className="fa-solid fa-star"></i>
									<i className="fa-solid fa-star"></i>
								</div>
							</div>
							<div className="review-number review-common">
								<span className="number-people">39.1k</span>
								<span className="number-text">Đánh Giá</span>
							</div>
							<div className="review-bought review-common">
								<span className="number-people">128.9k</span>
								<span className="number-text">Đã bán</span>
							</div>
						</div>

						<div className="right-price">
							<div className="price-detail">
								<p className="price-old">49.000.000 ₫</p>
								<p className="price-current">
									{price
										.toString()
										.replace(
											/\B(?=(\d{3})+(?!\d))/g,
											'.'
										)}{' '}
									₫
								</p>
								<span>50% GIẢM</span>
							</div>
							<div className="price-description">
								<div className="tag-price">
									<Icon />
								</div>
								<div className="price-info">
									<p className="info-title">
										<span>Gì Cũng Rẽ</span>
										<svg
											width="14"
											enableBackground="new 0 0 15 15"
											viewBox="0 0 15 15"
											role="img"
											className="stardust-icon stardust-icon-help"
										>
											<circle
												cx="7.5"
												cy="7.5"
												fill="none"
												r="6.5"
												strokeMiterlimit="10"
											></circle>
											<path
												stroke="none"
												d="m5.3 5.3c.1-.3.3-.6.5-.8s.4-.4.7-.5.6-.2 1-.2c.3 0 .6 0 .9.1s.5.2.7.4.4.4.5.7.2.6.2.9c0 .2 0 .4-.1.6s-.1.3-.2.5c-.1.1-.2.2-.3.3-.1.2-.2.3-.4.4-.1.1-.2.2-.3.3s-.2.2-.3.4c-.1.1-.1.2-.2.4s-.1.3-.1.5v.4h-.9v-.5c0-.3.1-.6.2-.8s.2-.4.3-.5c.2-.2.3-.3.5-.5.1-.1.3-.3.4-.4.1-.2.2-.3.3-.5s.1-.4.1-.7c0-.4-.2-.7-.4-.9s-.5-.3-.9-.3c-.3 0-.5 0-.7.1-.1.1-.3.2-.4.4-.1.1-.2.3-.3.5 0 .2-.1.5-.1.7h-.9c0-.3.1-.7.2-1zm2.8 5.1v1.2h-1.2v-1.2z"
											></path>
										</svg>
									</p>
									<span className="info-text">
										Giá tốt nhất so với các sản phẩm cùng
										loại trên Shopee!
									</span>
								</div>
							</div>
						</div>

						<div className="right-color">
							<div className="color-title">MÀU</div>
							<div className="color-content">
								<p className="color-item">XANH ĐEN</p>
								<p className="color-item">NÂU ĐỎ</p>
								<p className="color-item">SỌC GIỮA</p>
								<p className="color-item">CAM NÂU</p>
								<p className="color-item">XANH ĐEN</p>
								<p className="color-item">NÂU ĐỎ</p>
								<p className="color-item">SỌC GIỮA</p>
								<p className="color-item">CAM NÂU</p>
							</div>
						</div>
						<div className="right-color right-size">
							<div className="color-title">SIZE</div>
							<div className="color-content">
								<p className="color-item">S (35 - 47 kg)</p>
								<p className="color-item">M (48 - 59 kg)</p>
								<p className="color-item">L (60 - 67 kg)</p>
								<p className="color-item">XL (68 - 75 kg)</p>
								<p className="color-item">XXL (76 - 85 kg)</p>
							</div>
						</div>
						<div className="right-quantity">
							<div className="number-title">Số lượng</div>
							<div className="number-quantity">
								<div className="quantity-wrap">
									<button
										className="btn-decrease btn-item"
										onClick={() =>
											handleReduceQuantity(index)
										}
									>
										-
									</button>
									<input
										value={quantityDetailProduct}
										type="text"
										className="input-quantity"
									/>
									<button
										className="btn-increase btn-item"
										onClick={() =>
											handleRiseQuantity(index)
										}
									>
										+
									</button>
								</div>
								<p className="number-available">
									229535 sản phẩm có sẵn
								</p>
							</div>
						</div>
						<div className="right-add-to-cart">
							<button
								className="btn-add"
								onClick={handleOrderProduct}
							>
								Thêm vào giỏ hàng
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="info-product">
				<div className="info-product-left">
					<div className="info-section">
						<h3 className="info-header">CHI TIẾT SẢN PHẨM</h3>
						<div className="product-specific">
							<div className="specific-item">
								<p className="item-title">Chiều dài tay áo</p>
								<p className="item-extra">Tay ngắn</p>
							</div>
							<div className="specific-item">
								<p className="item-title">Chất liệu</p>
								<p className="item-extra">Cotton</p>
							</div>
							<div className="specific-item">
								<p className="item-title">Mẫu</p>
								<p className="item-extra">Sọc</p>
							</div>
							<div className="specific-item">
								<p className="item-title">Kho hàng</p>
								<p className="item-extra">229534</p>
							</div>
						</div>
					</div>
					<div className="info-section">
						<h3 className="info-header">MÔ TẢ SẢN PHẨM</h3>
						<div className="more-info-product">
							<p>
								Áo thun nam POLO thiết kế sọc ngang vải cá sấu
								cotton cao cấp ngắn tay cực sang trọng.
							</p>
							<p>
								Shop Áo Polo VNXK hân hạnh được phục vụ quý
								khách. Những sản phẩm mới nhất vẫn liên tục được
								cập nhật mỗi ngày phù hợp với nhiều lứa tuổi.
							</p>
							<br />
							<div className="more-section">
								<p>1. GIỚI THIỆU SẢN PHẨM</p>
								<br />
								<p>
									- Áo phông Polo nam trắng là sự lựa chọn
									hoàn hảo cho các chàng trai. Áo 3 màu trung
									tính rất dễ mặc, form áo vừa vặn cơ thể,
									thoải mái theo từng cử động.
								</p>
								<p>
									- Màu sắc trung tính và phối màu tuyệt vời
									mà rất ít áo polo có tạo nên sự dễ dàng
									trong việc phối đồ và tạo ra cho mình nhiều
									phong cách khác nhau.
								</p>
								<p>
									- Áo được làm từ chất liệu cá sấu cotton co
									giãn với bề mặt vải mềm mại, thấm hút mồ hôi
									tốt tạo cảm giác thoải mái, thoáng mát cho
									người mặc. Đây cũng là chất liệu dễ giặt
									sạch, giúp bạn tiết kiệm một khoảng thời
									gian đáng kể.
								</p>
							</div>
							<div className="more-section">
								<br />
								<br />
								<p>2. THÔNG TIN SẢN PHẨM </p>
								<br />
								<p>
									- Chất liệu: 100% chất cotton cá sấu, thấm
									hút mồ hôi , giặt không ra màu , không mất
									form
								</p>
								<p>- Các Size S - M - L- XL- XXL - XXXL</p>
								<br />
								<p className="size-padding">
									+ Size S : 35-47 kg cao 1m5-1m55
									<br />
									+ Size M : 48 - 59 kg cao 1m55 - 1m65
									<br />
									+ Size L : 60 - 67kg cao 1m65 - 1m80
									<br /> + Size XL : 68- 75kg cao 1m65 - 1m80
									<br /> + Size XXL : 76 - 85kg cao 1m65 -
									1m85
									<br /> + Size XXXL : 86 - 95kg cao 1m65 -
									1m85
								</p>
								<p>
									- Màu sắc : Đen , trắng , Xanh Bích , Xanh
									Thiên Thanh , Xanh đen , Đỏ Tươi , Đỏ Đô ,
									Vàng , Biển , Cam , Xanh Ya , Xanh Két ,
									Xanh Lá , Xanh cốm , Xám Đậm , Xám Lợt , Màu
									nâu , Xanh Vịt
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="info-product-right"></div>
			</div>
		</div>
	);
}

DetailProduct.propTypes = {};

export default DetailProduct;
