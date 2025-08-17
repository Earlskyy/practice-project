
function ProductCard({ image, name, price, description, onBuy }) {
  return (
    <div className="Card">
      <img src={image} alt={name} className="Card-img" />
      <h3 className="ProductName">{name}</h3>
      <h1 className="ProductPrice">₱{price}</h1>
      <p className="ProductDesc">{description}</p>
      <button onClick={onBuy} className="ProductBtn">
        Buy Now
      </button>
    </div>
  );
}

export default ProductCard;
