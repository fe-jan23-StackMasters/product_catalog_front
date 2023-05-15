import { Container } from '../Container';
import { LinkLine } from '../LinkLine';
import SliderProductPage from '../SliderProductPage/SliderProductPage';

export const PhonesPage = () => (
  <Container>
    <LinkLine to={'phones'} title={'Phones'} />
    <h1>PhonesPage</h1>
    <SliderProductPage />
  </Container>
);
