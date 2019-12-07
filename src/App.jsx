import React from "react";
import "./App.scss";

import HeaderPanel from "./components/smart/Header/Header";
import HeroPanel from "./components/smart/Hero/Hero";
import QuestionPanel from "./components/smart/Question/Question";
import MagazinePanel from "./components/smart/Magazine/Magazine";
import GuidePanel from "./components/smart/Guide/Guide";
import DestinationsPanel from "./components/smart/Destinations/Destinations";
import FooterPanel from "./components/smart/Footer/Footer";

import { brandUrl } from "./helpers/constants";
import { signInUrl } from "./helpers/constants";
import { currencies } from "./assets/json/currency.json";

function App() {
  return (
    <div className="App">
      <HeaderPanel signInUrl={signInUrl} currencies={currencies} />
      <HeroPanel
        logo={brandUrl}
        subtitle={
          "Encontrá tu hotel ideal y compará precios de diferentes páginas web"
        }
      />
      <QuestionPanel />
      <MagazinePanel />
      <GuidePanel />
      <DestinationsPanel />
      <FooterPanel />
    </div>
  );
}

export default App;
