import {combineReducers} from 'redux';
import productReducer from './products';
import errorsReducer from './errors';
import messageReducer from "./messages";

export default combineReducers({
    products: productReducer,
    errors: errorsReducer,
    messages: messageReducer,
})
