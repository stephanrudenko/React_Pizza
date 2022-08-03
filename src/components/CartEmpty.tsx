import { Link } from "react-router-dom";
import EmptyCartImg from "../assets/img/empty-cart.png";

const CartEmpty: React.FC = () => {
  return (
    <div className="cart cart--empty">
      <h2>
        Кошик порожній <span>😕</span>
      </h2>
      <p>
        Скоріш за все, ви ще не замовляли піцу.
        <br />
        Для того, щоб замовити піцу, перейдіть на головну сторінку.
      </p>
      <img src={EmptyCartImg} alt="Empty cart" />
      <Link to="/" className="button button--black">
        <span>Повернутись на головну</span>
      </Link>
    </div>
  );
};

export default CartEmpty;
