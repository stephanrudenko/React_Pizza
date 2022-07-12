import React from "react";
import { Link } from "react-router-dom";
import EmptyCartImg from "../assets/img/empty-cart.png";

const CartEmpty = () => {
  return (
    <div class="cart cart--empty">
      <h2>
        Кошик порожній <icon>😕</icon>
      </h2>
      <p>
        Скоріш за все всего, ви ще не замовляли піцу.
        <br />
        Для того, щоб замовити піцу, перейдіть на головну сторінку.
      </p>
      <img src={EmptyCartImg} alt="Empty cart" />
      <Link to="/" class="button button--black">
        <span>Повернутись на головну</span>
      </Link>
    </div>
  );
};

export default CartEmpty;
