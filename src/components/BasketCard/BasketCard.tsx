import './BasketCard.scss';
import deleteIcon from '../../icons/Close.svg';
import iphoneIcon from '../../imageIphone.svg';
import minusIcon from '../../icons/Minus.svg';
import plusIcon from '../../icons/Plus.svg';

export const BasketCard = () => (
  <div className="basket__card">
    <div className="basket__card-top">
      <img src={deleteIcon} alt="delete" className="basket__card-delete" />
      <img src={iphoneIcon} alt="iphone" className="basket__card-image" />
      <span className="basket__card-title">
        Apple iPhone 14 Pro 128GB Silver (MQ023)
      </span>
    </div>

    <div className="basket__card-bottom">
      <div className="basket__card-bottom--increase">
        <img src={minusIcon} alt="minus" className="basket__card-minus" />
        <span className="basket__card-count">1</span>
        <img src={plusIcon} alt="plus" className="basket__card-plus" />
      </div>
      <div className="basket__card-price">$888</div>
    </div>

  </div>
);
