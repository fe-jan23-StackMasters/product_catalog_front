import { useEffect, useRef, FC } from 'react';
import './SearchLine.scss';
import dandruff from '../../icons/Search.svg';
import close from '../../icons/Close.svg';
import classNames from 'classnames';
import { motion, AnimatePresence } from 'framer-motion';

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
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <div className={classNames('searchLine', { 'searchLine--active': isOpen })}>
      <img
        src={dandruff}
        alt="dandruff"
        className={classNames('searchLine__image', {
          'searchLine__image-position': isOpen,
        })}
        onClick={handleOpenInput}
      />

      <AnimatePresence>
        {isOpen && (
          <form className="searchLine__container">
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
              onBlur={() => setIsOpen(false)}
            />

            <motion.img
              src={close}
              alt="close search"
              initial={{ display: 'none' }}
              animate={{ display: 'block' }}
              exit={{ display: 'none' }}
              transition={{ duration: 0 }}
              className="searchLine__container-image"
              onClick={() => setIsOpen(false)}
            />
          </form>
        )}
      </AnimatePresence>
    </div>
  );
};
