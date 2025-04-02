import React from "react";

function Box({ score, image, onSelect, isSelectable, type, result, clicked }) {
  const selectOne = (arg) => {
    if (!isSelectable) return;
    onSelect(arg);
  };
  return (
    <div className="box_wrapper">
      <div className="box_score">
        <div
          className={score === 1 || score === 2 || score === 3 ? "" : "hidden"}
        ></div>
        <div className={score === 3 || score === 2 ? "" : "hidden"}></div>
        <div className={score === 3 ? "" : "hidden"}></div>
      </div>
      <div
        className="box"
        style={{
          borderColor:
            result === ""
              ? ""
              : result === "tie"
              ? "black"
              : result === "win"
              ? "green"
              : "red",
        }}
      >
        <div className="box_title">{type}</div>
        <div
          className="box_bottom"
          style={{
            color:
              result === ""
                ? ""
                : result === "tie"
                ? "black"
                : result === "win"
                ? "green"
                : "red",
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
            className={`${clicked === 1 ? "clicked" : ""} ${
              !isSelectable ? "disabled" : ""
            } `}
            onClick={() => selectOne(1)}
          >
            R
          </div>
          <div
            className={`${clicked === 2 ? "clicked" : ""} ${
              !isSelectable ? "disabled" : ""
            }`}
            onClick={() => selectOne(2)}
          >
            S
          </div>
          <div
            className={`${clicked === 3 ? "clicked" : ""} ${
              !isSelectable ? "disabled" : ""
            }`}
            onClick={() => selectOne(3)}
          >
            P
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box;
