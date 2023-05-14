import { Container } from '../Container';
import { LinkLine } from '../LinkLine';
import { Pagination } from '../Pagination/Pagination';
import './PhonesPage.scss';

export const PhonesPage = () => (
  <Container>
    <LinkLine to={'phones'} title={'Phones'} />
    <div className="phonesPage__container">
      <h1 className='phonesPage__header'>Mobile phones</h1>

      <Pagination />
    </div>
  </Container>
);
