import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";

const createCard = (emojipedia) => (
  <Card
    key={emojipedia.id}
    emoji={emojipedia.emoji}
    meaning={emojipedia.meaning}
    name={emojipedia.name}
  />
);

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createCard)}</dl>
    </div>
  );
}

export default App;
