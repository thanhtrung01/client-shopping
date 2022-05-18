import React from 'react';
import PropTypes from 'prop-types';
import './profile.scss';
import { useSelector } from 'react-redux';

function Profile(props) {
	const user = useSelector((state) => state.user);
	const { username, email } = user;

	console.log('User in profile', user);

	return (
		<div className="profile">
			<div className="profile-wrap">
				<h2 className="profile-setting">Cài đặt</h2>
				<form action="" className="form-profile">
					<h4 className="profile-title">Thông tin cá nhân</h4>
					<div className="line"></div>
					<div className="profile-name profile-item">
						<label>Họ và tên</label>
						<input disabled type="text" value={username} />
					</div>
					<div className="line"></div>
					<div className="profile-name profile-item">
						<label>Email</label>
						<input disabled type="text" value={email} />
					</div>
					<div className="line"></div>
					<div className="profile-name profile-item">
						<label>Password</label>
						<input disabled type="text" value="**********" />
					</div>
					<div className="line"></div>
					<button className="profile-edit">Chỉnh sửa</button>
				</form>
			</div>
		</div>
	);
}

Profile.propTypes = {};

export default Profile