import React from 'react';
import './shop_by.scss';

export const ShopBy: React.FC = () => {
  return (
    <section className="page__section shopBy">
      <div className="container">
        <h2 className="shopBy__title">Shop by category</h2>

        <div className="shopBy__categories">
          <div className="shopBy__category">
            <a href="/phones" className="shopBy__link">
              <div className="shopBy__container">
                <img
                  // eslint-disable-next-line max-len
                  src="https://media.discordapp.net/attachments/982936497068072991/1105419709081464902/image_6.png"
                  alt="phones category"
                  className="shopBy__category-img"
                />
              </div>
              Mobile phones
            </a>

            <span className="shopBy__category-count">95 models</span>
          </div>

          <div className="shopBy__category">
            <a href="/tablets" className="shopBy__link">
              <div className="shopBy__container shopBy__container--grey">
                <img
                  // eslint-disable-next-line max-len
                  src="https://media.discordapp.net/attachments/982936497068072991/1105419709626728558/image_5.png"
                  alt="phones category"
                  className="shopBy__category-img"
                />
              </div>
              Tablets
            </a>

            <span className="shopBy__category-count">24 models</span>
          </div>

          <div className="shopBy__category">
            <a href="/accessories" className="shopBy__link">
              <div className="shopBy__container shopBy__container--red">
                <img
                  // eslint-disable-next-line max-len
                  src="https://media.discordapp.net/attachments/982936497068072991/1105419709370867803/image_7.png"
                  alt="phones category"
                  className="shopBy__category-img"
                />
              </div>
              Accessories
            </a>

            <span className="shopBy__category-count">100 models</span>
          </div>
        </div>
      </div>
    </section>
  );
};
