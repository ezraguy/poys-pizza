import React, { useState, useEffect } from "react";
import "../scss/header.scss";
import { ReactComponent as CartSvg } from "../svg/cart.svg";
import { connect } from "react-redux";
import slice from "../images/pizzaSlice.png";
import "animate.css";
import { handleCart } from "../actions/cartActions";

const Header = ({ pizzasInCart, handleCart }) => {

  const [spanClass, setSpanClass] = useState('itemsInCart');
  useEffect(() => {
    if (pizzasInCart.length > 0) {
      setSpanClass('itemsInCart animate__bounceInDown')
    }
    setTimeout(() => {
      setSpanClass('itemsInCart')
    }, 800);

  }, [pizzasInCart])
  const openCart = () => {
    handleCart(true);
  };
  return (
    <div className="container-fluid m-0 p-0">
      <nav id="header" className="navbar navbar-default  ">
        <div className=" mx-auto order-0 content">
          <div className="navbar-brand mx-auto header-title">
            Guy's Pizza
            <img src={slice} className="findMe" alt="pizza slice" />
          </div>
        </div>
        <CartSvg onClick={() => openCart()} className="cartSvg" />
        <span className={spanClass}>
          {pizzasInCart.length}
        </span>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    pizzasInCart: state.pizzasInCart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleCart: (showCart) => {
      dispatch(handleCart(showCart));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
