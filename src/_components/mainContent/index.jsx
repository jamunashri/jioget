import React,{useState} from 'react'
// import product_card from "../_data/product_data";

const MainContent = () => {
    const [ productCard, setProductCard] = useState([])
    const listItems = productCard.map((item) =>
        <div className="card" key={item.id}>
            <div className="card_img">
                <img src={item.thumb} />
            </div>
            <div className="card_header">
                <h2>{item.product_name}</h2>
                <p>{item.description}</p>
                <p className="price">{item.price}<span>{item.currency}</span></p>
                <div className="btn">Add to cart</div>
            </div>
        </div>

    );
    return (
        <div className="Main_content">
            <h3>Headphones</h3>
            {listItems}
        </div>
    )
}
export default MainContent;