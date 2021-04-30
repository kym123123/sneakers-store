import { AxiosError } from 'axios';
import { createAction } from 'typesafe-actions';
import { Products } from '../../api/product';

// action type
// 상품 목록 보기
const GET_PRODUCT = 'products/GET_PRODUCT' as const;
const GET_PRODUCT_SUCCESS = 'products/GET_PRODUCT_SUCCESS' as const;
const GET_PRODUCT_FAILURE = 'products/GET_PRODUCT_FAILURE' as const;

// action creators , 페이로드 없음. 제네릭 undefined 또는 생략
export const getProduct = createAction(GET_PRODUCT)();

// payload 타입을 제네릭으로 설정
export const getProductSuccess = createAction(GET_PRODUCT_SUCCESS)<
  Products[]
>();

// payload 타입을 제네릭으로 설정
export const getProductFailure = createAction(
  GET_PRODUCT_FAILURE,
)<AxiosError>();
