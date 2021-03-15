import React, { useState } from "react";
import { Select, MenuItem } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { FeedComponent } from "./components/Feed/FeedComponent";
import MobileSideBar from "./components/Sidebar/mobileSIdeBar";

const MobileComponent = (props) => {
  const [showSearch, setShowSearch] = useState(false);
  const handleSearchChange = (event) => {
    props.setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setQuery(props.search);
    setShowSearch(false);
    props.setSearch("");
  };

  const onSelectChange = (event) => {
    event.preventDefault();
    props.setSelectSideBar(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div>
      <MobileSideBar
        setRadioSideBar={props.setRadioSideBar}
        radioSideBar={props.radioSideBar}
      />
      <div className="mobileFilters custom-select-mobile">
        <h5>
          Filter Search Size:{" "}
          <Select defaultValue="10" onChange={onSelectChange}>
            <MenuItem value="10">10</MenuItem>
            <MenuItem value="20">20</MenuItem>
            <MenuItem value="50">50</MenuItem>
          </Select>
        </h5>
      </div>
      <div className="mobileContents">
        <div className="row">
          <div id="title">
            <b>{props.radioSideBar}</b>
          </div>
          <div id="search">
            <button className="searchButton" type="submit" form="search">
              <SearchIcon
                fontSize="default"
                onClick={() => setShowSearch(true)}
              />
            </button>
          </div>
        </div>
        <div className={showSearch ? "pop-up-search" : "pop-up-search-closed"}>
          <div className="mobileSearch">
            <CloseIcon onClick={() => setShowSearch(false)} />
            <form
              id="search"
              className=" formContainer"
              onSubmit={handleSubmit}
            >
              <input
                className="searchinput"
                value={props.search}
                placeholder="Enter Here..."
                type="text"
                onChange={handleSearchChange}
              ></input>
            </form>
          </div>
        </div>
        <FeedComponent
          ApiInfo={props.ApiInfo}
          radioSideBar={props.radioSideBar}
          currentPage={props.currentPage}
          setCurrentPage={props.setCurrentPage}
          selectSideBar={props.selectSideBar}
          links={props.links}
          alive={props.alive}
          setAlive={props.setAlive}
          gender={props.gender}
          setGender={props.setGender}
          jumpToValue={props.jumpToValue}
          setJumpToValue={props.setJumpToValue}
        />
      </div>
    </div>
  );
};

export default MobileComponent;
