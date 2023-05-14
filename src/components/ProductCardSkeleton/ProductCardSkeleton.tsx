import './ProductCardSkeleton.scss';

export const ProductCardSkeleton = () => {
  return (
    <div className="card-skeleton">
      <div
        className='card-skeleton__link'
      >
        <div
          className="card-skeleton__image"
        />

        <div className="card-skeleton__title card-skeleton__title--1"/>
        <div className="card-skeleton__title card-skeleton__title--2"/>
      </div>

      <div className="card-skeleton__prices" />

      <div className="card-skeleton__charact">
        <div className="card-skeleton__charact-titles">
          <p className="card-skeleton__charact-title">Screen</p>

          <p className="card-skeleton__charact-title">Capacity</p>

          <p className="card-skeleton__charact-title">RAM</p>
        </div>

        <div className="card-skeleton__charact-values">
          <div className="card-skeleton__charact-value"/>

          <div className="card-skeleton__charact-value"/>

          <div className="card-skeleton__charact-value"/>
        </div>
      </div>

      <div className="card-skeleton__buttons">
        <div className="card-skeleton__button1" />
        <div className="card-skeleton__button2" />
      </div>
    </div>
  );
};
