import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Profile from '../components/Profile/Profile';

function ProfilePage(props) {
	const value = useSelector((state) => state.product);
	console.log('value', value);

	return (
		<div>
			<Profile />
		</div>
	);
}

ProfilePage.propTypes = {};

export default ProfilePage;
