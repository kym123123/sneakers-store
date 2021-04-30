import { createReducer } from 'typesafe-actions';
import { ProductState, ProductAction } from './types';
import { getProductSuccess, getProductFailure } from './actions';

// 초기 상태
const initialState: ProductState = {
  products: [],
  error: null,
};

// reducer
const product = createReducer<ProductState, ProductAction>(initialState)
  .handleAction(getProductSuccess, (_, action) => ({
    products: action.payload,
    error: null,
  }))
  .handleAction(getProductFailure, (state, action) => ({
    ...state,
    error: action.payload,
  }));

export default product;
