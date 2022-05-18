const initialUser = {
	isLogin: true,
	username: '',
	email: '',
	password: '',
	status: true,
};

const userReducer = (state = initialUser, action) => {
	switch (action.type) {
		case 'SET_LOGIN':
			return {
				...state,
				isLogin: false,
			};
		case 'CREATE_LOGIN':
			return {
				...state,
				isLogin: true,
				...action.payload,
			};
		case 'SIGN_IN_USER':
			return {
				...state,
				isLogin: true,
				...action.payload,
			};
		default:
			return state;
	}
};

export default userReducer;
