import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import React from "react";

function MyApp() {
  const anotherelement = "react code";
  return (
    <div>
      <h1>hello from main</h1>
    </div>
  );
}
const reactElement = (
  <a href="https://google.com" target="_blank">
    Visit google
  </a>
);
const mainElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "Click me to visit google"
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyApp />
    <App />
    {reactElement}
    <br />
    {mainElement}
  </StrictMode>
);
