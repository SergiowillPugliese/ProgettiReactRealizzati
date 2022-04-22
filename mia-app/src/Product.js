import React from "react";
const prezzo = 16;
const alt = "valore";
const img =
  "https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/f13166.jpg";
const Product = () => {
  return (
    <article>
      <div className='card'>
        <img src={img} alt={alt} />
        <h6>10€ amazon</h6>
        <hr />
        <p>2,16€</p>
        <p>bamby000</p>
      </div>
      <p className='card-time'>COMPRA ORA</p>
      <button>{prezzo} €</button>
    </article>
  );
};

export default Product;
