import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "./App.scss";

import reducer from "./redux/reducers";
import initialState from "./redux/initialState";

import HeaderPanel from "./components/smart/Header/Header";
import HeroPanel from "./components/smart/Hero/Hero";
import QuestionPanel from "./components/smart/Question/Question";
import MagazinePanel from "./components/smart/Magazine/Magazine";
import GuidePanel from "./components/smart/Guide/Guide";
import DestinationsPanel from "./components/smart/Destinations/Destinations";
import FooterPanel from "./components/smart/Footer/Footer";
import SuggestionsPanel from "./components/smart/Suggestions/Suggestions";
import Store from "./components/smart/Store/Store";

import { currencies } from "./assets/json/currency.json";
import { magazines } from "./assets/json/magazines.json";
import { suggestions } from "./assets/json/suggestions.json";
import { destinations } from "./assets/json/destinations.json";

import { brandUrl, signInUrl, searchUrl } from "./helpers/constants";
import { landingQuestion, guideTexts, heroText } from "./helpers/copys";
import Checkout from "./Checkout";

const store = createStore(reducer, initialState);

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Checkout />
        <HeaderPanel signInUrl={signInUrl} currencies={currencies} />
        <HeroPanel logo={brandUrl} subtitle={heroText} searchUrl={searchUrl} />
        <Store />
        <QuestionPanel textObject={landingQuestion} />
        <MagazinePanel logo={brandUrl} magazines={magazines} />
        <SuggestionsPanel suggestionsList={suggestions} />
        <GuidePanel textObject={guideTexts} />
        <DestinationsPanel destinations={destinations} />
        <FooterPanel logo={brandUrl} />
      </div>
    </Provider>
  );
}
