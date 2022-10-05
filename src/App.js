import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Tour from "./Tour";
import "./App.css";
import Tours from "./Tours";
const url = "https://course-api.com/react-tours-project";
// const url = "https://course-api.netlify.app/api/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  //call the api using async and try catch errors
  const fetchTours = async () => {
    setLoading(true);
    const response = await fetch(url);
    const tours = await response.json();
    console.log(tours);
    setLoading(false);
    setTours(tours);
  };

  /*
 =========

  try {
    const response = await fetch(url);
    const tours = await response.json();
    setLoading(false);
    setTours(tours);
  } catch (error) {
    setLoading(false);
    console.log(error);
  }
 ============
 */

  //useEffect is the same thing like setTimeOut in js
  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} />
    </main>
  );
}

export default App;
