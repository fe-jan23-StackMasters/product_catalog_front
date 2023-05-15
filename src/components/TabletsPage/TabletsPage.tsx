import { LinkLine } from '../LinkLine';

export const TabletsPage = () => {
  return (
    <section className="tablets">
      <div className="container">
        <div className="grid">
          <div className="grid__item grid__item--1-4 grid__item-tablet--1-12">
            <div className="tablets__header">
              <LinkLine to={'tablets'} title={'Tablets'} />

              <h1 className="tablets__title">Tablets devices</h1>

              <div className="tablets__models">95 models</div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
