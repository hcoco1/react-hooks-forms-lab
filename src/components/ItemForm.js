import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm( { onItemFormSubmit } ) {

  const [nameChange, setNameChange] = useState("")
  const [categoryChange, setCategoryChange] = useState("Produce")

  function handleSubmit(e){
    e.preventDefault();
    const newItem ={
      id: uuid(),
      name: nameChange,
      category: categoryChange
    }
    onItemFormSubmit(newItem)
  }

  function handleNameChange(e){
    console.log(nameChange)
    setNameChange(e.target.value)
  }

  function handleCategoryChange(e){
    setCategoryChange(e.target.value)
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleNameChange}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;