/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import './shop_by.scss';
import { CategoryCard } from '../CategoryCard/CategoryCard';
import { BASE_URL, getProducts } from '../../api/requests';
import { ShopByCategorySkeletons } from '../ShopByCategorySkeletons';
import { PhoneCard } from '../../types/PhoneCard';
import { ProductType } from '../../types/ProductType';

type RequestWithParamsResult = {
  pages: number;
  products: PhoneCard[];
  models: number;
};

export const ShopBy: React.FC = () => {
  const [phone, setPhone] = useState<RequestWithParamsResult>();
  const [tablet, setTablet] = useState<RequestWithParamsResult>();
  const [access, setAccess] = useState<RequestWithParamsResult>();
  const [isLoading, setIsLoading] = useState(false);

  const getDataFromServer = async() => {
    setIsLoading(true);

    try {
      setPhone(
        await getProducts(
          200,
          1,
          [ProductType.PHONE],
        ),
      );

      setTablet(
        await getProducts(
          200,
          1,
          [ProductType.TABLET],
        ),
      );

      setAccess(
        await getProducts(
          200,
          1,
          [ProductType.ACCESSORIES],
        ),
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getDataFromServer();
  }, []);

  return (
    <section className="shop-by-category">
      <h2 className="shop-by-category__title">Shop by category</h2>

      <div className="shop-by-category__categories">
        {isLoading ? (
          <>
            <ShopByCategorySkeletons />

            <ShopByCategorySkeletons />

            <ShopByCategorySkeletons />
          </>
        ) : (
        <>
          <CategoryCard
            link="/phones"
            image={`${BASE_URL}/img/category_phones.jpg`}
            title="Mobile phones"
            amount={phone?.models || 0}
          />
          <CategoryCard
            link="/tablets"
            image={`${BASE_URL}/img/category_tablets.jpg`}
            title="Tablets"
            amount={tablet?.models || 0}
          />
          <CategoryCard
            link="/accessories"
            image={`${BASE_URL}/img/category_accessories.jpg`}
            title="Accessories"
            amount={access?.models || 0}
          />
        </>
        )}
      </div>
    </section>
  );
};
