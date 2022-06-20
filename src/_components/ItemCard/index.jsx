import React from "react";
import './index.css'

const ItemCard = ({item}) => {
return (
    <div className="Item-container">
      <div className="Item-details">
        <img className="Item-image" src={item.image} alt="" />
        <div className="Item-desc">
          <div className="Item-details-main">
            <div className="Item-name-container">
              <div className="Item-brand">{item.brand}</div>
              <div className="Item-name">{item.name}</div>
            </div>
            <div className="Item-price">
              <div>
                <i class="fas fa-rupee-sign icon-rupee"></i>
                {item.price}
              </div>
              <div>
                <span className="orignal-price">
                  Rs.
                  {item.price}
                </span>
                <span className="discount-percent">{item.discount}%</span>
              </div>
            </div>
          </div>
          <div className="Item-action-buttons">
            <button
            //   onClick={removeFromCart}
              className="Item-action-button button-remove"
            >
              Remove
            </button>
            <button
            //   onClick={handleWishlistAction}
              className="Item-action-button button-wishlist"
            >
              {/* {isItemInWishlist ? "Remove from WishList" : "Move to Wishlist"} */}
            </button>
          </div>
        </div>
      </div>
    </div>
)
}
export default ItemCard