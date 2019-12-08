import React from "react";
import "./App.scss";

import HeaderPanel from "./components/smart/Header/Header";
import HeroPanel from "./components/smart/Hero/Hero";
import QuestionPanel from "./components/smart/Question/Question";
import MagazinePanel from "./components/smart/Magazine/Magazine";
import GuidePanel from "./components/smart/Guide/Guide";
import DestinationsPanel from "./components/smart/Destinations/Destinations";
import FooterPanel from "./components/smart/Footer/Footer";
import SuggestionsPanel from "./components/smart/Suggestions/Suggestions";

import { currencies } from "./assets/json/currency.json";
import { magazines } from "./assets/json/magazines.json";
import { suggestions } from "./assets/json/suggestions.json";
import { destinations } from "./assets/json/destinations.json";

import { brandUrl, signInUrl, searchUrl } from "./helpers/constants";
import { landingQuestion, guideTexts, heroText } from "./helpers/copys";

export default function App() {
  return (
    <div className="App">
      <HeaderPanel signInUrl={signInUrl} currencies={currencies} />
      <HeroPanel logo={brandUrl} subtitle={heroText} searchUrl={searchUrl} />
      <QuestionPanel textObject={landingQuestion} />
      <MagazinePanel logo={brandUrl} magazines={magazines} />
      <SuggestionsPanel suggestionsList={suggestions} />
      <GuidePanel textObject={guideTexts} />
      <DestinationsPanel destinations={destinations} />
      <FooterPanel logo={brandUrl} />
    </div>
  );
}
