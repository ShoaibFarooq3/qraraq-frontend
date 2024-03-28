import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./layouts/Header";

import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <Header />
      <Homepage />
    </>
  );
}

export default App;
