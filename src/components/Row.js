import React from "react";
import styles from "./Row.module.css";
import PropTypes from "prop-types";

const Row = (props) => {
  const handleCopy = async () => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(props.symbol);
      alert(`${props.symbol} copied!`);
    } else {
      alert("copy not supported on your browser");
    }
  };

  return (
    <div className={styles.container}>
      <div>
        {props.symbol} {props.title}
      </div>
      <button onClick={handleCopy}>click to copy</button>
    </div>
  );
};

Row.propTypes = {};

export default Row;
