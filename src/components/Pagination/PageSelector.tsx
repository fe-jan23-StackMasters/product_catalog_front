import React, { useEffect } from 'react';
import classNames from 'classnames';
import { ArrowLeft } from '../Arrows/ArrowLeft';
import { ArrowRigth } from '../Arrows/ArrowRight';

interface Props {
  currentPage: number;
  pages: number;
  setCurrentPage: (page: string) => void;
}

export const Paginate: React.FC<Props> = ({
  currentPage,
  pages,
  setCurrentPage,
}) => {
  const pageNumbers: number[] = [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i);
  }

  const goToPrevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage((currentPage - 1).toString());
    }
  };

  const goToNextPage = () => {
    if (currentPage !== pageNumbers.length) {
      setCurrentPage((currentPage + 1).toString());
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
              className={classNames('pagination__link', {
                'pagination__link--selected': num === currentPage,
              })}
              onClick={() => {
                setCurrentPage(num.toString());
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
