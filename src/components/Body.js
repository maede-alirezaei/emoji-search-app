import React, { useState } from "react";
import PropTypes from "prop-types";
import SearchBar from "./SearchBar";
import List from "./List";
import data from "../assets/json/emojiList.json";

const Body = (props) => {
  const [filteredList, setFilteredList] = useState(data);

  const handleOnChange = (event) => {
    const searchText = event.target.value;
    const result = data.filter(
      (value) =>
        value.title.includes(searchText) ||
        value.keywords.includes(searchText) ||
        value.symbol.includes(searchText)
    );
    // const result = data.filter((value) => {
    //   if (value.title.includes(searchText)) {
    //     return true;
    //   }
    //   if (value.keywords.includes(searchText)) {
    //     return true;
    //   }
    //   return false;
    // });

    // const result = data.filter((value) => {
    //   const found = value.includes(searchText);
    //   return found;
    // });
    // const result = [];
    // for (let index = 0; index < data.length; index++) {
    //   const element = data[index];
    //   if (element.includes(searchText)) {
    //     result.push(element);
    //   }
    // }
    setFilteredList(result);
  };

  return (
    <div>
      <SearchBar onChange={handleOnChange} />
      <List data={filteredList} />
    </div>
  );
};

Body.propTypes = {};

export default Body;
