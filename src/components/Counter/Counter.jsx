import { useState } from "react";

import Button from "../Button/Button";

import "./styles.css";

function Counter() {
  // useState() - функция-хук, которая позволяет следить за состоянием компонента
  // useState возвращает нам массив из 2 элементов
  // - 1 элемент массива - это переменная состояния
  // - 2 элемент - функция, которая изменияет это состояние
  // !!! По умолчанию 1 элемент равен undefined, для того чтобы задать значение по умолчанию, нам нужно передать нужное
  // нам значение как атрибут в useState

  // 1 пример - изменение имени через useState
  //   const [name, setName] = useState("John");
  //   console.log(name);
  //   const changeName = () => {
  //     setName("John Johnson");
  //   };

  const [count, setCount] = useState(0);

  const onPlus = () => {
    // prevValue - это значение которое лежит в count на момент вызова функции setCount
    setCount((prevValue) => {
      return prevValue + 1;
    });
  };

  const onMinus = () => {
    setCount((prevValue) => {
      return prevValue - 1;
    });
  };

  return (
    <div className="counter-wrapper">
      <div className="button-control">
        <Button name="-" onClick={onMinus} />
      </div>
      <p className="count">{count}</p>
      <div className="button-control">
        <Button name="+" onClick={onPlus} />
      </div>
    </div>
  );
}

export default Counter;
