import React from 'react';
import { ProductCard } from '../ProductCard';
import { PhoneCard } from '../../types/PhoneCard';
import './card_list.scss';

interface Props {
  products: PhoneCard[];
}

export const CardList: React.FC<Props> = ({ products }) => {
  return (
    <div className="card__list">
      {products.map((product) => (
        <div key={product.id}>
          {}
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};
