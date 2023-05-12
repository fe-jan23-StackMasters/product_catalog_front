import { FC } from 'react';
import { Container } from '../Container';
import { LinkLine } from '../LinkLine';
import './FavouritesPage.scss';
import { ProductCard } from '../ProductCard';
import { useCardsIds } from '../../helpers/hooks/hooks';
import '../../styles/blocks/grid.scss';
import { StoragePhone } from '../../types/StoragePhone';
import { NavLink } from 'react-router-dom';
import { Button } from '../Button';

export const FavouritesPage: FC = () => {
  const [cardIds, onCardToggle] = useCardsIds('cart', []);
  const [favIds, onFavToggle] = useCardsIds('favourite', []);

  const favouritesCount = favIds.length;
  const quantity = '1';

  return (
    <Container>
      <div className="favourites">
        <LinkLine to={'favourites'} title={'Favourites'} />
        <h1 className="favourites__title">Favourites</h1>
        {favouritesCount ? (
          <>
            <span className="favourites__total">{`${favouritesCount} items`}</span>
            <div className="favourites__cards">
              {favIds.map((product: StoragePhone) => (
                <ProductCard
                  product={product.product}
                  key={product.id}
                  onCardAdd={() =>
                    onCardToggle(
                      { id: product.id, quantity, product: product.product },
                    )
                  }
                  onFavouriteAdd={() =>
                    onFavToggle(
                      { id: product.id, quantity, product: product.product },
                    )
                  }
                  cardIds={cardIds}
                  favIds={favIds}
                />
              ))}
            </div>
          </>
        ) : (
          <Container>
          <h2 className="basket__title">Ooops... Your favourites are empty</h2>
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
