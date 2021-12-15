import React from "react";
import Header from "../Header/index.js";
import ConnectModal from "../Modal/connectModal";
import { useState } from "react";
import CreateFaction from "../CreateFaction";

import "./App.css";

function App() {
  const [modalStatus, setModal] = useState(false);
  const modalDisplay = setModal;

  return (
    <div className="App">
      <Header modalDisplay={modalDisplay} modalStatus={modalStatus} />
      {modalStatus === true && <ConnectModal />}
      <CreateFaction />
      {console.log(modalStatus)}
    </div>
  );
}

export default App;