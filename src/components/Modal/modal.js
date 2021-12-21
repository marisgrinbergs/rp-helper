import React from "react";
import ReactDOM from "react-dom";

const JSX_MODAL = (
  <div className="Modale">
    <form>
      <input placeholder="Crew name"></input>
      <input type="password"></input>
      <button>Connection</button>
    </form>
  </div>
);

function Modal(props) {
  // return ReactDOM.createPortal(JSX_MODAL, document.querySelector("#modal"));

  return JSX_MODAL;
}

export default Modal;
