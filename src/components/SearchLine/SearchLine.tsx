import { useEffect, useRef, FC } from 'react';
import './SearchLine.scss';
import dandruff from '../../icons/Search.svg';
import close from '../../icons/Close.svg';
import classNames from 'classnames';

type Props = {
  isOpen: boolean;
  handleOpenInput: () => void;
  setIsOpen: (value: boolean) => void;
}

export const SearchLine: FC<Props> = ({
  isOpen,
  handleOpenInput,
  setIsOpen,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <div className="searchLine">
      <img
        src={dandruff}
        alt="dandruff"
        className={classNames(
          'searchLine__image',
          { 'searchLine__image-position': isOpen },
        )}
        onClick={handleOpenInput}
      />
      {isOpen && (
        <div className="searchLine__container">
          <input
            ref={inputRef}
            type="text"
            className="searchLine__container-input"
            placeholder="Search"
            onBlur={() => setIsOpen(false)}
          />

          <img
            src={close}
            alt="close"
            className="searchLine__container-image"
            onClick={() => setIsOpen(false)}
          />
        </div>

      )}

    </div>
  );
};
