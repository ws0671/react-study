import React, { useEffect } from "react";
import { useState } from "react";

function Box({ image, onSelect, isSelectable, type, result, clicked }) {
  const selectOne = (arg) => {
    if (!isSelectable) return;
    onSelect(arg);
  };
  return (
    <div className="box_wrapper">
      <div
        className="box"
        style={{
          borderColor:
            result === "tie" ? "black" : result === "win" ? "green" : "red",
        }}
      >
        <div className="box_title">{type}</div>
        <div
          className="box_bottom"
          style={{
            color:
              result === "tie" ? "black" : result === "win" ? "green" : "red",
          }}
        >
          {result}
        </div>
        <img src={image} className="box_img" alt="placeholder" />
      </div>
      <div className="select">
        <div
          className={`${
            !isSelectable ? "disabled-wrapper" : ""
          } select-wrapper `}
        >
          <div
            className={`${clicked === 0 ? "clicked" : ""} ${
              !isSelectable ? "disabled" : ""
            } `}
            onClick={() => selectOne(0)}
          >
            R
          </div>
          <div
            className={`${clicked === 1 ? "clicked" : ""} ${
              !isSelectable ? "disabled" : ""
            }`}
            onClick={() => selectOne(1)}
          >
            S
          </div>
          <div
            className={`${clicked === 2 ? "clicked" : ""} ${
              !isSelectable ? "disabled" : ""
            }`}
            onClick={() => selectOne(2)}
          >
            P
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box;
