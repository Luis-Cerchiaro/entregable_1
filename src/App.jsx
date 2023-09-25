import { useState } from "react";
import "./App.css";
import quotes from "./db/spaceCuriosities.json";
import { getRandomElement } from "./utils/random";
import QuoteContainer from "./components/QuoteContainer";

function App() {
  const backgrounds = ["bg1", "bg2", "bg3", "bg4", "bg5", "bg6", "bg7"];

  const [quote, setQuote] = useState(getRandomElement(quotes));
  const [currentBg, setCurrentBg] = useState(getRandomElement(backgrounds));

  const handleChangeQuote = () => {
    setQuote(getRandomElement(quotes));
    setCurrentBg(getRandomElement(backgrounds));
  };

  return (
    <main className={`app ${currentBg}`}>
      <QuoteContainer quote={quote} handleChangeQuote={handleChangeQuote} />
    </main>
  );
}

export default App;
