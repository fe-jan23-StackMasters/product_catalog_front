import React, { useEffect, useState } from 'react';

interface Props {
  itemsOnPage: number;
  // items: Phone[]
}

export const Pagination: React.FC<Props> = ({ itemsOnPage }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

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

  return (
    <div className="pagination">

    </div>
  );
};
