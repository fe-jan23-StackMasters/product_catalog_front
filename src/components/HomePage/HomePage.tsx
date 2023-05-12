// import { CardList } from '../CardList/CardList';

import { useState } from 'react';
import { useCardsIds } from '../../helpers/hooks/hooks';
import { PhoneCard } from '../../types/PhoneCard';
import { BigSlider } from '../BigSlider/BigSlider';
import { ShopBy } from '../ShopBy';
import { HomeSlider } from '../Slider/Slider';
import { useQuery } from '@tanstack/react-query';
import { getHot, getNew } from '../../api/requests';
import { Container } from '../Container';

export const HomePage = () => {
  const [newProducts, setNewProducts] = useState<PhoneCard[]>();
  const [hotProducts, setHotProducts] = useState<PhoneCard[]>();
  const [cardIds, onCardToggle] = useCardsIds('cart', []);
  const [favIds, onFavToggle] = useCardsIds('favourite', []);

  const { isError: isHotError, isLoading: isHotLoading } = useQuery({
    queryKey: ['hotProducts'],
    queryFn: () => getHot(),
    onSuccess(data) {
      setHotProducts(data);
    },
  });

  const {
    isError: isNewError,
    isLoading: isNewLoading,
  } = useQuery({
    queryKey: ['newProducts'],
    queryFn: () => getNew(),
    onSuccess(data) {
      setNewProducts(data);
    },
  });

  return (
    <Container>
      <h1>Welcome to Nice Gadgets store!</h1>
      <BigSlider />

      <HomeSlider
        title={'Brand new models'}
        favIds={favIds}
        cardIds={cardIds}
        onCardToggle={onCardToggle}
        onFavToggle={onFavToggle}
        products={newProducts || []}
        isLoading={isNewLoading}
        isError={isNewError}
      />

      <ShopBy />

      <HomeSlider
        title={'Hot prices'}
        favIds={favIds}
        cardIds={cardIds}
        onCardToggle={onCardToggle}
        onFavToggle={onFavToggle}
        products={hotProducts || []}
        isLoading={isHotLoading}
        isError={isHotError}
      />
    </Container>
  );
};
