import { useState } from "react";
import { v4 } from "uuid";

import Button from "../../components/Button/Button";

import "./styles.css";

// Пример работы метода map
// Нужно создать новый массив на основании numbers, в котором все элементы будут уможенны на 2
// const numbers = [1, 2, 3, 4, 5];
// const updatedNumbers = numbers.map((number) => {
//   return number * 2;
// });

function Lesson_05() {
  const [ingredients, setIngredients] = useState([]);
  const ingredientButtonNames = [
    "Burger",
    "Fries",
    "Cola",
    "Salad",
    "Ketchup",
    "Ice-cream",
  ];

  console.log(v4());

  // В ingredientButtons мы будем хранить массивв JSX компонентов
  const ingredientButtons = ingredientButtonNames.map((ingredient) => {
    const addIngredient = () => {
      setIngredients((prevValue) => {
        return [...prevValue, ingredient];
      });
    };

    return (
      <div key={v4()} className="ingredient-button-control">
        <Button name={ingredient} onClick={addIngredient} />
      </div>
    );
  });

  const orderList = ingredients.map((ingr) => {
    return (
      <li key={v4()} className="ingredient">
        {ingr}
      </li>
    );
  });

  return (
    <div className="lesson05-wrapper">
      <div className="ingredient-buttons-container">
        {ingredientButtons}
        {/* <div className="ingredient-button-control">
          <Button name="Burger" />
        </div>
        <div className="ingredient-button-control">
          <Button name="Fries" />
        </div>
        <div className="ingredient-button-control">
          <Button name="Cola" />
        </div>
        <div className="ingredient-button-control">
          <Button name="Salad" />
        </div>
        <div className="ingredient-button-control">
          <Button name="Ketchup" />
        </div>
        <div className="ingredient-button-control">
          <Button name="Ice-creem" />
        </div> */}
      </div>
      <div className="ingredients-container">
        <p className="ingredients-title">Your order</p>
        <ol>{orderList}</ol>
      </div>
    </div>
  );
}

export default Lesson_05;
