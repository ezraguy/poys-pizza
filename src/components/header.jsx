import React from "react";
import "../scss/header.scss";
const Header = () => {
  return (
    <div className="container-fluid m-0 p-0">
      <nav id="header" className="navbar navbar-default  ">
        <div className=" mx-auto order-0">
          <p className="navbar-brand mx-auto header-title">Poy's Pizza</p>
        </div>
      </nav>
    </div>
  );
};

export default Header;
