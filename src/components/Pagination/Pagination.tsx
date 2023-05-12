import React, { useEffect, useState } from 'react';
import './Pagination.scss';
import { Paginate } from './PageSelector';
// import { ProductCard } from '../ProductCard';
import { DropDown } from '../DropDown/DropDown';
import { SortBy } from '../../types/SortBy';
import { useSearchParams, useLocation, useNavigate } from 'react-router-dom';

export const Pagination: React.FC = () => {
  const items = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2];

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState('8');
  const [sortBy, setSortBy] = useState<SortBy | string>(SortBy.NEW);
  const navigate = useNavigate();

  // const [items, setItems] = useState([]);

  const [searchParams] = useSearchParams();

  const sort = searchParams.get('sort');
  const perPage = searchParams.get('perPage');
  const page = searchParams.get('page');

  let perPageParam = perPage;
  let sortParam = sort;

  const lastItemIndex = currentPage * Number(itemsPerPage);
  const firstItemIndex = lastItemIndex - Number(itemsPerPage);
  const currentItems = items.slice(firstItemIndex, lastItemIndex);
  const sorts = [SortBy.NAME, SortBy.NEW, SortBy.OLD, SortBy.HIGHT, SortBy.LOW];

  const locations = useLocation();

  window.console.log(currentPage);

  // console.log(sortBy);

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
    setItemsPerPage(perPage || '8');
    setCurrentPage(Number(page) || 1);
    setSortBy(sort || SortBy.NEW);

    (async() => {
      setIsLoading(true);

      try {
        // const itemsFromServer = await getItems(//)
        // setItems(itemsFromServer)
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  window.console.log(isLoading);
  window.console.log(isError);

  window.console.log(itemsPerPage);

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
    setSortBy(returnedValue);
    sortParam = returnedValue;
  };

  return (
    <>
      {/* <div className="phonesPage__dropDown"> */}
      <DropDown
        variables={sorts}
        returnedValue={handlerDropdownSortBy}
        searchParam={sortParam}
      />

      <DropDown
        variables={['8', '16', '32']}
        returnedValue={handlerDropdownItemPerPage}
        searchParam={perPageParam}
      />
      {/* </div> */}

      <div className="phonesPage__pagination pagination">
        <div className="pagination__items">
          {currentItems.map(() => (
            // <ProductCard />
            <h1 className="card" key={items[0]}>
              Card
            </h1>
          ))}
          {/* change key to item.id */}
        </div>
        <Paginate
          itemsPerPage={Number(itemsPerPage)}
          totalItems={items.length}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          sortBy={sortBy}
        />
      </div>
    </>
  );
};
