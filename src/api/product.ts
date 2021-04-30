import axios from 'axios';

export async function getProducts() {
  const response = await axios.get<Products[]>('http://localhost:3000/product');

  return response.data;
}

export type Products = {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
  publishedData: Date; // Date타입
  __v: number; // 0
};
