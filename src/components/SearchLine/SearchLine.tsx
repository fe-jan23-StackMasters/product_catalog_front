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
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeContext } from '../../context/toggleContext';

type Props = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

export const SearchLine: FC<Props> = ({
  isOpen,
  setIsOpen,
}) => {
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
    }

    setIsOpen(false);
  };

  const searchDevice = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeInput();
      }
    }, [],
  );

  useEffect(() => {
    document.addEventListener('keyup', searchDevice);

    return () => {
      document.removeEventListener('keyup', searchDevice);
    };
  }, []);

  return (
    <div className={classNames('searchLine', { 'searchLine--active': isOpen })}>
      <img
        src={dandruffPath}
        alt="dandruff"
        className={classNames('searchLine__image', {
          'searchLine__image-position': isOpen,
        })}
        onClick={() => setIsOpen(true)}
      />

      <AnimatePresence>
        {isOpen && (
          <form
            className="searchLine__container"
            onSubmit={(e) => {
              e.preventDefault();
              redirectPage();
            }}
          >
            <motion.input
              ref={inputRef}
              key={'/'}
              initial={{ width: 0 }}
              animate={{ width: 200 }}
              exit={{
                width: 0,
                paddingLeft: 0,
                paddingRight: 0,
              }}
              transition={{ duration: 0.2 }}
              type="text"
              className="searchLine__container-input"
              placeholder="Search"
              onBlur={() => {
                redirectPage();
                closeInput();
              }}
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />

            <motion.img
              src={closePath}
              alt="close search"
              initial={{ display: 'none' }}
              animate={{ display: 'block' }}
              exit={{ display: 'none' }}
              transition={{ duration: 0 }}
              className="searchLine__container-image"
              onClick={closeInput}
            />
          </form>
        )}
      </AnimatePresence>
    </div>
  );
};
