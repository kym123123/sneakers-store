import { AxiosError } from 'axios';
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

// action 생성자 함수를 import해서 반환 타입(액션객체의 타입)을 전부 union
export type ProductAction = ActionType<typeof actions>;

// product 배열 내의 객체 타입
export type Product = {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
  publishedData: Date;
  __v: number;
};

// 상태의 타입, 상태의 초기값
export type ProductState = {
  products: Product[];
  error: AxiosError | null;
};
