import React from "react";

const Card = (props) => {
  return (
    <div id="card">
      <div className="box">
        <div className="upper">
          <p className="menu">...</p>

          <img src={props.img} alt="" />

          <h1 className="name">{props.name}</h1>
        </div>

        <div className="bottom">
          <div className="stat">
            <p className="number">{props.projects}</p>
            <p className="label">Projects</p>
          </div>

          <div className="stat">
            <p className="number">{props.prototypes}</p>
            <p className="label">Prototypes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
