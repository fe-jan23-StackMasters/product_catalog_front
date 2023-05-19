import { useEffect, useState } from 'react';
import { PhoneCard } from '../../types/PhoneCard';
import { BigSlider } from '../BigSlider';
import { ShopBy } from '../ShopBy';
import { HomeSlider } from '../Slider';
import { getHot, getNew } from '../../api/requests';
import { Container } from '../Container';

export const HomePage = () => {
  const [newProducts, setNewProducts] = useState<PhoneCard[]>();
  const [newError, setNewError] = useState(false);
  const [newLoading, setNewLoading] = useState(false);

  const [hotProducts, setHotProducts] = useState<PhoneCard[]>();
  const [hotError, setHotError] = useState(false);
  const [hotLoading, setHotLoading] = useState(false);

  useEffect(() => {
    setNewLoading(true);
    setNewError(false);

    (async() => {
      try {
        const newItems = await getNew();

        setNewProducts(newItems);
      } catch {
        setNewError(true);
      } finally {
        setNewLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    setHotLoading(true);
    setHotError(false);

    (async() => {
      try {
        const hotItems = await getHot();

        setHotProducts(hotItems);
      } catch {
        setHotError(true);
      } finally {
        setHotLoading(false);
      }
    })();
  }, []);

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
            isLoading={newLoading}
            isError={newError}
          />
        </div>

        <div className="HomePage__section">
          <ShopBy />
        </div>

        <div className="HomePage__section">
          <HomeSlider
            title={'Hot prices'}
            products={hotProducts || []}
            isLoading={hotLoading}
            isError={hotError}
          />
        </div>
      </Container>
    </section>
  );
};
