import React, { useEffect, useState } from 'react';
import './Pagination.scss';
import { Paginate } from './PageSelector';
import { ProductCard } from '../ProductCard';
import { DropDown } from '../DropDown/DropDown';
import { SortBy } from '../../types/SortBy';
import { useSearchParams } from 'react-router-dom';
import { getProducts } from '../../api/requests';
import { ProductType } from '../../types/ProductType';
import { PhoneCard } from '../../types/PhoneCard';
import { PriceSlider } from '../PriceSlider';
import { ProductCardSkeleton } from '../ProductCardSkeleton';

type RequestWithParamsResult = {
  pages: number;
  products: PhoneCard[];
  models: number;
};

interface Props {
  productType: ProductType;
}

export const Pagination: React.FC<Props> = ({ productType }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') || '1';
  const sort = searchParams.get('sort') || SortBy.NEW;
  const count = searchParams.get('count') || '16';
  const priceMinP = searchParams.get('priceMin') || '0';
  const priceMaxP = searchParams.get('priceMax') || '5000';
  const sorts = [SortBy.NAME, SortBy.NEW, SortBy.OLD, SortBy.HIGHT, SortBy.LOW];
  const [productInfo, setProductInfo] = useState<RequestWithParamsResult>();
  const arrayOfItemsOnPage = ['8', '16', '32', '64'];
  const phones = productInfo?.products;
  const [range, setRange] = useState<number | number[]>([0, 5000]);
  const skeletons = Array.from(
    { length: Number(count) },
    (_, index) => index + 1,
  );

  const handleChangeFilterPrice = (
    _event: Event,
    newValue: number | number[],
  ) => {
    setRange(newValue);
  };

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const priceMin = range[0].toString();
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const priceMax = range[1].toString();

      if (priceMax !== priceMaxP) {
        updateSearch({ priceMax }, searchParams, setSearchParams);
      }

      if (priceMin !== priceMinP) {
        updateSearch({ priceMin }, searchParams, setSearchParams);
      }
    }, 700);

    return () => {
      clearTimeout(debounceTimeout);
    };
  }, [range]);

  function updateSearch(
    params: { [key: string]: string | null },
    searchParams: URLSearchParams,
    setSearchParams: (searchParams: URLSearchParams) => void,
  ) {
    Object.entries(params).forEach(([key, value]) => {
      if (!value) {
        searchParams.delete(key);
      } else {
        searchParams.set(key, value);
      }
    });

    setSearchParams(searchParams);
  }

  const onSortChange = (sort: string) => {
    updateSearch({ sort }, searchParams, setSearchParams);
  };

  const onCountChange = (count: string) => {
    updateSearch({ count }, searchParams, setSearchParams);
  };

  const onPageChange = (page: string) => {
    updateSearch({ page }, searchParams, setSearchParams);
  };

  const getProductsFromServer = async() => {
    setIsLoading(true);

    try {
      setProductInfo(await getProducts(
        +count,
        +page,
        [productType],
        sorts.find((by) => by.toString() === sort) || SortBy.NEW,
        +priceMinP,
        +priceMaxP,
      ));
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProductsFromServer();
  }, [searchParams]);

  useEffect(() => {
    const newMaxPages = productInfo?.pages || 1;

    if (+page > newMaxPages) {
      onPageChange(newMaxPages.toString());
    }
  }, [productInfo?.pages]);

  const windowWidth = window.innerWidth;

  return (
    <>
      <div className="phonesPage__modelsCount">
        {productInfo?.models || 0} models
      </div>

      <div className="phonesPage__dropDown">
        <div className="phonesPage__dropDown--sortBy">
          Sort By
          <DropDown
            variables={sorts}
            // getValueFromDropDown={handlerDropdownSortBy}
            searchParam={sort}
            defaultValue={1}
            changeValue={onSortChange}
          />
        </div>

        <div className="phonesPage__dropDown--itemsOnPage">
          Items on page
          <DropDown
            variables={arrayOfItemsOnPage}
            // getValueFromDropDown={handlerDropdownItemPerPage}
            searchParam={count}
            defaultValue={1}
            changeValue={onCountChange}
          />

        {windowWidth >= 640 && (
          <div className="phonesPage__priceSlider">
            Price
            <PriceSlider
              priceMin={Array.isArray(range) ? range[0] : +priceMinP}
              priceMax={Array.isArray(range) ? range[1] : 5000}
              handleChangeFilterPrice={handleChangeFilterPrice}
            />
          </div>
        )}
      </div>

      {windowWidth < 640 && (
        <>
          <div className="phonesPage__priceSlider">
            <span className="phonesPage__priceSlider-title" >Price</span>
            <PriceSlider
              priceMin={Array.isArray(range) ? range[0] : +priceMinP}
              priceMax={Array.isArray(range) ? range[1] : 5000}
              handleChangeFilterPrice={handleChangeFilterPrice}
            />
        </div>
        </>
      )}
      </div>

      <div className="phonesPage__pagination pagination">
      <div className="pagination__items">
        {isLoading ? (
          skeletons.map((skeleton) => <ProductCardSkeleton key={skeleton} />)
        ) : phones !== undefined ? (
          phones.length === 0 ? (
            <h2>There is nothing</h2>
          ) : (
            phones.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))
          )
        ) : (
          <h2>Unable to load data</h2>
        )}
      </div>
      {!isError && !isLoading && (
        <Paginate
          currentPage={+page}
          pages={productInfo?.pages || 1}
          setCurrentPage={onPageChange}
        />
      )}
      </div>
    </>
  );
};
