// import { CardList } from '../CardList/CardList';

import { useState } from 'react';
import { useCardsIds } from '../../helpers/hooks/hooks';
import { PhoneCard } from '../../types/PhoneCard';
import { BigSlider } from '../BigSlider/BigSlider';
import { ShopBy } from '../ShopBy';
import { HomeSlider } from '../Slider/Slider';
import { useQuery } from '@tanstack/react-query';
import { getHot, getNew } from '../../api/requests';

export const HomePage = () => {
  const [newProducts, setNewProducts] = useState<PhoneCard[]>();
  const [hotProducts, setHotProducts] = useState<PhoneCard[]>();
  const [cardIds, onCardToggle] = useCardsIds('cart', []);
  const [favIds, onFavToggle] = useCardsIds('favourite', []);

  useQuery({
    queryKey: ['hotProducts'],
    queryFn: () => getHot(),
    onSuccess(data) {
      setHotProducts(data);
    },
  });

  useQuery({
    queryKey: ['newProducts'],
    queryFn: () => getNew(),
    onSuccess(data) {
      setNewProducts(data);
    },
  });

  return (
    <>
      <h1>Welcome to Nice Gadgets store!</h1>
      <BigSlider />

      <HomeSlider
        NameSlider={'Brand new models'}
        favIds={favIds}
        cardIds={cardIds}
        onCardAdd={onCardToggle}
        onFavouriteAdd={onFavToggle}
        products={newProducts || []}
      />

      <ShopBy />

      <HomeSlider
        NameSlider={'Hot prices'}
        favIds={favIds}
        cardIds={cardIds}
        onCardAdd={onCardToggle}
        onFavouriteAdd={onFavToggle}
        products={hotProducts || []}
      />
    </>
  );
};
