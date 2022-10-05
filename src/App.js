import React, { useState } from "react";
import Loading from "./Loading";
import Tour from "./Tour";
import "./App.css";
const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <div className="App">
      <h2>React Tours project</h2>
    </div>
  );
}

export default App;
