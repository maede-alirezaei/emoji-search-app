import React from "react";
import styles from "./SearchBar.module.css";
import PropTypes from "prop-types";

const SearchBar = (props) => {
  return (
    <input
      className={styles.container}
      placeholder={"type here to search"}
      autoFocus={true}
      onChange={props.onChange}
    />
  );
};

SearchBar.propTypes = {};

export default SearchBar;
