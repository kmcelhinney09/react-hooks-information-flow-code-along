import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, childBackgroundColor }) {
  function handleClick(){
    const newColor = getRandomColor();
    onChangeColor(newColor)
  }
  return <div
  className="child" 
  style={{ backgroundColor: childBackgroundColor}}
  onClick={handleClick}
  />;
}

export default Child;
