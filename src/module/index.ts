import { combineReducers } from 'redux';
import product from './product';

const rootReducer = combineReducers({ product: product });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>; // rootReducer의 반환값을 유추해 줌
