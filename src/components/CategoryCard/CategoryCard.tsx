import React from 'react';
import { Link } from 'react-router-dom';
import './category_card.scss';

type Props = {
  link: string;
  gridClasses: string;
  image: string;
  title: string;
  amount: number;
};

export const CategoryCard: React.FC<Props> = ({
  link,
  gridClasses,
  image,
  title,
  amount,
}) => (
  <article className={`category-card ${gridClasses}`}>
    <Link to={link} className="category-card__link">
      <img
        className="category-card__image"
        src={image}
        alt={`banner of ${title} category`}
      />
      <h4 className="category-card__title">{title}</h4>
      <p className="category-card__models-amount">{`${amount} models`}</p>
    </Link>
  </article>
);
