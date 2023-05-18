import { Container } from '../Container';
import { LinkLine } from '../LinkLine';
import { Pagination } from '../Pagination/Pagination';
import { ProductType } from '../../types/ProductType';
import React from 'react';

import './PhonesPage.scss';

type Props = {
  productType: ProductType;
}

export const PhonesPage: React.FC<Props> = ({ productType }) => {
  let name = '';

  switch (productType) {
    case ProductType.PHONE:
      name = 'Mobile phones';
      break;
    case ProductType.TABLET:
      name = 'Tablets';
      break;
    case ProductType.ACCESSORIES:
      name = 'Accessories';
      break;
    default:
      break;
  }

  return (
    <Container>
      <LinkLine title={productType} />
      <h1 className="phonesPage__header">{name}</h1>

      <Pagination productType={productType} />
    </Container>
  );
};
