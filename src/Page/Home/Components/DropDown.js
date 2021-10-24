import React from "react";
import styled from "styled-components";

const DropDown = (props) => {
  const dropDownChanged = (e) => {
    const {
      target: { value },
    } = e;
    props.changed(value);
  };

  return (
    <DropDownBlock>
      <select value={props.selectedValue} onChange={dropDownChanged}>
        {props.options?.map((items, idx) => (
          <option key={idx} value={items.id}>
            {items.name}
          </option>
        ))}
      </select>
    </DropDownBlock>
  );
};

const DropDownBlock = styled.div`
  select {
    width: 300px;
    height: 40px;
    padding: 10px;
    margin-top: 10px;
    background: black;
    border: 1px solid white;
    color: white;
    font-size: 15px;
  }
`;

export default DropDown;
