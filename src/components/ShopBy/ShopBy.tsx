/* eslint-disable max-len */
import React from 'react';
import './shop_by.scss';
import { CategoryCard } from '../CategoryCard/CategoryCard';

const PhonesImg = 'https://github.com/fe-oct22-senior-html-developers/product_catalog/blob/main/src/static/categories/category__phones.jpg?raw=true';
const TabletsImg = 'https://github.com/fe-oct22-senior-html-developers/product_catalog/blob/main/src/static/categories/category__accessories.jpg?raw=true';
const AccessoriesImg = 'https://github.com/fe-oct22-senior-html-developers/product_catalog/blob/main/src/static/categories/category__tablets.jpg?raw=true';

export const ShopBy: React.FC = () => {
  return (
    <section className="shop-by-category container">
      <h2>Shop by category</h2>

      <div className="shop-by-category__categories grid">
        <CategoryCard
          link="/phones"
          gridClasses="grid__item--tablet_1-4 grid__item--desktop_1-8"
          image={PhonesImg}
          title="Mobile phones"
          amount={95}
        />
        <CategoryCard
          link="/tablets"
          gridClasses="grid__item--tablet_5-8 grid__item--desktop_9-16"
          image={TabletsImg}
          title="Tablets"
          amount={24}
        />
        <CategoryCard
          link="/accessories"
          gridClasses="grid__item--tablet_9-12 grid__item--desktop_17-24"
          image={AccessoriesImg}
          title="Accessories"
          amount={100}
        />
      </div>
    </section>
  );
};
