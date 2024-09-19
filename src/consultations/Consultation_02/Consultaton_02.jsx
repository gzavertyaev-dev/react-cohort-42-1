import { useState } from "react";

import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button/Button";

import "./styles.css";

function Consultation_02() {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const openModal = () => {
    setIsModalOpened(true);
  };

  const closeModal = () => {
    setIsModalOpened(false);
  };

  console.log(isModalOpened);

  return (
    <div className="page-wrapper">
      {isModalOpened && (
        <Modal>
          <div className="succes-modal-wrapper">
            <div className="modal-info-container">
              <p className="modal-info">
                Your data has been saved successfully!!!
              </p>
              <img
                className="modal-icon"
                src="https://w7.pngwing.com/pngs/442/715/png-transparent-check-mark-computer-icons-icon-design-cheque-successful-angle-logo-grass-thumbnail.png"
                alt="Success Icon"
              />
            </div>
            <Button name="Close Modal" onClick={closeModal} />
          </div>
        </Modal>
      )}
      <div className="button-control">
        <Button name="Open Success Modal" onClick={openModal} />
      </div>
    </div>
  );
}

export default Consultation_02;
