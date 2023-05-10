import React from 'react';
import classNames from 'classnames';
import { ArrowLeft } from '../Arrows/ArrowLeft';
import { ArrowRigth } from '../Arrows/ArrowRight';
import { Link, useNavigate, useParams } from 'react-router-dom';

interface Props {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export const Paginate: React.FC<Props> = ({
  itemsPerPage,
  totalItems,
  currentPage,
  setCurrentPage,
}) => {
  const pageNumbers = [];
  const { page = 1 } = useParams();
  const navigate = useNavigate();

  setCurrentPage(+page);

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const goToPrevPage = () => {
    if (currentPage !== 1) {
      navigate(`/catalog/${+page - 1}`);
    }
  };

  const goToNextPage = () => {
    if (currentPage !== pageNumbers.length) {
      navigate(`/catalog/${+page + 1}`);
    }
  };

  return (
    <div>
      <ul className="pagination__page">
        <li>
          <ArrowLeft
            onClick={goToPrevPage}
            disableLeftArrow={currentPage === 1}
          />
        </li>

        {pageNumbers.map((num) => (
          <li
            // key={}
            className={classNames('pagination__item', {
              'pagination__item--selected': num === currentPage,
            })}
            key={num}
          >
            <Link to={`/catalog/${num}`} className='pagination__link'>{num}</Link>
          </li>
        ))}

        <li>
          <ArrowRigth
            onClick={goToNextPage}
            disableRigthArrow={currentPage === pageNumbers.length}
          />
        </li>
      </ul>
    </div>
  );
};
