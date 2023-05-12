/* eslint-disable max-len */
import React from 'react';
import './shop_by.scss';
import { CategoryCard } from '../CategoryCard/CategoryCard';
import { BASE_URL } from '../../api/requests';

export const ShopBy: React.FC = () => {
  return (
    <section className="shop-by-category">
      <h2 className='shop-by-category__title'>Shop by category</h2>

      <div className="shop-by-category__categories">
        <CategoryCard
          link="/phones"
          image={`${BASE_URL}/img/category_phones.jpg`}
          title="Mobile phones"
          amount={95}
        />
        <CategoryCard
          link="/tablets"
          image={`${BASE_URL}/img/category_tablets.jpg`}
          title="Tablets"
          amount={24}
        />
        <CategoryCard
          link="/accessories"
          image={`${BASE_URL}/img/category_accessories.jpg`}
          title="Accessories"
          amount={100}
        />
      </div>
    </section>
  );
};
