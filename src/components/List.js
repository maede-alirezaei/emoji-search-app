import React from "react";

import PropTypes from "prop-types";
import Row from "./Row";


const List = (props) => {
  const list = props.data.map((value, index) => {
    return <Row key={index} symbol={value.symbol} title={value.title} />;
  });

  return <div>{list}</div>;
};

List.propTypes = {};

export default List;
