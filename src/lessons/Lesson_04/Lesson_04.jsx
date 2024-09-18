import { useState } from "react";

import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button/Button";
import Counter from "../../components/Counter/Counter";

import "./styles.css";

function Lesson_04() {
  const [animals, setAnimals] = useState(["Tiger", "Lion", "Dog", "Cat"]);

  const addPig = () => {
    // Добавить Pig к массиву animals
    setAnimals((prevValue) => {
      return [...prevValue, "Pig"];
    });
  };

  console.log(animals);

  // СТАРЫЙ СПОСОБ ВЫЗВАТЬ ФУНКЦИЮ ПРИ НАЖАТИИ НА КНОПКУ
  //   const SHOW_BUTTON_NAME = document.getElementById("show-name-button");

  //   const showName = () => {
  //     alert("My name is John");
  //   };

  //   if (SHOW_BUTTON_NAME) {
  //     SHOW_BUTTON_NAME.addEventListener("click", showName);
  //   }

  // 1 шаг: создаем функцию
  const showName = () => {
    alert("My name is John");
  };

  const button1Function = () => {
    console.log("I am button 1 and i work");
  };

  const button2Function = () => {
    console.log("I am button 2 and i work");
  };

  const button3Function = () => {
    console.log("I am button 3 and i work");
  };

  return (
    <div className="page-wrapper">
      {/* Пример работы с children */}
      {/* <Modal>
        <div className="modal-example-container">
          <h3>Some Title</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <Button name="Close Modal" />
        </div>
      </Modal> */}
      {/* //////////////////////////////////////////////////////////////////////////////
      ТРИГГЕРЫ */}
      {/* 2 шаг: передаем функ-ю showName в атрибут onClick */}
      {/* <button onClick={showName}>Show User Name</button>
      <div className="button-control">
        <Button onClick={button1Function} name="Button 1" />
      </div>
      <div className="button-control">
        <Button onClick={button2Function} name="Button 2" />
      </div>
      <div className="button-control">
        <Button onClick={button3Function} name="Button 3" />
      </div> */}
      <Counter />
      {/* <Button name={"Add Animal"} onClick={addPig} /> */}
    </div>
  );
}

export default Lesson_04;
