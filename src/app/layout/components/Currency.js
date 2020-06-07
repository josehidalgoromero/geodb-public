import React from "react";

const setTwoDecimal = (price) => {
  let defaultPrice = Number(price);
  return defaultPrice >= 1
    ? defaultPrice
        .toFixed(2)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    : price;
};

export const Currency = ({
  symbol,
  image,
  price_current,
  price_high_24h,
  price_low_24h,
  price_change_percentage_24h,
}) => {
  return (
    <article className="col-md-6 col-lg-3 mt-5">
      <div className="currencies__item">
        <div
          className="currency-thumbnail-content"
          style={{ background: "#0526fe" }}
        >
          <img
            className="currency-thumbnail-content__img"
            src={`${image}`}
            alt=""
          />
        </div>
        <span className="currencies__short-name">{symbol.toUpperCase()}</span>
        <h3 className="currencies__name">current price</h3>
        <h3 className="currencies__price">${setTwoDecimal(price_current)}</h3>
        <div className="currencies-info">
          <div className="currencies-info__change-24h">
            <p className="currencies-info__change-24h-title">Change (24h)</p>
            {price_change_percentage_24h < 0 ? (
              <p className="currency-down">{price_change_percentage_24h}%</p>
            ) : (
              <p className="currency-up">{price_change_percentage_24h}%</p>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
