import { Container } from '../Container';
import { LinkLine } from '../LinkLine';
import { Pagination } from '../Pagination/Pagination';
import { ProductType } from '../../types/ProductType';

import './PhonesPage.scss';

export const PhonesPage = () => (
  <Container>
    <LinkLine title={'Phones'} />
    <h1 className="phonesPage__header">Mobile phones</h1>

    <Pagination productType={ProductType.PHONE} />
  </Container>
);
