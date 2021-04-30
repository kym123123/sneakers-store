import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { getProducts } from '../../api/product';
import { getProductAsync } from './actions';
import { ProductAction } from './types';

export function getProductThunk(): ThunkAction<
  Promise<void>,
  RootState,
  null,
  ProductAction
> {
  return async dispatch => {
    const { request, success, failure } = getProductAsync;
    dispatch(request());

    try {
      const products = await getProducts();
      console.log(products, 'hello from thunk');

      dispatch(success(products));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}
