import React, { useEffect, useState } from 'react';
import { Card } from '../TempCard/TempCard';
import './Pagination.scss';
import { Paginate } from './PageSelector';

interface Props {
  itemsPerPage: number;
  items: number[]
}

export const Pagination: React.FC<Props> = ({ itemsPerPage, items }) => {
  // const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = items.slice(firstItemIndex, lastItemIndex);

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
        {currentItems.map(item => <Card number={item} key={Math.random()}/>)}
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
