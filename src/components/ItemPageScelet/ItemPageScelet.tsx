import { ProductCardSkeleton } from '../ProductCardSkeleton';
import './itemPageScelet.scss';

export const ItemPageScelet = () => {
  return (
    <>
    <div className="grid">
      <div className="grid__item grid__phone
        grid__item-tablet--1-12 grid__item-desktop--1-24">
        <div className="line">
        </div>

        <h1 className='title'>Apple iPhone</h1>
      </div>
    </div>

    <div className="settings">
      <div className="grid">
        <div className="grid__item grid__phone
        grid__item-tablet--8-12 grid__item-desktop--14-24">
          <div className="settings__container">
            <div className="settings__container-colors">
              <p className="settings__title">Available colors</p>
              <p className="settings__title settings__title--id">
                ID:
                <div className="settings__title-div"></div>
              </p>
            </div>

            <div className="settings__colors">
                <div className="settings__button-color">
                  <div
                    className={`settings__color settings__color--none`}
                  >
                  </div>
                </div>

                <div className="settings__button-color">
                  <div
                    className={`settings__color settings__color--none`}
                  >
                  </div>
                </div>

                <div className="settings__button-color">
                  <div
                    className={`settings__color settings__color--none`}
                  >
                  </div>
                </div>
            </div>
          </div>

          <p className="settings__title">Select capacity</p>

          <div className="settings__capacities">
              <div className="settings__button-capacity">
                <div className="settings__button-capacity_in"></div>
              </div>
              <div className="settings__button-capacity">
                <div className="settings__button-capacity_in"></div>
              </div>
              <div className="settings__button-capacity">
                <div className="settings__button-capacity_in"></div>
              </div>
          </div>

          <div className="settings__add-header">
            <div className="settings__add-current-price">
            &#36;0000
            </div>
            <div className="settings__add-prev-price">
            &#36;0000
            </div>
          </div>

          <div className="settings__add-buttons">
            <div>
            </div>

            <div>
            </div>
          </div>

          <div className="settings__add-tablet">
          <div className="about__option">
              <p className="about__option-name">screen</p>
              <div className="about__option-content">djska</div>
            </div>

            <div className="about__option">
              <p className="about__option-name">resolution</p>
              <div className="about__option-content">saldks;lkdfj</div>
            </div>

            <div className="about__option">
              <p className="about__option-name">processor</p>
              <div className="about__option-content">fdkslfkds</div>
            </div>

            <div className="about__option">
              <p className="about__option-name">RAM</p>
              <div className="about__option-content">dfm</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section className="about">
      <div className="grid">
        <div className="grid__item grid__phone
          grid__item-tablet--1-12 grid__item-desktop--1-12">
           <div>
             <h2 className="about__title">About</h2>

              <div className="about__content">
                <div className="about__container">
                  <h3 className="about__small-title">
                    And then...
                  </h3>

                  <div className="about__text"></div>

                  <h3 className="about__small-title">
                    Camera
                  </h3>

                  <div className="about__text"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid__item grid__phone
          grid__item-tablet--1-12 grid__item-desktop--14-24">
          <h2 className="about__title">Tech specs</h2>

          <div className="about__content">
            <div className="about__option">
              <p className="about__option-name">screen</p>
              <div className="about__option-content">screen</div>
            </div>

            <div className="about__option">
              <p className="about__option-name">resolution</p>
              <div className="about__option-content">resolution</div>
            </div>

            <div className="about__option">
              <p className="about__option-name">processor</p>
              <p className="about__option-content">processor</p>
            </div>

            <div className="about__option">
              <p className="about__option-name">RAM</p>
              <div className="about__option-content">RAM</div>
            </div>

            <div className="about__option">
              <p className="about__option-name">Built in memory</p>
              <div className="about__option-content">Built in memory</div>
            </div>

            <div className="about__option">
              <p className="about__option-name">camera</p>
              <div className="about__option-content">camera</div>
            </div>

            <div className="about__option">
              <p className="about__option-name">zoom</p>
              <div className="about__option-content">zoom</div>
            </div>

            <div className="about__option">
              <p className="about__option-name">cell</p>
              <div className="about__option-content">cell</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="slider">
      <div className="grid">
       <div className="grid__item grid__phone
      grid__item-tablet--1-12 grid__item-desktop--1-24">
        <div className="slider__carts">
          <ProductCardSkeleton />
          <ProductCardSkeleton />
          <ProductCardSkeleton />
          <ProductCardSkeleton />
        </div>
        </div>
      </div>
    </section>
    </>
  );
};
