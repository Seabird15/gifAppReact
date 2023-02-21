import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  console.log(categories);

  return (
    <>
      <h1>GifExpertApp</h1>

      {/* Se pueden pasar props y llamarlas en el componente */}
      <AddCategory onNewCategory={(event) => onAddCategory(event)} />

      
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      
    </>
  );
};