import classNames from 'classnames';
import './MenuToggler.scss';

type Props = {
  isOpen: boolean;
  onToggle: (status?: boolean) => void;
};

export const MenuToggler = ({ isOpen, onToggle }: Props) => {
  return (
    <button
      className={classNames(
        'header__case header__menu-button burger outline-arrow',
        { 'burger--opened': isOpen },
      )}
      onClick={() => onToggle()}
    >
      <div className='burger__container'>
        <div className="burger__line burger__line--1" />
        <div className="burger__line burger__line--2" />
        <div className="burger__line burger__line--3" />
      </div>
    </button>
  );
};
