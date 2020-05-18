import React from "react";
import "./App.css";
import Lookup from "./componenets/lookup/Lookup";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Entertainment App</h1>
      </header>
      <main>
        <Lookup />
      </main>
      <footer>Page created by Keith</footer>
    </div>
  );
}

export default App;
