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

export const FavouritesPage: FC = () => {
  const {
    favorites,
  } = useLocalStorageContext();

  return (
    <Container>
      <div className="favourites">
        <LinkLine title={'Favourites'} />
        <h1 className="favourites__title">Favourites</h1>
        {favorites.length ? (
          <>
            <span className="favourites__total">{`${favorites.length} items`}</span>
            <div className="favourites__cards">
              {favorites.map((product: PhoneCard) => (
                <ProductCard
                  product={product}
                  key={product.id}
                />
              ))}
            </div>
          </>
        ) : (
          <Container>
            <h2 className="basket__title">
              Ooops... Your favourites are empty
            </h2>
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
