import React, { useEffect, useState } from 'react';
import './Pagination.scss';
import { Paginate } from './PageSelector';
import { ProductCard } from '../ProductCard';
import { DropDown } from '../DropDown/DropDown';
import { SortBy } from '../../types/SortBy';
import { useSearchParams, useLocation, useNavigate } from 'react-router-dom';
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
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState('16');
  const [sortBy, setSortBy] = useState<SortBy>(SortBy.NEW);
  const [productInfo, setProductInfo] = useState<RequestWithParamsResult>();
  const [isFirstRender, setIsFirstRender] = useState(true);
  const sorts = [SortBy.NAME, SortBy.NEW, SortBy.OLD, SortBy.HIGHT, SortBy.LOW];
  const arrayOfItemsOnPage = ['8', '16', '32', '64'];
  const [searchParams] = useSearchParams();
  const phones = productInfo?.products;
  const navigate = useNavigate();
  const locations = useLocation();
  const sort = searchParams.get('sort');
  const perPage = searchParams.get('perPage');
  const page = searchParams.get('page');
  const priceMinFromUrl = searchParams.get('priceMin');
  const priceMaxFromUrl = searchParams.get('priceMax');
  let sortParamValidator = sorts
    .find((by) => by.toString() === sort) || 'newest';
  let perPageParamValidator = arrayOfItemsOnPage
    .find((by) => by.toString() === perPage) || '16';
  const skeletons = Array.from(
    { length: Number(perPageParamValidator) },
    (_, index) => index + 1,
  );

  const [range, setRange] = useState<number | number[]>([0, 5000]);

  const handleChangeFilterPrice = (
    _event: Event,
    newValue: number | number[],
  ) => {
    setRange(newValue);
  };

  let priceMin = Array.isArray(range) ? range[0] : 0;
  let priceMax = Array.isArray(range) ? range[1] : 5000;

  const getDataFromServer = async() => {
    setIsLoading(true);

    try {
      const dataFromServer = await getProducts(
        +itemsPerPage,
        currentPage,
        [productType],
        sorts.find((by) => by.toString() === sort) || SortBy.NEW,
        priceMin,
        priceMax,
      );

      setProductInfo(dataFromServer);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line prefer-const, no-undef
    let timer: NodeJS.Timeout | undefined;

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      getDataFromServer();
      searchParams.set('priceMin', priceMin.toString());
      searchParams.set('priceMax', priceMax.toString());

      if (!isFirstRender) {
        navigate(
          `./?page=1&perPage=${perPage}&sort=${sort}&priceMin=${priceMin}&priceMax=${priceMax}`,
        );
        setCurrentPage(1);
      } else {
        if (!page || !productInfo?.pages || productInfo?.pages < +page) {
          setCurrentPage(1);
        }

        navigate(
          `./?page=${page}&perPage=${perPage}&sort=${sort}&priceMin=${priceMin}&priceMax=${priceMax}`,
        );
      }

      setIsFirstRender(false);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [priceMax, priceMin]);

  useEffect(() => {
    const urlParams = locations.search;

    if (locations.search.includes('page=')) {
      const matchPage = urlParams.match(/page=(\d+)/);

      if (matchPage && +matchPage[1] !== currentPage) {
        setCurrentPage(+matchPage[1]);
      }
    }
  }, [currentPage]);

  useEffect(() => {
    setItemsPerPage(perPage || '16');
    setCurrentPage(Number(page) || 1);

    if (!(isNaN(Number(priceMinFromUrl)) || priceMinFromUrl === null)) {
      priceMin = Number(priceMinFromUrl);
    } else {
      priceMin = 0;
    }

    if (!(isNaN(Number(priceMaxFromUrl)) || priceMaxFromUrl === null)) {
      priceMax = Number(priceMaxFromUrl);
    } else {
      priceMax = 5000;
    }

    setRange([priceMin, priceMax]);

    if (sorts.some((by) => sort === by.toString())) {
      setSortBy(sorts.find((by) => by.toString() === sort) || SortBy.NEW);
    } else {
      setSortBy(SortBy.NEW);
    }

    if (arrayOfItemsOnPage.some((by) => perPage === by.toString())) {
      setItemsPerPage(
        arrayOfItemsOnPage.find((by) => by.toString() === perPage) || '16',
      );
    } else {
      setItemsPerPage('16');
    }
  }, []);

  useEffect(() => {
    getDataFromServer();
  }, [itemsPerPage, sortBy, currentPage]);

  const handlerDropdownItemPerPage = (returnedValue: string) => {
    if (currentPage !== 1) {
      navigate(
        `./?page=1&perPage=${returnedValue}&sort=${
          sort || SortBy.NEW
        }&priceMin=${priceMin || 0}&priceMax=${priceMax || 5000}`,
      );
      setCurrentPage(1);
    } else {
      navigate(
        `./?page=${page || '1'}&perPage=${returnedValue}&sort=${
          sort || SortBy.NEW
        }&priceMin=${priceMin || 0}&priceMax=${priceMax || 5000}`,
      );
    }

    searchParams.set('perPage', returnedValue);
    setItemsPerPage(returnedValue);
    perPageParamValidator = returnedValue;
  };

  const handlerDropdownSortBy = (returnedValue: string) => {
    if (currentPage !== 1) {
      navigate(
        `./?page=1&perPage=${perPage}&sort=${returnedValue}&priceMin=${
          priceMin || 0
        }&priceMax=${priceMax || 5000}`,
      );
      setCurrentPage(1);
    } else {
      navigate(
        `./?page=${page}&perPage=${perPage}&sort=${returnedValue}&priceMin=${
          priceMin || 0
        }&priceMax=${priceMax || 5000}`,
      );
    }

    searchParams.set('sort', returnedValue);

    setSortBy(
      sorts.find((by) => by.toString() === returnedValue) || SortBy.NEW,
    );
    sortParamValidator = returnedValue;
  };

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
            getValueFromDropDown={handlerDropdownSortBy}
            searchParam={sortParamValidator}
            defaultValue={1}
          />
        </div>

        <div className="phonesPage__dropDown--itemsOnPage">
          Items on page
          <DropDown
            variables={arrayOfItemsOnPage}
            getValueFromDropDown={handlerDropdownItemPerPage}
            searchParam={perPageParamValidator}
            defaultValue={1}
          />
        </div>

        {windowWidth >= 640 && (
          <div className="phonesPage__priceSlider">
            Price
            <PriceSlider
              priceMin={priceMin}
              priceMax={priceMax}
              handleChangeFilterPrice={handleChangeFilterPrice}
            />
          </div>
        )}
      </div>

      {windowWidth < 640 && (
        <>
          <div className="phonesPage__priceSlider">
            <span className="phonesPage__priceSlider-title">Price</span>
            <PriceSlider
              priceMin={priceMin}
              priceMax={priceMax}
              handleChangeFilterPrice={handleChangeFilterPrice}
            />
          </div>
        </>
      )}

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
            itemsPerPage={Number(itemsPerPage)}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            sortBy={sortBy}
            pages={productInfo?.pages || 1}
            priceMin={priceMin}
            priceMax={priceMax}
          />
        )}
      </div>
    </>
  );
};
