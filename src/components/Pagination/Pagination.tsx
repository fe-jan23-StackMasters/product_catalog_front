import React, { useEffect, useState } from 'react';
import './Pagination.scss';
import { Paginate } from './PageSelector';
import { ProductCard } from '../ProductCard';
import { DropDown } from '../DropDown/DropDown';
import { SortBy } from '../../types/SortBy';
import { useSearchParams, useLocation, useNavigate } from 'react-router-dom';
import { getProducts } from '../../api/requests';
import { ProductType } from '../../types/ProductType';
import { PhoneCard } from '../../types/PhoneCard';
import { useCardsIds } from '../../helpers/hooks/hooks';

type RequestWithParamsResult = {
  pages: number;
  products: PhoneCard[];
  models: number;
};

export const Pagination: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState('16');
  const [sortBy, setSortBy] = useState<SortBy>(SortBy.NEW);
  const [productInfo, setProductInfo] = useState<RequestWithParamsResult>();
  const [cardIds, onCardToggle] = useCardsIds('cart', []);
  const [favIds, onFavToggle] = useCardsIds('favourite', []);
  const phones = productInfo?.products;
  const quantity = '1';

  // const { isError, isLoading } = useQuery({
  //   queryKey: ['phones'],
  // queryFn: () => getProducts(
  //   +itemsPerPage,
  //   currentPage,
  //   [ProductType.PHONE],
  //   sortBy,
  //   ),
  //   onSuccess(data) {
  //     setProductInfo(data);
  //   },
  // });

  const navigate = useNavigate();

  // const arr = getProducts(
  //   +itemsPerPage,
  //   currentPage,
  //   [ProductType.PHONE],
  //   sortBy,
  // );

  const [searchParams] = useSearchParams();

  const sort = searchParams.get('sort');
  const perPage = searchParams.get('perPage');
  const page = searchParams.get('page');

  let perPageParam = perPage;
  let sortParam = sort;

  // const lastItemIndex = currentPage * Number(itemsPerPage);
  // const firstItemIndex = lastItemIndex - Number(itemsPerPage);
  // const currentItems = items.slice(firstItemIndex, lastItemIndex);
  const sorts = [SortBy.NAME, SortBy.NEW, SortBy.OLD, SortBy.HIGHT, SortBy.LOW];

  const locations = useLocation();

  useEffect(() => {
    const urlParams = locations.search;

    if (locations.search.includes('page=')) {
      const matchPage = urlParams.match(/page=(\d+)/);

      if (matchPage && +matchPage[1] !== currentPage) {
        setCurrentPage(+matchPage[1]);
      }
    }
  }, [currentPage]);

  useEffect(() => {
    setItemsPerPage(perPage || '16');
    setCurrentPage(Number(page) || 1);

    if (sorts.some((by) => sort === by.toString())) {
      setSortBy(sorts.find((by) => by.toString() === sort) || SortBy.NEW);
    } else {
      setSortBy(SortBy.NEW);
    }
  }, []);

  useEffect(() => {
    (async() => {
      setIsLoading(true);

      try {
        const dataFromServer = await getProducts(
          +itemsPerPage,
          currentPage,
          [ProductType.PHONE],
          sortBy,
        );

        setProductInfo(dataFromServer);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [itemsPerPage, sortBy, currentPage]);

  window.console.log(isLoading);
  window.console.log(isError);

  const handlerDropdownItemPerPage = (returnedValue: string) => {
    if (currentPage !== 1) {
      navigate(`./?page=1&perPage=${returnedValue}&sort=${sort || SortBy.NEW}`);
      setCurrentPage(1);
    } else {
      navigate(
        `./?page=${page || '1'}&perPage=${returnedValue}&sort=${
          sort || SortBy.NEW
        }`,
      );
    }

    searchParams.set('perPage', returnedValue);
    setItemsPerPage(returnedValue);
    perPageParam = returnedValue;
  };

  const handlerDropdownSortBy = (returnedValue: string) => {
    if (currentPage !== 1) {
      navigate(`./?page=1&perPage=${perPage}&sort=${returnedValue}`);
      setCurrentPage(1);
    } else {
      navigate(`./?page=${page}&perPage=${perPage}&sort=${returnedValue}`);
    }

    searchParams.set('sort', returnedValue);

    setSortBy(
      sorts.find((by) => by.toString() === returnedValue) || SortBy.NEW,
    );
    sortParam = returnedValue;
  };

  return (
    <>
      <div className="phonesPage__modelsCount">
        {productInfo?.models || 0} models
      </div>

      <div className="phonesPage__dropDown">
        <div className="phonesPage__dropDown--sortBy">
          Sort By
          <DropDown
            variables={sorts}
            returnedValue={handlerDropdownSortBy}
            searchParam={sortParam}
          />
        </div>

        <div className="phonesPage__dropDown--itemsOnPage">
          Items on page
          <DropDown
            variables={['16', '32', '64']}
            returnedValue={handlerDropdownItemPerPage}
            searchParam={perPageParam}
          />
        </div>
      </div>

      <div className="phonesPage__pagination pagination">
        <div className="pagination__items">
          {phones ? (
            phones.map((product) => (
              <ProductCard
                product={product}
                key={product.id}
                onCardAdd={() =>
                  onCardToggle({ id: product.id, quantity, product: product })
                }
                onFavouriteAdd={() =>
                  onFavToggle({ id: product.id, quantity, product: product })
                }
                cardIds={cardIds}
                favIds={favIds}
              />
              // <h1 className="card" key={items[0]}>
              //   Card
              // </h1>
            ))
          ) : (
            <h1>nothing</h1>
          )}
          {}
          {/* change key to item.id */}
        </div>
        <Paginate
          itemsPerPage={Number(itemsPerPage)}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          sortBy={sortBy}
          pages={productInfo?.pages || 1}
        />
      </div>
    </>
  );
};