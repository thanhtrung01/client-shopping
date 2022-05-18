import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SignIn from './SignIn';
import SignUp from './SignUp';
import './login.scss';

function Login(props) {
	const [isSignIn, setIsSignIn] = useState(true);

	const handleChangeForm = () => {
		setIsSignIn(!isSignIn);
	};

	return (
		<div className="login">
			<div className="login-wrap">
				{isSignIn ? (
					<SignIn handleChangeForm={handleChangeForm} />
				) : (
					<SignUp handleChangeForm={handleChangeForm} />
				)}
				{/* <button className="btn-submit" onClick={handleChangeForm}>
					{isSignIn ? 'Sign in' : 'Sign up'}
				</button> */}
			</div>
		</div>
	);
}

Login.propTypes = {};

export default Login;
