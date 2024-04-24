import React from "react";
import apple from '../assets/simple-apple.svg'
export default function Ball({ coordinateY, coordinateX }) {
  const topPercentage = coordinateY + "%";
  const leftPercentage = coordinateX + "%"
  const ballStyle = {
    padding: "1.5%",
    backgroundColor: 'red',
    borderRadius: "50%",
    position: "absolute",
    top: topPercentage,
    left: leftPercentage,
    transform: "translate(-50%, -50%)",
    opacity: 1
  };
  const appleStyle = {
    position: "absolute",
    top: topPercentage,
    left: leftPercentage,
    transform: "translate(-50%, -50%)",
  }
  return (
    <div className=" w-90 h-80 ">
      {/* <div style={ballStyle} className=" opacity-100"></div> */}
      <img style={appleStyle} src={apple} width="3%" height="3%" alt="" />
    </div>
  );
}
