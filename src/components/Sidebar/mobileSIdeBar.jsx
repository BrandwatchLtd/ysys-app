import React from "react";

const MobileSideBar = (props) => {
  return (
    <div className="mobileSideBar">
      <div
        onClick={() => props.setRadioSideBar("houses")}
        className={
          props.radioSideBar === "houses"
            ? "mobileSideButtons position-houses mobileSideButtonActive"
            : "mobileSideButtons position-houses"
        }
      >
        <div className="positioned">
          <h3>Houses</h3>
        </div>
      </div>
      <div>
        <div
          onClick={() => props.setRadioSideBar("characters")}
          className={
            props.radioSideBar === "characters"
              ? "mobileSideButtons position-characters mobileSideButtonActive"
              : "mobileSideButtons position-characters"
          }
        >
          <div className="positioned">
            <h3>Characters</h3>
          </div>
        </div>
        <div
          onClick={() => props.setRadioSideBar("books")}
          className={
            props.radioSideBar === "books"
              ? "mobileSideButtons position-books mobileSideButtonActive"
              : "mobileSideButtons position-books"
          }
        >
          <div className="positioned">
            <h3>Books</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSideBar;
