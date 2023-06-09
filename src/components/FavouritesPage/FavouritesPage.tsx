import { FC } from 'react';
import { Container } from '../Container';
import { LinkLine } from '../LinkLine';
import './FavouritesPage.scss';
import { ProductCard } from '../ProductCard/ProductCard';
import '../../styles/blocks/grid.scss';
import { NavLink } from 'react-router-dom';
import { Button } from '../Button';
import { PhoneCard } from '../../types/PhoneCard';
import { useLocalStorageContext } from '../../context/StorageContext';
import { PageNotFound } from '../PageNotFound';

export const FavouritesPage: FC = () => {
  const { favorites } = useLocalStorageContext();

  return (
    <Container>
      <div className="favourites">
        <LinkLine title={'Favourites'} />
        <h1 className="favourites__title">Favourites</h1>
        {favorites.length ? (
          <>
            <span className="favourites__total">{`${favorites.length} items`}</span>
            <div className="favourites__cards">
              <div className="favourites__card">
                {favorites.map((product: PhoneCard) => (
                  <ProductCard product={product} key={product.id} />
                ))}
              </div>
            </div>
          </>
        ) : (
          <Container>
           <PageNotFound stateBtn={false} textGost={'You have no favorites'} />
            <NavLink to="/phones" className="basket__link">
              <Button width="50%" height="48px" type="btn__add btn__add-shop">
                Add
              </Button>
            </NavLink>
          </Container>
        )}
      </div>
    </Container>
  );
};
