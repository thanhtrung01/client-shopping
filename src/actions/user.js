export const setLogin = (isLogin) => {
	return {
		type: 'SET_LOGIN',
		payload: isLogin,
	};
};

export const createUser = (user) => {
	return {
		type: 'CREATE_LOGIN',
		payload: user,
	};
};

export const signInUser = (user) => {
	return {
		type: 'SIGN_IN_USER',
		payload: user,
	};
};
