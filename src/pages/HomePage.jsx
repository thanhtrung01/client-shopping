import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Home from '../components/HomePage/Home';

function HomePage(props) {
	return (
		<div>
			<Home />
			{/* <Link to="/detail-product">Detail product</Link> */}
		</div>
	);
}

HomePage.propTypes = {};

export default HomePage;
