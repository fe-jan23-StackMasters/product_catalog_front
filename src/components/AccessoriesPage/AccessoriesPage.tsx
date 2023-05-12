import rightArrov from '../../icons/arrowRight.svg';
import home from '../../icons/Home.svg';

export const AccessoriesPage = () => {
  return (
    <section className="accessories">
      <div className="container">
        <div className="grid">
          <div className="grid__item grid__item--1-4 grid__item-tablet--1-12">
            <div className="accessories__header">
              <div className="accessories__links">
                <a href="/" className="accessories__link">
                  <img className="accessories__arrow" src={home} alt="home" />
                </a>

                <a href="/accessories" className="accessories__link">
                  <img
                    className="accessories__arrow"
                    src={rightArrov}
                    alt="right"
                  />
                  Accessories
                </a>
              </div>

              <h1 className="accessories__title">Accessories for devices</h1>

              <div className="accessories__models">23 models</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
