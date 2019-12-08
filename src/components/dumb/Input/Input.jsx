import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
import "./Input.scss";

import SvgSearch from "./../../../assets/svg/SVGSearch";
import SvgCalendar from "./../../../assets/svg/SVGCalendar";
import SvgPeople from "./../../../assets/svg/SVGPeople";

// Text Input
export default function Input(props) {
  const { className, value, name, placeholder } = props;

  return (
    <div className={`input--wrapper ${className}`}>
      <input
        type={"text"}
        value={value}
        name={name}
        className={"input text"}
        placeholder={placeholder}
      />
      <button className="input--icon left" type="submit" tabIndex={-1}>
        <SvgSearch className="input--icon__icon" />
      </button>
    </div>
  );
}

// Date Input
export const InputDate = props => {
  const { className } = props;
  // create start and end date
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  // change date handlers
  const handleStartChange = date => setStartDate(date);
  const handleEndChange = date => setEndDate(date);

  return (
    <div className={`input--wrapper date ${className}`}>
      <div className={"input date"}>
        <DatePicker
          selected={startDate}
          onChange={handleStartChange}
          className={"input date"}
        />
        <DatePicker
          selected={endDate}
          onChange={handleEndChange}
          className={"input date"}
        />
      </div>
      <button className="input--icon left" type="submit" tabIndex={-1}>
        <SvgCalendar className="input--icon__icon" />
      </button>
    </div>
  );
};

// Select Input Options
const options = [
  { value: "individual", label: "Individual" },
  { value: "doble", label: "Doble" },
  { value: "familiar", label: "Familiar" },
  { value: "multiple", label: "Múltiple" }
];
const customStyles = {
  control: (_, { selectProps: { width } }) => ({
    width: width,
    paddingTop: "7px"
  })
};
const DropdownIndicator = () => <div></div>;

// Select Input
export const InputSelect = props => {
  const { className } = props;
  // no option selected
  const [selectedOption, setOption] = useState(null);

  // option select handler
  const handleChange = selectedOption => setOption(selectedOption);

  return (
    <div className={`input--wrapper select ${className}`}>
      <Select
        className={`input select ${className}`}
        components={{ DropdownIndicator }}
        placeholder={"Habitación"}
        value={selectedOption}
        onChange={handleChange}
        options={options}
        styles={customStyles}
      />
      <button className="input--icon right" type="submit" tabIndex={-1}>
        <SvgPeople className="input--icon__icon" />
      </button>
    </div>
  );
};
