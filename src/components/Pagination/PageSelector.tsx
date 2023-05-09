import React from 'react';
import classNames from 'classnames';
import { ArrowLeft } from '../arrows/ArrowLeft/ArrowLeft';
import { ArrowRigth } from '../arrows/ArrowRight/ArrowRigth';

interface Props {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

export const Paginate: React.FC<Props> = ({
  itemsPerPage,
  totalItems,
  currentPage,
  setCurrentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const goToPrevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(prevCurrentPage => prevCurrentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage !== pageNumbers.length) {
      setCurrentPage(prevCurrentPage => prevCurrentPage + 1);
    }
  };

  return (
    <div>
      <ul className='pagination__page'>
        <ArrowLeft
          onClick={goToPrevPage}
          disableLeftArrow={currentPage === 1}
        />
        {
          pageNumbers.map(num => (
            <li
              className={classNames(
                'pagination__item',
                { 'pagination__item--selected': num === currentPage },
              )}
              onClick={() => setCurrentPage(num)}
              key={num}
            >
              <a
                className='pagination__link'
              >
                {num}
              </a>
            </li>
          ))
        }
        <ArrowRigth
          onClick={goToNextPage}
          disableRigthArrow={currentPage === pageNumbers.length}
        />
      </ul>
    </div>
  );
};
