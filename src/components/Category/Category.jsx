import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './category.scss';

import product1 from '../../assets/images/product1.jpg';
import product2 from '../../assets/images/product2.jpg';
import product3 from '../../assets/images/product3.jpg';
import product4 from '../../assets/images/product4.jpg';
import product5 from '../../assets/images/product5.jpg';
import product6 from '../../assets/images/product6.jpg';
import product7 from '../../assets/images/product7.jpg';
import ProductItem from '../ProductItem/ProductItem';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../actions/product';
import productApi from '../../api/productApi';

const productList = [
	{
		id: 1,
		title: 'Balo du lịch đi học giá rẻ thời trang cute đẹp MiniCat BL464 ( không có móc gấu)',
		description: 'Meat Balls For Pet',
		category: '',
		price: 89,
		// priceOld: '108.000₫',
		imageUrl: product1,
		categorySlug: 'meat-balls-for-pet',
		slug: 'meat-balls-for-pet',
		sale: true,
		quantity: 121,
	},
	{
		id: 2,
		title: 'Giày Jordan 1 High Panda, Giày Thể Thao JD1 Cao Cổ Màu Đen, Da Bò Cao Cấp Full Size Nam Nữ | JDD002',
		description: 'Meat Balls For Pet',
		category: '',
		price: 90,
		// priceOld: '108.000₫',
		imageUrl: product2,
		categorySlug: 'meat-balls-for-pet',
		slug: 'meat-balls-for-pet',
		sale: true,
		quantity: 121,
	},
	{
		id: 3,
		title: 'Áo Thun T LÀO Hiphop Nam Nữ Ulzzang Unisex TATO vải Cotton cao cấp, thấm hút mồ hôi,năng động. Dễ phối đồ.',
		description: 'Meat Balls For Pet',
		category: '',
		price: 90,
		// priceOld: '108.000₫',
		imageUrl: product3,
		categorySlug: 'meat-balls-for-pet',
		slug: 'meat-balls-for-pet',
		sale: true,
		quantity: 121,
	},
	{
		id: 4,
		title: 'Bộ nữ áo thun cotton + quần loang,set đồ nữ mặc hè đi chơi,đi dạo',
		description: 'Meat Balls For Pet',
		category: '',
		price: 90,
		// priceOld: '108.000₫',
		imageUrl: product4,
		categorySlug: 'meat-balls-for-pet',
		slug: 'meat-balls-for-pet',
		sale: true,
		quantity: 121,
	},
	{
		id: 5,
		title: 'Áo thun CHESS bàn cờ unisex - Phông cộc tay dáng suông, oversize in hình họa tiết cá tính, nổi bật',
		description: 'Meat Balls For Pet',
		category: '',
		price: 90,
		// priceOld: '108.000₫',
		imageUrl: product5,
		categorySlug: 'meat-balls-for-pet',
		slug: 'meat-balls-for-pet',
		sale: true,
		quantity: 121,
	},
	{
		id: 6,
		title: 'Dép đi biển nữ quai ngang mùa hè phiên bản Hàn Quốc đế dày chống trượt, T111',
		description: 'Meat Balls For Pet',
		category: '',
		price: 90,
		// priceOld: '108.000₫',
		imageUrl: product6,
		categorySlug: 'meat-balls-for-pet',
		slug: 'meat-balls-for-pet',
		sale: true,
		quantity: 121,
	},
	{
		id: 7,
		title: 'Kệ sách để bàn bằng gỗ đa năng Béo shop màu trắng tháo rời lắp ghép dễ dàng tiện lợi',
		description: 'Meat Balls For Pet',
		category: '',
		price: 90,
		// priceOld: '108.000₫',
		imageUrl: product7,
		categorySlug: 'meat-balls-for-pet',
		slug: 'meat-balls-for-pet',
		sale: true,
		quantity: 121,
	},
];

function Category(props) {
	const [products, setProducts] = useState([]);
	const dispatch = useDispatch();

	useEffect(() => {
		const getAllProductApi = async () => {
			try {
				const response = await productApi.getAll();
				setProducts(response.products);
				dispatch(addProduct(response.products));
			} catch (error) {
				console.log('Faild to fetch user list: ', error);
			}
		};
		getAllProductApi();
	}, []);

	return (
		<div className="category-wrap">
			<div className="category-left">
				<div className="left-header">
					<i className="fa-solid fa-list left-header-icon"></i>
					<p className="left-header-title">Tất Cả Danh Mục</p>
				</div>
				<ul className="left-list-option">
					<li className="list-option active">Thời trang nam</li>
					<li className="list-option">Áo khoác</li>
					<li className="list-option">Áo Vest và Blazer </li>
					<li className="list-option">Áo Hoodie, Áo Len & Áo Nỉ</li>
					<li className="list-option">Quần Jeans</li>
					<li className="list-option">Quần Dài/Quần Âu</li>
					{/* +35 top */}
					<svg
						viewBox="0 0 4 7"
						className="option-active shopee-svg-icon shopee-category-list__main-category__caret icon-down-arrow-right-filled"
					>
						<polygon points="4 3.5 0 0 0 7"></polygon>
					</svg>
				</ul>
			</div>
			<div className="category-right">
				<div className="sort-product">
					<div className="sort-item sort-text">Sắp xếp theo</div>
					<div className="sort-item sort-popular">Phổ biến</div>
					<div className="sort-item sort-newest">Mới nhất</div>
					<div className="sort-item sort-bestseller">Bán chạy</div>
					<div className="sort-item sort-price">
						<span>Giá</span>
						<svg
							width="12"
							viewBox="0 0 10 6"
							className="shopee-svg-icon icon-arrow-down-small"
						>
							<path
								d="M9.7503478 1.37413402L5.3649665 5.78112957c-.1947815.19574157-.511363.19651982-.7071046.00173827a.50153763.50153763 0 0 1-.0008702-.00086807L.2050664 1.33007451l.0007126-.00071253C.077901 1.18820749 0 1.0009341 0 .79546595 0 .35614224.3561422 0 .7954659 0c.2054682 0 .3927416.07790103.5338961.20577896l.0006632-.00066318.0226101.02261012a.80128317.80128317 0 0 1 .0105706.0105706l3.3619016 3.36190165c.1562097.15620972.4094757.15620972.5656855 0a.42598723.42598723 0 0 0 .0006944-.00069616L8.6678481.20650022l.0009529.0009482C8.8101657.07857935 8.9981733 0 9.2045341 0 9.6438578 0 10 .35614224 10 .79546595c0 .20495443-.077512.39180497-.2048207.53283641l.0003896.00038772-.0096728.00972053a.80044712.80044712 0 0 1-.0355483.03572341z"
								fillRule="nonzero"
							></path>
						</svg>

						<ul className="sort-price-list">
							<li className="sort-price-list-item">
								Giá: Thấp đến Cao
							</li>
							<li className="sort-price-list-item">
								Giá: Cao đến Thấp
							</li>
						</ul>
					</div>
				</div>

				<div className="category-right-content">
					{products ? (
						products.map((productItem, index) => (
							<ProductItem
								key={index}
								index={index}
								{...productItem}
							/>
						))
					) : (
						<></>
					)}
				</div>
			</div>
		</div>
	);
}

Category.propTypes = {};

export default Category;
