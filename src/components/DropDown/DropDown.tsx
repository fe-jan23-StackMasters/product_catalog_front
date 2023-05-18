import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import './DropDown.scss';
import { SortBy } from '../../types/SortBy';
import { motion } from 'framer-motion';

type Props = {
  variables: string[];
  getValueFromDropDown: (value: string) => void;
  searchParam?: string | null;
  defaultValue?: number;
};

const sortByNames = {
  [SortBy.NAME]: 'Name A-Z',
  [SortBy.HIGHT]: 'Price ⬇️',
  [SortBy.LOW]: 'Price ⬆️',
  [SortBy.NEW]: 'New first',
  [SortBy.OLD]: 'Old first',
};

export const DropDown: React.FC<Props> = ({
  variables,
  getValueFromDropDown,
  searchParam,
  defaultValue = 0,
}) => {
  const [isOpen, setOpen] = useState(false);
  const [stateDropDown, setStateDropDown] = useState(
    searchParam || variables[defaultValue],
  );

  const handlerChange = (point: string) => {
    setStateDropDown(point);
    setOpen(false);
    getValueFromDropDown(point);
  };

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current
      && !dropdownRef.current.contains(event.target as Node)
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <motion.div
      className="dropdown"
      ref={dropdownRef}
      onClick={() => setOpen(!isOpen)}
      whileTap={{ scale: 0.97 }}
    >
      <div className="dropdown_default">
        {sortByNames[stateDropDown as SortBy] || stateDropDown}
      </div>
      <svg
        width="6"
        height="10"
        viewBox="0 0 6 10"
        fill="none"
        className={classNames(
          isOpen ? 'dropdown_arrowDrop' : 'dropdown_arrowDrop active_arrow',
        )}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.47124 0.528606C5.21089 0.268256
            4.78878 0.268256 4.52843 0.528606L0.528433
            4.52861C0.268083 4.78896 0.268083 5.21107
            0.528433 5.47141L4.52843 9.47141C4.78878
            9.73176 5.21089 9.73176 5.47124 9.47141C5.73159
            9.21107 5.73159 8.78896 5.47124 8.52861L1.94265
            5.00001L5.47124 1.47141C5.73159 1.21107 5.73159
            0.788955 5.47124 0.528606Z"
        />
      </svg>

      <ul
        className={classNames('dropdown_content', {
          'dropdown_content--active': isOpen,
        })}
      >
        {variables.map((item) => (
          <li
            className="dropdown_content-item"
            key={item}
            onClick={() => handlerChange(item)}
          >
            <div className="dropdown_content-item-option">
              {sortByNames[item as SortBy] || item}
            </div>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};
