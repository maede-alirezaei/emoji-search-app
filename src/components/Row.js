import React from "react";
import styles from "./Row.module.css"
import PropTypes from "prop-types";

const Row = (props) => {
  return <div className={styles.container}>{props.title}</div>;
};

Row.propTypes = {};

export default Row;
