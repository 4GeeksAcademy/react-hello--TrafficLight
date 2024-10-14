import React, { useState } from "react";

const TrafficLights = () => {

  const [color, setColor] = useState("red");

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="bg-dark" style={{ width: "15px", height: "300px" }}></div>
      <div
        className="bg-dark rounded-4 d-flex justify-content-evenly flex-column align-items-center"
        style={{ width: "200px", height: "400px", padding: "20px" }}
      >
        {/* Luz roja */}
        <div
          onClick={() => setColor("red")}
          className={
            "bg-danger rounded-circle " + (color === "red" ? "onLightRed" : "")
          }
          style={{ width: "100px", height: "100px", cursor: "pointer" }}
        ></div>
        {/* Luz amarilla */}
        <div
          onClick={() => setColor("yellow")}
          className={
            "bg-warning rounded-circle " +
            (color === "yellow" ? "onLightYellow" : "")
          }
          style={{ width: "100px", height: "100px", cursor: "pointer" }}
        ></div>
        {/* Luz verde */}
        <div
          onClick={() => setColor("green")}
          className={
            "bg-success rounded-circle " +
            (color === "green" ? "onLightGreen" : "")
          }
          style={{ width: "100px", height: "100px", cursor: "pointer" }}
        ></div>
      </div>
    </div>
  );
};

export default TrafficLights;
