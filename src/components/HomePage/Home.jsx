import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './home.scss';
import userApi from '../../api/userApi';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
	Navigation,
	Pagination,
	Scrollbar,
	A11y,
	Autoplay,
} from 'swiper';
import slide1 from '../../assets/images/slide1.png';
import slide2 from '../../assets/images/slide2.png';
import slide3 from '../../assets/images/slide3.png';
import categoryHome1 from '../../assets/images/category-home1.png';
import categoryHome2 from '../../assets/images/category-home2.png';
import categoryHome3 from '../../assets/images/category-home3.png';
import categoryHome4 from '../../assets/images/category-home4.png';
import categoryHome5 from '../../assets/images/category-home5.png';
import categoryHome6 from '../../assets/images/category-home6.png';
import categoryHome7 from '../../assets/images/category-home7.png';
import categoryHome8 from '../../assets/images/category-home8.png';
import categoryHome9 from '../../assets/images/category-home9.png';
import categoryHome10 from '../../assets/images/category-home10.png';
import categoryHome11 from '../../assets/images/category-home11.png';
import categoryHome12 from '../../assets/images/category-home12.png';
import categoryHome13 from '../../assets/images/category-home13.png';
import categoryHome14 from '../../assets/images/category-home14.png';
import categoryHome15 from '../../assets/images/category-home15.png';
import categoryHome16 from '../../assets/images/category-home16.png';
import product1 from '../../assets/images/product1.jpg';
import product2 from '../../assets/images/product2.jpg';
import product3 from '../../assets/images/product3.jpg';
import product4 from '../../assets/images/product4.jpg';
import product5 from '../../assets/images/product5.jpg';
import product6 from '../../assets/images/product6.jpg';
import product7 from '../../assets/images/product7.jpg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Link } from 'react-router-dom';
import ProductItem from '../ProductItem/ProductItem';
import productApi from '../../api/productApi';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../actions/product';

const swiperOptions = {
	direction: 'horizontal',
	slidesPerView: 1,
	spaceBetween: 0,
	mousewheel: true,
	pagination: true,
	effect: 'fade',
	speed: 1000,
};

SwiperCore.use([Autoplay, Pagination]);

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

const listCategory = [
	{
		name: 'Thời trang nam',
		image: categoryHome1,
	},
	{
		name: 'Điện thoại & phụ kiện',
		image: categoryHome2,
	},
	{
		name: 'Thiết Bị Điện Tử',
		image: categoryHome3,
	},
	{
		name: 'Máy tính & laptop',
		image: categoryHome4,
	},
	{
		name: 'Máy ảnh & máy quay phim',
		image: categoryHome5,
	},
	{
		name: 'Đồng hồ',
		image: categoryHome6,
	},
	{
		name: 'Giày dép nam',
		image: categoryHome7,
	},
	{
		name: 'Thiết bị điện gia dụng',
		image: categoryHome8,
	},
	{
		name: 'Thời trang nữ',
		image: categoryHome9,
	},
	{
		name: 'Mẹ & bé',
		image: categoryHome10,
	},
	{
		name: 'Nhà cửa & đời sống',
		image: categoryHome11,
	},
	{
		name: 'Sắc đẹp',
		image: categoryHome12,
	},
	{
		name: 'Sức khỏe',
		image: categoryHome13,
	},
	{
		name: 'Giày dép nữ',
		image: categoryHome14,
	},
	{
		name: 'Túi ví nữ',
		image: categoryHome15,
	},
	{
		name: 'Phụ kiện & trang sức nữ',
		image: categoryHome16,
	},
];

function Home(props) {
	const navigationPrevRef = useRef();
	const navigationNextRef = useRef();
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

	console.log('products', products);

	return (
		<div className="home">
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				{...swiperOptions}
				pagination={{ clickable: true }}
				slidesPerView={1} // số lượng slide 1 lúc trên màn hình
				autoplay={{ delay: 2000 }}
				navigation={{
					prevEl: navigationPrevRef.current,
					nextEl: navigationNextRef.current,
				}}
			>
				<SwiperSlide>
					<img src={slide1} alt="" width="100%" height="100%" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={slide2} alt="" width="100%" height="100%" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={slide3} alt="" width="100%" height="100%" />
				</SwiperSlide>
				<div ref={navigationPrevRef} />
				<div ref={navigationNextRef} />
			</Swiper>

			<div className="header-category">
				<h3 className="category-title">Danh mục sản phẩm</h3>
				<div className="category-list">
					{listCategory.map((itemCategory, index) => (
						<div className="category-item" key={index}>
							<Link className="category-link" to="/category">
								<img
									src={itemCategory.image}
									alt=""
									width="60"
								/>
								<p className="category-name">
									{itemCategory.name}
								</p>
							</Link>
						</div>
					))}
				</div>
			</div>

			<div className="header-product">Gợi ý hôm nay</div>

			<div className="home-product">
				{products.map((productItem, index) => (
					<ProductItem key={index} index={index} {...productItem} />
				))}
			</div>
		</div>
	);
}

Home.propTypes = {};

export default Home;
