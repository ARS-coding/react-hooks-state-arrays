import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState("All");

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    if(newFood) {
      setFoods([...foods, newFood]);
    } else {
      console.log("There's no new food left!");
    }
  }

  function handleRemove(event) {
    setFoods(foods.filter(food => food.id != event.target.id))
  }

  function handleIncreaseHeat(event) {
    setFoods(foods.map(foodObj => {
      if(foodObj.id == event.target.id) {
        return { ...foodObj, heatLevel: foodObj.heatLevel + 1 };
      }
      return foodObj;
    }))
  }
  
  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <select name="filter" onChange={(event) => setFilterBy(event.target.value)}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select> 
      <ul>
        {
          foods.map(
            foodObj => {
              return (
                <li key={foodObj.id}>
                  Name: {foodObj.name} | Cuisine: {foodObj.cuisine} | Heat Level: {foodObj.heatLevel}
                  <button id={foodObj.id} onClick={handleRemove}>X</button>
                  <button id={foodObj.id} onClick={handleIncreaseHeat}>Increase Heat</button>
                </li>
              )
          })
        }
      </ul>
    </div>
  );
}

export default SpicyFoodList;
