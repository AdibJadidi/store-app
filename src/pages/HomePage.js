import React from "react";
import { Link, useParams } from "react-router-dom";
import ProductList from "../components/ProducetList/ProductList";
import "./HomePage.css";
import NewCategoryPage from "./NewCategoryPage";
function HomePage() {
  const params = useParams();
  return (
    <div className="container">
      <div className="button__holder">
        <Link to="/new-category">
          <button className="button button_category">
            اضافه کردن دسته بندی
          </button>
        </Link>
        <Link to="/new-product">
          <button className="button button_commodity">اضافه کردن محصول</button>
        </Link>
      </div>
      <ProductList params={params} />
    </div>
  );
}

export default HomePage;
