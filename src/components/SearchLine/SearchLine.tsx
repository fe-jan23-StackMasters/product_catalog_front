import { useEffect, useRef, FC, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchLine.scss';
import dandruff from '../../icons/Search.svg';
import close from '../../icons/Close.svg';
import classNames from 'classnames';

type Props = {
  isOpen: boolean;
  handleOpenInput: () => void;
  setIsOpen: (value: boolean) => void;
};

export const SearchLine: FC<Props> = ({
  isOpen,
  handleOpenInput,
  setIsOpen,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const closeInput = useCallback(() => {
    setIsOpen(false);
    setSearchQuery('');
  }, []);

  const redirectPage = () => {
    if (searchQuery) {
      navigate(`/search?query=${searchQuery}`);
    } else (
      navigate('/search')
    );

    handleOpenInput();
  };

  // const searhDevice = useCallback(
  //   (event: KeyboardEvent) => {
  //     if (event.key === 'Enter') {
  //       event.preventDefault();
  //       redirectPage();
  //     }
  //   }, [],
  // );

  // useEffect(() => {
  //   document.addEventListener('keyup', searhDevice);

  //   return () => {
  //     document.removeEventListener('keyup', searhDevice);
  //   };
  // }, []);

  return (
    <div className="searchLine" id="test" >
      <img
        src={dandruff}
        alt="dandruff"
        className={classNames('searchLine__image', {
          'searchLine__image-position': isOpen,
        })}
        onClick={redirectPage}
      />
      {isOpen && (
        <div className="searchLine__container">
          <input
            ref={inputRef}
            type="text"
            className="searchLine__container-input"
            placeholder="Search"
            onBlur={() => {
              redirectPage();
              closeInput();
            }}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <img
            src={close}
            alt="close"
            className="searchLine__container-image"
            onClick={() => closeInput()}
          />
        </div>
      )}
    </div>
  );
};
