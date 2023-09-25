import React, { useState } from "react";
import axios from "axios";

function App() {
  const [state, setState] = useState({
    s: "sherlock",
    results: [],
    selected: {},
  });

  const apiurl = "https://www.omdbapi.com/?apikey=a2526df0";

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
