import React, { useEffect, useRef, FC, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
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
    <div className={classNames('searchLine', { 'searchLine--active': isOpen })}>
      <img
        src={dandruff}
        alt="dandruff"
        className={classNames('searchLine__image', {
          'searchLine__image-position': isOpen,
        })}
        onClick={redirectPage}
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
              onBlur={() => {
                redirectPage();
                closeInput();
              }}
              value={searchQuery}
              // eslint-disable-next-line max-len
              onChange={(event: { target: { value: React.SetStateAction<string>; }; }) => setSearchQuery(event.target.value)}
            />

            <motion.img
              src={close}
              alt="close search"
              initial={{ display: 'none' }}
              animate={{ display: 'block' }}
              exit={{ display: 'none' }}
              transition={{ duration: 0 }}
              className="searchLine__container-image"
              onClick={() => closeInput()}
            />
          </form>
        )}
      </AnimatePresence>
    </div>
  );
};
