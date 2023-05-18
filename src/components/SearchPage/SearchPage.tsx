import { useSearchParams } from 'react-router-dom';
import './SearchPage.scss';
import { Pagination } from '../Pagination/Pagination';
import { ProductType } from '../../types/ProductType';
import { Container } from '../Container';
import { LinkLine } from '../LinkLine';

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  if (!query) {
    searchParams.delete('query');
  }

  return (
    <Container>
      <LinkLine title="Search" />
      <h1 className="phonesPage__header">Search</h1>
      <Pagination
       productType={[
         ProductType.PHONE,
         ProductType.ACCESSORIES,
         ProductType.TABLET]}
       query={query || undefined}
      />
    </Container>
  );
};
