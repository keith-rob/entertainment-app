import React, { useState } from "react";
import Conditions from "../conditions/Conditions";

const Lookup = () => {
  const [responseObj, setResponseObj] = useState({});
  function getLookup() {
    fetch(
      "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=bojack&country=uk",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host":
            "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_API_KEY,
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        setResponseObj(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <h2>Find a TV show or Movie</h2>
      <button onClick={getLookup}>Lookup</button>
      <Conditions responseObj={responseObj} />
    </div>
  );
};

export default Lookup;
