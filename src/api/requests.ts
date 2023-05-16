import axios from 'axios';
import { ProductType } from '../types/ProductType';
import { SortBy } from '../types/SortBy';
import { PhoneCard } from '../types/PhoneCard';
import { Phone } from '../types/Phone';

export const BASE_URL = 'https://nice-gadgets-api-n5r6.onrender.com';

const get = async <T>(path: string): Promise<T> => {
  const { data } = await axios.get<T>(path);

  return data;
};

type RequestWithParamsResult = {
  pages: number;
  products: PhoneCard[];
  models: number;
};

export const getProducts = async(
  perPage?: number,
  page?: number,
  productType?: ProductType[],
  sortBy?: SortBy,
  priceMin?: number,
  priceMax?: number,
): Promise<RequestWithParamsResult> => {
  const query = [];

  if (perPage) query.push(`perPage=${perPage}`);
  if (page) query.push(`page=${page}`);
  if (sortBy) query.push(`sortBy=${sortBy}`);
  if (priceMin) query.push(`priceMin=${priceMin}`);
  if (priceMax) query.push(`priceMax=${priceMax}`);

  if (productType) {
    productType.forEach((category) => query.push(`productType=${category}`));
  }

  const path = `${BASE_URL}/products${
    query.length ? `?${query.join('&')}` : ''
  }`;

  const { data } = await axios.get<RequestWithParamsResult>(path);

  return data;
};

export const getNew = (limit?: number): Promise<PhoneCard[]> => {
  // default limit is 12
  return get<PhoneCard[]>(
    `${BASE_URL}/products/new${limit ? `?limit=${limit}` : ''}`,
  );
};

export const getHot = (limit?: number): Promise<PhoneCard[]> => {
  // default limit is 12
  return get<PhoneCard[]>(
    `${BASE_URL}/products/discount${limit ? `?limit=${limit}` : ''}`,
  );
};

export const getDetailedInfo = (id: string): Promise<Phone> => {
  // apple-iphone-....
  return get(`${BASE_URL}/products/${id}`);
};

export const getRecommenations = (id: string): Promise<PhoneCard[]> => {
  return get(`${BASE_URL}/products/${id}/recommended`);
};

export const getBanners = (): Promise<string[]> => {
  return get(`${BASE_URL}/images/banners`);
};
