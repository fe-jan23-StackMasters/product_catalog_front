import React, { useEffect } from 'react';
import classNames from 'classnames';
import { ArrowLeft } from '../Arrows/ArrowLeft';
import { ArrowRigth } from '../Arrows/ArrowRight';
import { useSearchParams, Link, useLocation } from 'react-router-dom';

interface Props {
  itemsPerPage: number;
  currentPage: number;
  sortBy: string;
  pages: number;
  priceMin: number
  priceMax: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export const Paginate: React.FC<Props> = ({
  itemsPerPage,
  currentPage,
  sortBy,
  setCurrentPage,
  pages,
  priceMin,
  priceMax,
}) => {
  const pageNumbers: number[] = [];
  const [searchParams, setSearchParams] = useSearchParams();
  const locations = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const page = parseInt(queryParams.get('page')) || 1;

  const params = Object.fromEntries(searchParams.entries());
  const queryString = new URLSearchParams(params).toString();

  // const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i);
  }

  const goToPrevPage = () => {
    if (currentPage !== 1) {
      // navigate(
      //   `./?page=${currentPage - 1}&perPage=${itemsPerPage}&sort=${
      //     sortBy}&priceMin=${priceMin}&priceMax=${priceMax}`,
      // );
      setCurrentPage((prevPage) => prevPage - 1);
      searchParams.set('page', currentPage - 1 + '');
      setSearchParams(searchParams);
    }
  };

  const goToNextPage = () => {
    if (currentPage !== pageNumbers.length) {
      // navigate(
      //   `./?page=${currentPage + 1}&perPage=${itemsPerPage}&sort=${
      //     sortBy}&priceMin=${priceMin}&priceMax=${priceMax}`,
      // );
      setCurrentPage((prevPage) => prevPage + 1);
      searchParams.set('page', currentPage + 1 + '');
      setSearchParams(searchParams);
    }
  };

  useEffect(() => {
    if (!pageNumbers.includes(currentPage)) {
      // navigate(`./?page=1&perPage=${itemsPerPage}&sort=${
      //   sortBy}&priceMin=${priceMin}&priceMax=${priceMax}`);
      searchParams.set('page', '1');
      setSearchParams(searchParams);
      setCurrentPage(1);
    }
  }, []);

  return (
    <>
      <ul className="pagination__page">
        <li>
          <ArrowLeft
            onClick={goToPrevPage}
            disableLeftArrow={currentPage === 1}
          />
        </li>

        {pageNumbers.map((num) => (
          <li
            className={classNames('pagination__item', {
              'pagination__item--selected': num === currentPage,
            })}
            key={num}
          >
            <Link
              to={{
                pathname: '',
                search: locations.search.includes('page') ? locations.search.split(`page=${currentPage}`).join(`page=${num}`) : locations.search + `page=${num}`, // Передача текущих параметров поиска
              }}
              className="pagination__link"
              onClick={() => {
                searchParams.set('page', num.toString());
                setSearchParams(searchParams);
                setCurrentPage(num);
              }}
            >
              {num}
            </Link>
          </li>
        ))}

        <li>
          <ArrowRigth
            onClick={goToNextPage}
            disableRigthArrow={currentPage === pageNumbers.length}
          />
        </li>
      </ul>
    </>
  );
};
