import React, {useEffect,useState} from "react";
import { ItemCard, Navbar } from "../../_components";
import Sidebar from "../../_components/Sidebar";

const Product = () => {
    const [filteredProducts, setFilterProducts] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>console.log(json))
    }, [])
    const displayFilters  = true
    return (
      <>
      <Navbar />
        <main>
        <div className="Products-title">
          <div className="Products-title-container">
            <h1>{'Saree Collection'}</h1>
            <span>&nbsp;- {filteredProducts.length} items</span>
          </div>
        </div>
        <section className="Main-section">
          <div>
            <button 
            // onClick={handleFilterDisplay} 
            className="Filter-button">
              Filters{" "}
              <i
                className={`fas fa-arrow-left `}
              ></i>
            </button>
            <Sidebar displayFilters={displayFilters} />
            <div
              className="Product-list"
            //   style={{ marginLeft: !displayFilters ? "" : "252px" }}
            >
              {filteredProducts.map((product) => (
                <ItemCard id={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </main>
      </>
    )
}
export default Product