import React, { useRef } from "react";
import "./Select.scss";

export default function Select(props) {
  // get the 'dom' element with useRef and
  // on select a new item, change the currency value
  const $select = useRef(null);
  const { importantItems, secondaryItems, onSelectItem } = props;

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
  // render differents lists
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

const Option = ({ value, content }) => <option value={value}>{content}</option>;
