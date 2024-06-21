import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App-v1";
// import RatingStar from "./RatingStar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <RatingStar
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    /> */}
  </React.StrictMode>
);
