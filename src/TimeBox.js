import React from "react";
import "./styles.css";

export default function Timebox(props) {
  const style = { width: props.per };

  return (
    <div className={props.lightMode?'time-box light':'time-box'}>
      <h3 className="box-title">{props.timeStd}</h3>
      <div className="box-bar">
        <div className="box-pass" style={style}>
          <span className="box-per">{props.per}</span>
        </div>
      </div>
      <p className="box-label">
        {props.remain} {props.display} until the end of {props.time}
      </p>
    </div>
  );
}
