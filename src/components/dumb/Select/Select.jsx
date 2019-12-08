import React, { useRef } from "react";
import "./Select.scss";

export default function Select(props) {
  const { importantItems, secondaryItems, onSelectItem } = props;
  // get the 'dom' element with useRef and
  const $select = useRef(null);

  // on select a new item, change the value
  const selectItem = () => {
    const newValue = $select.current.value;
    onSelectItem(newValue);
  };

  return (
    <select ref={$select} id="currency" onChange={() => selectItem()}>
      <OptionGroup items={importantItems} />
      <OptionGroup items={secondaryItems} />
    </select>
  );
}

const OptionGroup = ({ items }) => {
  // to render differents list types
  const { label, list } = items;

  return (
    <optgroup label={label}>
      {list.map((item, index) => {
        const { value, name } = item;

        return <Option key={index} value={value} content={name} />;
      })}
    </optgroup>
  );
};

// render select's option
const Option = ({ value, content }) => <option value={value}>{content}</option>;
