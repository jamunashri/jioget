import React,{useState} from 'react'
import { ItemCard, Navbar } from '../../_components'
import './index.css'

const Cart = () => {
    const [cart,setCart] = useState([])
    const [cartTotal, setCartTotal ] = useState(0)
    const [discountedTotal,setDiscountedTotal] = useState('0%')
return (
    <>
    <Navbar />
    <section className="Cart-container">
      <div className="Cart-products">
        <div className="Cart-products-title">
          <span>My Cart ({cart.length} items)</span>
          <span>Total: Rs.{cartTotal}</span>
        </div>
        <div className="Cart-items-container">
          {cart.length === 0 ? <h3>Cart Empty</h3> : ""}
          {cart.map((item) => (
            <ItemCard id={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="Cart-checkout">
        <div className="Price-container">
          <div className="Price-header">
            PRICE DETAILS ({cart.length} items)
          </div>
          <div className="Price-breakup-container">
            <div className="Price-breakup-row">
              <span className="Price-title">Total MRP</span>
              <span className="Price-value">
                <i class="fas fa-rupee-sign icon-rupee"></i>
                {cartTotal}
              </span>
            </div>
            <div className="Price-breakup-row">
              <span className="Price-title">Discount on MRP</span>
              <span className="Price-value color-green">
                -&nbsp;
                <i class="fas fa-rupee-sign icon-rupee color-green"></i>
                {discountedTotal}
              </span>
            </div>
            <div className="Price-breakup-row">
              <span className="Price-title">Delivery Charges</span>
              <span className="Price-value color-green">FREE</span>
            </div>
            <div className="Price-total-row">
              <span className="Total-header">Total Amount</span>
              <span className="Total-value">
                <i class="fas fa-rupee-sign icon-rupee"></i>
                {(cartTotal - discountedTotal).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
        <div className="Button-container">
          <button className="Checkout-button">Place Order</button>
        </div>
      </div>
    </section>
    {/* <Footer /> */}
  </>
)
}
export default Cart