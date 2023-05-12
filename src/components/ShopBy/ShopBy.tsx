/* eslint-disable max-len */
import React from 'react';
import './shop_by.scss';
import { CategoryCard } from '../CategoryCard/CategoryCard';
import { BASE_URL } from '../../api/requests';

export const ShopBy: React.FC = () => {
  return (
    <section className="shop-by-category">
      <h2 className='shop-by-category__title'>Shop by category</h2>

      <div className="shop-by-category__categories grid">
        <CategoryCard
          link="/phones"
          gridClasses="grid__item--tablet_1-4 grid__item--desktop_1-8"
          image={`${BASE_URL}/img/category_phones.jpg`}
          title="Mobile phones"
          amount={95}
        />
        <CategoryCard
          link="/tablets"
          gridClasses="grid__item--tablet_5-8 grid__item--desktop_9-16"
          image={`${BASE_URL}/img/category_tablets.jpg`}
          title="Tablets"
          amount={24}
        />
        <CategoryCard
          link="/accessories"
          gridClasses="grid__item--tablet_9-12 grid__item--desktop_17-24"
          image={`${BASE_URL}/img/category_accessories.jpg`}
          title="Accessories"
          amount={100}
        />
      </div>
    </section>
  );
};
