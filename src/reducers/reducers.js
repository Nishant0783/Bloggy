import { combineReducers } from 'redux';
import authSlice from "../features/authSlice"
import blogFormSlice from '../features/blogFormSlice';

const rootReducer = combineReducers({
    auth: authSlice,
    blogForm: blogFormSlice
})


export default rootReducer