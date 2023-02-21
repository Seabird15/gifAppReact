import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  const img =
    "https://raw.githubusercontent.com/Seabird15/Portafolio/main/imgs/gat.png";

  console.log(categories);

  return (
    <>
      <div className="header">
        <h1>GifExpertApp</h1>
        <img src={img} alt="" />
      </div>

      {/* Se pueden pasar props y llamarlas en el componente */}
      <AddCategory onNewCategory={(event) => onAddCategory(event)} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />

      ))}
      <div className="footer">
        <h5>By Daniela L. Aravena</h5>
      </div>
    </>
  );
};
