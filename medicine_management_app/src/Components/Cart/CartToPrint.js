import React from "react";
import "./CartToPrint.css"; // Import the CSS file

const CartToPrint = React.forwardRef((props, ref) => {
  const { cart, totalPrice, discount, discountedPrice, isPrinting, couponCode} = props;
  return (
    <div ref={ref} className="cart-to-print">
      <h2 className="title">{isPrinting ? "Amar Drug Agency" : "Cart"}</h2>
      <p className="addressprint">
         Near Shyama Picture Palace,Sheohar Bihar
      </p>
      {/* {printing the details of medicine shop} */}
      {isPrinting && (
        <div className="print-details">
          <h4>Contact Details:</h4>

          <p>
            <strong>Phone:</strong> +91 9473389533
          </p>
          <p>
            <strong>Email:</strong> amardrugagency@gmail.com
          </p>
          <p>
            <strong>Website:</strong> www.amardrugagency.com
          </p>
        </div>
      )}

      {/* {for printing all item availabel in cart} */}
      <ul className="cart-items">
        {cart.map((item, index) => (
          <li key={index} className="cart-item">
            <p>
              <strong>Name:</strong> {item.name}
            </p>
            <p>
              <strong>Description:</strong> {item.description}
            </p>
            <p>
              <strong>Price:</strong> ₹{item.price}
            </p>
            <p>
              <strong>Quantity:</strong> {item.quantity}
            </p>
            <p className="total-section">
              <strong>Price:</strong> ₹{item.quantity * item.price}
            </p>
          </li>
        ))}
      </ul>

      {/* {printing the billing price} */}
      <div className="total-section">
        <h3>Total Price: ₹{totalPrice.toFixed(2)}</h3>
        {discount > 0 && couponCode && (
          <h3>Discounted Price: ₹{discountedPrice.toFixed(2)}</h3>
        )}
        {discount > 0 && (
          <p>
            You saved ₹{(totalPrice * discount).toFixed(2)} with 
            Coupon!
          </p>
        )}
      </div>
    </div>
  );
});

export default CartToPrint;
