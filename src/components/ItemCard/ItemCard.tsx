import { HomeSlider } from '../Slider/Slider';
import { ItemPageScelet } from '../ItemPageScelet';
import { getDetailedInfo, getRecommendations } from '../../api/requests';
import { useContext, useEffect, useState, FC } from 'react';
import { PhoneCard } from '../../types/PhoneCard';
import { Phone } from '../../types/Phone';
import { AddToCart } from '../AddToCartButton';
import { AddToFavourites } from '../AddToFavouriteButton';
import './itemCard.scss';
import rightArrov from '../../icons/arrowRight.svg';
import blackRightArrov from '../../icons/blackArrowRight.svg';
import { LinkLine } from '../LinkLine';
import { NavLink, useLocation } from 'react-router-dom';
import { colorsObject } from './colorsObject';
import { SliderProductPage } from '../SliderProductPage/SliderProductPage';
import classNames from 'classnames';
import { Container } from '../Container';
import { getShortInfo } from '../../helpers/detailedToShortInfo';
import { ThemeContext } from '../../context/toggleContext';
import { sliceName } from '../../helpers/sliceName';
import { ProductType } from '../../types/ProductType';

type Props = {
  productType: ProductType;
};

export const ItemCard: FC<Props> = ({ productType }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRecLoading, setIsRecLoading] = useState(false);
  const [isRecError, setIsRecError] = useState(false);
  const [itemId, setPhoneId] = useState<string>('');
  const [item, setItem] = useState<Phone | null>(null);
  const [recommendedProducts, setRecommended] = useState<PhoneCard[]>();
  const location = useLocation();
  const { theme } = useContext(ThemeContext);
  let arrowPath = rightArrov;

  if (theme === 'light') {
    arrowPath = blackRightArrov;
  }

  const shortName = sliceName(item?.name || '');

  useEffect(() => {
    setIsLoading(true);

    const productId = location.pathname.split('/')[2];

    setPhoneId(productId);

    window.scrollTo(0, 0);

    getDetailedInfo(productId)
      .then((data) => {
        setItem(data as Phone);
      })
      .catch((error) => {
        throw new Error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [itemId, location]);

  window.console.log(location.pathname);

  useEffect(() => {
    setIsRecLoading(true);
    setIsRecError(false);

    getRecommendations(itemId)
      .then((data) => {
        setRecommended(data);
      })
      .catch(() => {
        setIsRecError(true);
      })
      .finally(() => {
        setIsRecLoading(false);
      });
  }, [itemId, location]);

  const product = item ? getShortInfo(item) : null;

  return (
    <>
    {isLoading ? (
      <ItemPageScelet />
    ) : (
      <Container>
      <div className="grid">
        <div className="grid__item grid__phone
          grid__item-tablet--1-12 grid__item-desktop--1-24">
          <div className="line">
            <LinkLine title={productType}/>
            <img className="line__arrow" src={arrowPath} alt="right" />
            <p className='line__id'>{shortName}</p>
          </div>

          <h1 className='title'>{item?.name}</h1>
        </div>
      </div>

          <section className="settings">
            <div className="grid">
              <SliderProductPage items={item?.images} />
              <div
                className="grid__item grid__phone
            grid__item-tablet--8-12 grid__item-desktop--14-21"
              >
                <div className="settings__container">
                  <div className="settings__container-colors">
                    <p className="settings__title">Available colors</p>
                    <p className="settings__title">ID: {item?.productId}</p>
                  </div>

                  <div className="settings__colors">
                    {item?.colorsAvailable.map((color) => (
                      <NavLink
                        key={color}
                        to={`/phones/${
                          item.namespaceId
                        }-${item.capacity.toLowerCase()}-${color}`}
                        className={({ isActive }) =>
                          classNames('settings__button-color', {
                            'settings__button-color--is-active': isActive,
                          })
                        }
                      >
                        <NavLink
                          to={`/phones/${
                            item.namespaceId
                          }-${item.capacity.toLowerCase()}-${color}`}
                          title={color}
                          style={{
                            backgroundColor: colorsObject[color],
                          }}
                          className={({ isActive }) =>
                            classNames('settings__color', {
                              'settings__color--is-active': isActive,
                            })
                          }
                        ></NavLink>
                      </NavLink>
                    ))}
                  </div>
                </div>

                <p className="settings__title">Select capacity</p>

                <div className="settings__capacities">
                  {item?.capacityAvailable.map((capacity) => (
                    <NavLink
                      to={`/phones/${
                        item.namespaceId
                      }-${capacity.toLowerCase()}-${item.color}`}
                      key={capacity}
                      className={({ isActive }) =>
                        classNames('settings__button-capacity', {
                          'settings__button-capacity--is-active': isActive,
                        })
                      }
                    >
                      {capacity}
                    </NavLink>
                  ))}
                </div>

                <div className="settings__add-header">
                  <h1 className="settings__add-current-price">
                    &#36;{item?.priceDiscount}
                  </h1>
                  <h3 className="settings__add-prev-price">
                    &#36;{item?.priceRegular}
                  </h3>
                </div>

                <div className="settings__add-buttons">
                  {product && (
                    <>
                      <AddToCart height="48px" product={product} />

                      <AddToFavourites size="48px" product={product} />
                    </>
                  )}
                </div>

                <div className="settings__add-tablet">
                  <div className="about__option">
                    <p className="about__option-name">screen</p>
                    <p className="about__option-content">{item?.screen}</p>
                  </div>

                  <div className="about__option">
                    <p className="about__option-name">resolution</p>
                    <p className="about__option-content">{item?.resolution}</p>
                  </div>

                  <div className="about__option">
                    <p className="about__option-name">processor</p>
                    <p className="about__option-content">{item?.processor}</p>
                  </div>

                  <div className="about__option">
                    <p className="about__option-name">RAM</p>
                    <p className="about__option-content">{item?.ram}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="about">
            <div className="grid">
              <div
                className="grid__item grid__phone
            grid__item-tablet--1-12 grid__item-desktop--1-12"
              >
                <div>
                  <h2 className="about__title">About</h2>

                  <div className="about__content">
                    {item?.description.map((field) => (
                      <div key={field.title} className="about__container">
                        <h3 className="about__small-title">{field.title}</h3>

                        {field.text.map((paragraph) => (
                          <p key={paragraph} className="about__text">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div
                className="grid__item grid__phone
            grid__item-tablet--1-12 grid__item-desktop--14-24"
              >
                <h2 className="about__title">Tech specs</h2>

                <div className="about__content">
                  <div className="about__option">
                    <p className="about__option-name">screen</p>
                    <p className="about__option-content">{item?.screen}</p>
                  </div>

                  <div className="about__option">
                    <p className="about__option-name">resolution</p>
                    <p className="about__option-content">{item?.resolution}</p>
                  </div>

                  <div className="about__option">
                    <p className="about__option-name">processor</p>
                    <p className="about__option-content">{item?.processor}</p>
                  </div>

                  <div className="about__option">
                    <p className="about__option-name">RAM</p>
                    <p className="about__option-content">{item?.ram}</p>
                  </div>

                  <div className="about__option">
                    <p className="about__option-name">Built in memory</p>
                    <p className="about__option-content">{item?.capacity}</p>
                  </div>

                  <div className="about__option">
                    <p className="about__option-name">camera</p>
                    <p className="about__option-content">{item?.camera}</p>
                  </div>

                  <div className="about__option">
                    <p className="about__option-name">zoom</p>
                    <p className="about__option-content">{item?.zoom}</p>
                  </div>

                  <div className="about__option">
                    <p className="about__option-name">cell</p>
                    <p className="about__option-content">
                      {item?.cell.join(', ')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="slider">
            <div className="grid">
              <div
                className="grid__item grid__phone
        grid__item-tablet--1-12 grid__item-desktop--1-24"
              >
                <HomeSlider
                  title={'You may also like'}
                  products={recommendedProducts || []}
                  isLoading={isRecLoading}
                  isError={isRecError}
                />
              </div>
            </div>
          </section>
        </Container>
    )}
    </>
  );
};
