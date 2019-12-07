import React from "react";
import "./App.scss";

import HeaderPanel from "./components/smart/Header/Header";
import HeroPanel from "./components/smart/Hero/Hero";
import QuestionPanel from "./components/smart/Question/Question";
import MagazinePanel from "./components/smart/Magazine/Magazine";
import GuidePanel from "./components/smart/Guide/Guide";
import DestinationsPanel from "./components/smart/Destinations/Destinations";
import FooterPanel from "./components/smart/Footer/Footer";

function App() {
  return (
    <div className="App">
      <HeaderPanel />
      <HeroPanel />
      <QuestionPanel />
      <MagazinePanel />
      <GuidePanel />
      <DestinationsPanel />
      <FooterPanel />
    </div>
  );
}

export default App;
