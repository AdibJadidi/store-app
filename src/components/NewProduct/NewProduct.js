import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import { addNewProduct } from "../../services/addNewProduct";
import { getAllObject } from "../../services/getAllObject";
import "./NewProduct.css";

function NewProduct() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [categorys, setCategorys] = useState("");
  const [products, setProducts] = useState("");
  const [newProduct, setNewProduct] = useState("");
  let navigate = useNavigate();

  const [options, setOptions] = useState({});
  useEffect(() => {
    console.log(categorys);
    const fetchCategorys = async () => {
      const { data } = await getAllObject("category");
      setCategorys(data);
    };
    if (categorys) {
      const newOptions = categorys.map((c) => ({ value: c.id, label: c.name }));
      setOptions(newOptions);
    } else fetchCategorys();
  }, [categorys]);

  const changeHandler = (e) => {
    setNewProduct(e.target.value);
  };

  const newProductHandler = async () => {
    const { data } = await getAllObject("Product");
    let sortId = data.map((c) => c.id).sort((a, b) => a - b);
    let maxId = Math.max(...sortId);
    console.log(maxId);
    await addNewProduct({
      id: maxId + 1,
      name: newProduct,
      category_id: selectedOption.value,
    });
    console.log(":)");
    navigate("/");
  };

  const colourStyles = {
    control: (styles) => ({
      ...styles,
      borderColor: "gray",

      width: 205,
    }),
    option: (styles, { isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        color: "#FFF",
        cursor: isDisabled ? "not-allowed" : "default",
        backgroundColor: isSelected ? "#c85000" : "#fb8332",
        borderBottom: "1px solid #FFC33E",
        "&:hover": {
          backgroundColor: "#fbaa12",
        },
      };
    },
  };
  return (
    <div className="container">
      <div className="product-form">
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
          styles={colourStyles}
        />
        <input
          onChange={changeHandler}
          className="product-form__input"
          type="text"
        />

        <button onClick={newProductHandler} className="button button--add">
          اضافه کن
        </button>
        <Link to="/">صفحه اصلی</Link>
      </div>
    </div>
  );
}

export default NewProduct;
