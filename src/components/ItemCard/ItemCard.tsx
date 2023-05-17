import { useQuery } from '@tanstack/react-query';
import { HomeSlider } from '../Slider/Slider';
import { getDetailedInfo, getHot, getProducts } from '../../api/requests';
import { useEffect, useState } from 'react';
import { PhoneCard } from '../../types/PhoneCard';
import { Phone } from '../../types/Phone';
import { AddToCart } from '../AddToCartButton';
import { AddToFavourites } from '../AddToFavouriteButton';
import './itemCard.scss';
import rightArrov from '../../icons/arrowRight.svg';
import { LinkLine } from '../LinkLine';

export const ItemCard = () => {
  const [itemId, setPhoneId] = useState<string>('');
  const [item, setItem] = useState<Phone | null>(null);
  const [items, setItems] = useState<PhoneCard[]>([]);
  const [hotProducts, setHotProducts] = useState<PhoneCard[]>();

  useEffect(() => {
    const getAllPhones = async() => {
      try {
        const result = await getProducts();
        const allPhones = result.products;

        setItems(allPhones);
      } catch (error) {
        throw new Error('Error fetching all phones: ' + error);
      }
    };

    getAllPhones();
  }, []);

  useEffect(() => {
    const url = window.location.href;
    const parts = url.split('/');
    const itemId = parts[parts.length - 1];

    setPhoneId(itemId);

    window.scrollTo(0, 0);

    getDetailedInfo(itemId)
      .then((data) => {
        setItem(data as Phone);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }, []);

  const { isError: isHotError, isLoading: isHotLoading } = useQuery({
    queryKey: ['hotProducts'],
    queryFn: () => getHot(),
    onSuccess(data) {
      setHotProducts(data);
    },
  });

  const product: PhoneCard | undefined = items.find(
    (item) => itemId === item.phoneId,
  );

  const handleFindByColor = (selectedColor: string) => {
    const finedItem: PhoneCard | undefined = items.find(
      (item) => item.color === selectedColor,
    );

    if (finedItem) {
      const { phoneId } = finedItem;

      setPhoneId(phoneId);
    }
  };

  window.console.log(product);

  return (
    <>

    <div className="grid">
      <div className="grid__item grid__phone
        grid__item-tablet--1-12 grid__item-desktop--1-24">
        <div className="line">
          <LinkLine title={'Phones'}/>
          <img className="line__arrow" src={rightArrov} alt="right" />
          <p className='line__id'>{item?.id}</p>
        </div>

        <h1 className='title'>{item?.name}</h1>
      </div>
    </div>

    <section className="settings">
      <div className="grid">
        <div className="grid__item grid__phone
        grid__item-tablet--8-12 grid__item-desktop--14-24">
          <div className="settings__container">
            <div className="settings__container-colors">
              <p className="settings__title">Available colors</p>
              <p className="settings__title">ID: 1234567</p>
            </div>

            <div className="settings__colors">
              {item?.colorsAvailable.map(color => (
                <div key={color} className="settings__button-color">
                  <button
                    className={`settings__color settings__color--${color}`}
                    onClick={() => handleFindByColor(color)}
                  >
                  </button>
                  <span className='settings__button-color_text'>{color}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="settings__title">Select capacity</p>

          <div className="settings__capacities">
            {item?.capacityAvailable.map(capacity => (
              <button key={capacity} className="settings__button-capacity">
                {capacity}
              </button>
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
              <AddToCart
                height="48px"
                product={product}
              />

              <AddToFavourites
              size="48px"
              product={product}
              />
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
        <div className="grid__item grid__phone
          grid__item-tablet--1-12 grid__item-desktop--1-12">
           <div>
             <h2 className="about__title">About</h2>

              <div className="about__content">
                {item?.description.map(field => (
                  <div key={field.title} className="about__container">
                    <h3 className="about__small-title">
                      {field.title}
                    </h3>

                    {field.text.map(paragraph => (
                      <p key={paragraph} className="about__text">
                       {paragraph}
                      </p>
                    ))}
                </div>
                ))}
            </div>
          </div>
        </div>

        <div className="grid__item
          grid__item-tablet--1-12 grid__item-desktop--14-24">
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
              <p className="about__option-content">{item?.cell}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="slider">
      <div className="grid">
       <div className="grid__item grid__phone
      grid__item-tablet--1-12 grid__item-desktop--1-24">
          <HomeSlider
            title={'You may also like'}
            // favIds={favIds}
            // cardIds={cardIds}
            // onCardToggle={onCardToggle}
            // onFavToggle={onFavToggle}
            products={hotProducts || []}
            isLoading={isHotLoading}
            isError={isHotError}
          />
        </div>
      </div>
    </section>
    </>
  );
};
