import React from 'react';
import './ShopByCategorySkeletons.scss';

export const ShopByCategorySkeletons: React.FC = () => (
  <article className="category-card skeleton-card">
      <div className="skeleton-card-image"></div>
      <div className="skeleton-card-title"></div>
      <div className="skeleton-card-amount"></div>
    </article>
);
