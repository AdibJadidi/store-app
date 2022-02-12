import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NewCategory.css";
import { getAllObject } from "./../../services/getAllObject";
import { addNewCategory } from "../../services/addNewCategory";
function NewCategory(props) {
  let navigate = useNavigate();
  const [newCategory, setNewCategory] = useState("");
  const [categorys, setCategorys] = useState("");
  useEffect(() => {
    const fetchLastId = async () => {
      const { data } = await getAllObject("category");
      setCategorys(data);
    };
    fetchLastId();
  }, []);

  const changeHandler = (e) => {
    setNewCategory(e.target.value);
  };
  const postCategoryHandler = async () => {
    let sortId = categorys.map((c) => c.id).sort((a, b) => a - b);
    let maxId = Math.max(...sortId);
    await addNewCategory({ name: newCategory, id: maxId + 1 });
    navigate("/");
  };

  return (
    <div className="container">
      <div className="category-form">
        <input
          name="category"
          dir="rtl"
          placeholder="نام دسته بندی را وارد کنید..."
          type="text"
          className="category-form__input"
          onChange={changeHandler}
        />
        <button onClick={postCategoryHandler} className="button button--add">
          اظافه کن
        </button>
        <Link to="/">صفحه اصلی</Link>
      </div>
    </div>
  );
}

export default NewCategory;
