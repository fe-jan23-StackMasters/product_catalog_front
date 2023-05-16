import React, { useEffect } from 'react';
import classNames from 'classnames';
import { ArrowLeft } from '../Arrows/ArrowLeft';
import { ArrowRigth } from '../Arrows/ArrowRight';
import { NavLink, useNavigate } from 'react-router-dom';

interface Props {
  itemsPerPage: number;
  currentPage: number;
  sortBy: string;
  pages: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export const Paginate: React.FC<Props> = ({
  itemsPerPage,
  currentPage,
  sortBy,
  setCurrentPage,
  pages,
}) => {
  const pageNumbers: number[] = [];
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i);
  }

  const goToPrevPage = () => {
    if (currentPage !== 1) {
      navigate(
        `./?page=${currentPage - 1}&perPage=${itemsPerPage}&sort=${sortBy}`,
      );
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage !== pageNumbers.length) {
      navigate(
        `./?page=${currentPage + 1}&perPage=${itemsPerPage}&sort=${sortBy}`,
      );
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    if (!pageNumbers.includes(currentPage)) {
      navigate(`./?page=1&perPage=${itemsPerPage}&sort=${sortBy}`);
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
            <NavLink
              to={`./?page=${num}&perPage=${itemsPerPage}&sort=${sortBy}`}
              className="pagination__link"
              onClick={() => {
                setCurrentPage(num);
              }}
            >
              {num}
            </NavLink>
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
