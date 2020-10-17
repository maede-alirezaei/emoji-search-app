import React, { useState } from "react";
import PropTypes from "prop-types";
import SearchBar from "./SearchBar";
import List from "./List";

const data = [11, 1, 12, 13, 4, 5, 6, 27, 28, 29, 10].map((value) => {
  return String(value);
});

const Body = (props) => {
  const [filteredList, setFilteredList] = useState(data);

  const handleOnChange = (event) => {
    const searchText = event.target.value;
    // const result = data.filter((value) => {
    //   const found = value.includes(searchText);
    //   return found;
    // });
    const result = data.filter((value) => value.includes(searchText));
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
