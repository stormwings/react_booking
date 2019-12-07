import React, { useState } from "react";
import "./Header.scss";

import Button from "../../dumb/Button/Button";
import Select from "../../dumb/Select/Select";

export default function Header({ currencies, signInUrl }) {
  // extract 'currencies' and distribute the items
  const { important, others } = currencies;
  // save the first value by default
  const firstItemValue = important[0].value;
  const [selectedCurrency, setCurrency] = useState(firstItemValue);
  // go to signin url
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
