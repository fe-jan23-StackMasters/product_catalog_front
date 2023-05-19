import {
  useEffect,
  useRef,
  FC,
  useState,
  useCallback,
  useContext,
} from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchLine.scss';
import dandruff from '../../icons/Search.svg';
import blackDandruff from '../../icons/blackSearch.svg';
import close from '../../icons/Close.svg';
import blackClose from '../../icons/blackClose.svg';
import classNames from 'classnames';
import { ThemeContext } from '../../context/toggleContext';

type Props = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  onCloseBurger: (value?: boolean) => void;
};

export const SearchLine: FC<Props> = ({ isOpen, setIsOpen, onCloseBurger }) => {
  const { theme } = useContext(ThemeContext);
  const [searchQuery, setSearchQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  let dandruffPath = dandruff;
  let closePath = close;

  if (theme === 'light') {
    dandruffPath = blackDandruff;
    closePath = blackClose;
  }

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
      onCloseBurger(false);
    }

    setIsOpen(false);
  };

  const searchDevice = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      closeInput();
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keyup', searchDevice);

    return () => {
      document.removeEventListener('keyup', searchDevice);
    };
  }, []);

  const isShorter = window.innerWidth < 360;

  return (
    <div className="searchLine">
      <img
        src={dandruffPath}
        alt="dandruff"
        className={classNames('searchLine__image', {
          'searchLine__image-position': isOpen,
        })}
        onClick={() => setIsOpen(true)}
      />

      <form
        className="searchLine__container"
        onSubmit={(e) => {
          e.preventDefault();
          redirectPage();
        }}
      >
        <input
          ref={inputRef}
          type="text"
          className={classNames('searchLine__container-input', {
            'searchLine__container-input--active': isOpen && !isShorter,
            'searchLine__container-input--short': isOpen && isShorter,
          })}
          placeholder="Search"
          onBlur={() => {
            redirectPage();
            closeInput();
          }}
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />

        <img
          src={closePath}
          alt="close search"
          className={classNames('searchLine__container-image', {
            'searchLine__container-image--active': isOpen,
          })}
          onClick={closeInput}
        />
      </form>
    </div>
  );
};
