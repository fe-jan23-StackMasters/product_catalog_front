import React, { useEffect } from 'react';
import classNames from 'classnames';
import { ArrowLeft } from '../Arrows/ArrowLeft';
import { ArrowRigth } from '../Arrows/ArrowRight';
import { useSearchParams } from 'react-router-dom';

interface Props {
  currentPage: number;
  pages: number;
}

export const Paginate: React.FC<Props> = ({ currentPage, pages }) => {
  const pageNumbers: number[] = [];
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i);
  }

  const goToPrevPage = () => {
    if (currentPage !== 1) {
      searchParams.set('page', currentPage - 1 + '');
      setSearchParams(searchParams);
    }
  };

  const goToNextPage = () => {
    if (currentPage !== pageNumbers.length) {
      searchParams.set('page', currentPage + 1 + '');
      setSearchParams(searchParams);
    }
  };

  if (pages === 0) {
    return null;
  }

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
            <div
              className="pagination__link"
              onClick={() => {
                searchParams.set('page', num + '');
                setSearchParams(searchParams);
              }}
            >
              {num}
            </div>
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
