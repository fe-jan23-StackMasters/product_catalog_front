import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import './DropDown.scss';

type Props = {
  variables: string[];
  getValueFromDropDown: (value:string) => void;
  searchParam?: string | null;
  defaultValue?: number;
};

export const DropDown: React.FC<Props> = ({
  variables,
  getValueFromDropDown,
  searchParam,
  defaultValue = 0,
}) => {
  const [positionDropDown, setPositionDropDown] = useState(false);
  const [stateDropDown, setStateDropDown] = useState(
    searchParam || variables[defaultValue],
  );
  const [isClicked, setIsClicked] = useState(false);

  const handlerChange = (point: string) => {
    setStateDropDown(point);
    setPositionDropDown(false);
    setIsClicked(true);
  };

  useEffect(() => {
    getValueFromDropDown(stateDropDown);
    setIsClicked(false);
  }, [isClicked]);

  return (
    <>
      <div
        className="dropdown"
        onClick={() => setPositionDropDown(!positionDropDown)}
      >
        <div className="dropdown_default">{stateDropDown}</div>
        <svg
          width="6"
          height="10"
          viewBox="0 0 6 10"
          fill="none"
          className={classNames(
            positionDropDown
              ? 'dropdown_arrowDrop'
              : 'dropdown_arrowDrop active_arrow',
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
      </div>
      <div
        className={classNames(
          positionDropDown
            ? 'dropdown_content active-drop'
            : 'dropdown_content ',
        )}
      >
        {variables.map((item) => (
          <div
            className="dropdown_content-item"
            key={item}
            onClick={() => handlerChange(item)}
          >
            <div className="dropdown_content-item-option">{item}</div>
          </div>
        ))}
      </div>
    </>
  );
};
