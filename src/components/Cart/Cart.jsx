const IMAGES = {
  image4: new URL("./img/Корзина.png", import.meta.url).href,
};

export default function Cart(props) {
  const { quantity = 0, handleBasketShow = Function.prototype } = props;
  return (
    <div className="cart blue darken-4 white-text" onClick={handleBasketShow}>
      <img
        src={IMAGES.image4}
        alt="cart"
        style={{ width: "50px", height: "50px", marginLeft: "16px" }}
      />
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
}
