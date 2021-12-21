import React from "react";
import Header from "../Header/index.js";
import ConnectModal from "../Modal/connectModal";
import Modal from "../Modal/modal.js";
import { useState } from "react";
import CreateFaction from "../CreateFaction";

import "./App.css";
import { isAbsolute } from "path";

function App() {
  const [modalStatus, setModal] = useState(false);
  const modalDisplay = setModal;

  return (
    <div className="App">
      <Header modalDisplay={modalDisplay} modalStatus={modalStatus} />
      <div>{modalStatus === true && <Modal />}</div>
      <CreateFaction />
      {console.log(modalStatus)}
    </div>
  );
}

export default App;
