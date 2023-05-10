import React, { useEffect, useState } from 'react';
import './Pagination.scss';
import { Paginate } from './PageSelector';
import { ProductCard } from '../ProductCard';

export const Pagination: React.FC = () => {
  // const [items, setItems] = useState([]);
  const itemsPerPage = 4;
  const items = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1];

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = items.slice(firstItemIndex, lastItemIndex);

  window.console.log(currentPage);

  useEffect(() => {
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

  return (
    <div className="pagination">
      <div className="pagination__items">
        {currentItems.map(() => (
          <ProductCard key={Math.random()} />
        ))}
        {/* change key to item.id */}
      </div>
        <Paginate
          itemsPerPage={itemsPerPage}
          totalItems={items.length}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
    </div>
  );
};
