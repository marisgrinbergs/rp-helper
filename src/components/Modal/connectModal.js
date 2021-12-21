import React from "react";
import "./modal.css";

const ConnectModal = () => {
  return (
    <div className="Modale">
      <form>
        <input placeholder="Crew name"></input>
        <input type="password"></input>
        <button>Connection</button>
      </form>
    </div>
  );
};

export default ConnectModal;
