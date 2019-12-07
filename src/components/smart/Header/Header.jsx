import React, { useState } from "react";
import "./Header.scss";

import Button from "../../dumb/Button/Button";
import Select from "../../dumb/Select/Select";

import currency from "./../../../assets/json/currency";
import { signInUrl } from "../../../helpers/constants";

export default function Header() {
  // extract 'currencies json' and distribute the items
  const {
    currencies: { important, others }
  } = currency;

  const firstItemValue = important[0].value;
  const [selectedCurrency, setCurrency] = useState(firstItemValue);
  const goToSignIn = () => (window.location.href = signInUrl);

  return (
    <header id="navbar">
      <div className="navbar--container">
        <div className="login--button">
          <Button content={"Iniciá sesión"} onClick={goToSignIn} />
        </div>
        <div className="currency--button">
          <Button content={selectedCurrency} />
          <Select
            onSelectItem={setCurrency}
            importantItems={{
              label: "Principales monedas",
              list: important
            }}
            secondaryItems={{
              label: "Todas las monedas",
              list: others
            }}
          />
        </div>
      </div>
    </header>
  );
}
