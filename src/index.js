import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import emojipedia from "./emojipedia";

const arr = emojipedia.map((x) => x.meaning.substring(0, 100));
console.log(arr);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
