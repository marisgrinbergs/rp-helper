import "./index.css";
import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";

function Header({ modalDisplay, modalStatus }) {
  // const account_actions = useDispatch();

  return (
    <div className="Header">
      <p>RP Helper</p>
      <button
        className="Header_Button"
        onClick={() => {
          return modalDisplay(!modalStatus);
        }}
      >
        Connection
      </button>

      <button className="Header_Button">Inscription</button>
    </div>
  );
}

/* ${({ open }) => css`
  transition: opacity 200ms ease, ${open || 'visibility 0s linear 200ms'};
  opacity: ${open ? '1' : '0'};
  visibility: ${open ? 'visible' : 'hidden'};
`} */

export default Header;
