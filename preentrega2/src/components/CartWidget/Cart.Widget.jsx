import cart from "./Assets/cart.svg";
const CartWidget = () => {
  return (
    <div>
      <img className="cart" src={cart} alt="carrito" />0
    </div>
  );
};

export default CartWidget;
