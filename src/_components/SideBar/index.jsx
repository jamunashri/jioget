import "./index.css";
import { useContext } from "react";
export default function FilterSideBar({ displayFilters }) {
  const categories = ["top", "bottom", "footwear"];
  return (
    <div className={`Sidebar ${displayFilters ? "" : "Sidebar-hidden"}`}>
      <div className={`Filter-container ${displayFilters ? "" : "hidden"}`}>
        <span className="Filter-header">Categories</span>
        <ul className="Filter-list">
          {categories.map((category) => (
            <li>
              <label className="Filter">
                <input
                  type="checkbox"
                  className="Filter-checkbox"
                />
                {category}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className={`Filter-container ${displayFilters ? "" : "hidden"}`}>
        <span className="Filter-header">Brands</span>
        <ul className="Filter-list">
        <li>
              <label className="Filter">
                <input
                  type="checkbox"
                  className="Filter-checkbox"
                />
              </label>
            </li>
        </ul>
      </div>
      {/* <div className={`Filter-container ${displayFilters ? "" : "hidden"}`}>
        <span className="Filter-header">Price</span>
        <ul className="Filter-list">
          <li>
            <label className="Filter">
              <input type="checkbox" className="Filter-checkbox" />
              Rs. 100 to Rs. 500
            </label>
          </li>
          <li>
            <label className="Filter">
              <input type="checkbox" className="Filter-checkbox" />
              Rs. 500 to Rs. 1000
            </label>
          </li>
          <li>
            <label className="Filter">
              <input type="checkbox" className="Filter-checkbox" />
              Rs. 1000 to Rs. 1500
            </label>
          </li>
          <li>
            <label className="Filter">
              <input type="checkbox" className="Filter-checkbox" />
              Rs. 1500 to Rs. 2000
            </label>
          </li>
        </ul>
      </div> */}
    </div>
  );
}
