import React from "react";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col header__logo">GeoDataBlock</div>
          <div className="col text-right">
            <a
              href="https://twitter.com/GeoDataBlock"
              rel="noopener noreferrer"
              target="_blank"
              className="header__icon"
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              href="https://www.facebook.com/GeoDataBlock"
              rel="noopener noreferrer"
              target="_blank"
              className="header__icon"
            >
              <i className="fab fa-facebook" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
