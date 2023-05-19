import React from 'react';
import './AproovedBox.scss';
import classNames from 'classnames';

type PropsAprooveBox = {
  stateAproove: boolean,
  stateCheckout: boolean,
}

export const AproovedBox:React.FC<PropsAprooveBox>
= ({ stateAproove, stateCheckout }) => {
  return (
    <>
      <div
        className={classNames(
          stateAproove ? 'aprove load-container' : 'aprove',
        )}
      >
        <div className="container">
          <div
            className={classNames(
              stateAproove ? 'wrapper load-container' : 'wrapper',
            )}
          >
            <div
              className={classNames(
                stateCheckout ? 'circle-loader load-complete' : 'circle-loader',
              )}
            >
              <div
                className={classNames(
                  stateCheckout
                    ? 'checkmark draw load-container '
                    : 'checkmark draw',
                )}
              ></div>
            </div>
          </div>
          <h3 className="aprove-name">Succesful Buy</h3>
        </div>
      </div>
      {/* <button onClick={() => openViewCHeck()}> */}
      {/* _______============_________ */}
      {/* </button> */}
    </>
  );
};
