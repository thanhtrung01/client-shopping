import productReducer from './product';
import cartReducer from './cart';
import userReducer from './user';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	product: productReducer,
	cart: cartReducer,
	user: userReducer,
});

export default rootReducer;
