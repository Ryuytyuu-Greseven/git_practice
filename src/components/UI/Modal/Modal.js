import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import modalClasses from "./Modal.module.css";

const Backdrop = (properties) => {
  return (
    <div className={modalClasses.backdrop} onClick={properties.onClose}></div>
  );
};

const ModalOverlay = (properties) => {
  return (
    <div className={modalClasses.modal}>
      <div className={modalClasses.content}>{properties.children}</div>
    </div>
  );
};

const Modal = (properties) => {
  const portalElement = document.getElementById("overlays");
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={properties.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{properties.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
