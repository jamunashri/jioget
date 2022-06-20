import axios from 'axios'
import React,{useState} from 'react'
import { ItemCard, Navbar } from '../../_components'
import './index.css'

const Cart = () => {
    const [cart,setCart] = useState([{
      image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e0114252-0ab0-4020-a7e9-bf9e1c1543a5/sportswear-tech-fleece-older-hoodie-34Fhn1.png',
      brand:'Mens collection',
      name: 'Shirt',
      price: '500',
      discount: '10%',
    }])
    const [cartTotal, setCartTotal ] = useState(0)
    const [discountedTotal,setDiscountedTotal] = useState('0%')
   const placeOrder = () => {
    const data = {
      merchant_id : "884624",
 access_code : "AVRC77JD33AO22CROA",
 enc_key : "48FB6CD91F15D8316EBF3F7D6BC5",
 order_id:"#0001",
 currency:'INR',
 amount:'1',
 redirect_url:'http://nithitexadmin.online/payment_success',
 cancel_url:'http://nithitexadmin.online/payment_failed',
 language:'EN'
    }
// axios.post('https://test.ccavenue.com/transaction', data).then(res => console.log(res)).catch(err => console.log(err))
// axios.post('https://test.ccavenue.com/transaction', //proxy uri
// {
//    headers: {
//       // authorization: ' xxxxxxxxxx' ,
//       "Access-Control-Allow-Origin": "*",
//       'Content-Type': 'application/json'
//    } ,
//    body: data
// }).then(function (response) {
//    console.log(response);
// });
axios({
  method: 'post',
  url: `https://test.ccavenue.com/transaction`,
  withCredentials: false,
  headers: { 'Content-Type': 'application/x-www-form-urlencoded',  "Access-Control-Allow-Origin": "*"  },
});
    }
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
          <button className="Checkout-button" onClick={() => placeOrder()}>Place Order</button>
        </div>
      </div>
    </section>
    {/* <Footer /> */}
  </>
)
}
export default Cart