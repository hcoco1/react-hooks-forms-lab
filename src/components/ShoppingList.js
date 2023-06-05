import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [searchedItem, setSearchedItem] = useState("")

  const newItemsToDisplay = items.filter((item) =>{
    if (searchedItem == "") return true  
    return item.name.toLowerCase().includes(searchedItem.toLocaleLowerCase())
  
   })


  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function addNewItem(newItem){
 console.log(newItem)
    setItems([...items, newItem])
  }


  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={addNewItem} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={setSearchedItem} search={searchedItem}/>
      <ul className="Items">
        {newItemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
