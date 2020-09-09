import React, { useState } from "react";
import Conditions from "../conditions/Conditions";
import classes from "./Lookup.module.css";

const Lookup = () => {
  const [title, setTitle] = useState("");
  const [country, setCountry] = useState("us");
  const [responseObj, setResponseObj] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  function getLookup(e) {
    e.preventDefault();

    if (title.length === 0) {
      return setError(true);
    }

    // clear state for new data
    setError(false);
    setResponseObj({});

    setLoading(true);

    let uriEncodedTitle = encodeURIComponent(title);

    fetch(
      `https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=${uriEncodedTitle}&country=${country}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host":
            "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_API_KEY,
        },
      }
    ).then((response) =>
      response
        .json()
        .then((response) => {
          if (response.status_code !== 200) {
            throw new Error();
          }

          setResponseObj(response);
          setLoading(false);
        })
        .catch((err) => {
          setError(true);
          setLoading(false);
          console.log(err.message);
        })
    );
  }

  return (
    <div>
      <h2>Find a TV show or Movie</h2>
      <br></br>
      <form onSubmit={getLookup}>
        <input
          type="text"
          placeholder="Enter Title"
          maxLength="50"
          className={classes.TextInput}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br></br>
        <br></br>
        Country: &nbsp;
        <select
          name="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="uk">uk</option>
          <option value="us">us</option>
          <option value="ar">ar</option>
          <option value="at">at</option>
          <option value="au">au</option>
          <option value="be">be</option>
          <option value="br">br</option>
          <option value="ca">ca</option>
          <option value="ch">ch</option>
          <option value="cz">cz</option>
          <option value="dk">dk</option>
          <option value="de">de</option>
          <option value="ee">ee</option>
          <option value="es">es</option>
          <option value="fr">fr</option>
          <option value="hk">hk</option>
          <option value="hu">hu</option>
          <option value="ie">ie</option>
          <option value="il">il</option>
          <option value="in">in</option>
          <option value="is">is</option>
          <option value="it">it</option>
          <option value="jp">jp</option>
          <option value="kr">kr</option>
          <option value="lt">lt</option>
          <option value="lv">lv</option>
          <option value="mx">mx</option>
          <option value="nl">nl</option>
          <option value="no">no</option>
          <option value="nz">nz</option>
          <option value="ph">ph</option>
          <option value="pl">pl</option>
          <option value="pt">pt</option>
          <option value="ro">ro</option>
          <option value="ru">ru</option>
          <option value="se">se</option>
          <option value="sg">sg</option>
          <option value="sk">sk</option>
          <option value="th">th</option>
          <option value="za">za</option>
        </select>
        <br></br>
        <br></br>
        <button type="submit" className={classes.button}>
          Search
        </button>
      </form>
      <br></br>
      <Conditions responseObj={responseObj} error={error} loading={loading} />
    </div>
  );
};

export default Lookup;
