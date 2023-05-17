import { useState } from 'react';
import { PhoneCard } from '../../types/PhoneCard';
import { BigSlider } from '../BigSlider';
import { ShopBy } from '../ShopBy';
import { HomeSlider } from '../Slider';
import { useQuery } from '@tanstack/react-query';
import { getHot, getNew } from '../../api/requests';
import { Container } from '../Container';

export const HomePage = () => {
  const [newProducts, setNewProducts] = useState<PhoneCard[]>();
  const [hotProducts, setHotProducts] = useState<PhoneCard[]>();

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
            products={hotProducts || []}
            isLoading={isHotLoading}
            isError={isHotError}
          />
        </div>
      </Container>
    </section>
  );
};
