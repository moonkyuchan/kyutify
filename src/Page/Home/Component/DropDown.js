import React from "react";

const DropDown = (props) => {
  const dropDownChanged = (e) => {
    const {
      target: { value },
    } = e;
    props.changed(value);
  };

  return (
    <div>
      <select value={props.selectedValue} onChange={dropDownChanged}>
        {props.options?.map((items, idx) => (
          <option key={idx} value={items.id}>
            {items.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
