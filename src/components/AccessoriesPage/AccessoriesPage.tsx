import { LinkLine } from '../LinkLine';

export const AccessoriesPage = () => {
  return (
    <section className="accessories">
      <div className="container">
        <div className="grid">
          <div className="grid__item grid__item--1-4 grid__item-tablet--1-12">
            <div className="accessories__header">
              <LinkLine to={'accessories'} title={'Accessories'} />

              <h1 className="accessories__title">Accessories for devices</h1>

              <div className="accessories__models">23 models</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
