import { createStore } from 'redux';
import todoReducer from '../Redux/reducer';

const store = createStore(todoReducer);

export default store;