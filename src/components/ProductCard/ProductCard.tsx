import { AddToCart } from '../AddToCartButton/AddToCartButton';
import { AddToFavourites } from '../AddToFavouriteButton/AddToFavourite';
import './product_card.scss';

export const ProductCard = () => {
  return (
    <div className="card">
      <img
        // eslint-disable-next-line max-len
        src="https://cdn.discordapp.com/attachments/982936497068072991/1105085514358468648/image_2-removebg-preview.png"
        alt="Phone"
        className="card__image"
      />

      <h1 className="card__title">
      Apple iPhone Xs 64GB Silver (iMT9G2FS/A)
      </h1>

      <div className="card__prices">
        <p className="card__price--sale">$799</p>

        <p className="card__price">$899</p>
      </div>

      <div className="card__characteristics">
        <div className="card__characteristics-titles">
          <p className="characteristic__title">
            Screen
          </p>

          <p className="characteristic__title">
            Capacity
          </p>

          <p className="characteristic__title">
            RAM
          </p>
        </div>

        <div className="card__characteristics-values">
          <p className="characteristic__value">
            5.8” OLED
          </p>

          <p className="characteristic__value">
            64 GB
          </p>

          <p className="characteristic__value">
            4 GB
          </p>
        </div>
      </div>

      <div className="card__buttons">
        <AddToCart height="40px"/>

        <AddToFavourites size="40px"/>
      </div>
    </div>
  );
};
