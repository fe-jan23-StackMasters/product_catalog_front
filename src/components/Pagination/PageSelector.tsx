import React, { useEffect } from 'react';
import classNames from 'classnames';
import { ArrowLeft } from '../Arrows/ArrowLeft';
import { ArrowRigth } from '../Arrows/ArrowRight';
import { useResize } from '../../hooks/useResize';

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

  const phoneSize = useResize();

  for (let i = 1; i <= pages; i++) {
    if ((i < currentPage - 1 && i !== 1 && phoneSize && currentPage !== pages)
      || (i < currentPage - 2 && i !== 1)) {
      continue;
    }

    if ((i > currentPage + 1 && i !== pages && phoneSize && currentPage !== 1)
      || (i > currentPage + 2 && i !== pages)) {
      continue;
    }

    if ((i > currentPage + 2 && phoneSize) || (i > currentPage + 3)) {
      pageNumbers.push(NaN);
    }

    pageNumbers.push(i);

    if ((i < currentPage - 2 && phoneSize) || (i < currentPage - 3)) {
      pageNumbers.push(NaN);
    }
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

        {pageNumbers.map((num, i) => (
          num
            ? <li
                className={classNames('pagination__item', {
                  'pagination__item--selected': num === currentPage,
                })}
                key={i}
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
            : <li
                className='pagination__item--disabled'
                key={i}
              >
                <div
                  className='pagination__link'
                >
                  {'...'}
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
