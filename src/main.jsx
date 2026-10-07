import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/cormorant-sc/latin-600.css";
import "@fontsource/cormorant-sc/latin-700.css";
import "@fontsource/eb-garamond/latin-400.css";
import "@fontsource/eb-garamond/latin-400-italic.css";
import "@fontsource/eb-garamond/latin-600.css";
import App from "./App";
import "./index.css";

// Hold the card back until its typeface is in. A fallback serif has different
// widths and would visibly reflow the card when the real font swaps in.
const showCard = () => document.documentElement.classList.add("fonts-ready");
if (document.fonts?.load) {
  Promise.race([
    Promise.all([
      document.fonts.load('600 1em "Cormorant SC"'),
      document.fonts.load('700 1em "Cormorant SC"')
    ]),
    new Promise((resolve) => setTimeout(resolve, 1200))
  ]).then(showCard, showCard);
} else {
  showCard();
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
