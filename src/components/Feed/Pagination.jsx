import { LocationSearching } from "@material-ui/icons";
import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import "./Pagination.css";

const Pagination = (props) => {
  const penultimatePage = props.lastPage - 1;
  const prevPageNumber = props.currentPage - 1;
  const nextPageNumber = props.currentPage + 1;

  const nextPage = () => {
    props.setCurrentPage(nextPageNumber);
  };

  const goToLastPage = () => props.setCurrentPage(props.lastPage);

  const prevPage = () => {
    if (props.currentPage < 1) {
      return 1;
    } else {
      props.setCurrentPage(prevPageNumber);
    }
  };

  const jumpTo = (e) => {
    e.preventDefault();
    console.log(props.jumpToValue);
    const submittedValue = parseInt(props.jumpToValue);
    if (submittedValue < 1) {
      console.log("TOO LOW");
      props.setCurrentPage(1);
    }
    if (submittedValue > props.lastPage) {
      console.log("TOO HIGH");
      props.setCurrentPage(props.lastPage);
    }
    if (submittedValue >= 1 && submittedValue <= props.lastPage) {
      props.setCurrentPage(submittedValue);
    }
  };

  const handleJumpToChange = (e) => {
    props.setJumpToValue(parseInt(e.target.value));
  };

  return (
    <div id="pagination">
      <div className="paginationButtons">
        {props.currentPage > 1 ? (
          <Button variant="contained" color="selected" onClick={prevPage}>
            {"Prev"}
          </Button>
        ) : (
          ""
        )}
        {prevPageNumber > 0 ? (
          <Button variant="contained" color="selected" onClick={prevPage}>
            {prevPageNumber}
          </Button>
        ) : (
          ""
        )}
        <Button variant="contained" color="primary" className="selectedPage">
          {props.currentPage}
        </Button>

        {props.currentPage >= penultimatePage ? (
          ""
        ) : (
          <Button variant="contained" color="selected" onClick={nextPage}>
            {nextPageNumber}
          </Button>
        )}

        {props.currentPage < penultimatePage ? (
          <span className="dots">...</span>
        ) : (
          ""
        )}

        {props.currentPage > penultimatePage ? (
          ""
        ) : (
          <Button variant="contained" color="selected" onClick={goToLastPage}>
            {props.lastPage}
          </Button>
        )}

        {props.currentPage >= props.lastPage ? (
          ""
        ) : (
          <Button variant="contained" color="selected" onClick={nextPage}>
            {"Next"}
          </Button>
        )}
      </div>
      <div className="jumpToSearch">
        <form id="jumpTo" onSubmit={jumpTo}>
          <input
            type="number"
            placeholder="Jump To"
            onChange={handleJumpToChange}
          ></input>

          <button type="submit" form="jumpTo">
            Go
          </button>
        </form>
      </div>
    </div>
  );
};

export default Pagination;
