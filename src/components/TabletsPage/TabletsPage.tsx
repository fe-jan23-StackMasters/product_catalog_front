import rightArrov from '../../icons/arrowRight.svg';
import home from '../../icons/Home.svg';

export const TabletsPage = () => {
  return (
    <section className="tablets">
      <div className="container">
        <div className="grid">
          <div className="grid__item grid__item--1-4 grid__item-tablet--1-12">
            <div className="tablets__header">
              <div className="tablets__links">
                <a href="/" className='tablets__link'>
                  <img className='tablets__arrow' src={home} alt="home" />
                </a>

                <a href='/tablets' className='tablets__link'>
                  <img
                    className='tablets__arrow'
                    src={rightArrov} alt="right"
                  />
                  Tablets
                </a>
              </div>

              <h1 className="tablets__title">
                Tablets devices
              </h1>

              <div className="tablets__models">
                95 models
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
