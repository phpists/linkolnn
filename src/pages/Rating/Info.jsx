export const Info = ({ data }) => (
  <div className="rating-info mb-5">
    <div className="rating-info__item rating">
      Мій рейтинг <span>{data?.rate}</span>
    </div>
    <div className="rating-info__item ended">
      Завершені замовлення <span>{data?.done}</span>
    </div>
    <div className="rating-info__item cancel">
      Скасовані замовлення <span>{data?.canceled}</span>
    </div>
  </div>
);
