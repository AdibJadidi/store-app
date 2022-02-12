import React, { useEffect, useState } from "react";
import { getAllObject } from "./../../services/getAllObject";
import "./ProductList.css";
function ProductList() {
  const [categorys, setCategorys] = useState(null);
  const [products, setProducts] = useState(null);
  useEffect(() => {
    console.log("im in use effect");
    const fetchCategorys = async () => {
      console.log("im in use fetchC");
      const { data } = await getAllObject("category");
      console.log(data);
      setCategorys(data);
    };
    const fetchProducts = async () => {
      console.log("im in use fetchP");
      const { data } = await getAllObject("Product").then(console.log());
      setProducts(data);
    };
    console.log("im in use effect2");
    fetchCategorys();
    fetchProducts();
  }, []);

  return (
    <>
      <div className="product-list">
        {categorys ? (
          categorys.map(
            (c) => (
              <div className="product-list__col">
                <div className="product-list__header">{c.name}</div>
                <div className="product-list__product">
                  {products ? (
                    products
                      .filter((p) => p.category_id == c.id)
                      .map((p) => <div className="product__name">{p.name}</div>)
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            )
            // <tbody>
            //   {console.log(products, "product")}
            //   <tr>
            //     <td>{products.filter((p) => 1 === p.category_id)}</td>
            //   </tr>
            // </tbody>;
          )
        ) : (
          <p>هیچ دسته بندی یا محصولی موجود نیست</p>
        )}
        {/* <tbody>{products ? <p></p> : <p></p>}</tbody> */}
      </div>
    </>
  );
}

export default ProductList;
