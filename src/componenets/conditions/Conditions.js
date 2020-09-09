import React from "react";
import classes from "./conditions.module.css";

const Conditions = (props) => {
  return (
    <div className={classes.Wrapper}>
      {props.error && (
        <small className={classes.Small}>Please enter a valid title</small>
      )}

      {props.loading && <div className={classes.Loader} />}
      {props.responseObj.status_code === 200 ? (
        <div className="card">
          <p>
            <br></br>
            <strong>{props.responseObj.results[0].name} </strong>
          </p>
          <img
            src={props.responseObj.results[0].picture}
            alt={props.responseObj.results[0].name}
            width="400"
            height="300"
          ></img>
          <p>
            <br></br>
            Available here:<br></br>
            {props.responseObj.results[0].locations[0].display_name}
            <br></br>
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default Conditions;
