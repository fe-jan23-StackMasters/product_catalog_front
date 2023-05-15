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

  const { isError: isNewError, isLoading: isNewLoading } = useQuery({
    queryKey: ['newProducts'],
    queryFn: () => getNew(),
    onSuccess(data) {
      setNewProducts(data);
    },
  });

  return (
    <section className="HomePage">
      <Container>
        <h1 className="HomePage__title">Welcome to Nice Gadgets store!</h1>
      </Container>

      <div className="HomePage__big-slider">
        <BigSlider />
      </div>

      <Container>
        <div className="HomePage__section">
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
        </div>

        <div className="HomePage__section">
          <ShopBy />
        </div>

        <div className="HomePage__section">
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
        </div>
      </Container>
    </section>
  );
};
