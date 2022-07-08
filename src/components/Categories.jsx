import React from "react";

function Categories({ value, onChangeCategory }) {
  const categories = ["Всі", "М'ясні", "Vegan", "Гриль", "Гострі", "Закриті"];

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, index) => (
          <li
            key={categoryName}
            onClick={() => onChangeCategory(index)}
            className={value === index ? "active" : ""}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
